import React from "react";
import Title from "./Title";

// men&apos;s
const HomeBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Title
        className="text-3xl md:text-4xl uppercase font-bold
       text-center"
      >
        Your Favorite Outfit
      </Title>
      <p className="text-sm text-center text-lightColor/80 font-meduim max-w-[480px]">
        Pick out an oufit that can set the tone for your entire day, boost your
        confidence and make you feel ready for anything. Shop the latest
        lifestyle products
      </p>
    </div>
  );
};

export default HomeBanner;
