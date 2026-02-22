import { footerData } from '../data/footerData';

const ContactFooter = () => {
    return (
        <div id="contact">
            <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                <div className="mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">{footerData.contact.title}</h2>
                    <div className="h-1.5 w-20 bg-primary rounded-full"></div>
                    <p className="mt-6 text-base md:text-lg max-w-2xl text-slate-600 dark:text-slate-400 font-medium">
                        {footerData.contact.description}
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
                    <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-xl backdrop-blur-sm">
                        <form action="#" className="space-y-6" method="POST">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-slate-900 dark:text-slate-200" htmlFor="name">Name</label>
                                <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-3 px-4 text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" id="name" name="name" placeholder="John Doe" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-slate-900 dark:text-slate-200" htmlFor="email">Email</label>
                                <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-3 px-4 text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" id="email" name="email" placeholder="john@example.com" type="email" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-slate-900 dark:text-slate-200" htmlFor="message">Message</label>
                                <textarea className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-3 px-4 text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" id="message" name="message" placeholder="Your message here..." rows="5"></textarea>
                            </div>
                            <button className="w-full bg-primary text-slate-900 font-bold py-4 px-6 rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 group" type="submit">
                                Send Message
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">send</span>
                            </button>
                        </form>
                    </div>
                    <div className="flex flex-col justify-between h-full space-y-12">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
                            <ul className="space-y-6">
                                {footerData.contact.info.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 group">
                                        <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg text-primary">
                                            <span className="material-symbols-outlined">{item.icon}</span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                                            {item.link ? (
                                                <a className="text-slate-900 dark:text-slate-200 font-medium hover:text-primary transition-colors" href={item.link}>{item.value}</a>
                                            ) : (
                                                <p className="text-slate-900 dark:text-slate-200 font-medium">{item.value}</p>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{footerData.socials.title}</h3>
                            <div className="flex gap-4">
                                {footerData.socials.links.map((social, idx) => (
                                    <a key={idx} aria-label={social.label} className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-primary hover:text-slate-900 transition-all font-medium flex items-center gap-2" href={social.url}>
                                        <span className="text-sm uppercase tracking-wider">{social.label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
                                <img alt={footerData.personalInfo.name} className="w-12 h-12 rounded-full border-2 border-primary grayscale hover:grayscale-0 transition-all" src={footerData.personalInfo.avatar} />
                                <div>
                                    <p className="font-semibold text-slate-900 dark:text-white">{footerData.personalInfo.name}</p>
                                    <p className="text-xs uppercase tracking-widest text-primary font-medium">{footerData.personalInfo.tagline}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="mt-12 border-t border-slate-200 dark:border-slate-800 py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
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
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase">Built with</span>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                            <span className="text-xs font-bold text-slate-700 dark:text-slate-200">{footerData.metadata.builtWith}</span>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-12 text-center">
                    <p className="text-xs text-slate-500 dark:text-slate-600 max-w-lg mx-auto leading-relaxed">
                        Loosely designed in <span className="text-slate-700 dark:text-slate-400 font-medium">{footerData.metadata.tools[0]}</span> and coded in <span className="text-slate-700 dark:text-slate-400 font-medium">{footerData.metadata.tools[1]}</span>. Built with <span className="text-slate-700 dark:text-slate-400 font-medium">{footerData.metadata.tools[2]}</span> and <span className="text-slate-700 dark:text-slate-400 font-medium">{footerData.metadata.tools[3]}</span>, deployed with <span className="text-slate-700 dark:text-slate-400 font-medium">{footerData.metadata.tools[4]}</span>.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default ContactFooter;
