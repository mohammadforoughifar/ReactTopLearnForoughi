import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { GetUserById_Action } from "../../action/user";
import { login } from "../../services/userService";
import { Success, Error } from "./../../Utilitis/message";
import { Context } from "./context";

const UserContext = ({ children, history }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  // const resetState = () => {
  //   setUserName(""), setPassword(""), setLoading("");
  // };

  const handleLogin = async (event) => {
    event.preventDefault();
    const user = { username, password };

    try {
      // if (validator.current.allValid()) {
      setLoading(true);
      const { status, data } = await login(user);

      if (status === 200) {
        Success("ورود با موفقیت انجام شد");
        localStorage.setItem("token", data.token);

        dispatch(GetUserById_Action(data.id));

        setLoading(false);
        history.replace("/"); 
      } else {
        // validator.current.showMessages();
        Error("نام کاربری یا کلمه عبور اشتباه می باشد");
      }
      //  }
    } catch (ex) {
      console.log(ex);
      setLoading(false);
      Error(" مشکل در سرور به وجود آمده است");
    }
  };

  return (
    
    <Context.Provider
      value={{
        username,
        setUserName,

        password,
        setPassword,

     
        handleLogin,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default withRouter(UserContext);