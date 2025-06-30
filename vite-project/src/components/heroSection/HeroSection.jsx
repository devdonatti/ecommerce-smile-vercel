import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-black w-full h-48 sm:h-60 md:h-72 lg:h-80 xl:h-screen 2xl:h-[90vh] overflow-hidden">
      {/* Banner Image */}
      <img
        src="/banner3.png"
        alt="Hero Image"
        className="inset-0 w-full h-full object-contain"
      />
    </div>
  );
};

export default HeroSection;
