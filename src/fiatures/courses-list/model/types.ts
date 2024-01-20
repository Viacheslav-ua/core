type CourseListElement = {
  id: string;
  name: string;
  description: string;
};

type CreateCourseToListElementCommand = {
  name: string;
  description: string;
};

type DeleteCourseFromListElementCommand = {
  id: string;
};
