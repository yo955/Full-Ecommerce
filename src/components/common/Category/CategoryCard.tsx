import Image from "next/image";
import { Card } from "@mui/material";
import { Category } from "@/types/Category";

const CategoryCard = ({ categoryName }: Category) => {
  return (
    <Card
      sx={{
        width: "170px",
        height: "145px",
        borderRadius: "4px",
        border: "1px solid #0000004D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
          backgroundColor: "#DB4444",
          cursor: "pointer",
          color: "#FFFFFF",
        },
      }}
    >
      <div className="flex flex-col justify-center items-center ">
        <Image
          src="/images/category/cat-1.png"
          alt="icon"
          width={50}
          height={43}
        />
        <p>{categoryName}</p>
      </div>
    </Card>
  );
};

export default CategoryCard;
