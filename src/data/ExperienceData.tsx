"use client";
import { useRef } from "react";

export interface TimelineEntry {
  dateRange: string;
  companyName: string;
  position: string;
  description: string;
  tools: string[];
}

export function ExperienceData() {
  const data = [
    {
      dateRange: "↗ Nov 2025 - Present",
      companyName: "LG Sinar Mas",
      position: "- IT Systems Engineer",
      description: "Supporting and monitoring smart factory systems for EV battery production across global manufacturing sites. My work involves analyzing system and machine data to detect issues, performing root-cause analysis, and collaborating with operations teams to translate production problems into technical solutions that improve system reliability and operational efficiency.",
      tools: [
        "System Monitoring",
        "Data Analysis",
        "Root Cause Analysis",
        "SQL",
        "Manufacturing Systems",
        "Technical Troubleshooting"
      ]
    },
    {
      dateRange: "↗ Oct 2024 - Present",
      companyName: "Invencio Creative Tech",
      position: "- Business Analyst / Software Developer",
      description: "Working remotely to translate business goals into technical requirements and actionable development tasks. I collaborate closely with developers and stakeholders to iterate product features based on user feedback and usage patterns while supporting delivery across SDLC phases to ensure alignment between business, UX, and engineering.",
      tools: [
        "React",
        "JavaScript",
        "TypeScript",
        "Flutter",
        "REST API",
        "Jira",
        "Figma",
        "Agile"
      ]
    },
    {
      dateRange: "↗ Aug 2025 - Oct 2025",
      companyName: "Asuransi Astra Buana",
      position: "- IT Business Alignment",
      description: "Bridged communication between business stakeholders and IT teams to clarify requirements, assess system impacts, and support project execution. Contributed to projects using Agile and Waterfall methodologies while producing documentation, requirement analysis, and progress reports for internal stakeholders and management.",
      tools: [
        "Requirement Analysis",
        "Stakeholder Communication",
        "Agile",
        "Waterfall",
        "Jira",
        "Documentation"
      ]
    },
    {
      dateRange: "↗ Oct 2023 - Oct 2024",
      companyName: "Kamar Pelajar",
      position: "- Android Developer",      
      description: "A startup offering accommodation services through Indonesian students abroad, I worked as an Android Application Developer. My primary responsibilities included developing and maintaining mobile applications using Flutter, as well as integrating them with backend services built on Laravel. The work involved ensuring smooth functionality, implementing features, and maintaining the app to support the platform's operations.",
      tools: [
        "Flutter",
        "Dart",
        "Laravel",
        "REST API"
      ]
    },
  ];
  return (
    <div className="w-full min-h-full">
      <Timeline data={data} />
    </div>
  );
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="w-full font-sans"
      ref={containerRef}
    >
      <div ref={ref} className="relative mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start pt-8 md:pt-16 gap-2 md:gap-5"
          >
            <div className="sticky flex flex-col md:flex-row font-['Plus_Jakarta_Sans'] mb-2 md:mb-4 pl-3 md:pl-0 z-40 items-start md:items-center top-20 self-start max-w-xs lg:max-w-sm md:w-full">
              <h3 className="hidden md:block text-xl md:text-2xl lg:text-3xl font-bold text-[#88ccb4]">
                {item.dateRange}
              </h3>
            </div>

            <div className="relative pl-4 md:pl-6 pr-2 md:pr-4 font-['Plus_Jakarta_Sans'] w-full">
              <h3 className="pb-1 md:hidden block text-base text-left font-bold text-[#88ccb4]">
                {item.dateRange}
              </h3>
              <div>
                <h1 className="mb-3 font-bold text-white text-xl md:text-2xl xl:text-2xl flex items-center gap-1">
                  {item.companyName}
                  <span className="text-base text-[#88ccb4] font-normal italic">{item.position}</span>
                </h1>
                <p className="mb-4 text-sm font-medium text-gray-300 md:text-lg text-justify">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-3 mt-3">
                  {item.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-3 py-1 text-sm md:text-base rounded-full bg-[#88ccb4]/20 text-gray-300 border border-gray-300
                               transition-all duration-300 hover:bg-[#88ccb4]/20 hover:border-[#88ccb4] hover:-translate-y-0.5"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
