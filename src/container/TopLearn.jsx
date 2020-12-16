import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import Mainlayoute from "./mainLayout";
import Header from "./../components/Header/header";
import Favorait from "./../components/pages/Favoriate-Main";
import lastCourses from "./../components/pages/lastCourse";

import Archive from "./../components/pages/archive";
import Login from "./../components/pages/Login";
import Course from "../components/pages/Course";

import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./../action/Users";
import decodedToken  from "./../Utilitis/decodeToken";
import LogOut from "../components/pages/LogOut";
import { isEmpty } from "lodash";
import userContext from './../components/Context/userContext'
import NotFound from "../components/commen/NotFound";
import PrivateLayout from "./ProviderLayout";
import CourseTable from "../components/Admin/CourseTable";
import NewCourseDialog from "../components/Admin/dialog/NewCourseDialog";
import CourseEdit from "../components/Admin/dialog/CourseEdit";


const TopLearn = (props) => {
 
  const dispatch = useDispatch();



  useEffect(() => {
    const token = localStorage.getItem("token");
  
    if (token) {
   
      const decodedToken_ = decodedToken(token);
      const dateNow = Date.now() / 1000;
     
   
       if (decodedToken_.payload.exp < dateNow) localStorage.removeItem("token");
       else dispatch(addUser(decodedToken_.payload));
       //console.log("decodedToken_.payload:",decodedToken_.payload);

    }
  }, []);

  return (
<Switch>

<Route path={["/dashboard"]}>
<PrivateLayout>
  <Route path="/dashboard/dore" component={CourseTable}/>
  <Route
  path="/dashboard"
  exact
  render={()=><Redirect to="/"/>}
  
  />
  <Route path="/dashboard/NewCourseDialog" component={NewCourseDialog}/>
  <Route path="/dashboard/CourseEdit/:id"  component={CourseEdit}/>
  
</PrivateLayout>
</Route>

<Route path={["/"]}>

<Mainlayoute>
      <Switch path="/">
        <Route path="/header" component={Header} />
        <Switch path="/">
          {/* <Route path="/" exact render={()=> <Favorait courses={courses} />} /> */}
          <Route path="/" exact render={() => <Favorait />} />
          <Route path="/" exact component={lastCourses} />
          <Route path="/archive" exact component={Archive} />
          <Route path="/login"  render={()=><userContext><Login/></userContext>} />
          <Route path="/course/:id" exact component={Course} />
          <Route path="/logout" exact component={LogOut} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </Switch>
    </Mainlayoute>
</Route>

</Switch>



  );
};
export default TopLearn;
