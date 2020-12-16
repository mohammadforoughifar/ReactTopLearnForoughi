import React, { useState, Fragment, useRef, useContext } from "react";

// import SimpleReactValidator from "simple-react-validator";
import { Sugar } from "react-preloaders";
import { userReducer } from "./../../reducer/user";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withRouter } from "react-router-dom";
import { login } from "./../../services/userService";
import { GetUserById_Action } from "../../action/user";
import { useDispatch } from "react-redux";
import { Context } from "../Context/context";

const Login = ({ history }) => {
  // const [username, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);

  //   const validator = useRef(
  //     new SimpleReactValidator({
  //         messages: {
  //             required: "پر کردن این فیلد الزامی میباشد",
  //             min: "کمتر از 5 کاراکتر نباید باشد",
  //             email: "ایمیل نوشته شده صحیح نمی باشد"
  //         },
  //         element: message => <div style={{ color: "red" }}>{message}</div>
  //     })
  // );

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const user = { username, password };

  //   try {
  //     // if (validator.current.allValid()) {
  //     setLoading(true);
  //     const { status, data } = await login(user);

  //     if (status === 200) {
  //       toast.success("ورود با موفقیت انحام شد.", {
  //         position: "top-right",
  //         closeOnClick: true,
  //       });
  //       localStorage.setItem("token", data.token);

  //       dispatch(GetUserById_Action(data.id));

  //       setLoading(false);
  //       history.replace("/");
  //     } else {
  //       // validator.current.showMessages();
  //       toast.error("نام کاربری یا کلمه عبور اشتباه است.", {
  //         position: "top-right",
  //         closeOnClick: true,
  //       });
  //     }
  //     //  }
  //   } catch (ex) {
  //     console.log(ex);
  //     setLoading(false);
  //     toast.error("مشکلی پیش آمده.", {
  //       position: "top-right",
  //       closeOnClick: true,
  //     });
  //   }
  // };

  // const dispatch = useDispatch();
  // console.log("SingleCoursePageData:",Course);

  // useEffect(() => {

  // dispatch(GetUserById_Action(match.params.id));

  // }, []);

  const loginContext = useContext(Context);

  const {
    password,
    setPassword,
    username,
    setUserName,

    validator,
    handellogin,
  } = loginContext;

  return (
    <Fragment>
      <div className="container">
        <nav aria-label="breadcrumb">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">تاپ لرن</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              ورود به سایت
            </li>
          </ul>
        </nav>
      </div>

      <main className="client-page">
        <div className="container-content">
          <header>
            <h2> ورود به سایت </h2>
          </header>

          {/* <Sugar time={0} color="#fc03d7" customLoading={loading} /> */}

          <div className="form-layer">
            <form onSubmit={handellogin}>
              <div className="input-group">
                <span className="input-group-addon" id="email-address">
                  <i className="zmdi zmdi-email"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="نام کاربری"
                  aria-describedby="email-address"
                  value={username}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </div>

              <div className="input-group">
                <span className="input-group-addon" id="password">
                  <i className="zmdi zmdi-lock"></i>
                </span>
                <input
                  type="text"
                  name="password"
                  className="form-control"
                  placeholder="رمز عبور "
                  aria-describedby="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <div className="remember-me">
                <label>
                  <input type="checkbox" name="" /> مرا بخاطر بسپار{" "}
                </label>
              </div>

              <div className="link">
                <a href="">
                  {" "}
                  <i className="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده
                  ام !
                </a>
                <a href="">
                  {" "}
                  <i className="zmdi zmdi-account"></i> عضویت در سایت{" "}
                </a>
              </div>

              <button className="btn btn-success"> ورود به سایت </button>
            </form>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Login;
