import Link from "next/link";
interface LinkProps {
  href: string;
  children: React.ReactNode;
}
export const CustomLink: React.FC<LinkProps> = ({ href, children }) => {
  return <Link href={href}>{children}</Link>;
};
