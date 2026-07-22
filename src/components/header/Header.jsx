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
    { id: 4, name: "Skills", path: `#skillsection` },
    { id: 5, name: "Certificates", path: `#certificatesection` },
    { id: 6, name: "Contacts", path: `#contactsection` },
  ];

  return (
    <>
      {/* 1. طلعنا المنيو بره الديف اللي فيه الأنيميشن عشان تتحرر وتبقى فوق الموقع كله */}
      <MobileNavLinks
        data={navLinks}
        hcloseMenu={handleCloseMenu}
        hopenmenu={openMenu}
      />

      {/* 2. الهيدر العادي بتاعك جوه الأنيميشن بتاعه زي ما هو */}
      <div data-aos="fade-down">
        <SideSocial />

        <div className="bg-white dark:bg-back w-full fixed top-0 left-0 z-40 transition-colors duration-300 shadow-sm dark:shadow-none dark:border-b dark:border-gray-800">
          <div className="mx-4 lg:mx-22 xl:mx-44 flex flex-col lg:flex-row justify-between items-center h-12 lg:h-16 ">
            <div className="flex justify-between items-center w-full lg:w-1/4 xl:w-1/8 py-2">
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

            <ul className="hidden lg:flex gap-4 xl:gap-8 ">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className="font-medium text-lg text-gray-800 dark:text-gray-200 flex items-center transition-colors duration-300"
                  >
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

            <div className="hidden lg:flex items-center gap-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
