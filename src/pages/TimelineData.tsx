import { Timeline } from "@/blocks/Components/Timeline";

export function TimelineData() {
  const data = [
    {
      title: "Oct 2024 - Present",
      content: (
        <div>
          <h1 className="mb-3 font-bold text-white text-xl md:text-2xl xl:text-2xl flex items-center gap-1">
            Invencio Creative Tech
            <span className="text-base font-normal italic">- Software Developer</span>
          </h1>
          <p className="mb-4 text-sm font-semibold text-gray-300 md:text-xl">
            Collaborated with cross-functional teams to deliver custom on-demand software solutions for diverse industries. Developed responsive web applications using JavaScript and CSS frameworks to optimize UI/UX across desktop and mobile platforms. Built Android applications with Flutter and Kotlin, implementing modern design principles and performance optimization techniques to enhance user experience.
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
          <p className="mb-4 text-sm font-semibold text-gray-300 md:text-xl">
            Built/maintained Flutter Android apps with Laravel backend integration for seamless data flow/auth. Partnered with 15-member cross-functional teams to deliver 7+ features, boosting engagement. Enhanced performance via 30+ code reviews & debugging—achieved 30% better stability and 20% faster load times.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
