import { Download, Mail } from "lucide-react";
import { footerData } from "../data/footerData";
import { heroData } from "../data/heroData";
import SectionHeader from "./ui/SectionHeader";
import Button from "./ui/Button";

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

      <footer className="mt-12 border-t border-slate-200 dark:border-slate-800 py-12 px-6">
        <div className="max-w-[1080px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-slate-900 dark:text-white font-bold text-lg tracking-tight uppercase">
              {footerData.personalInfo.name}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {footerData.metadata.copyright}
            </p>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
              {footerData.footerLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    className="hover:text-primary transition-colors"
                    href={link.url}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default ContactFooter;
