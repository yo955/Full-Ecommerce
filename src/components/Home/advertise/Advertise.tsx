import Loading from "@/loading/Loading";
import Swipper from "@/components/Home/advertise/swipper/Swipper";

const Advertise = () => {
  const mainbath = "/images/banners"; // لا داعي لكتابة /images لأن public مباشرة
  const bannerImages = [`${mainbath}/01.jpg`, `${mainbath}/02.jpg`, `${mainbath}/03.jpg`];

  return (
    <div className="w-full">
      {bannerImages.length === 0 ? (
        <Loading/>
      ) : (
        <Swipper images={bannerImages}/>
      )}
    </div>
  );
};

export default Advertise;
