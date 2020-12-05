import { createStore, compose, applyMiddleware } from "redux";
import { reducers } from "./../reducer/index";
import  thunk  from "redux-thunk";
import { GetAllCourses_Action } from "./../action/courses";
import { loadingBarMiddleware } from "react-redux-loading-bar";


export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, loadingBarMiddleware()),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
//Initialize
store.dispatch(GetAllCourses_Action());


//subscribe
store.subscribe(() => console.log(store.getState()));
