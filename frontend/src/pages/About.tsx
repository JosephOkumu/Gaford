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
                        <p className="text-xl md:text-2xl text-foreground font-bold leading-relaxed mb-12">
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
            <section className="py-24 relative z-10 -mt-10 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: "spring", stiffness: 60, damping: 15 }}
                            className="bg-card border border-border/50 p-10 md:p-14 rounded-[3rem] shadow-sm hover:shadow-xl transition-all h-full flex flex-col justify-between"
                        >
                            <div className="space-y-8">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                    <Target size={32} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-6 leading-none">HOW IT <span className="text-primary italic">STARTED</span></h2>
                                    <p className="text-lg text-foreground leading-relaxed font-bold">
                                        GaFORD was born out of a deep-seated desire to bridge the gap in resources for rural communities. We recognized that while many initiatives exist, the most marginalized — persons with disability, orphans, and those from low-income families — were often left behind.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.1 }}
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
            <section className="section-padding overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className="bg-card p-12 rounded-[2.5rem] shadow-sm border border-border/50 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-10 text-primary/10 group-hover:scale-125 transition-transform duration-500">
                                <Target size={140} />
                            </div>
                            <h2 className="text-3xl font-black mb-8 flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <Target className="text-primary" size={24} />
                                </div>
                                MISSION
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed relative z-10 font-medium">
                                To create a society where adolescents and youth have access to resources and advanced opportunities through actively supporting sustainable development activities.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className="bg-primary p-12 rounded-[2.5rem] shadow-2xl border border-primary relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-10 text-white/10 group-hover:scale-125 transition-transform duration-500">
                                <Rocket size={140} />
                            </div>
                            <h2 className="text-3xl font-black mb-8 text-white flex items-center gap-4">
                                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                    <Rocket className="text-white" size={24} />
                                </div>
                                VISION
                            </h2>
                            <p className="text-xl text-white/90 leading-relaxed relative z-10 font-medium">
                                Empowered society where adolescents and youths are free from poverty and inequity.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-secondary text-secondary-foreground overflow-hidden">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="text-sm font-black text-primary tracking-widest uppercase mb-4">Our Foundation</p>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">CORE <span className="text-primary italic">VALUES</span></h2>
                        <div className="w-24 h-2 bg-primary mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {[
                            {
                                title: "Equality",
                                desc: "GaFORD holds that all people must be treated fairly and with dignity.",
                                icon: Users,
                                color: "text-orange-500"
                            },
                            {
                                title: "Equity",
                                desc: "We believe in non-discrimination in access and utilization of community resources.",
                                icon: Shield,
                                color: "text-blue-500"
                            },
                            {
                                title: "Social Justice",
                                desc: "We work towards promoting a just society and promoting dignity particularly among the needy and marginalized.",
                                icon: Heart,
                                color: "text-teal-500"
                            },
                            {
                                title: "Accountability",
                                desc: "We hold our actions accountable to the highest level of ethical behavior and responsibility.",
                                icon: Target,
                                color: "text-indigo-500"
                            }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 20,
                                    delay: i * 0.1
                                }}
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                                }}
                                className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] shadow-sm transition-all group relative overflow-hidden"
                            >
                                <div className={`w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 ${value.color} group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                                    <value.icon size={28} />
                                </div>
                                <h3 className="text-xl font-black mb-4 text-white uppercase tracking-wider">{value.title}</h3>
                                <p className="text-white/60 leading-relaxed font-medium text-sm">{value.desc}</p>
                                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white/5 rounded-full blur-xl group-hover:bg-primary/20 transition-colors" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="text-sm font-black text-primary tracking-widest uppercase mb-4">The Visionaries</p>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">OUR <span className="text-primary italic">TEAM</span></h2>
                        <p className="text-lg text-foreground max-w-2xl mx-auto font-bold">
                            Our strength lies in our experts who are dedicated to training, economic empowerment, and sustainable community development.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            {
                                name: "Collins Oswago",
                                role: "Executive Director",
                                image: "/Collins.jpeg",
                                bio: "Collins is a Gender, Youth and International Development Specialist. Collins holds a Masters Degree in International Studies from Morgan State University. His goal is to inspire bold and authentic living among the Youth."
                            },
                            {
                                name: "Antonina Mudimba",
                                role: "Programs Manager",
                                bio: "Antonina Mudimba holds a Bachelor’s degree in Nursing from Towson University, Maryland and a Master’s degree in nursing with a concentration as a Family Nurse Practitioner from Herzing University, Wisconsin."
                            },
                            {
                                name: "George Elijah",
                                role: "Director: Asset, Strategy and Knowledge Management",
                                image: "/George.jpeg",
                                bio: "George has a background in Physics, Computer Technology, and Security with a Master of Science degree in Physics and a Bachelor of Science from the University of Nairobi and holds certifications in CompTIA A+ ce and CompTIA Security+ ce certifications."
                            },
                            {
                                name: "Effie Otieno",
                                role: "M&E and Research Director",
                                bio: "Effie is a professional in the research field. She is also a Certified Monitoring and Evaluation Specialist with immense knowledge and experience in research and development and a passion for women and youth empowerment."
                            },
                            {
                                name: "Kenneth Odoyo",
                                role: "Finance and Administration Director",
                                image: "/Kenneth.jpeg",
                                bio: "Kenneth O. Odoyo holds a Bachelor’s Degree in Commerce (Finance) from KCA University and is currently pursuing C.P.A. He has vast knowledge and experience in Financial Management."
                            },
                            {
                                name: "Isaac Kiche",
                                role: "Program Manager",
                                bio: "Isaac Kiche Abok is a results-driven professional with experience in statistical analysis, strategic planning, and human capital development. He is passionately committed to empowering student leaders through skill-building."
                            }
                        ].map((member: any, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-card border border-border/50 p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="aspect-square rounded-[2rem] overflow-hidden mb-8 bg-muted relative border border-border/10 group-hover:border-primary/20 transition-all duration-500">
                                    {member.image ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/10">
                                            <User size={100} />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tight mb-2 leading-none group-hover:text-primary transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-primary font-bold tracking-[0.1em] text-[11px] mb-6 inline-block bg-primary/5 px-4 py-1.5 rounded-full">
                                    {member.role.toUpperCase()}
                                </p>
                                <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                                    {member.bio}
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
                        <h2 className="text-4xl font-black mb-4 uppercase text-foreground">OUR <span className="text-primary italic">PARTNERS</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Expanding our network through collaboration with education stakeholders and community organizations.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            {
                                name: "Activate Action",
                                image: "/activate.jpg",
                                website: "https://activateaction.org/",
                                description: "Activate Action is a youth-led for impact organization. We empower young people and women in Kenya, including those living with HIV and disabilities, through integrated services in health, mental health, HIV prevention, leadership development, and economic empowerment."
                            },
                            {
                                name: "Tangata Group",
                                image: "/Tangata.png",
                                website: "https://www.tangatagroup.org/",
                                description: "Tangata Group is a human and disability rights-based organization that facilitates collaboration among domestic and international communities in developing local projects."
                            },
                            {
                                name: "Mama Agnes Ochilo Foundation",
                                image: "/Ochillo.jpeg",
                                website: "#",
                                description: "This initiative represents not just the provision of physical materials, but a renewed commitment to fostering an environment conducive to learning and growth."
                            },
                        ].map((partner, index) => (
                            <motion.a
                                key={index}
                                href={partner.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-background p-8 rounded-[2.5rem] border border-border/50 shadow-sm hover:shadow-xl transition-all group h-full flex flex-col cursor-pointer"
                            >
                                <div className="w-full rounded-[1.5rem] overflow-hidden mb-8 border border-border/10 shadow-sm relative group-hover:shadow-xl transition-all duration-500 bg-background">
                                    {partner.image ? (
                                        <img
                                            src={partner.image}
                                            alt={partner.name}
                                            className="w-full h-auto block transition-all duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="aspect-video flex items-center justify-center bg-muted/20">
                                            <Users size={48} className="text-muted-foreground/10" />
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                                    {partner.name}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                                    {partner.description}
                                </p>
                            </motion.a>
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
