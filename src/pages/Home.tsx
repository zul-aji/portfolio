import Dither from "../blocks/Backgrounds/Dither/Dither";
import { useState, useRef } from "react";
import ScrollVelocity from "../blocks/TextAnimations/ScrollVelocity/ScrollVelocity";

function Home () {
    const [active, setActive] = useState(0);
    const navItems = [
        'About',
        'Education',
        'Work',
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
            <div className="fixed top-0 left-0 w-full z-20 flex justify-center pt-10 pointer-events-none">
                <nav className="flex flex-row gap-8 px-8 pointer-events-auto">
                    {navItems.map((item, idx) => (
                        <button
                            key={item}
                            onClick={() => handleNavClick(idx)}
                            className={`text-lg font-800 transition-colors focus:outline-none bg-transparent border-none shadow-none p-0 m-0 ${
                                active === idx
                                    ? 'text-white' 
                                    : 'text-white'
                            } hover:text-[#88ccb4] flex items-center`}
                            style={{ background: 'none', border: 'none', boxShadow: 'none' }}
                        >
                            {active === idx && <span className="text-white mr-2">•</span>}
                            {item}
                        </button>
                    ))}
                </nav>
            </div>
            {/* Bottom section, fixed */}
            <div className="fixed bottom-0 left-0 w-full z-20 flex justify-center pb-8 pointer-events-none">
                <div className="flex gap-8 px-8 py-3 pointer-events-auto">
                    {bottomLinks.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors text-base"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
            {/* Scrollable content area */}
            <div
                ref={scrollContainerRef}
                className="relative z-10 flex flex-col justify-start min-h-screen h-screen overflow-y-auto scroll-smooth pb-24"
            >
                {/* ScrollVelocity section - full page */}
                <div className="content-center min-h-screen h-screen">
                    <ScrollVelocity
                        texts={['A Portofolio', 'by Zulfiqar']}
                        velocity={60}
                        className="custom-scroll-text"
                    />
                </div>
                {/* About section - full page */}
                <div
                    ref={aboutRef}
                    className="flex flex-col items-center justify-center w-screen min-h-screen h-screen px-8"
                >
                    <h2 className="text-3xl font-bold text-white mb-6">About</h2>
                    <p className="text-lg text-gray-200 max-w-2xl text-center">
                        Hi, I’m Zulfiqar R. Aji, a passionate software developer with experience in building web and mobile applications. I enjoy solving problems, learning new technologies, and collaborating on impactful projects. Welcome to my portfolio!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;