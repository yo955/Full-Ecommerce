import { Field } from "formik";

interface fieldProps {
  className?: string;
  type: string;
  name: string;
  placeholder: string;
}
const CustomField = ({ className, type, name, placeholder }: fieldProps) => {
  return (
    <div>
      <Field
        className={className}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomField;
