import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function MobileNavLinks({ data, hcloseMenu, hopenmenu }) {
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-full lg:hidden transition-transform duration-700 z-100 ${
        hopenmenu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* الحاوية الداخلية اللي شايلة الخلفية والمحتوى */}
      <div className="relative flex flex-col justify-start items-start gap-8 p-6 bg-background-custom dark:bg-back w-full h-full shadow-2xl transition-colors duration-300">
        {/* زرار الإغلاق (X) متظبط مكانه فوق على اليمين */}
        <button
          onClick={hcloseMenu}
          className="absolute top-4 right-6 p-2"
          aria-label="Close Menu"
        >
          <span className="text-black dark:text-white text-2xl font-bold hover:text-primary transition-colors">
            X
          </span>
        </button>

        {/* مسافة من فوق عشان الكلام ميبقاش لازق في السقف */}
        <ul className="flex flex-col gap-6 mt-12 w-full">
          {data.map((item) => (
            <li
              key={item.id}
              className="text-black dark:text-white text-xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 w-full"
              onClick={hcloseMenu}
            >
              <span className="text-[#7d3c98] dark:text-primary mr-2">#</span>
              <Link href={item.path} aria-label={`Go to ${item.name}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col justify-center items-start w-3/4 mt-auto mb-10">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
