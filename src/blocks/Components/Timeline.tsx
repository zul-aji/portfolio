"use client";
import React, { useRef } from "react";

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

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-30 md:gap-5"
          >
            <div className="sticky flex flex-col md:flex-row font-['Plus_Jakarta_Sans'] mb-4 pl-3 md:pl-0 z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <h3 className="hidden md:block pt-1 text-xl md:pl-2 md:text-3xl font-bold text-[#88ccb4] ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-10 pr-4 font-['Plus_Jakarta_Sans'] md:pt-2 md:pl-4 w-full">
              <h3 className="pb-1 md:hidden block text-base text-left font-semibold text-[#88ccb4]">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
