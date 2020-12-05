import React, { Fragment } from "react";
import { withRouter } from "react-router";
import Footer from "../components/Footer/footer";
import MainMenue from "../components/Menu/mainMenu";
import Header from "./../components/Header/header";

const Mainlayoute = (props) => {
  return (
    <Fragment>
      <Header />
      <MainMenue />
      <main id="home-page">
        <div className="container">{props.children}</div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default withRouter(Mainlayoute);
