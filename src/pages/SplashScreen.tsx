import { motion } from "framer-motion";
import { useEffect } from "react";

interface SplashScreenProps {
    onLoadingComplete: () => void;
}

export default function SplashScreen({ onLoadingComplete }: SplashScreenProps) {
    useEffect(() => {
        // Minimum delay of 2 seconds
        const timer = setTimeout(() => {
            onLoadingComplete();
        }, 2200);

        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >            <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0 }}
            >                <motion.h1 
                    className="text-2xl md:text-4xl lg:text-5xl font-medium bg-clip-text text-transparent relative font-['Plus_Jakarta_Sans']"
                    style={{
                        background: "linear-gradient(90deg, #d1d5dc 0%, #88ccb4 50%, #d1d5dc 100%)",
                        backgroundSize: "200% 100%",
                        backgroundClip: "text",
                    }}
                    animate={{
                        backgroundPosition: ["200% 0", "-200% 0"],
                    }}
                    transition={{
                        duration: 6,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    Hello there!
                </motion.h1>
            </motion.div>
        </motion.div>
    );
}
