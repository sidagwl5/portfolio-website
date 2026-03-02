"use client";

import { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<
  HTMLButtonElement | HTMLAnchorElement
> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  icon?: LucideIcon;
  href?: string;
  download?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  icon: Icon,
  className = "",
  ...props
}) => {
  const baseStyles =
    "group relative flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full transition-all active:scale-95 duration-300 text-sm md:text-base";

  const variants = {
    primary:
      "animate-gradient text-white font-bold shadow-xl shadow-blue-500/20 overflow-hidden hover:scale-105",
    secondary:
      "bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-slate-900 dark:text-white font-medium hover:shadow-sm",
  };

  const Component = props.href ? "a" : "button";

  return (
    // @ts-ignore - Dynamic component rendering with union of attributes
    <Component
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {variant === "primary" && (
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
      )}
      {Icon && (
        <Icon
          size={20}
          className="relative z-10 transition-transform group-hover:translate-x-0.5"
        />
      )}
      <span className="relative z-10">{children}</span>
    </Component>
  );
};

export default Button;
