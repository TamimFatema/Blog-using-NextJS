import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
       <div className="relative">
        <Image src="/hero.jpg" width={2000} height={200} />
        <p className="absolute top-0 left-0 text-white text-8xl my-4 mx-8 p-32">
          Let's Talk
        </p>
        <button className="absolute top-0 left-0 border border-white text-white p-2">
          Read More
        </button>
      </div>
    </>
  );
};

export default Hero;
