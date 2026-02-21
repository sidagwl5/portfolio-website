import React from 'react';

const ContactFooter = () => {
    return (
        <div id="contact">
            <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
                    <div className="h-1.5 w-20 bg-primary rounded-full"></div>
                    <p className="mt-6 text-lg max-w-2xl text-slate-600 dark:text-slate-400">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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
                                <li className="flex items-start gap-4 group">
                                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg text-primary">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <div>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                                            <a className="text-slate-900 dark:text-slate-200 font-medium hover:text-primary transition-colors" href="mailto:hello@siddharth.me">hello@siddharth.me</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 group">
                                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg text-primary">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                                        <p className="text-slate-900 dark:text-slate-200 font-medium">Boston, Massachusetts</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Social Profiles</h3>
                            <div className="flex gap-4">
                                {/* SVG icons simplified for brevity, in a real app these would be separate social components */}
                                <a aria-label="GitHub" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-primary hover:text-slate-900 transition-all" href="#">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.412-4.041-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                </a>
                                <a aria-label="LinkedIn" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-primary hover:text-slate-900 transition-all" href="#">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                                </a>
                            </div>
                        </div>
                        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
                                <img alt="Avatar small" className="w-12 h-12 rounded-full border-2 border-primary grayscale hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMh55ue77S_GgT8JuQrHD-msS1yfPsgqla6-oYErBDAXzIu_iUABZTf9cqW6zFYWqju9hOdXoftXRFLVd5FdT2R28J4zKpoNqLodeLtWrDWhZuRVix1bvhXT-zVfusmakNIArdhAC36nB668p9fEJ4wpz3md7vpA-XB3SPMefsOs65SwSLKy35Cjud3gHmH7LwSF20xmC3cjDiLS2HYJQq_jPxCA89M-afJmK7JFsbC5zmKztwBydCMdWbPfLJSQzLw4xidxm9a-lL" />
                                <div>
                                    <p className="font-semibold text-slate-900 dark:text-white">Siddharth Agrawal</p>
                                    <p className="text-xs uppercase tracking-widest text-primary font-medium">Available for hire</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="mt-12 border-t border-slate-200 dark:border-slate-800 py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <p className="text-slate-900 dark:text-white font-bold text-lg tracking-tight">SIDDHARTH AGRAWAL</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">© 2024. All rights reserved.</p>
                    </div>
                    <nav>
                        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
                            <li><a className="hover:text-primary transition-colors" href="#">About</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#experience">Experience</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#projects">Projects</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#skills">Skills</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Resume</a></li>
                        </ul>
                    </nav>
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase">Built with</span>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                            <svg className="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="none" stroke="currentColor" strokeWidth="2"></path>
                                <path d="M7 12L10.5 15.5L17 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg>
                            <span className="text-xs font-bold text-slate-700 dark:text-slate-200">React</span>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-12 text-center">
                    <p className="text-xs text-slate-500 dark:text-slate-600 max-w-lg mx-auto leading-relaxed">
                        Loosely designed in <span className="text-slate-700 dark:text-slate-400 font-medium">Figma</span> and coded in <span className="text-slate-700 dark:text-slate-400 font-medium">Visual Studio Code</span>. Built with <span className="text-slate-700 dark:text-slate-400 font-medium">Next.js</span> and <span className="text-slate-700 dark:text-slate-400 font-medium">Tailwind CSS</span>, deployed with <span className="text-slate-700 dark:text-slate-400 font-medium">Vercel</span>.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default ContactFooter;
