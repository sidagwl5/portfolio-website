import { Download, Mail } from 'lucide-react';
import { footerData } from '../data/footerData';
import { heroData } from '../data/heroData';

const ContactFooter = () => {
    return (
        <div id="contact">
            <section className="py-16 md:py-24">
                <div className="max-w-[1080px] mx-auto px-6 text-center">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">{footerData.contact.title}</h2>

                        <p className="mt-6 text-base md:text-lg max-w-2xl mx-auto text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            {footerData.contact.description}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                </div>
            </section>
            
            <footer className="mt-12 border-t border-slate-200 dark:border-slate-800 py-12 px-6">
                <div className="max-w-[1080px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <p className="text-slate-900 dark:text-white font-bold text-lg tracking-tight uppercase">{footerData.personalInfo.name}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{footerData.metadata.copyright}</p>
                    </div>
                    <nav>
                        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
                            {footerData.footerLinks.map((link, idx) => (
                                <li key={idx}><a className="hover:text-primary transition-colors" href={link.url}>{link.label}</a></li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default ContactFooter;
