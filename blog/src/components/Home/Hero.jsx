import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <Image src="/hero.jpg" width={2000} height={200} />
        <p className="absolute top-0 left-0 text-white text-4xl my-4 mx-8">
          Let's Talk
        </p>
      </div>
    </>
  );
};

export default Hero;
