import { GetCourseById } from "../services/courseService";


export const GetCourseById_Action = (courseId) => {
 // console.log("GetCourseById_Action_id", courseId);
  return async dispatch => {
    const { data } = await GetCourseById(courseId);
   // console.log("GetCourseById_Action", data);

    await dispatch({ type: "Get_Course_By_Id", payload: data });
  };
};
