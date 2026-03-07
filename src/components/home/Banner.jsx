import { fontBangla } from "@/app/layout";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1 space-y-5">
        <h3 className={`${fontBangla.className} text-5xl font-bold leading-20`}>
          আপনার শিশুকে দিন একটি{" "}
          <span className="text-primary">সুন্দর ভবিষ্যত</span>
        </h3>
        <p>Buy Every toy with up to 15% Discount</p>
        <button className="btn btn-primary btn-outline">
          Explore Products
        </button>
      </div>
      <div className="flex-1">
        <Image
          alt="Buy Every toy with up to 15% Discount"
          width={500}
          height={400}
          src={"/assets/hero.png"}
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
