import React from 'react';
import { Download, Mail } from 'lucide-react';
import { heroData } from '../data/heroData';
import InteractiveBackground from './InteractiveBackground';

const Hero = () => {
    return (
        <section className="relative mb-10 md:mb-20 overflow-hidden">
            <div className="hidden lg:block absolute inset-0 z-0">
                <InteractiveBackground />
            </div>

            <div className="max-w-[1080px] mx-auto px-6 pt-24 md:pt-32 pb-16 md:pb-24 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-full px-4 py-1 mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">{heroData.badge.portfolio}</span>
                    <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{heroData.badge.featured}</span>
                </div>
                <h1 className="font-display text-3xl md:text-7xl font-extrabold tracking-tight mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 fill-mode-both text-slate-900 dark:text-white">
                    {heroData.title.main} <br className="hidden md:block" /> {heroData.title.highlight}
                </h1>
                <p className="max-w-2xl mx-auto text-base md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-8 md:mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
                    {heroData.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500 fill-mode-both">
                    <button className="group relative flex items-center gap-2 animate-gradient text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/20 overflow-hidden">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                        <Download size={20} className="relative z-10 group-hover:translate-y-0.5 transition-transform" />
                        <span className="relative z-10">{heroData.cta.download}</span>
                    </button>
                    <button className="group flex items-center gap-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-slate-900 dark:text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-sm active:scale-95">
                        <Mail size={20} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        {heroData.cta.contact}
                    </button>
                </div>

                <div className="flex items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700 fill-mode-both">
                    <a href="#about" className="relative inline-flex overflow-hidden rounded-full p-[1.5px] shadow-sm transition-transform hover:scale-105 active:scale-95 group/badge">
                        <span
                            className="absolute w-[80px] h-[80px] bg-[radial-gradient(var(--primary)_40%,transparent_60%)] opacity-80"
                            style={{
                                offsetPath: 'rect(0 100% 100% 0 round 9999px)',
                                animation: 'move-border 6s linear infinite'
                            }}
                        />
                        <div className="relative z-10 flex items-center gap-3 bg-white dark:bg-slate-900 px-4 py-2 rounded-full w-full h-full group-hover/badge:bg-slate-50 dark:group-hover/badge:bg-slate-800 transition-colors">
                            <img alt={heroData.avatar.alt} className="w-6 h-6 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm" src={heroData.avatar.url} />
                            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">About — {heroData.name}</span>
                        </div>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Hero;
