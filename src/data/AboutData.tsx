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
                    containerHeight="50hv"
                    containerWidth = "18vw"
                    imageHeight = "60vh"
                    imageWidth = "38vh"
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
                    A Software Engineer who loves building seamless mobile experiences with{' '}
                    <a
                        href="https://flutter.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white hover:text-[#88ccb4] transition-colors"
                    >
                        Flutter
                    </a>{' '}
                    and{' '}
                    <a
                        href="https://kotlinlang.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white hover:text-[#88ccb4] transition-colors"
                    >
                        Kotlin
                    </a>{' '}
                    for native Android utilizing{' '}
                    <a
                        href="https://dart.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white hover:text-[#88ccb4] transition-colors"
                    >
                        Dart
                    </a>{' '}
                    and{' '}
                    <a
                        href="https://developer.android.com/jetpack?gad_source=1&gad_campaignid=21831783573&gbraid=0AAAAAC-IOZkjDGHRZI4do_7MMwXn5VIFw&gclid=Cj0KCQjwu7TCBhCYARIsAM_S3NhGn9LIYE9hpPDY2WoYz-5mS1enKAXMObNwVt9tSHR_wZRqiHbZ2vsaAjDUEALw_wcB&gclsrc=aw.ds"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white hover:text-[#88ccb4] transition-colors"
                    >
                        Jetpack Compose
                    </a>
                    , while also crafting dynamic web apps with the{' '}
                    <a
                        href="https://react.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white hover:text-[#88ccb4] transition-colors"
                    >
                        React
                    </a>{' '} 
                    framework, along with{' '}
                    <a
                        href="https://web.dev/javascript"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white hover:text-[#88ccb4] transition-colors"
                    >
                        JavaScript
                    </a>{' '} 
                    and{' '}
                    <a
                        href="https://www.typescriptlang.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white hover:text-[#88ccb4] transition-colors"
                    >
                        TypeScript
                    </a>{' '} 
                    . On the backend, I work with{' '} 
                    <a
                        href="https://dotnet.microsoft.com/en-us/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white hover:text-[#88ccb4] transition-colors"
                    >
                        .Net
                    </a>{' '}  
                    and{' '}
                    <a
                        href="https://nodejs.org/en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white hover:text-[#88ccb4] transition-colors"
                    >
                        Node.js
                    </a>{' '}
                    to tie everything together into robust solutions.
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
                                const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                                return diffDays;
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
                    <span className="mx-1">Let's get in touch!</span>
                    <span className="transition-all duration-500 group-hover:-rotate-90">◂</span>
                </button>
            </div>
        </div>
    );
}

export default AboutData;