import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import Display from "./Display";
import Image from "next/image"; // Import the Image component from the correct package

const Hero = () => {
  return (
    <div>
      {/* center display in the screen in mobile view overflow */}
      <AuroraBackground
        className="flex justify-center items-center w-[850px] overflow-hidden md:w-full md:h-[100vh] md:overflow-hidden"
        showRadialGradient={true}
      >
        <Display/>
      </AuroraBackground>
    </div>
  );
};

export default Hero;
