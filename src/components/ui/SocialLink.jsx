import React from "react";

const SocialLink = ({ href, icon: Icon, ariaLabel, className = "" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-11 h-11 flex items-center justify-center rounded-xl bg-transparent text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/50 transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:border-primary/30 hover:-translate-y-1 active:scale-95 ${className}`}
      aria-label={ariaLabel}
    >
      <Icon size={20} />
    </a>
  );
};

export default SocialLink;
