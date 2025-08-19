import SectionBody from "./SectionBody";
import SectionTitle from "./SectionTitle";
import LineSection from "../Line";
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
      <LineSection />
    </div>
  );
};

export default SectionLayout;
