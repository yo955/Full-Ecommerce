import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toastify() {
  return (
    <>
      <ToastContainer position="bottom-left" autoClose={3000} />
    </>
  );
}
