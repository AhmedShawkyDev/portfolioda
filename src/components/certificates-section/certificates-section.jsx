// import Container from "../container";
import SectionTitle from "../section-title";
export default function CertificatesSection() {
  return (
    <div
      id="certificatesection"
      className=" flex flex-col w-full   h-fit xl:h-50vh   gap-14"
    >
      <SectionTitle title="Certificates" motion="fade-down" />
      <div
        data-aos="fade-up"
        className="flex w-full justify-between items-center flex-col lg:flex-row gap-4"
      >
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
