import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Mail } from "lucide-react";
import volunteerImg from "@/assets/volunteer.jpg";

const benefits = [
  "Make a direct impact on youth lives",
  "Gain field experience in community development",
  "Join a passionate global network",
  "Flexible commitments — remote & on-site",
];

const VolunteerCTA = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Involved:{" "}
              <span className="text-primary italic">Become a Volunteer</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We welcome volunteers from Kenya and around the world. Whether you can give your time on the ground or contribute skills remotely, there's a place for you at GaFORD.
            </p>
            <ul className="space-y-3 mb-8">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <CheckCircle size={18} className="text-primary shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="pt-8 border-t border-border/50">
              <a
                href="mailto:info@gaford.org"
                className="inline-flex items-center gap-4 group p-1 pr-6 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-foreground font-black mb-0.5">Contact Us</p>
                  <p className="text-lg font-black text-foreground">info@gaford.org</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/volunteer.jpg"
              alt="Volunteer with GaFORD"
              className="rounded-2xl w-full object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerCTA;
