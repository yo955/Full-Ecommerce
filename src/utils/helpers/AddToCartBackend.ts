import useAddToCart from "@/hooks/useAddToCart";

interface Product {
  ProductId: string,
  quantity: number
}

const AddToCartBackend = ({ProductId, quantity}: Product) => {
  const {mutate} = useAddToCart();
  mutate({ProductId, quantity});
};
export default AddToCartBackend;
