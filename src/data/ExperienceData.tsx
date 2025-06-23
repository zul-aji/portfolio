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
      dateRange: "↗ Oct 2024 - Present",
      companyName: "Invencio Creative Tech",
      position: "- Software Developer",     
      description: "A freelance developer, collaborating with university peers to build custom websites and mobile applications for clients. My projects involve developing Android applications using Kotlin and Flutter, as well as creating web solutions with various JS Frameworks. This work focuses on implementing functional requirements, integrating APIs, and ensuring applications perform reliably across different platforms.",
      tools: [
        "React",
        "Javascript",
        "TypeScript",
        "Flutter",
        "Dart",
        "Kotlin",
        "Jetpack Compose",
        "REST API",
      ]
    },
    {
      dateRange: "↗ Oct 2023 - Oct 2024",
      companyName: "Kamar Pelajar",
      position: "- Android Application Developer",      
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
