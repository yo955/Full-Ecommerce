import React from "react";
import Image from "next/image";

const Music = () => {
  return (
    <div className="bg-slate-950 mb-6 h-auto flex flex-col sm:flex-row justify-between items-center p-6 md:p-11">

      <div className="text-white flex flex-col gap-6">
        <p className="text-[#00FF66]">Category</p>
        <p className="text-4xl font-semibold mt-3 custom-mid:text-3xl custom-handling:text-2xl custom-phone:text-xl">
          Enhance Your Music Experience
        </p>

        <div className="grid grid-cols-2 gap-4 text-black custom-mid:flex">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-slate-100 w-16 h-16 rounded-full flex flex-col justify-center items-center font-bold p-4 text-sm custom-handling:w-14 custom-handling:h-14 custom-phone:w-12 custom-phone:h-12"
            >
              5<span className="text-xs">Hour</span>
            </div>
          ))}
        </div>

        <button className="bg-[#00FF66] w-40 h-14 text-black font-semibold rounded-md custom-phone:w-32 custom-phone:h-12">
          Buy Now
        </button>
      </div>


      <div className=" hidden md:flex justify-center w-full custom-mid:w-auto">
        <Image
          src="/images/music sec.png"
          alt="Music category"
          width={1000}
          height={420}
          className="object-contain w-[300px] custom-mid:w-[400px] custom-large:w-[500px] custom-handling:w-[250px] custom-phone:w-[180px]"
        />
      </div>
    </div>
  );
};

export default Music;
