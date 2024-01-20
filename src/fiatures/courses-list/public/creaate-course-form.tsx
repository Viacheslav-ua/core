"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/shared/ui/button";
import { useTransition } from "react";
import { createCourseAction } from "../actions";
import { cn } from "@/shared/ul/utils";

const createCourseSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export function CreateCourseForm({
  className,
  revalidatePagePath,
}: {
  className?: string,
  revalidatePagePath: string;
}) {

  const [isCreateTransition, startCreateTransition] = useTransition()

  const form = useForm<z.infer<typeof createCourseSchema>>({
    resolver: zodResolver(createCourseSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  // const handelSubmit = () => {
  //   form.handleSubmit((data) => {
  //     startCreateTransition(async () => {
  //       await createCourseAction(data, revalidatePagePath)
  //     })
  //   })
  // }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => {
        startCreateTransition(async () => {
          await createCourseAction(data, revalidatePagePath)
        })
      })}
        className={cn(className, "space-y-8")}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Назва</FormLabel>
              <FormControl>
                <Input placeholder="Назва..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Опис</FormLabel>
              <FormControl>
                <Textarea placeholder="Опис..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isCreateTransition}>Добавити</Button>
      </form>
    </Form>
  );
}
