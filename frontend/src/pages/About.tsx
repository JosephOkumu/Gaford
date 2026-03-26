import { motion } from "framer-motion";
import { User, Users, Shield, Rocket, Target, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
    return (
        <div className="bg-background">
            {/* Our Story Hero */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-primary/5">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-none">
                            OUR <span className="text-primary italic">STORY</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed mb-12">
                            Gateway for Rural Development (GaFORD) is a Community Based Organization (CBO), dedicated to serving vulnerable adolescents, women, and youth.
                        </p>
                        <div className="w-24 h-2 bg-primary mx-auto rounded-full" />
                    </motion.div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
            </section>

            {/* Story Deep Dive */}
            <section className="py-24 relative z-10 -mt-10">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-card border border-border/50 p-10 md:p-14 rounded-[3rem] shadow-sm hover:shadow-xl transition-all h-full flex flex-col justify-between"
                        >
                            <div className="space-y-8">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                    <Target size={32} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-6 leading-none">HOW IT <span className="text-primary italic">STARTED</span></h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        GaFORD was born out of a deep-seated desire to bridge the gap in resources for rural communities. We recognized that while many initiatives exist, the most marginalized — persons with disability, orphans, and those from low-income families — were often left behind.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-secondary text-secondary-foreground p-10 md:p-14 rounded-[3rem] shadow-xl h-full flex flex-col justify-between relative overflow-hidden"
                        >
                            <div className="relative z-10 space-y-8">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-primary">
                                    <Rocket size={32} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-6 leading-none text-white">WHY WE <span className="text-primary italic">EXIST</span></h2>
                                    <p className="text-lg opacity-80 leading-relaxed">
                                        We exist to provide a platform where every individual, regardless of their background, can access advanced opportunities. Our focus remains on those who need it most, ensuring sustainable development is a reality for all rural youth.
                                    </p>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-card p-10 rounded-2xl shadow-sm border border-border/50 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:scale-110 transition-transform">
                                <Target size={120} />
                            </div>
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Target className="text-primary" /> MISSION
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed relative z-10">
                                To create a society where adolescents and youth have access to resources and advanced opportunities through actively supporting sustainable development activities.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-primary p-10 rounded-2xl shadow-xl border border-primary relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 text-white/10 group-hover:scale-110 transition-transform">
                                <Rocket size={120} />
                            </div>
                            <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                                <Rocket className="text-white" /> VISION
                            </h2>
                            <p className="text-xl text-white/90 leading-relaxed relative z-10">
                                Empowered society where adolescents and youths are free from poverty and inequity.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding bg-secondary text-secondary-foreground">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">CORE <span className="text-primary italic">VALUES</span></h2>
                        <div className="w-24 h-2 bg-primary mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Equality",
                                desc: "GaFORD holds that all people must be treated fairly and with dignity.",
                                icon: Users
                            },
                            {
                                title: "Equity",
                                desc: "We believe in non-discrimination in access and utilization of community resources.",
                                icon: Shield
                            },
                            {
                                title: "Social Justice",
                                desc: "We work towards promoting a just society and promoting dignity particularly among the needy and marginalized.",
                                icon: Heart
                            },
                            {
                                title: "Accountability",
                                desc: "We hold our actions accountable to the highest level of ethical behavior and responsibility.",
                                icon: Target
                            }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-secondary-foreground/5 border border-secondary-foreground/10 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-secondary transition-colors">
                                    <value.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-secondary-foreground">{value.title}</h3>
                                <p className="text-secondary-foreground/70 leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="section-padding">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-black mb-4 uppercase">OUR <span className="text-primary italic">TEAM</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Our strength lies in our experts who are dedicated to training and economic empowerment.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[1, 2, 3].map((item) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-muted relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                                        <User size={80} />
                                    </div>
                                    {/* <img src={`/team-${item}.jpg`} alt="Team member" className="w-full h-full object-cover" /> */}
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Team Member Name</h3>
                                <p className="text-primary font-medium mb-4 italic">Position / Role</p>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Brief bio goes here. This professional is dedicated to GaFORD's mission, bringing expertise in workforce development and community engagement.
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Partners Section */}
            <section className="section-padding bg-card border-y border-border/50">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-black mb-4 uppercase text-foreground">Our Strategic <span className="text-primary italic">Partners</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Expanding our network through collaboration with education stakeholders and community organizations.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((item) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: item * 0.1 }}
                                className="bg-background p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all group"
                            >
                                <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-muted flex items-center justify-center text-muted-foreground/30 group-hover:bg-primary/5 transition-colors">
                                    <Users size={40} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-foreground">Partner Name</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Placeholder for a short description about this partner and our shared goals in supporting sustainable development.
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center border-t border-border pt-12">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-lg text-muted-foreground italic mb-10"
                        >
                            We are always looking to partner with stakeholders who share our vision of an empowered society.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link to="/get-involved">
                                <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/25 hover:scale-105 active:scale-95 transition-all">
                                    Partner With Us
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
