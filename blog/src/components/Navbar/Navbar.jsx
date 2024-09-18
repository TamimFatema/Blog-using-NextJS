import React from "react";
import Image from "next/image";
import Hero from "../Home/Hero";
const Navbar = () => {
  return (
    <>
      <div>
        <nav className="flex justify-evenly my-5 items-center">
          <Image src="/logo.svg" width={100} height={100} />
          <div className="flex justify-between gap-7">
            <div className="flex justify-between items-center gap-7">
              <p>Home</p>
              <p>About</p>
              <p>Reviews</p>
              <p>Videos</p>
              <p>Contact</p>
              <Image src="/instagram.png" width={25} height={25} />
              <Image src="/facebook.png" width={25} height={25} />
              <Image src="/youtube.png" width={25} height={25} />
            </div>
          </div>
        </nav>
        <Hero />
        
      </div>
    </>
  );
};

export default Navbar;
