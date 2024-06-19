// laoding page for the app
'use client'

import React, { Suspense } from "react";
import { ThreeCircles } from "react-loader-spinner";
import Home from "./page";

const loading = () => {
  return (
    <div>
        <Suspense fallback={<div><ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#000000"
        ariaLabel="three-circles-loading"
        wrapperStyle={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backGroundColor: "#000000"}}
        wrapperClass=""
      /></div>}>
        <Home/>
      </Suspense>
      
    </div>
  );
};

export default loading;
