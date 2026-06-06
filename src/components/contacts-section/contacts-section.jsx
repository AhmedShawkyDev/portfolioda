import { MdEmail } from "react-icons/md";
import Container from "../container";
import SectionTitle from "../section-title";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactsSection() {
  return (
    <Container
      id="contactsection"
      className="w-full h-fit xl:h-[50vh] gap-14 mb-20 xl:mb-0 lg:mt-0"
    >
      <SectionTitle title="contacts" />
      <div className="flex flex-col lg:flex-row gap-4 justify-between lg:gap-7">
        <p className=" text-primary-text font-medium text-lg w-full lg:w-1/2">
          Ready to unlock the power of your data? I’m currently available for
          full-time roles and freelance opportunities. If you are looking for a
          Data Analyst who can bridge the gap between business strategy and data
          logic, let's get in touch!
        </p>
        <div className="border border-grey p-4 flex flex-col justify-end gap-4 w-full lg:w-fit">
          <p className="">Message me on --</p>
          <a
            href="https://wa.me/966561417008"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-primary"
          >
            <FaWhatsapp className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=ahshawky7@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-primary"
          >
            <MdEmail className="w-5 h-5" />
            Mail
          </a>
        </div>
      </div>
    </Container>
  );
}
