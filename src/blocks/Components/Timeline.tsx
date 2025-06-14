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
