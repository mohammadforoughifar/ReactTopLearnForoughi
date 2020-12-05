import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import TopLearn from "./TopLearn";
import { ToastContainer } from "react-toastify";

const App = () => {
   
  
useEffect(()=>{

require("../Utilitis/script");

},[])


  return (
    <BrowserRouter>
      <TopLearn />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
