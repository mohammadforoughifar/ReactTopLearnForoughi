import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";

const NavMenue = () => {
  const data = useSelector((state) => state.login);
  console.log("NavMenue:", data);
  return (
    <nav>
      <div className="row">
        <div className="col-sm-6 col-xs-12">
          <ul>
            <li>
              <a href=""> همکاری در فروش </a>
              <a href=""> درباره ما </a>
              <a href=""> تماس با ما </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-xs-12">
          <div className="clientarea">
            {!isEmpty(data) ? (
              <div className="loggein">
                <i className="zmdi zmdi-account"></i>
                <NavLink to={"/"}> { data.firstName+" "+ data.lastName } </NavLink> {" "} | {" "}
                 <NavLink to={"/logout"}> خــروج </NavLink>
              </div>
            ) : (
              <div className="signin ">
                <i className="zmdi zmdi-account"></i>
                <NavLink to={"/login"}> ورود </NavLink> {" "} | {" "}
                <NavLink to={"/register"}> عضویت </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenue;
