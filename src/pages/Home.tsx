import { useState, useRef, useEffect } from "react";
import { ExperienceData } from "../data/ExperienceData";
import { ProjectsContainer, projectsData } from "../data/ProjectsData";
import AboutData from "@/data/AboutData";
import { HeroData } from "@/data/HeroData";
import React from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi"; // Install react-icons if not already
import ContactData from "@/data/ContactData";

const SilkComp = React.lazy(() => import('../blocks/Backgrounds/Silk'));

function Home() {
    const [_, setActive] = useState(0);
    const [currentSection, setCurrentSection] = useState<string | null>(null);
    const [showNav, setShowNav] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = [
        'About',
        'Experience',
        'Projects',
        'Contact'
    ];

    const aboutRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // intersection observer
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
                threshold: 0.3,
                rootMargin: '-10% 0px'
            }
        );

        // Observe sections
        if (aboutRef.current) observer.observe(aboutRef.current);
        if (experienceRef.current) observer.observe(experienceRef.current);
        if (projectRef.current) observer.observe(projectRef.current);
        if (contactRef.current) observer.observe(contactRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setShowNav(true), 1900);
        return () => clearTimeout(timer);
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
        } else if (idx === 3 && contactRef.current && scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                top: contactRef.current.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    const handleScrollToContact = () => {
        if (contactRef.current && scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                top: contactRef.current.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="relative min-h-screen min-w-screen overflow-hidden">
            {/* background */}
            <div className="fixed inset-0 w-full h-full z-0">
                <SilkComp
                    speed={3}
                    scale={0.6}
                    color="#18BB82"
                    noiseIntensity={2.5}
                    rotation={0}
                />
            </div>

            {/* Top nav section - hidden on mobile */}
            {showNav && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showNav ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                className="fixed top-0 left-0 w-full z-20  justify-center pt-4 md:pt-8 pointer-events-none hidden sm:flex"
            >
                <div
                  className={`pointer-events-auto py-2 md:py-3 transition-colors ${
                    currentSection !== 'hero'
                      ? 'bg-gray-300/10 backdrop-blur-sm rounded-full'
                      : ''
                  }`}
                >
                    <nav className="flex flex-row gap-4 md:gap-10 px-4 md:px-8">
                        {navItems.map((item, idx) => (
                        <button
                            key={item}
                            onClick={() => handleNavClick(idx)}
                            className={`text-sm md:text-xl transition-colors font-semibold focus:outline-none bg-transparent border-none shadow-none p-0 m-0 text-white hover:text-[#88ccb4] flex items-center`}
                            style={{ background: 'none', border: 'none', boxShadow: 'none' }}
                        >
                            <span
                            className="mr-2 transition-opacity duration-250"
                            style={{
                                opacity:
                                (idx === 0 && currentSection === 'about') ||
                                (idx === 1 && currentSection === 'experience') ||
                                (idx === 2 && currentSection === 'projects') ||
                                (idx === 3 && currentSection === 'contact')
                                    ? 1
                                    : 0,
                            }}
                            >
                            •
                            </span>
                            {item}
                        </button>
                        ))}
                    </nav>
                </div>
            </motion.div>
            )}

            

            {/* Hamburger menu for mobile */}
            {showNav && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: showNav ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                className="fixed top-4 right-4 z-30 sm:hidden"
            >
                <button
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="bg-[#17301C]/70 p-2 rounded-full text-white focus:outline-none"
                    aria-label="Open menu"
                >
                    {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                </button>
            </motion.div>
            )}

            {/* Dropdown menu for mobile */}
            {menuOpen && (
                <div className="fixed inset-0 z-40 bg-[#17301C]/80 flex flex-col items-center justify-center sm:hidden">
                    {/* X button inside the overlay, top right */}
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-4 right-4 bg-[#17301C]/90 p-2 rounded-full text-white focus:outline-none z-50"
                        aria-label="Close menu"
                    >
                        <HiX size={28} />
                    </button>
                    <nav className="flex flex-col gap-6 text-2xl text-white font-semibold mb-8">
                        {navItems.map((item, idx) => (
                            <button
                                key={item}
                                onClick={() => {
                                    handleNavClick(idx);
                                    setMenuOpen(false);
                                }}
                                className="hover:text-[#88ccb4] transition-colors"
                            >
                                {item}
                            </button>
                        ))}
                    </nav>
                </div>
            )}

            {/* Scrollable content area */}
            <div 
                ref={scrollContainerRef} className="relative z-10 flex flex-col justify-start min-h-screen h-screen overflow-y-auto overflow-x-hidden scroll-smooth"
            >
             
                {/* Hero section */}
                <div data-section="hero" className="flex items-center justify-center text-white min-h-screen h-screen sm:pl-7 shrink-0">
                    <HeroData/>
                </div>

                {/* About section */}
                <div
                    ref={aboutRef}
                    data-section="about"
                    className="flex flex-col items-stretch md:items-center justify-center min-h-screen shrink-0 px-5 pt-10 sm:pt-30 pb-24"
                >
                    <AboutData onContactClick={handleScrollToContact} />
                </div>

                {/* Experience section */}
                <div
                    ref={experienceRef}
                    data-section="experience"
                    className="flex flex-col items-center justify-start min-h-screen shrink-0 px-5 pt-10 sm:pt-14 pb-24"
                >
                    <div className="w-full max-w-6xl">
                        <ExperienceData />
                    </div>
                </div>

                {/* Projects section */}
                <div
                    ref={projectRef}
                    data-section="projects"
                    className="flex flex-col items-center justify-start min-h-screen shrink-0 py-20 sm:py-33"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-6 md:px-10">
                        {projectsData.map((project, index) => (
                            <ProjectsContainer
                            key={index}
                            {...project}
                            />
                        ))}
                    </div>
                </div>

                {/* Contact section */}
                <div
                    ref={contactRef}
                    data-section="contact"
                    className="h-200px lg:min-h-screen w-screen px-10 pt-10 sm:pt-15 pb-35 md:pb-10"
                >
                    <ContactData/>
                </div>
            </div>
        </div>
    );
}

export default Home;