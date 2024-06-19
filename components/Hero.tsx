import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import Display from "./Display";

const Hero = () => {
  return (
    <div>
      {/* center display in the screen in mobile view overflow */}
      <AuroraBackground
        className="flex justify-center items-center w-[850px] h-[100vh] overflow-hidden"
        showRadialGradient={true}
      >
        <Display />
      </AuroraBackground>
    </div>
  );
};

export default Hero;
