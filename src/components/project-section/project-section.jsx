import Container from "../container";
import Card from "../card";
import SectionTitle from "../section-title";

import hrdash from "@/assets/hr_dashboard.png";
export default function ProjectSection() {
  const projects = [
    {
      id: 1,
      title: "HR Analytics",
      // videoEmbedUrl:
      //   "https://www.loom.com/embed/c64ee2e4444a4b56a189896adcc46b8e",
      image: hrdash,
      description:
        "Transforming raw retail data into strategic insights and interactive dashboards to track Key Performance Indicators (KPIs) and drive data-driven decision-making",
      tools: "Excel, power query",
      github: "https://github.com/AhmedShawkyDev/HR-dashboradnew",
      linkedin:
        "https://www.linkedin.com/embed/feed/update/urn:li:share:7454591972608139264?collapsed=1",
    },
  ];

  return (
    <Container
      animation="fade-up"
      id="projectsection"
      className=" w-full h-fit xl:h-screen gap-14 lg:mt-0!  "
    >
      <div className="flex flex-col lg:flex-row justify-between! items-center gap-6 w-full ">
        <SectionTitle title="Projects" />
      </div>

      <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return (
            <Card
              key={project.id}
              title={project.title}
              videoEmbedUrl={project.videoEmbedUrl}
              image={project.image}
              description={project.description}
              tools={project.tools}
              github={project.github}
              linkedin={project.linkedin}
            />
          );
        })}
      </div>
    </Container>
  );
}
