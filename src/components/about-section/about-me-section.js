import Link from "next/link";

import Image from "next/image";
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri";
import SectionTitle from "../section-title";
export default function AboutMeSection() {
  return (
    <div id="about" className=" flex flex-col w-full h-fit xl:h-screen gap-14">
      <SectionTitle title="about" />
      <div className="flex w-full justify-between items-center flex-col lg:flex-row gap-4">
        <div className="flex flex-col gap-7 w-full xl:w-1/2">
          <div className=" flex flex-col gap-4">
            <p className="text-xl text-foreground font-medium">"hello"</p>
            <p className="text-xl text-primary-text font-medium">"study"</p>
            <p className="text-xl text-primary-text font-medium">"trans"</p>
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
