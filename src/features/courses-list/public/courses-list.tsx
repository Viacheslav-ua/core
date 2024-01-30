import { revalidatePath } from "next/cache";
import { coursesRepository } from "../courses.repository";
import { CourseItem } from "../ui/course-item";

export async function CoursesList({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const coursesList = await coursesRepository.getCoursesList();

  const handleDeleteAction = async (courseId: string) => {
    "use server";
    await coursesRepository.deleteCoursesElement({ id: courseId });

    revalidatePath(revalidatePagePath);
  };

  return (
    <div className="flex flex-row gap-3">
      {coursesList.map((course) => (
        <CourseItem
          key={course.id}
          course={course}
          onDelete={handleDeleteAction.bind(null, course.id)}
        />
      ))}
    </div>
  );
}
