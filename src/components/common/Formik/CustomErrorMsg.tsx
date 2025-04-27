import { ErrorMessage } from "formik";

interface ErrorMsgProps {
  className?: string;
  name: string;
  component?: string;
}
const CustomErrorMsg = ({
  className = "absolute bottom-0 left-0 text-red-600",
  name,
  component = "div",
}: ErrorMsgProps) => {
  return (
    <div>
      <ErrorMessage className={className} name={name} component={component} />
    </div>
  );
};

export default CustomErrorMsg;
