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
      <SectionTitle title="About" />
      <div className="flex w-full justify-between items-center flex-col lg:flex-row gap-4">
        <div className="flex flex-col gap-7 w-full xl:w-3/4">
          <div className=" flex flex-col gap-4">
            <p className="text-xl text-foreground font-medium">
              "hello , I'm Ahmed Shawky"
            </p>
            <p className="text-xl text-primary-text font-medium">
              a dedicated Data Analyst with a passion for transforming complex,
              raw data into actionable strategic insights that drive business
              growth.
            </p>
            <p className="text-xl text-primary-text font-medium">
              For me, data analysis is more than just crunching numbers; it’s
              about understanding business logic, transforming messy datasets
              into clean models, and building high-end, interactive dashboards
              that balance depth of data with exceptional visual hierarchy and
              UI/UX principles.
            </p>
            <p className="text-xl text-primary-text font-medium">
              With solid expertise in advanced data modeling, dynamic DAX
              metrics, SQL querying, and industry-leading tools like Power BI
              and Excel, I specialize in uncovering hidden patterns and tracking
              crucial KPIs. I also actively integrate modern AI automation into
              my workflows to maximize efficiency and deliver sharp, precise
              results.
            </p>
            <p className="text-xl text-primary-text font-medium">
              I believe that data is only as good as the decisions it enables.
              Whether it’s optimizing retail sales performance or building
              custom reporting ecosystems, I am always ready for the next data
              challenge to help organizations see the story behind their numbers
              and unlock their true potential."
            </p>
          </div>
        </div>

        <div className="w-full lg:w-2/3 flex justify-center xl:justify-end">
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
