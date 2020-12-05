import React, { Fragment } from "react";

import NavMenue from "./../Menu/NavMenue";

const Header = () => {
  console.log("Header:", 1);
  return (
    <Fragment>
      <div className="landing-layer">
        <div className="container">
          <NavMenue />

          <header>
            <a href="" className="logo">
              <img src="images/logo.png" />
            </a>
            <h1> با اساتید مجرب و کارآزموده در خودآموز تاپ لرن </h1>
            <h2> آموزش ببینید ، تجربه کسب کنید و بازار کار شوید </h2>
            <h3> با کمترین هزینه خودت یاد بگیر </h3>
          </header>
          <div className="search-form">
            <form>
              <input
                type="text"
                name=""
                placeholder="چی دوست داری یاد بگیری ؟"
              />
              <button>
                <i className="zmdi zmdi-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
