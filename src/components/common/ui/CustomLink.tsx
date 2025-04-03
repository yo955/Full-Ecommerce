import Link from "next/link";
interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?:string;
}
export const CustomLink: React.FC<LinkProps> = ({ href, children ,className }) => {
  return <Link href={href} className={className}>{children}</Link>;
};
