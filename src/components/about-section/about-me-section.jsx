import Link from "next/link";

import Image from "next/image";
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri";
import SectionTitle from "../section-title";
export default function AboutMeSection() {
  return (
    <div
      id="aboutsection"
      className=" flex flex-col w-full h-fit xl:h-screen gap-14"
    >
      <SectionTitle title="About Me" motion="fade-down" />
      <div className="flex w-full justify-between items-center flex-col lg:flex-row gap-4">
        <div
          data-aos="fade-right"
          className="flex flex-col gap-7 w-full xl:w-3/4"
        >
          <div className=" flex flex-col gap-4">
            <p className="text-xl text-foreground font-medium">
              Hello , I'm Ahmed Shawky
            </p>
            <p className="text-xl text-primary-text font-medium">
              I'm a results-oriented Data Analyst specializing in transforming
              raw data into clear, strategic insights that drive business
              impact.
            </p>
            <p className="text-xl text-primary-text font-medium">
              I excel at uncovering hidden patterns and building immersive,
              interactive dashboards with Power BI and Excel, using advanced
              data modeling, dynamic DAX metrics, and SQL.
            </p>
            <p className="text-xl text-primary-text font-medium">
              By integrating AI automation into my workflows, I maximize
              efficiency and deliver precise results that bridge the gap between
              data logic and business strategy.
            </p>
            <p className="text-xl text-primary-text font-medium">
              Let's create something meaningful together.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="w-full lg:w-2/3 flex justify-center xl:justify-end"
        >
          <Image
            src={`https://res.cloudinary.com/dn2fdxtad/image/upload/v1765294417/herooo_kjjt87.webp`}
            alt="Ahmed Shawky"
            width={400}
            height={400}
            priority
            fetchPriority="high"
            className="imageReveal"
          />
        </div>
      </div>
    </div>
  );
}
