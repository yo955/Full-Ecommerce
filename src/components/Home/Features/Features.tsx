import Image from "next/image";
import Link from "next/link";

const Features = () => {
  return (
    <div className="mt-10 flex gap-8 tab-large-screen:flex-col tab-large-screen:items-center custom-sm:gap-6">
      
      <div className="relative">
        <div className="bg-slate-950 w-[570px] h-[600px] flex items-end justify-center custom-sm:w-[350px] custom-sm:h-[400px]">
          <Image
            src="/images/features/playstation.png"
            alt="playstation"
            width={510}
            height={510}
            className="object-contain"
          />
        </div>
        <div className="text-white w-[250px] absolute bottom-10 left-8 custom-sm:left-4 custom-sm:bottom-6">
          <h4 className="text-2xl font-semibold mb-2 custom-sm:text-lg">PlayStation 5</h4>
          <p className="text-sm text-[#FAFAFA] mb-1 custom-sm:text-xs">
            Black and White version of the PS5 coming out on sale.
          </p>
          <Link href="#" className="border-b text-sm custom-sm:text-xs">Shop Now</Link>
        </div>
      </div>

     
      <div className="flex flex-col justify-between h-[600px] custom-sm:h-auto custom-sm:gap-6">
     
        <div className="relative">
          <div className="bg-slate-950 w-[570px] h-[280px] flex items-end justify-end custom-sm:w-[350px] custom-sm:h-[300px]">
            <Image
              src="/images/features/woman.png"
              alt="woman"
              width={432}
              height={280}
              className="object-contain"
            />
          </div>
          <div className="text-white w-[250px] absolute bottom-10 left-8 custom-sm:left-4 custom-sm:bottom-6">
            <h4 className="text-2xl font-semibold mb-2 custom-sm:text-lg">Women’s Collections</h4>
            <p className="text-sm text-[#FAFAFA] mb-1 custom-sm:text-xs">
              Featured woman collections that give you another vibe.
            </p>
            <Link href="#" className="border-b text-sm custom-sm:text-xs">Shop Now</Link>
          </div>
        </div>

        
        <div className="flex justify-between gap-4 custom-sm:flex-col custom-sm:items-center">
          
          <div className="relative">
            <div className="bg-slate-950 w-[270px] h-[280px] flex items-center justify-center custom-sm:w-[350px] custom-sm:h-[220px]">
              <Image
                src="/images/features/sub.png"
                alt="speakers"
                width={210}
                height={222}
                className="object-contain"
              />
            </div>
            <div className="text-white w-[230px] absolute bottom-10 left-8 custom-sm:left-4 custom-sm:bottom-4">
              <h2 className="text-xl font-semibold mb-2 custom-sm:text-lg">Speakers</h2>
              <p className="text-sm text-[#FAFAFA] mb-1 custom-sm:text-xs">
                Amazon wireless speakers
              </p>
              <Link href="#" className="border-b text-sm custom-sm:text-xs">Shop Now</Link>
            </div>
          </div>

       
          <div className="relative">
            <div className="bg-slate-950 w-[270px] h-[280px] flex items-center justify-center custom-sm:w-[350px] custom-sm:h-[220px]">
              <Image
                src="/images/features/perfum.png"
                alt="perfume"
                width={210}
                height={222}
                className="object-contain"
              />
            </div>
            <div className="text-white w-[230px] absolute bottom-10 left-8 custom-sm:left-4 custom-sm:bottom-4">
              <h2 className="text-xl font-semibold mb-2 custom-sm:text-lg">Perfume</h2>
              <p className="text-sm text-[#FAFAFA] mb-1 custom-sm:text-xs">
                GUCCI INTENSE OUD EDP
              </p>
              <Link href="#" className="border-b text-sm custom-sm:text-xs">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
