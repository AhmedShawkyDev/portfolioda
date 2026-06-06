"use client";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import SideSocial from "./side-social";
import { BiMenuAltLeft } from "react-icons/bi";
import { useState } from "react";
import MobileNavLinks from "./mobile-nav-links";
import { motion } from "framer-motion";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => setOpenMenu(true);
  const handleCloseMenu = () => setOpenMenu(false);

  const navLinks = [
    { id: 1, name: "Home", path: `/` },
    { id: 2, name: "Projects", path: `#projectsection` },
    { id: 3, name: "About Me", path: `#aboutsection` },
    { id: 4, name: "Contacts", path: `#contactsection` },
  ];

  return (
    <div data-aos="fade-down">
      <SideSocial />

      {/* 1. تعديل خلفية الهيدر: أبيض في العادي، ورمادي غامق في الدارك مود */}
      <div className="bg-white dark:bg-back w-full fixed top-0 left-0 z-10 transition-colors duration-300 shadow-sm dark:shadow-none dark:border-b dark:border-gray-800">
        <div className="mx-4 lg:mx-22 xl:mx-44 flex flex-col lg:flex-row justify-between items-center h-12 lg:h-16 ">
          <div className="flex justify-between items-center w-full lg:w-1/4 xl:w-1/8 py-2">
            {/* 2. تعديل لون اللوجو: أسود في العادي، وأبيض في الدارك */}
            <Link
              href="/"
              className="font-bold text-xl text-black dark:text-white transition-colors duration-300 flex gap-2"
            >
              Welcome
              <motion.div
                animate={{ rotate: [0, 20, -15, 15, -10, 10, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
                style={{ display: "inline-block" }}
              >
                👋
              </motion.div>
            </Link>

            {/* أضفت زرار الثيم هنا عشان يظهر في الموبايل جنب القائمة */}
            <div className="flex items-center gap-3 lg:hidden">
              <ThemeToggle />
              <button
                onClick={openMenu ? handleCloseMenu : handleOpenMenu}
                className="font-bold text-3xl text-black dark:text-white transition-colors duration-300"
              >
                <BiMenuAltLeft />
              </button>
            </div>
          </div>

          {/* 3. تعديل خلفية المنيو بتاعة الموبايل */}
          {openMenu && (
            <div className="fixed top-11.5 index-50 w-full h-screen bg-white/95 dark:bg-back/95 backdrop-blur-sm transition-colors duration-300">
              <MobileNavLinks data={navLinks} closeMenu={handleCloseMenu} />
            </div>
          )}

          <ul className="hidden lg:flex gap-4 xl:gap-8 ">
            {navLinks.map((link) => {
              return (
                <li
                  key={link.id}
                  className="font-medium text-lg text-gray-800 dark:text-gray-200 flex items-center transition-colors duration-300"
                >
                  {/* 4. تعديل لون علامة الـ # (بنفسجي غامق للـ Light، وبنفسجي فاتح للـ Dark) */}
                  <span className="text-[#7d3c98] dark:text-primary mr-1">
                    #{" "}
                  </span>
                  <Link
                    href={link.path}
                    className="hover:text-[#7d3c98] dark:hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* زرار الثيم للشاشات الكبيرة */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
