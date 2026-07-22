import Image from "next/image";
import Container from "../container";
import Link from "next/link";

import { FaCloudDownloadAlt } from "react-icons/fa";
import MotionComp from "@/components/motion-component";

export default function HeroSection() {
  return (
    <Container className="lg:flex-row gap-5 justify-between w-full h-fit xl:h-screen  mt-10! lg:mt-[-10]!">
      <div className="flex flex-col gap-6 lg:w-2/3 w-full">
        <div data-aos="fade-right" className="flex flex-col gap-6">
          <div className="text-2xl xl:text-4xl text-foreground  flex flex-wrap gap-4 font-semibold flex-col">
            <div className="flex gap-2">
              <span className="">My Name is</span>
              <span className="text-primary"> Ahmed Shawky </span>
            </div>
            <div className="flex gap-2">
              <span className="">and I am</span>
              <span className="text-primary"> Data Analyst </span>
            </div>
          </div>
          <p className="text-xl text-primary-text font-medium lg:w-3/4 w-full">
            Behind every complex dataset is a story waiting to be told. <br />I
            transform messy data into clean, visual stories that uncover hidden
            opportunities because Data Analysis is bridging the gap between
            numbers and strategy through advanced analytics and dynamic
            dashboards.
          </p>
          <div className="flex gap-4">
            {/* <Link
              href={`/#contacts`}
              className="border px-4 py-2 border-primary w-fit hover:bg-primary text-foreground"
            >
              Contact Me
            </Link> */}
            <a
              className="border px-4 py-2 border-primary w-fit hover:bg-primary flex items-center gap-2 text-foreground"
              target="_blank"
              rel="noopener noreferrer"
              download={true}
              href="https://drive.google.com/file/d/1H4rWTUyw11YdJrdroVztb795hc0PRsif/view?usp=sharing"
            >
              Download Resume <FaCloudDownloadAlt />
            </a>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="w-full lg:w-1/3 flex justify-center xl:justify-end"
      >
        <Link href={`/`} className="">
          <Image
            src={`https://res.cloudinary.com/dn2fdxtad/image/upload/v1765281936/hero_i9seac.webp`}
            alt="Ahmed Shawky"
            width={400}
            height={400}
            priority
            fetchPriority="high"
          />
        </Link>
      </div>
    </Container>
  );
}
