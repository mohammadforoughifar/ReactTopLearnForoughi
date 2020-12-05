import config from "./config.json";
import http from "./httpService";

export const getAllCourses = () => {
  return http.get(`${config.toplearnapi}/Course/GetAllCourses`);
};

export const GetCourseById=(courseid)=>{
  //console.log("GetCourseById:",courseid);
  return http.get(`${config.toplearnapi}/Course/GetCourseById?courseId=${courseid}`);
}