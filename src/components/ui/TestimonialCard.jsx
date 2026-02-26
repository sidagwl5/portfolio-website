import { Quote } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-slate-50 dark:bg-white/[0.03] p-6 md:p-8 rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow group mx-3 w-[300px] md:w-[400px]">
      <div className="mb-4 md:mb-6">
        <Quote className="text-primary mb-3 md:mb-4 h-5 md:h-6 w-5 md:w-6 opacity-80" />
        <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed font-medium line-clamp-4">
          {testimonial.quote}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div>
          <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
            {testimonial.name}
          </h4>
          <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
