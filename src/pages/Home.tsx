import { useState, useRef, useEffect } from "react";
import Dither from "../blocks/Backgrounds/Dither/Dither";
import ScrollVelocity from "../blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import { ExperienceData } from "../data/ExperienceData";
import { ProjectsContainer, projectsData } from "../data/ProjectsData";
import AboutData from "@/data/AboutData";

function Home () {
    const [active, setActive] = useState(0);
    const [currentSection, setCurrentSection] = useState<string | null>(null);
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

    // Refs for sections
    const aboutRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Setup intersection observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCurrentSection(entry.target.getAttribute('data-section'));
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        // Observe sections
        if (aboutRef.current) observer.observe(aboutRef.current);
        if (experienceRef.current) observer.observe(experienceRef.current);
        if (projectRef.current) observer.observe(projectRef.current);
        if (scrollContainerRef.current) observer.observe(scrollContainerRef.current);

        return () => observer.disconnect();
    }, []);

    const handleNavClick = (idx: number) => {
        setActive(idx);
        if (idx === 0 && aboutRef.current && scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                top: aboutRef.current.offsetTop,
                behavior: 'smooth',
            });
        } else if (idx === 1 && experienceRef.current && scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                top: experienceRef.current.offsetTop,
                behavior: 'smooth',
            });
        } else if (idx === 2 && projectRef.current && scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                top: projectRef.current.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="relative min-h-screen min-w-screen overflow-hidden">
            {/* Dither background */}
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

            {/* Top nav section */}
            <div className="fixed top-0 left-0 w-full z-20 flex justify-center pt-6 md:pt-10 pointer-events-none">
                <nav className="flex flex-row gap-4 md:gap-10 px-4 md:px-8 pointer-events-auto">
                    {navItems.map((item, idx) => (
                        <button
                            key={item}
                            onClick={() => handleNavClick(idx)}
                            className={`text-sm md:text-xl transition-colors font-medium focus:outline-none bg-transparent border-none shadow-none p-0 m-0 text-white hover:text-[#88ccb4] flex items-center`}
                            style={{ background: 'none', border: 'none', boxShadow: 'none' }}
                        >
                            <span
                                className="mr-2 transition-opacity duration-200"
                                style={{ 
                                    opacity: (idx === 0 && currentSection === 'about') || 
                                            (idx === 1 && currentSection === 'experience') ||
                                            (idx === 2 && currentSection === 'projects') ? 1 : 0 
                                }}
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
                            className="text-gray-300 hover:text-[#88ccb4] transition-colors text-sm md:text-base group"
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
                ref={scrollContainerRef} data-section="hero" className="relative z-10 flex flex-col justify-start min-h-screen h-screen overflow-y-auto overflow-x-hidden scroll-smooth pb-24"
            >
             
            {/* ScrollVelocity section - full page */}
                <div data-section="hero" className="flex items-center justify-center text-white min-h-screen h-screen shrink-0">
                    <ScrollVelocity
                        texts={['A Portofolio', 'by Zulfiqar']}
                        velocity={80}
                        className="custom-scroll-text"
                    />
                </div>

                {/* About section - full page */}
                <div
                    ref={aboutRef}
                    data-section="about"
                    className="flex flex-col items-center justify-center min-h-screen h-screen shrink-0 px-4 md:px-8"
                >                    
                    <AboutData/>
                </div>

                {/* Experience section - full page */}
                <div
                    ref={experienceRef}
                    className="flex flex-col items-center justify-start min-h-screen shrink-0 pt-14 pb-24"
                    data-section="experience"
                >
                    <div className="w-full max-w-6xl">
                        <ExperienceData />
                    </div>
                </div>

                {/* Projects section - full page */}
                <div
                    ref={projectRef}
                    className="flex flex-col items-center justify-start min-h-screen shrink-0 py-25"
                    data-section="projects"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4 md:px-6">
                        {projectsData.map((project, index) => (
                            <ProjectsContainer
                            key={index}
                            {...project}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;