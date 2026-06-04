import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
export default function MobileNavLinks({ data, closeMenu }) {
  return (
    <div className="flex flex-col justify-start items-start gap-8 p-3 bg-back/90 ">
      <ul className="flex flex-col gap-4 ">
        {data.map((item) => (
          <li
            key={item.id}
            className="text-white text-xl font-semibold"
            onClick={closeMenu}
          >
            <span className="text-primary"># </span>
            <Link href={item.path} aria-label={`Go to ${item.name}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-center items-start w-3/4 ">
        <ThemeToggle />
      </div>
    </div>
  );
}
