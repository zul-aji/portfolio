import { useState, useRef } from "react";
import Dither from "../blocks/Backgrounds/Dither/Dither";
import ScrollVelocity from "../blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import { TimelineData } from "./TimelineData";

function Home () {
    const [active, setActive] = useState(0);
    const navItems = [
        'About',
        'Experience',
        'Projects'
    ];
    const bottomLinks = [
        { label: 'Email↗', href: 'mailto:zulfiqar.aji@gmail.com' },
        { label: 'LinkedIn↗', href: 'https://www.linkedin.com/in/zul-aji/' },
        { label: 'GitHub↗', href: 'https://github.com/zul-aji' }
    ];

    // Refs for smooth scroll
    const aboutRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Handle nav click for About
    const handleNavClick = (idx: number) => {
        setActive(idx);
        if (idx === 0 && aboutRef.current && scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                top: aboutRef.current.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="relative min-h-screen min-w-screen overflow-hidden">
            {/* Dither background - full screen, fixed */}
            <div className="fixed inset-0 w-full h-full z-0">
                <Dither
                    waveColor={[0.5, 0.8, 0.7]}
                    disableAnimation={false}
                    enableMouseInteraction={false}
                    mouseRadius={0.2}
                    colorNum={8}
                    waveAmplitude={0.04}
                    waveFrequency={0.5}
                    waveSpeed={0.06}
                />
            </div>

            {/* Top nav section, fixed */}
            <div className="fixed top-0 left-0 w-full z-20 flex justify-center pt-6 md:pt-10 pointer-events-none">
                <nav className="flex flex-row gap-4 md:gap-10 px-4 md:px-8 pointer-events-auto">
                    {navItems.map((item, idx) => (
                        <button
                            key={item}
                            onClick={() => handleNavClick(idx)}
                            className={`text-sm md:text-lg lg:text-2xl transition-colors font-medium focus:outline-none bg-transparent border-none shadow-none p-0 m-0 text-white hover:text-[#88ccb4] flex items-center`}
                            style={{ background: 'none', border: 'none', boxShadow: 'none' }}
                        >
                            <span
                                className={`mr-2 transition-opacity duration-200`}
                                style={{ opacity: active === idx ? 1 : 0 }}
                            >
                                •
                            </span>
                            {item}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Bottom section, fixed */}
            <div className="fixed bottom-0 left-0 w-full z-20 flex justify-center pb-4 md:pb-8 pointer-events-none">
                <div className="flex gap-4 md:gap-8 px-4 md:px-8 py-2 md:py-3 pointer-events-auto">
                    {bottomLinks.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-[#88ccb4] transition-colors text-sm md:text-base lg:text-xl group"
                        >
                            {item.label.slice(0, -1)}
                            <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                                ↗
                            </span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Scrollable content area */}
            <div 
                ref={scrollContainerRef} className="relative z-10 flex flex-col justify-start min-h-screen h-screen overflow-y-auto overflow-x-hidden scroll-smooth pb-24"
            >
             
            {/* ScrollVelocity section - full page */}
                <div className="flex items-center justify-center text-white min-h-screen h-screen shrink-0">
                    <ScrollVelocity
                        texts={['A Portofolio', 'by Zulfiqar']}
                        velocity={80}
                        className="custom-scroll-text"
                    />
                </div>

                {/* About section - full page */}
                <div
                    ref={aboutRef}
                    className="flex flex-col items-center justify-center min-h-screen h-screen shrink-0 px-4 md:px-8"
                >                    
                    <p className="text-base md:text-2xl text-gray-200 font-medium md:font-semibold w-full max-w-[min(83.333%,_60ch)] text-center">
                        A versatile software engineer with expertise in mobile application development using Flutter and Kotlin for native Android using Dart and Jetpack Compose. I am also proficient in front-end development, specializing in React with JavaScript and TypeScript for creating dynamic web applications, as well as  back-end technologies like ASP.Net and Node.js. I am seeking new challenges that offer opportunities for professional growth and allow me to leverage my diverse skill set to shape my future career paths.
                    </p>
                </div>

                <div>
                    <TimelineData/>
                </div>

            </div>
        </div>
    );
}

export default Home;