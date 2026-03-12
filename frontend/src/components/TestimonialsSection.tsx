import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

const testimonials = [
  {
    quote: "GaFORD didn't just give me a scholarship; they gave me a vision. Their leadership training taught me that my background doesn't define my potential. Today, I am the first in my family to pursue a law degree.",
    name: "Emmanuel Koech",
    role: "Law Student & Youth Mentor",
    image: testimonial1,
  },
  {
    quote: "The mental health workshops were a turning point for our community. We've broken the silence on issues that were once taboo, and now our youth have a safe space to grow without stigma.",
    name: "Sarah Wambui",
    role: "Community Health Volunteer",
    image: testimonial2,
  },
  {
    quote: "Starting my tailoring collective seemed impossible until GaFORD provided the training and seed capital. We now employ five young women, proving that sustainable development is within our reach.",
    name: "Grace Atieno",
    role: "Entrepreneur & Mentor",
    image: "/testimonial3.png",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Real Stories, Real <span className="text-primary italic">Change</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                <Quote size={28} className="text-primary mb-4" />
                <p className="text-secondary-foreground/80 leading-relaxed mb-6 italic text-sm">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-3 mt-auto">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" />
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-[10px] uppercase tracking-wider text-secondary-foreground/60">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
