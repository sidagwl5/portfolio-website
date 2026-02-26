import { aboutData } from '../data/aboutData';
import { Linkedin, Github, Instagram, Mail } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const icons = {
    Linkedin: Linkedin,
    Github: Github,
    Instagram: Instagram,
    Mail: Mail
};

const About = () => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    // For the glare effect, we map mouse position to percentages
    const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "0%"]);
    const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["100%", "0%"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section id="about" className="py-24 bg-white dark:bg-background-dark overflow-hidden">
            <div className="max-w-[1080px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-end">
                    {/* Image Column */}
                    <div
                        className="relative group order-2 md:order-1 w-full mx-auto md:max-w-md [perspective:1000px]"
                        ref={ref}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <motion.div
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d",
                            }}
                            className="relative aspect-[3/4] rounded-2xl md:max-w-[340px] mx-auto w-full transition-transform duration-200 ease-out"
                        >
                            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-800">
                                <img
                                    src={aboutData.image.url}
                                    alt={aboutData.image.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                                {/* Glare Effect */}
                                <motion.div
                                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-300 mix-blend-overlay z-10"
                                    style={{
                                        background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8), transparent 60%)",
                                        left: glareX,
                                        top: glareY,
                                        transform: "translate(-50%, -50%)",
                                        width: "200%",
                                        height: "200%",
                                    }}
                                />

                                {/* Dark mode extra glare */}
                                <motion.div
                                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-300 mix-blend-soft-light hidden dark:block z-10"
                                    style={{
                                        background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,1), transparent 50%)",
                                        left: glareX,
                                        top: glareY,
                                        transform: "translate(-50%, -50%)",
                                        width: "200%",
                                        height: "200%",
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Text Column */}
                    <div className="order-1 md:order-2">
                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                <span className="h-px w-8 bg-primary"></span>
                                <span className="text-primary font-mono text-sm tracking-widest uppercase font-semibold">
                                    {aboutData.title.prefix}
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
                                {aboutData.title.main}
                            </h2>
                        </div>

                        <div className="space-y-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {aboutData.greeting}
                            </h3>
                            {aboutData.paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="animate-in fade-in slide-in-from-bottom-8 duration-1000"
                                    style={{ animationDelay: `${(index + 3) * 100}ms` }}
                                    dangerouslySetInnerHTML={{ __html: paragraph }}
                                />
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="mt-10 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500 fill-mode-both">
                            {aboutData.socials.map((social, index) => {
                                const Icon = icons[social.icon];
                                return (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-11 h-11 flex items-center justify-center rounded-xl bg-transparent text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/50 transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:border-primary/30 hover:-translate-y-1 active:scale-95"
                                        aria-label={social.platform}
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
