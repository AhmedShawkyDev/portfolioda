"use client";
import { FaArrowUp } from "react-icons/fa";
export default function TopButton() {
  return (
    <button
      onClick={() =>
        typeof window !== "undefined" &&
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      className="
          cursor-pointer
          fixed 
          bottom-42.5 ltr:right-3.75 rtl:left-3.75 
          md:bottom-8 md:ltr:right-8 md:rtl:left-8
          flex items-center justify-center 
          w-12 h-12 
          border-2 border-primary 
          rounded-full 
          text-primary 
          bg-transparent 
          hover:bg-primary hover:text-gray-900 
          transition-all duration-600
          "
    >
      <FaArrowUp />
    </button>
  );
}
