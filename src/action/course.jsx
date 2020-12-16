import { GetCourseById, newCourse } from "../services/courseService";
import { Success } from "../Utilitis/message";

export const GetCourseById_Action = (courseId) => {
  // console.log("GetCourseById_Action_id", courseId);
  return async (dispatch) => {
    const { data } = await GetCourseById(courseId);
    // console.log("GetCourseById_Action", data);

    await dispatch({ type: "Get_Course_By_Id", payload: data });
  };
};

export const createNewCourse = (course) => {
  return async (dispatch, getState) => {
    console.log("createNewCourse_Action",course);
    const { data, status } = await newCourse(course);
    if (status === 201) Success("اطلاعات با موفقیت ثبت شد");
    await dispatch({
      type: "ADD_COURSE",
      payload: [...getState().courses, data],
     
    });
  };
};
