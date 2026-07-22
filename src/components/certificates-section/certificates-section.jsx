// import Container from "../container";
import SectionTitle from "../section-title";
export default function CertificatesSection() {
  return (
    <div
      id="aboutsection"
      className=" flex flex-col w-full h-fit xl:h-screen gap-14"
    >
      <SectionTitle title="Certificates" />
      <div className="flex w-full justify-between items-center flex-col lg:flex-row gap-4">
        <div className="flex flex-col gap-7 w-full ">
          <div className=" flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex text-xl gap-2">
                <span className="text-primary ">#</span>
                <p className="text-xl text-foreground-custom font-medium">
                  Data Analysis Diploma
                </p>
              </div>
              <p className="text-xl text-primary-text font-medium">
                EraaSoft for Software Development (2025)
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex text-xl gap-2">
                <span className="text-primary ">#</span>
                <p className="text-xl text-foreground-custom font-medium">
                  Frontend Web Developer Diploma
                </p>
              </div>
              <p className="text-xl text-primary-text font-medium">
                IT Share (2024)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
