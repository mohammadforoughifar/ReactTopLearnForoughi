import { getAllCourses } from "./../services/courseService";


export const GetAllCourses_Action = () => {
  return async (dispatch) => {
    const { data } = await getAllCourses();
    await dispatch({ type: "NOW", payload: data });
  };
};



