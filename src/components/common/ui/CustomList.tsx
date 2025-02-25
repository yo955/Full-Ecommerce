import { Link } from "@/i18n/routing";

interface NavItem {
  href: string;
  title: string;
}

interface ListProps {
  items: NavItem[];
}
const CustomList: React.FC<ListProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index: number) => (
        <li key={index} className="list-none ">
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </>
  );
};

export default CustomList;
