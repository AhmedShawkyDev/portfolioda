import SectionTitle from "../section-title";

export default function SkillsSection() {
  const skill = [
    {
      id: 1,
      title: "Data Analysis",
      description:
        "Data Cleaning, Data Transformation, Exploratory Data Analysis (EDA)",
    },
    {
      id: 2,
      title: "Excel",
      description:
        "Pivot Tables, Power Query, Advanced Formulas (VLOOKUP, XLOOKUP, IF)",
    },
    {
      id: 3,
      title: "Power BI",
      description: "Data Modeling, DAX Measures, Interactive Dashboards",
    },
    {
      id: 4,
      title: "DAX",
      description: "Calculated Measures, KPIs, Time Intelligence",
    },
    {
      id: 5,
      title: "SQL",
      description: "SELECT, WHERE, JOIN, GROUP BY, Aggregations",
    },
    {
      id: 6,
      title: "Python",
      description: "Pandas, NumPy , Data Manipulation",
    },
    {
      id: 7,
      title: "Data Visualization",
      description: "Charts, KPIs, Dashboards, Reporting",
    },
  ];

  return (
    <div
      id="skillsection"
      className="flex flex-col w-full gap-8  h-fit xl:h-screen"
    >
      <SectionTitle title="Skills" motion="fade-down" />
      <div className="flex flex-row justify-between items-center gap-6 w-full"></div>

      <div
        data-aos="fade-up"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {skill.map((item) => (
          /* أضفنا key هنا للـ div الخارجي */
          <div
            key={item.id}
            className="border border-primary-text h-full w-full  "
          >
            {/* تم تعديل name إلى title */}
            <p className="p-2 text-xl text-foreground font-medium ">
              {item.title}
            </p>
            <div className="w-full h-px bg-grey "></div>

            {/* تم استبدال الـ .map الخطأ بعرض الـ description مباشرة أو تقسيمها لو حابب */}
            <p className="p-2 text-xl text-primary-text font-medium">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
