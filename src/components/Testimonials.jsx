import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import { testimonialsData } from '../data/testimonialsData';

const Row1 = testimonialsData.testimonials.slice(0, 3);
const Row2 = testimonialsData.testimonials.slice(3, 6);

const TestimonialCard = ({ testimonial }) => (
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

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-16 md:py-24 bg-white dark:bg-background-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white max-w-3xl mx-auto leading-tight">
                        Words of <span className="text-primary">praise</span> from people I have worked with.
                    </h2>
                </motion.div>
            </div>

            {/* Marquee Section */}
            <div className="relative">
                {/* Side Gradients */}
                <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-background-dark to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-background-dark to-transparent z-10 pointer-events-none" />

                {/* Marquee Row 1 */}
                <div className="mb-6">
                    <Marquee gradient={false} speed={40} pauseOnHover={true}>
                        {Row1.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                        {Row1.map((testimonial, index) => (
                            <TestimonialCard key={`dup1-${index}`} testimonial={testimonial} />
                        ))}
                    </Marquee>
                </div>

                {/* Marquee Row 2 */}
                <div>
                    <Marquee gradient={false} speed={40} pauseOnHover={true} direction="right">
                        {Row2.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                        {Row2.map((testimonial, index) => (
                            <TestimonialCard key={`dup2-${index}`} testimonial={testimonial} />
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
