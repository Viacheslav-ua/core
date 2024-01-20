import { CoursesList } from "@/fiatures/courses-list/public/courses-list";
import { CreateCourseForm } from "@/fiatures/courses-list/public/creaate-course-form";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <CreateCourseForm
        revalidatePagePath="/"
        className="max-w-[300px] mb-10"
      />
      <CoursesList revalidatePagePath="/" />
    </main>
  );
}
