import { Download, Mail, Github, Instagram, Linkedin } from "lucide-react";
import { footerData } from "../data/footerData";
import { heroData } from "../data/heroData";
import { aboutData } from "../data/aboutData";
import SectionHeader from "./ui/SectionHeader";
import Button from "./ui/Button";
import SocialLink from "./ui/SocialLink";

const icons = {
  Linkedin,
  Github,
  Instagram,
  Mail,
};

const ContactFooter = () => {
  return (
    <div id="contact">
      <section className="pt-[72px] pb-16 md:pt-[108px] md:pb-24">
        <div className="max-w-[1080px] mx-auto px-6 text-center">
          <SectionHeader
            badge={footerData.contact.badge}
            title={footerData.contact.title}
            description={footerData.contact.description}
            centered
            className="mb-12"
          />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" icon={Download}>
              {heroData.cta.download}
            </Button>
            <Button variant="secondary" icon={Mail}>
              {heroData.cta.contact}
            </Button>
          </div>
        </div>
      </section>

      <footer className="mt-12 border-t border-slate-200 dark:border-slate-800 py-16 px-6">
        <div className="max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-start">
          <div className="flex flex-col items-center md:items-start space-y-8">
            <div className="space-y-2 text-center md:text-left">
              <p className="text-slate-900 dark:text-white font-bold text-xl tracking-tight uppercase">
                {footerData.personalInfo.name}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {footerData.metadata.copyright}
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                Connect
              </h4>
              <div className="flex items-center gap-3">
                {aboutData.socials.map((social, index) => (
                  <SocialLink
                    key={index}
                    href={social.url}
                    icon={icons[social.icon]}
                    ariaLabel={social.platform}
                    className="w-10 h-10"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Sitemap
            </h4>
            <nav>
              <ul className="flex flex-col md:items-end gap-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                {footerData.footerLinks
                  .filter((link) =>
                    ["About", "Skills", "Experience", "Projects"].includes(
                      link.label,
                    ),
                  )
                  .map((link, idx) => (
                    <li key={idx}>
                      <a
                        className="hover:text-primary transition-colors block py-0.5"
                        href={link.url}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactFooter;
