"use client";
import React, { useRef } from "react";

export function ExperienceData() {
  const data = [
    {
      title: "Oct 2024 - Present",
      content: (
        <div>
          <h1 className="mb-3 font-bold text-white text-xl md:text-2xl xl:text-2xl flex items-center gap-1">
            Invencio Creative Tech
            <span className="text-base font-normal italic">- Software Developer</span>
          </h1>
          <p className="mb-4 text-sm font-semibold text-gray-300 md:text-xl text-justify">
            A freelance developer, collaborating with university peers to build custom websites and mobile applications for clients. My projects involve developing Android applications using Kotlin and Flutter, as well as creating web solutions with various JS Frameworks. This work focuses on implementing functional requirements, integrating APIs, and ensuring applications perform reliably across different platforms.
          </p>
        </div>
      ),
    },
    {
      title: "Oct 2023 - Oct 2024",
      content: (
        <div>
          <h1 className="mb-3 font-bold text-white text-xl md:text-2xl xl:text-2xl flex items-center gap-1">
            Kamar Pelajar
            <span className="text-base font-normal italic">- Android Application Developer</span>
          </h1>
            <p className="mb-4 text-sm font-semibold text-gray-300 md:text-xl text-justify">
            A startup offering accommodation services through Indonesian students abroad, I worked as an Android Application Developer. My primary responsibilities included developing and maintaining mobile applications using Flutter, as well as integrating them with backend services built on Laravel. The work involved ensuring smooth functionality, implementing features, and maintaining the app to support the platform's operations.
            </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full min-h-full">
      <Timeline data={data} />
    </div>
  );
}

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
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
                {item.title}
              </h3>
            </div>

            <div className="relative pl-4 md:pl-6 pr-2 md:pr-4 font-['Plus_Jakarta_Sans'] w-full">
              <h3 className="pb-1 md:hidden block text-base text-left font-semibold text-[#88ccb4]">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
