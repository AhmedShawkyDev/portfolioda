import Container from "../container";
import Card from "../card";
import SectionTitle from "../section-title";

// import hrdash from "@/assets/hr_dashboard.png";
import { projects } from "./project-arr";
export default function ProjectSection() {
  // const projects = [
  //   {
  //     id: 1,
  //     title: "HR Analytics",
  //     image: hrdash,
  //     description:
  //       "Transforming raw retail data into strategic insights and interactive dashboards to track Key Performance Indicators (KPIs) and drive data-driven decision-making",
  //     tools: "Excel, Power Query",
  //     github: "https://github.com/AhmedShawkyDev/HR-dashboradnew",
  //     linkedin:
  //       "https://www.linkedin.com/embed/feed/update/urn:li:share:7454591972608139264?collapsed=1",
  //   },
  //   {
  //     id: 2,
  //     title: "Velora - bikes",
  //     videoEmbedUrl:
  //       "https://www.loom.com/embed/ffae29b60ecf499cb553ab451aa7101e",
  //     description:
  //       "I developed an interactive Sales & Profit Dashboard using Excel and Power Query to analyze business performance and provide data-driven insights that support better decision-making.",
  //     tools: "Excel, Power Query",
  //     github: "https://github.com/AhmedShawkyDev/velora_bikes",
  //     linkedin:
  //       "https://www.linkedin.com/posts/ahmed-shawky-a94003335_dataanalysis-excel-powerquery-activity-7455452237922770944-E7kh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFQvKlABXf6o1TNcD5zJb-h8v3lZQ7U98I4",
  //   },
  //   {
  //     id: 3,
  //     title: "Qimam Al-Saudia ",
  //     videoEmbedUrl:
  //       "https://www.loom.com/embed/d5c6a0f388f74d6a83c381901031a048",
  //     description:
  //       "Turning Raw Data into Executive Decisions Qimam Al-Saudia Dashboard A dashboard is only as good as the decisions it drives. ",
  //     tools: "Excel, Power Query",
  //     github: "https://github.com/AhmedShawkyDev/qimam_dash",
  //     linkedin:
  //       "https://www.linkedin.com/posts/ahmed-shawky-a94003335_dataanalytics-datavisualization-dashboarddesign-activity-7456807092687925248-OSqY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFQvKlABXf6o1TNcD5zJb-h8v3lZQ7U98I4",
  //   },
  //   {
  //     id: 4,
  //     title: "TechGear Sales",
  //     videoEmbedUrl:
  //       "https://www.loom.com/embed/ed0a4de889ce4abcbf77e8883aea2999",
  //     description:
  //       "Transforming TechGear’s Sales Data into Actionable Business Intelligence with Excel and Power Query",
  //     tools: "Excel, Power Query",
  //     github: "https://github.com/AhmedShawkyDev/techgear",
  //     linkedin:
  //       "https://www.linkedin.com/posts/ahmed-shawky-a94003335_dataanalytics-businessintelligence-exceldashboard-activity-7460725782424981504-wLlr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFQvKlABXf6o1TNcD5zJb-h8v3lZQ7U98I4",
  //   },

  //   {
  //     id: 5,
  //     title: "Qimam Al-Saudia Power",
  //     videoEmbedUrl:
  //       "https://www.loom.com/embed/024d5f3ee03e4c86aa856ad76d136815",
  //     description:
  //       "Over the past few days, I have been working on designing and developing an interactive, end-to-end Dark Mode dashboard for Qimam el Saudia. The core objective was to transform raw, silent data into actionable strategic insights that support executive decision-making in seconds.",
  //     tools: "Power Query , Power BI , DAX",
  //     github: "https://github.com/AhmedShawkyDev/qimam_power_dash",

  //     linkedin:
  //       "https://www.linkedin.com/posts/ahmed-shawky-a94003335_powerbi-dataanalysis-datavisualization-activity-7469862161683673088-g5UA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFQvKlABXf6o1TNcD5zJb-h8v3lZQ7U98I4",
  //   },
  //   {
  //     id: 6,
  //     title: "Uber",
  //     videoEmbedUrl:
  //       "https://www.loom.com/embed/083470a087194fcfa203a7192dc00f05",
  //     description:
  //       "As a Data Analyst, my goal is never just to build a visually appealing dashboard; it’s about uncovering the stories hidden within raw numbers to drive strategic business decisions.",
  //     tools: "Power Query , Power BI , DAX , Parameters",
  //     github: "https://github.com/AhmedShawkyDev/uber_dashboard",

  //     linkedin:
  //       "https://www.linkedin.com/posts/ahmed-shawky-a94003335_dataanalytics-powerbi-businessintelligence-activity-7472536092668477440-pVEI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFQvKlABXf6o1TNcD5zJb-h8v3lZQ7U98I4",
  //   },
  //   {
  //     id: 7,
  //     title: "Sales Dashboard",
  //     videoEmbedUrl:
  //       "https://www.loom.com/embed/18b0233602414962bc6bfeb0c2de5516",

  //     description:
  //       "For this project, I focused on building a clean, premium, and highly intuitive layout using a minimalist color palette, making it easier for stakeholders to scan and uncover critical business insights at a glance.",
  //     tools: "Power Query , Power BI , DAX ",
  //     github: "https://github.com/AhmedShawkyDev/sales_dashboard",

  //     linkedin:
  //       "https://www.linkedin.com/posts/ahmed-shawky-a94003335_dataanalysis-powerbi-businessintelligence-activity-7473993075007250432-Q0MQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFQvKlABXf6o1TNcD5zJb-h8v3lZQ7U98I4",
  //   },
  //   {
  //     id: 8,
  //     title: "CINE-DATA STUDIO",
  //     videoEmbedUrl:
  //       "https://www.loom.com/embed/994de269294e464bb4f7ff808f9a2535",

  //     description:
  //       "I’m thrilled to share my latest project: the CINE-DATA STUDIO dashboard, a premium analytical tool designed to uncover deep financial performance trends in the film industry.",
  //     tools: "Power Query , Power BI , DAX , Time Intelligence",
  //     github: "https://github.com/AhmedShawkyDev/cine_data_dashboard",

  //     linkedin:
  //       "https://www.linkedin.com/posts/ahmed-shawky-a94003335_powerbi-dataanalysis-timeintelligence-activity-7475065344970190848-SBOi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFQvKlABXf6o1TNcD5zJb-h8v3lZQ7U98I4",
  //   },
  //   {
  //     id: 9,
  //     title: "Electro-Shop",
  //     videoEmbedUrl:
  //       "https://www.loom.com/embed/c64ee2e4444a4b56a189896adcc46b8e",

  //     description:
  //       "As a Data Analyst, my goal is always to transform raw transactional data into actionable business intelligence. In this project, I designed an interactive dashboard focused on key performance indicators (KPIs), temporal trends, and regional sales distribution to uncover high-margin growth opportunities.",
  //     tools: "Power Query , Power BI , DAX , Time Intelligence",
  //     github: "https://github.com/AhmedShawkyDev/electro_shop",

  //     linkedin:
  //       "https://www.linkedin.com/posts/ahmed-shawky-a94003335_dataanalytics-powerbi-businessintelligence-activity-7477602030556004352-FVDT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFQvKlABXf6o1TNcD5zJb-h8v3lZQ7U98I4",
  //   },
  //   {
  //     id: 10,
  //     title: "New Sales Dashboard",
  //     videoEmbedUrl:
  //       "https://www.loom.com/embed/632ec756babc4178be19ec1321f5e812",

  //     description:
  //       "The goal wasn't just to display numbers, but to build an integrated interactive tool (Data Product) that helps decision-makers read their data in the clearest and most accurate way.",
  //     tools:
  //       "Power Query , Power BI , DAX , Time Intelligence , Dark & Light Mode",
  //     github: "https://github.com/AhmedShawkyDev/new_sales_dash",

  //     linkedin:
  //       "https://www.linkedin.com/posts/ahmed-shawky-a94003335_dataanalysis-powerbi-datavisualization-activity-7482675420824428545-evlm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFQvKlABXf6o1TNcD5zJb-h8v3lZQ7U98I4",
  //   },
  // ];

  return (
    <Container
      animation="fade-up"
      id="projectsection"
      className=" w-full h-fit  gap-14 lg:mt-0!  "
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
