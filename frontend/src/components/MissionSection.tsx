import { motion } from "framer-motion";
import { Heart, BookOpen, Sprout, TrendingUp } from "lucide-react";

const pillars = [
  { icon: Heart, label: "Health" },
  { icon: BookOpen, label: "Education" },
  { icon: Sprout, label: "Growth" },
  { icon: TrendingUp, label: "Empowerment" },
];

const MissionSection = () => {
  return (
    <section className="pt-16 pb-0 md:pt-24 md:pb-0 bg-card">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Who We Are</p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-12 max-w-4xl mx-auto leading-tight">
            Gateway for Rural Development (GaFORD) is a dynamic and community-driven Community Based Organization (CBO) that supports <span className="text-primary italic">sustainable development</span> activities to provide resources and opportunities to youths.
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-center gap-2 bg-muted px-5 py-3 rounded-full"
            >
              <pillar.icon size={16} className="text-primary" />
              <span className="text-sm font-medium text-foreground">{pillar.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
