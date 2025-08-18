import Image from "next/image";
import { Category } from "@/types/Category";
import { Card, CardContent } from "@/components/ui/card";

const CategoryCard = ({ categoryName, icon }: Category) => {
  return (
    <Card className="w-[170px] h-[145px] rounded-md border border-black/30 flex justify-center items-center hover:bg-red-600 hover:text-white transition-colors cursor-pointer">
      <CardContent className="flex flex-col justify-center items-center p-0">
        <Image
          src={icon}
          alt="icon"
          width={50}
          height={43}
          className="object-contain"
        />
        <p className="mt-2">{categoryName}</p>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
