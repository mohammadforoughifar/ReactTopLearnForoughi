import { combineReducers } from "redux";
import { courseReducer } from "./courses";
import { singleCourseReducer } from "./singleCourse";
import { loadingBarReducer } from "react-redux-loading-bar";
import { userReducer } from './user';
import { usersReducer } from './Users';


  console.log("sss:",courseReducer);

 // export const reducers = combineReducers({
  
 // courses: courseReducer
 
  
//});

export const reducers = combineReducers({
  coursesss: courseReducer,
  loadingBar: loadingBarReducer,
  login:userReducer,
  course:singleCourseReducer,
  



});

