import React from "react";
import Image from "next/image";
const Music = () => {
  return (
    <div className="bg-slate-950 mb-6 h-[500px] flex justify-between items-center p-11 ">
      <div className="text-white flex flex-col justify-between">
        <p className="text-[#00FF66]">Category</p>
        <p className="text-5xl font-semibold mt-5">
          Enhance Your Music Experience
        </p>
        <div className="flex flex-row items-center gap-4 text-black h-36">
          <div className="bg-slate-100 w-10 h-10 rounded-full flex flex-col justify-center items-center font-bold p-8 ">
            5<span className="m-0">Hour</span>
          </div>
          <div className="bg-slate-100 w-10 h-10 rounded-full flex flex-col justify-center items-center font-bold p-8 ">
            5<span className="m-0">Hour</span>
          </div>
          <div className="bg-slate-100 w-10 h-10 rounded-full flex flex-col justify-center items-center font-bold p-8 ">
            5<span className="m-0">Hour</span>
          </div>
          <div className="bg-slate-100 w-10 h-10 rounded-full flex flex-col justify-center items-center font-bold p-8 ">
            5<span className="m-0">Hour</span>
          </div>
        </div>
        <button className="bg-[#00FF66] w-40 h-14">Buy Now</button>
      </div>
      <div className="image">
        <Image
          src="/images/music sec.png"
          alt="Music category"
          width={1000}
          height={420}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Music;
