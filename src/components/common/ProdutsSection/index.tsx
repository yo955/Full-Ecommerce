import SectionBody from "./SectionBody";
import SectionTitle from "../SectionTitle/SectionTitle";
interface SectionProps {
  children: React.ReactNode;
  title?: string;
  para?: string;
}
const SectionLayout = ({ children, title, para }: SectionProps) => {
  return (
    <div>
      <SectionTitle title={title} para={para} />
      <SectionBody>{children}</SectionBody>
    </div>
  );
};

export default SectionLayout;
