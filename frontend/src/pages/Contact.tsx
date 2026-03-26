import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
    const directors = [
        {
            name: "Collins O. Oswago",
            role: "Executive Director",
            phones: ["+14438256937", "+254722667247"],
            email: "collinsoswago541@gmail.com",
            location: "USA / Kenya"
        },
        {
            name: "Kenneth O. Odoyo",
            role: "Administration and Finance Director",
            phones: ["+254700201786"],
            email: "kenneyodoyo@gmail.com",
            location: "Kenya"
        }
    ];

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Header */}
            <section className="relative py-20 lg:py-32 overflow-hidden bg-primary/5">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tighter uppercase leading-none">
                            GET IN <span className="text-primary italic">TOUCH</span>
                        </h1>
                        <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                            Have questions or want to partner with us? Our leadership team is ready to listen and collaborate for the future of our rural communities.
                        </p>
                    </motion.div>
                </div>
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </section>

            {/* Leadership Contact Grid */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {directors.map((director, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-card border border-border p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full group"
                            >
                                <div className="mb-8">
                                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                        <MessageSquare size={32} />
                                    </div>
                                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 leading-none">
                                        {director.name}
                                    </h3>
                                    <p className="text-primary font-bold uppercase tracking-[0.2em] text-[10px]">
                                        {director.role}
                                    </p>
                                </div>

                                <div className="space-y-6 flex-grow">
                                    <div className="space-y-3">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/50">Phone Numbers</p>
                                        {director.phones.map((phone, i) => (
                                            <a key={i} href={`tel:${phone}`} className="flex items-center gap-3 text-lg font-bold text-foreground hover:text-primary transition-colors">
                                                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                                                    <Phone size={14} className="text-muted-foreground" />
                                                </div>
                                                {phone}
                                            </a>
                                        ))}
                                    </div>

                                    <div className="space-y-3 pt-6 border-t border-border/50">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/50">Email Address</p>
                                        <a href={`mailto:${director.email}`} className="flex items-center gap-3 text-lg font-bold text-foreground hover:text-primary transition-colors break-all">
                                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                                                <Mail size={14} className="text-muted-foreground" />
                                            </div>
                                            {director.email}
                                        </a>
                                    </div>

                                    <div className="space-y-3 pt-6 border-t border-border/50">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/50">Service Area</p>
                                        <div className="flex items-center gap-3 text-lg font-bold text-foreground">
                                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                                                <MapPin size={14} className="text-muted-foreground" />
                                            </div>
                                            {director.location}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;
