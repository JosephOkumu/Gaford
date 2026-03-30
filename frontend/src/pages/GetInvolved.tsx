import { motion } from "framer-motion";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import VolunteerCTA from "@/components/VolunteerCTA";
import { Users, Mail, Phone, MapPin, Handshake } from "lucide-react";

const GetInvolved = () => {
    return (
        <main>
            {/* Header section */}
            <section className="bg-primary/5 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                            Help Us Build a <span className="text-primary italic">Better</span> Future
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            At GaFORD, we believe that sustainable change starts with community action.
                            Whether you're looking to donate, volunteer, or partner with us, your
                            contribution matters.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Reused sections from Home */}
            <GetInvolvedSection />

            {/* Additional Details Section */}
            <section className="section-padding bg-background">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <motion.div
                            id="partner-section"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                We are always looking for organizations, institutions, and individuals
                                who share our vision for rural development and youth empowerment.
                                Partnerships can take many forms, from project funding and technical
                                advice to joint community initiatives.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <Users size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Institutional Partnerships</h4>
                                        <p className="text-sm text-muted-foreground">Collaborate on research, policy, and large-scale development projects.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <Handshake size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Corporate Social Responsibility</h4>
                                        <p className="text-sm text-muted-foreground">Engage your employees and resources in meaningful community transformation.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-card border border-border rounded-2xl p-8"
                        >
                            <h2 className="text-3xl font-bold mb-6">Contact Coordinator</h2>
                            <p className="text-muted-foreground mb-8">
                                Have specific questions about how you can support our mission?
                                Reach out to our outreach team directly.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <Mail className="text-primary" />
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Email Us</p>
                                        <p className="text-foreground">info@gaford.org</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="text-primary" />
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Call Us</p>
                                        <p className="text-foreground">+254 7XX XXX XXX</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MapPin className="text-primary" />
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Location</p>
                                        <p className="text-foreground">Nairobi, Kenya / Maryland, USA</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section id="volunteer-section">
                <VolunteerCTA />
            </section>
        </main>
    );
};


export default GetInvolved;
