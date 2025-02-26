import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { CartBtn } from "../ui/CartBtn";
const Icons = () => {
  return (
    <div className="flex justify-around w-full items-center gap-1">
      <CartBtn count={2} icon={<FavoriteBorderIcon className="text-2xl" />} />
      <CartBtn count={2} icon={<ShoppingCartIcon fontSize="small" />} />
    </div>
  );
};

export default Icons;
