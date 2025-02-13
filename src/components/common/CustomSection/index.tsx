import SectionBody from "./SectionBody";
import SectionTitle from "../SectionTitle/SectionTitle";
import LineSection from "./BottomSection";
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
