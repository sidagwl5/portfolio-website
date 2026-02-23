import { aboutData } from '../data/aboutData';
import { Linkedin, Github, Instagram, Mail } from 'lucide-react';

const icons = {
    Linkedin: Linkedin,
    Github: Github,
    Instagram: Instagram,
    Mail: Mail
};

const About = () => {
    return (
        <section id="about" className="py-24 bg-white dark:bg-background-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                    {/* Image Column */}
                    <div className="relative group order-2 md:order-1 max-w-sm mx-auto md:max-w-none">
                        <div className="absolute -inset-4 bg-primary/5 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-500"></div>
                        <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-2xl md:max-w-[320px] mx-auto">
                            <img
                                src={aboutData.image.url}
                                alt={aboutData.image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="order-1 md:order-2">
                        <div className="mb-8">
                            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block animate-in fade-in slide-in-from-bottom-4 duration-700">
                                {aboutData.title.prefix}
                            </span>
                            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white leading-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
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
                                >
                                    {paragraph}
                                </p>
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
