import { testimonialsData } from "../data/testimonialsData";
import SectionHeader from "./ui/SectionHeader";
import TestimonialCard from "./ui/TestimonialCard";

const Row1 = testimonialsData.testimonials.slice(0, 3);
const Row2 = testimonialsData.testimonials.slice(3, 6);

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="pt-[72px] pb-16 md:pt-[108px] md:pb-24 bg-white dark:bg-background-dark relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16">
        <SectionHeader
          badge={testimonialsData.header.badge}
          title={testimonialsData.header.title}
          description={testimonialsData.header.description}
          centered
        />
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
              <TestimonialCard
                key={`dup1-${index}`}
                testimonial={testimonial}
              />
            ))}
          </Marquee>
        </div>

        {/* Marquee Row 2 */}
        <div>
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            direction="right"
          >
            {Row2.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
            {Row2.map((testimonial, index) => (
              <TestimonialCard
                key={`dup2-${index}`}
                testimonial={testimonial}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
