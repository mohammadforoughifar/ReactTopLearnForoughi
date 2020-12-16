import Course from "../components/pages/Course";
import config from "./config.json";
import http from "./httpService";

export const getAllCourses = () => {
  return http.get(`${config.toplearnapi}/Course/GetAllCourses`);
};

export const GetCourseById = (courseid) => {
  //console.log("GetCourseById:",courseid);
  return http.get(
    `${config.toplearnapi}/Course/GetCourseById?courseId=${courseid}`
  );
};



export const newCourse = (course) => {
  console.log("CourseService_Add111:", course);
  return http.post(`${config.toplearnapi}/Course/AddCourse`, course);
};

export const updateCourse = (courseId, course) => {
  return http.post(`${config.toplearnapi}/course/Edit/${courseId}`, course);
};

export const deleteCourse = (courseId) => {
  return http.post(`${config.toplearnapi}/course/Delete/${courseId}`);
};
