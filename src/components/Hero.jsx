import React from 'react';
import { Download, Mail } from 'lucide-react';
import InteractiveBackground from './InteractiveBackground';

const Hero = () => {
    return (
        <section className="relative text-center mb-20 max-w-5xl mx-auto px-6 pt-32 pb-24 overflow-hidden">
            <div className="hidden lg:block absolute inset-0 z-0">
                <InteractiveBackground />
            </div>

            <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-full px-4 py-1 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Portfolio</span>
                    <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Featured work</span>
                </div>
                <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 fill-mode-both">
                    Building bridges between <br /> design and code
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
                    I'm <span className="text-slate-900 dark:text-white font-medium">Siddharth Agrawal</span>, a senior frontend engineer where I craft intuitive user experiences. After hours, I build my own projects.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500 fill-mode-both">
                    <button className="group relative flex items-center gap-2 animate-gradient text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/20 overflow-hidden">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                        <Download size={20} className="relative z-10 group-hover:translate-y-0.5 transition-transform" />
                        <span className="relative z-10">Download CV</span>
                    </button>
                    <button className="group flex items-center gap-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-slate-900 dark:text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-sm active:scale-95">
                        <Mail size={20} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        Contact Me
                    </button>
                </div>

                <div className="flex items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700 fill-mode-both">
                    <img alt="Siddharth Agrawal" className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEDMvwsK8UOy8ZV_jzOm8elNdpOEWydquVzzZ7LzDablWsBr4HtIE6W8dAieInNN0ulRSP1rj1rqsWLrNcp6Q8gZL0HDVluDJJpdJV9PlW00ND5f2rLobytYHRRYz3VoMEgv23yTd8sPkxpF-_I92_nrrOeVtFkngi_RGRRsMpnOm5Nv34n_AVrcWvh7TEOsYQfwiMyejudVSl6Tz10oiZ_k9E0elrz4ZOC2yKp-Na8bV1rUrJBdRCcPgN6k1O-St-9z4e2o3MdfIC" />
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">About — Siddharth Agrawal</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
