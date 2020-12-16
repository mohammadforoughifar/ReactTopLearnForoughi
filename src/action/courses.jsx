import { getAllCourses, updateCourse } from "./../services/courseService";

export const GetAllCourses_Action = () => {
  return async (dispatch) => {
    const { data } = await getAllCourses();
    await dispatch({ type: "NOW", payload: data });
  };
};

export const handleCourseUpdate = (courseId, updateCourse1) => {
  return async (dispatch, getState) => {
    const courses = [...getState().courses];
    const updateCourses = [...courses];
    const courseIndex = updateCourses.findIndex(
      (course) => course._id == courseId
    );

    let course = updateCourses[courseIndex];
    course = { ...Object.fromEntries(updateCourse1) };
    updateCourses[courseIndex] = course;
    try {
      await dispatch({
        type: "UPDATE_COURSE",
        payload: [...updateCourses],
      });
      const { data, status } = await updateCourse(courseId, updateCourse1);
      if (status === 200) {
        successMessage("دوره با موفقیت ویرایش شد.");
      }
    } catch (ex) {
      await dispatch({ type: "UPDATE_COURSE", payload: [...courses] });
    }

    cours;
  };
};
