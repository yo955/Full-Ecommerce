import { FeatureCard } from "./FeatureCard";

const featuresData = [
  {
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    img: "/images/features/playstation.png",
    alt: "PlayStation 5 Console",
    gradient: "from-slate-950 via-slate-900 to-slate-950",
    effect: "bg-blue-500/10",
    textGradient: "from-white to-gray-300",
    linkColor: "hover:border-blue-400",
    imgWidth: 510,
    imgHeight: 510,
    size: "lg:row-span-2",
  },
  {
    title: "Women’s Collections",
    description: "Featured woman collections that give you another vibe.",
    img: "/images/features/woman.png",
    alt: "Women's Fashion Collection",
    gradient: "from-slate-950 via-slate-900 to-slate-950",
    effect: "bg-pink-500/10",
    textGradient: "from-white to-pink-200",
    linkColor: "hover:border-pink-400",
    imgWidth: 432,
    imgHeight: 280,
  },
  {
    title: "Speakers",
    description: "Amazon wireless speakers",
    img: "/images/features/sub.png",
    alt: "Wireless Speakers",
    gradient: "from-slate-950 via-slate-900 to-slate-950",
    effect: "bg-orange-500/10",
    textGradient: "from-white to-orange-200",
    linkColor: "hover:border-orange-400",
    imgWidth: 210,
    imgHeight: 222,
  },
  {
    title: "Perfume",
    description: "GUCCI INTENSE OUD EDP",
    img: "/images/features/perfum.png",
    alt: "GUCCI Perfume",
    gradient: "from-slate-950 via-slate-900 to-slate-950",
    effect: "bg-purple-500/10",
    textGradient: "from-white to-purple-200",
    linkColor: "hover:border-purple-400",
    imgWidth: 210,
    imgHeight: 222,
  },
];

const FeaturesSection = () => {
  return (
    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 w-full h-full">
      {/*(PlayStation) */}
      <FeatureCard {...featuresData[0]} />

      {/*  Col2 */}
      <div className="flex flex-col gap-6">
        {/* Women Photo */}
        <FeatureCard {...featuresData[1]} />
        
        {/* Speaker + Perfume */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FeatureCard {...featuresData[2]} />
          <FeatureCard {...featuresData[3]} />
        </div>
      </div>
    </div>
  );
};






export default FeaturesSection;
