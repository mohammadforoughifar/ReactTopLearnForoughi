import { Redirect } from "react-router";
import React from 'react'
import { GetUserById_Action } from "../../action/user";
import {useDispatch} from 'react-redux'


const LogOut = ({history}) => {

localStorage.removeItem("token");
const dispatch = useDispatch();
dispatch(GetUserById_Action(0));

    return <Redirect to="/"/>;
}
 
export default LogOut;