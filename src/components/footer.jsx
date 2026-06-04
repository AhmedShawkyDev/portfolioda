import Link from "next/link";
import Container from "./container";
import { social } from "./header/side-social";

export default function Footer() {
  return (
    <footer>
      <div className="w-full h-px bg-primary-text"></div>
      <Container className="  flex-col  gap-12 py-2 lg:py-8 lg:flex-row mt-10!">
        <div className="flex flex-col lg:flex-row justify-between w-full gap-4">
          <div className=" flex flex-col  items-center lg:items-start">
            <p className="text-lg font-medium text-foreground">Ahmed Shawky</p>
            <p className="text-lg font-medium text-foreground">
              Software Developer
            </p>
          </div>

          <div className="flex justify-center items-center">
            <p className="text-lg text-primary-text">
              copy
              <Link href={`/`} className="text-primary">
                {" "}
                me
              </Link>
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="text-lg font-medium text-foreground">"social"</p>
            <ul className=" flex">
              {social.map((icons) => {
                return (
                  <li key={icons.id} className="hover:text-primary w-8 h-8 ">
                    <a
                      href={icons.path}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {icons.icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
