import Image from "next/image";
import Link from "next/link";

const Features = () => {
  return (
    <div className="h-[600px] mt-10 flex gap-8">
      <div className="relative ">
        <div className="bg-slate-950 w-[570px] h-[600px] flex items-end justify-center z-0">
          <Image
            src="/images/features/playstation.png"
            alt="playstaion"
            width={510}
            height={510}
             className="object-contain"
          />
        </div>
        <div className="text-white w-[242px] h-[82px] z-30 absolute bottom-14 left-8">
          <h4 className="mb-4 text-2xl">PlayStation 5</h4>
          <p className="text-xs text-[#FAFAFA] mb-1">
            Black and White version of the PS5 coming out on sale.
          </p>
          <Link href="#" className="border-b-[0.5px]">
            Shop Now
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-between h-[600px]">
        <div className="relative ">
          <div className="bg-slate-950 w-[570px] h-[280px] flex items-end justify-end">
            <Image
              src="/images/features/woman.png"
              alt="woman"
              width={432}
              height={280}
              className="object-contain"
            />
          </div>
          <div className="text-white w-[262px] h-[82px] z-30 absolute bottom-16 left-8">
            <h4 className="mb-4 text-2xl">Women’s Collections</h4>
            <p className="text-xs text-[#FAFAFA] mb-1">
              Featured woman collections that give you another vibe.
            </p>
            <Link href="#" className="border-b-[0.5px]">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="flex justify-between w-[570px] h-[280px] ">
          <div className="relative">
            <div className="bg-slate-950 w-[270px] h-[280px] flex items-center justify-center ">
              <Image
                src="/images/features/sub.png"
                alt="playstaion"
                width={210}
                height={222}
                className="object-contain"
              />
            </div>
            <div className="text-white w-[242px] h-[82px] z-30 absolute bottom-11 left-8">
              <h2 className="mb-4  text-2xl">Speakers</h2>
              <p className="text-xs text-[#FAFAFA] mb-1">
                Amazon wireless speakers
              </p>
              <Link href="#" className="border-b-[0.5px]">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-slate-950 w-[270px] h-[280px]  flex items-center justify-center ">
              <Image
                src="/images/features/perfum.png"
                alt="playstaion"
                width={210}
                height={222}
                 className="object-contain"
              />
            </div>
            <div className="text-white w-[242px] h-[82px] z-30 absolute bottom-11 left-8">
              <h2 className="mb-4 text-2xl">Perfum</h2>
              <p className="text-xs text-[#FAFAFA] mb-1">
                GUCCI INTENSE OUD EDP
              </p>
              <Link href="#" className="border-b-[0.5px]">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
