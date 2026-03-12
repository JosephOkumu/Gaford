import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ClosingCTA = () => {
    return (
        <section className="py-24 bg-card border-t border-border/50 relative overflow-hidden">
            {/* Soft decorative gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight tracking-tight"
                    >
                        Join a Global Movement of <span className="text-primary italic">Hope</span> and Action
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-2xl text-muted-foreground leading-relaxed mb-14 max-w-3xl mx-auto font-medium"
                    >
                        GaFORD is a bridge between global support and local rural impact.
                        We are looking for hands to build, hearts to give, and voices to
                        advocate for the next generation. Building communities across the
                        United States and Kenya, there is a place for you in this story.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link to="/get-involved" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto rounded-full px-8 text-base shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                                Get Involved Now
                            </Button>
                        </Link>
                        <Link to="/get-involved" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-8 text-base border-2 hover:bg-background hover:scale-105 active:scale-95 transition-all">
                                Partner With Us
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ClosingCTA;
