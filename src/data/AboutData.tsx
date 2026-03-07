import TiltedCard from "@/blocks/Components/TiltedCard";
import propic from "@/assets/images/about-propic.webp";

interface AboutDataProps {
    onContactClick?: () => void;
}

function AboutData({ onContactClick }: AboutDataProps) {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center-safe md:items-start w-full gap-2 md:gap-12">
            {/* TiltedCard on the left (or top on mobile) */}
            <div className="flex justify-center px-6 mb-6 md:mb-0 md:block md:w-auto">
                <TiltedCard 
                    imageSrc={propic}
                    containerHeight="48hv"
                    containerWidth = "16vw"
                    imageHeight = "62vh"
                    imageWidth = "40vh"
                    rotateAmplitude={15}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={false}
                />
            </div>
            {/* Text and button stack */}
            <div className="flex flex-col items-center md:items-start w-full max-w-[min(85%,_60ch)]">
                
                <p className="text-sm sm:text-lg md:text-2xl text-gray-300 font-medium w-full text-justify">    
                    A tech professional with a software engineering background focused on turning complex ideas into practical digital solutions. I work at the intersection of business and technology—understanding problems, defining requirements, and translating them into systems developers can build. 
                </p>
	            <p className="mt-2 md:mt-5 text-sm sm:text-lg md:text-2xl text-gray-300 font-medium w-full text-justify">
		            With experience in{' '}
                    <a
                        href="https://flutter.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white hover:text-[#88ccb4] transition-colors"
                    >
                        Flutter
                    </a>,{' '}
                    <a
                        href="https://kotlinlang.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white hover:text-[#88ccb4] transition-colors"
                    >
                        Kotlin
                    </a>, while also building web applications using{' '}
                    <a
                        href="https://react.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white hover:text-[#88ccb4] transition-colors"
                    >
                        React
                    </a>,{' '}
                    <a
                        href="https://web.dev/javascript"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white hover:text-[#88ccb4] transition-colors"
                    >
                        JavaScript
                    </a>, and{' '}
                    <a
                        href="https://www.typescriptlang.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white hover:text-[#88ccb4] transition-colors"
                    >
                        TypeScript
                    </a>.  

                    I’m particularly interested in roles that bridge business goals and technical execution.
                </p>
                <p className="mt-2 md:mt-5 text-sm sm:text-lg md:text-2xl text-gray-300 font-medium w-full text-justify">
                    When I'm not architecting apps, you'll find me breaking a sweat at the gym, binge-reading/watching sci-fi and thrillers, Jamming poorly on my guitar, or Keeping my{' '}
                    <span
                        className="font-bold transition-all bg-gradient-to-r from-gray-300 via-gray-300 to-gray-300 bg-clip-text text-transparent hover:from-red-600 hover:via-orange-500 hover:to-yellow-400 cursor-pointer"
                    >
                        {
                            (() => {
                                const startDate = new Date(2023, 7, 18);
                                const today = new Date();
                                const diffTime = today.getTime() - startDate.getTime();
                                return Math.floor(diffTime / (1000 * 60 * 60 * 24));
                            })()
                        }
                        {' '}day
                    </span>
                    {' '}of Duolingo streak alive like it's my life's work.
                </p>
                <button
                    onClick={onContactClick}
                    className="mt-5 md:mt-8 px-3 md:px-6 py-2 rounded-full border-3 border-white hover:border-[#6bb39e] text-white hover:text-black font-semibold text-sm sm:text-lg hover:bg-[#6bb39e] transition-colors group flex items-center gap-2"
                >
                    <span className="transition-all duration-500 hover:-translate-y-0.5 group-hover:rotate-90">▸</span>
                    <span className="mx-1">Get in touch!</span>
                    <span className="transition-all duration-500 group-hover:-rotate-90">◂</span>
                </button>
            </div>
        </div>
    );
}

export default AboutData;