import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Marquee from 'react-fast-marquee';

const testimonials = [
    {
        quote: "Their ability to capture our brand essence in every project is unparalleled - an invaluable creative collaborator.",
        name: "Isabella Rodriguez",
        role: "CEO and Co-founder of ABC Company",
        avatar: "https://i.pravatar.cc/150?u=isabella"
    },
    {
        quote: "Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs.",
        name: "Gabrielle Williams",
        role: "CEO and Co-founder of ABC Company",
        avatar: "https://i.pravatar.cc/150?u=gabrielle"
    },
    {
        quote: "Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable creative agency.",
        name: "Samantha Johnson",
        role: "CEO and Co-founder of ABC Company",
        avatar: "https://i.pravatar.cc/150?u=samantha"
    },
    {
        quote: "A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.",
        name: "Victoria Thompson",
        role: "CEO and Co-founder of ABC Company",
        avatar: "https://i.pravatar.cc/150?u=victoria"
    },
    {
        quote: "Their team's artistic flair and strategic approach resulted in remarkable campaigns - a reliable creative partner.",
        name: "John Peter",
        role: "CEO and Co-founder of ABC Company",
        avatar: "https://i.pravatar.cc/150?u=john"
    },
    {
        quote: "From concept to execution, their creativity knows no bounds - a game-changer for our brand's success.",
        name: "Natalie Martinez",
        role: "CEO and Co-founder of ABC Company",
        avatar: "https://i.pravatar.cc/150?u=natalie"
    }
];

const Row1 = testimonials.slice(0, 3);
const Row2 = testimonials.slice(3, 6);

const TestimonialCard = ({ testimonial }) => (
    <div className="bg-slate-50 dark:bg-white/[0.03] p-8 rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow group mx-3 w-[400px]">
        <div className="mb-6">
            <Quote className="text-primary mb-4 h-8 w-8 opacity-80" />
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed font-medium line-clamp-3">
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
        <section id="testimonials" className="py-24 bg-white dark:bg-background-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-slate-100 max-w-3xl mx-auto leading-tight">
                        Words of <span className="text-primary">praise</span> from people I have worked with.
                    </h2>
                </motion.div>
            </div>

            {/* Marquee Section */}
            <div className="relative">
                {/* Side Gradients */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-background-dark to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-background-dark to-transparent z-10 pointer-events-none" />

                {/* Marquee Row 1 */}
                <div className="mb-6">
                    <Marquee gradient={false} speed={40} pauseOnHover={true}>
                        {Row1.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                        {/* Duplicate for seamlessness if needed, but react-fast-marquee handles some of it */}
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
