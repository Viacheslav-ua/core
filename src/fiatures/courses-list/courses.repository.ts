import { dbClient } from "@/shared/lib/db";
import { cache } from "react";

class CursesRepository {
  getCoursesList = cache((): Promise<CourseListElement[]> => {
    return dbClient.course.findMany();
  });

  createCoursesElement = (
    command: CreateCourseToListElementCommand,
  ): Promise<CourseListElement> => {
    return dbClient.course.create({
      data: command,
    });
  };

  deleteCoursesElement = (command: DeleteCourseFromListElementCommand) => {
    return dbClient.course.delete({
      where: {
        id: command.id,
      },
    });
  };
}

export const coursesRepository = new CursesRepository();
