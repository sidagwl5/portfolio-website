import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Image as ImageIcon, Mail, Sun, Moon } from 'lucide-react';

const Navbar = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => {
        if (!document.startViewTransition) {
            setIsDark(!isDark);
            return;
        }

        document.startViewTransition(() => {
            setIsDark(!isDark);
        });
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-center pointer-events-none">
            <nav className="pointer-events-auto">
                <div className="nav-pill flex items-center gap-1 bg-white/70 dark:bg-zinc-900/80 border border-slate-200/50 dark:border-zinc-800/50 rounded-full px-2 py-1.5 shadow-sm">
                    <a className="p-2 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full transition-colors flex items-center justify-center text-slate-600 dark:text-slate-300" href="#">
                        <Home size={18} />
                    </a>
                    <div className="h-4 w-px bg-slate-200 dark:bg-zinc-800 mx-1"></div>
                    <a className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-xs font-medium text-slate-600 dark:text-slate-300" href="#skills">
                        <User size={16} className="text-slate-400" />
                        About
                    </a>
                    <a className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-xs font-medium text-slate-600 dark:text-slate-300" href="#experience">
                        <Briefcase size={16} className="text-slate-400" />
                        Work
                    </a>
                    <a className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-xs font-medium text-slate-600 dark:text-slate-300" href="#projects">
                        <ImageIcon size={16} className="text-slate-400" />
                        Gallery
                    </a>
                    <a className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-xs font-medium text-slate-600 dark:text-slate-300" href="#contact">
                        <Mail size={16} className="text-slate-400" />
                        Contact
                    </a>
                    <div className="h-4 w-px bg-slate-200 dark:bg-zinc-800 mx-1"></div>
                    <button
                        onClick={toggleTheme}
                        className="p-2 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full transition-colors flex items-center justify-center text-slate-600 dark:text-slate-300"
                        aria-label="Toggle dark mode"
                    >
                        {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
