"use server";

import { revalidatePath } from "next/cache";
import { coursesRepository } from "./courses.repository";

export const createCourseAction = async (
  command: CreateCourseToListElementCommand,
  revalidatePagePath: string,
) => {
  await coursesRepository.createCoursesElement(command)
  revalidatePath(revalidatePagePath)
};
