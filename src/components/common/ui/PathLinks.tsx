import Link from "next/link";

interface pathLinksProps {
  titles: string[];
  slash?: string;
}
const PathLinks: React.FC<pathLinksProps> = ({
  titles,
  slash = "/",
}: pathLinksProps) => {
  return (
    <>
      <div className="flex ml-10 md:ml-0 gap-2 m-0 pb-10 text-slate-400">
        <Link href="/">Home</Link>
        {titles.map((title, index) => {
          return (
            <div key={index} className="flex gap-2">
              <p>{slash}</p>
              <Link
                className="text-black font-medium"
                href={`/${title.toLowerCase()}`}
              >
                {title}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PathLinks;
