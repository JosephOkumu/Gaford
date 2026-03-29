import { motion } from "framer-motion";
import {
    Heart,
    GraduationCap,
    TrendingUp,
    ArrowRight,
    Image as ImageIcon,
    Calendar,
    Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const highlights = [
    {
        title: "Community Outreach in Kisumu",
        date: "August 2025",
        description: "Our team reaching out to the vulnerable population in rural Kisumu to distribute essentials.",
        type: "Outreach"
    },
    {
        title: "Elimisha Wote Launch",
        date: "January 2024",
        description: "Official launch of the initiative targeting teenage mothers returning to school.",
        type: "Event"
    },
    {
        title: "Team Seminar on Leadership",
        date: "October 2025",
        description: "Team and Board members attending the annual leadership and economic empowerment summit.",
        type: "Team"
    },
    {
        title: "Sanitary Towels Distribution",
        date: "March 2025",
        description: "Empowering school-going girls through hygiene education and material support.",
        type: "Program"
    }
];

const Programs = () => {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden bg-primary/5">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight">
                                Our <span className="text-primary italic">Programs</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10">
                                At GaFORD, we believe in a holistic approach to community development. Our programs are designed to address the interconnected needs of adolescents, youth, and women in rural areas.
                            </p>
                        </motion.div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -z-10" />
            </section>

            <section id="impact-programs" className="section-padding">
                <div className="container mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Reproductive Health",
                                description: "Menstrual hygiene, family planning awareness, and contraceptive education for young people.",
                                image: "/reproductive.png",
                            },
                            {
                                title: "Education & Leadership",
                                description: "Leadership training, school support interventions, and capacity building for youth.",
                                image: "/education2.png",
                            },
                            {
                                title: "Mental Health",
                                description: "Awareness, stigma reduction, counseling, peer support, and community workshops.",
                                image: "/mental.jpeg",
                            },
                            {
                                title: "Economic Empowerment",
                                description: "Small business training, financial support, and income-generation activities.",
                                image: "/empowerment.jpg",
                            },
                        ].map((program, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={program.image}
                                        alt={program.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold mb-2 uppercase tracking-tight">{program.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">{program.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Highlights / Outreach Gallery Section */}
            <section className="section-padding bg-secondary text-secondary-foreground">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-secondary-foreground">
                            GALLERY & <span className="text-primary italic">HIGHLIGHTS</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-secondary-foreground/10 group"
                            >
                                {/* Event Image Placeholder */}
                                <div className="aspect-[3/4] bg-muted relative flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <ImageIcon className="text-muted-foreground/20" size={60} />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-primary shadow-sm border border-primary/10">
                                            {item.type}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-primary mb-3">
                                        <Calendar size={14} />
                                        <span className="text-xs font-bold uppercase tracking-wider">{item.date}</span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-3 leading-tight group-hover:text-primary transition-colors uppercase text-gray-900">{item.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Button variant="outline" className="rounded-full px-8 h-12 font-bold border-white/20 text-white hover:bg-white/10 group">
                            Load More Highlights <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Creative Impact Metrics Section */}
            <section className="py-24 bg-card border-t border-border/50 relative overflow-hidden">
                {/* Soft decorative gradients matching Home ClosingCTA */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] translate-y-1/2" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <p className="text-sm font-black text-primary tracking-widest uppercase mb-4">Our Track Record</p>
                            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter text-foreground">
                                THE SCALE OF <span className="italic text-primary">OUR MISSION</span>
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
                                Beyond the programs, it's about the lives we touch and the sustainable future we build together in rural communities.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { label: "Youth Mentored", value: "5,000+", icon: Users },
                                { label: "Schools Reached", value: "45+", icon: GraduationCap },
                                { label: "Hygiene Kits", value: "12,000+", icon: Heart },
                                { label: "Success Rate", value: "98%", icon: TrendingUp },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-background border border-border p-8 rounded-3xl text-center flex flex-col items-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <stat.icon size={24} className="text-primary group-hover:text-inherit" />
                                    </div>
                                    <h3 className="text-4xl font-black text-foreground mb-2">{stat.value}</h3>
                                    <p className="text-muted-foreground font-bold uppercase tracking-widest text-[10px]">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-20 text-center"
                        >
                            <p className="text-2xl md:text-3xl font-bold text-foreground/80 italic mb-12 max-w-3xl mx-auto leading-relaxed">
                                "We don't just run programs; we ignite potentials that rewrite the destiny of whole rural lineages."
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Link to="/get-involved">
                                    <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold bg-primary text-secondary hover:scale-105 transition-all shadow-lg shadow-primary/20">
                                        Be Part of the Legacy
                                    </Button>
                                </Link>
                                <Link to="/about">
                                    <Button variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg font-bold border-2 hover:bg-muted transition-all">
                                        Our Philosophy
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Programs;
