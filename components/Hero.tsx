import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import Display from "./Display";

const Hero = () => {
  return (
    <div>
      <AuroraBackground className="flex justify-center align-middle" showRadialGradient={true}>
        <Display />
      </AuroraBackground>
    </div>
  );
};

export default Hero;
