import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({
  badge,
  title,
  description,
  centered = false,
  className = "",
}) => {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <div
        className={`flex items-center gap-2 mb-4 ${centered ? "justify-center" : ""}`}
      >
        <span className="h-px w-8 bg-primary"></span>
        <span className="text-primary font-mono text-sm tracking-widest uppercase font-semibold">
          {badge}
        </span>
        {centered && <span className="h-px w-8 bg-primary"></span>}
      </div>

      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
