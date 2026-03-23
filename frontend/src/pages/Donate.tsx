import { useState } from "react";
import { motion } from "framer-motion";
import {
    Heart,
    ShieldCheck,
    TrendingUp,
    Globe,
    CheckCircle2,
    Lock,
    ArrowRight,
    CreditCard,
    Building2,
    Users,
    Handshake,
    Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Donate = () => {
    const [amount, setAmount] = useState<string>("50");
    const [frequency, setFrequency] = useState<string>("one-time");

    const impactLevels = [
        { amount: "25", impact: "Provides sanitary kits for 5 girls for a full term.", color: "text-orange-500", bgColor: "bg-orange-50" },
        { amount: "50", impact: "Supports a youth leadership workshop in rural Kajulu.", color: "text-blue-500", bgColor: "bg-blue-50" },
        { amount: "100", impact: "Funds secondary school supplies for 3 adolescent mothers.", color: "text-teal-500", bgColor: "bg-teal-50" },
        { amount: "500", impact: "Covers community-wide mental health sensitization program.", color: "text-indigo-500", bgColor: "bg-indigo-50" }
    ];

    const presets = ["10", "25", "50", "100", "250", "500"];

    const supportReasons = [
        { title: "Direct Field Impact", desc: "No middle-men. Your support goes directly to kits, trainers, and supplies in Kisumu and Kajulu.", icon: Globe, color: "text-orange-500", bgColor: "bg-orange-50" },
        { title: "Sustainable Growth", desc: "We don't believe in band-aids. We fund skills that allow youth to build their own futures.", icon: TrendingUp, color: "text-blue-500", bgColor: "bg-blue-50" },
        { title: "Radical Transparency", desc: "We publish quarterly reports on exactly how every cent was spent.", icon: ShieldCheck, color: "text-teal-500", bgColor: "bg-teal-50" },
        { title: "Community Driven", desc: "Our programs are designed by the locals who understand the challenges best.", icon: Users, color: "text-indigo-500", bgColor: "bg-indigo-50" },
    ];

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section - Why Donate Header */}
            <section className="relative py-20 lg:py-32 overflow-hidden bg-primary/5">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tighter uppercase leading-none">
                                WHY <span className="text-primary italic">DONATE</span>?
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium mb-4 max-w-3xl mx-auto">
                                Every contribution is a catalyst for change. At GaFORD, your generosity doesn't just fund projects; it fuels a sustainable movement for rural empowerment.
                            </p>
                            <div className="w-24 h-2 bg-primary mx-auto rounded-full mt-8" />
                        </motion.div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-0" />
            </section>

            {/* Support Reasons / Core Values Section */}
            <section className="py-24 bg-card border-b border-border/50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {supportReasons.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 bg-background border border-border rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group h-full"
                            >
                                <div className={`w-16 h-16 ${item.bgColor} ${item.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                    <item.icon size={32} />
                                </div>
                                <h4 className="font-black mb-4 uppercase text-xl tracking-widest leading-tight">{item.title}</h4>
                                <p className="text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Donation Form Section - Full Width & Centered */}
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-card border border-border shadow-2xl rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="text-center mb-10">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 mb-4">
                                        <Lock size={14} className="text-primary" />
                                        <span className="text-[10px] font-black uppercase text-primary tracking-widest">SECURE DONATION PORTAL</span>
                                    </div>
                                    <h2 className="text-3xl font-black uppercase tracking-tighter">Support the <span className="text-primary italic">Mission</span></h2>
                                </div>

                                <Tabs defaultValue="one-time" className="w-full" onValueChange={setFrequency}>
                                    <TabsList className="grid w-full grid-cols-2 mb-10 h-14 bg-muted rounded-2xl p-1.5">
                                        <TabsTrigger value="one-time" className="rounded-xl font-bold uppercase text-[10px] tracking-widest data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">One-Time</TabsTrigger>
                                        <TabsTrigger value="monthly" className="rounded-xl font-bold uppercase text-[10px] tracking-widest data-[state=active]:bg-primary data-[state=active]:text-white">Monthly Support</TabsTrigger>
                                    </TabsList>

                                    <div className="space-y-8">
                                        <div>
                                            <Label className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 block opacity-50">Select Amount (USD)</Label>
                                            <div className="grid grid-cols-3 gap-3">
                                                {presets.map((p) => (
                                                    <button
                                                        key={p}
                                                        onClick={() => setAmount(p)}
                                                        className={`h-14 rounded-xl font-black text-lg transition-all border-2 ${amount === p ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-[1.05]' : 'border-border hover:border-primary/50 text-foreground'}`}
                                                    >
                                                        ${p}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <Label className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 block opacity-50">Or Custom Amount</Label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-black text-muted-foreground">$</span>
                                                <Input
                                                    type="number"
                                                    placeholder="Custom"
                                                    className="h-16 pl-10 text-2xl font-black rounded-2xl border-2 border-border focus:border-primary transition-colors bg-muted/30"
                                                    value={presets.includes(amount) ? "" : amount}
                                                    onChange={(e) => setAmount(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <Button className="w-full h-20 rounded-2xl bg-primary text-white hover:bg-primary/90 text-2xl font-black uppercase tracking-tighter transition-all group shadow-2xl shadow-primary/20">
                                            Confirm Support
                                            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                                        </Button>

                                        <div className="flex items-center justify-center gap-4 py-4 border-t border-border mt-8">
                                            <CreditCard size={20} className="text-muted-foreground/40" />
                                            <Building2 size={20} className="text-muted-foreground/40" />
                                            <CheckCircle2 size={20} className="text-muted-foreground/40" />
                                        </div>
                                    </div>
                                </Tabs>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
            </section>

            {/* Impact of Donations Section - Vertical List Structure */}
            <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-left mb-12">
                            <p className="text-[10px] font-black text-primary tracking-widest uppercase mb-3">The Value of Your Support</p>
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight">THE IMPACT OF <br />YOUR <span className="text-primary italic">GIFT</span></h2>
                        </div>

                        <div className="space-y-4">
                            {impactLevels.map((level, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-[1.2rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all flex flex-col md:flex-row md:items-center gap-6 group"
                                >
                                    <div className="flex items-center gap-4 shrink-0">
                                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                            <Heart size={20} />
                                        </div>
                                        <span className="text-4xl font-black text-primary tracking-tighter">${level.amount}</span>
                                    </div>
                                    <div className="h-px w-full md:w-px md:h-8 bg-white/10" />
                                    <p className="text-base font-medium leading-relaxed opacity-80">{level.impact}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-0" />
            </section>

            {/* Alternative Ways to Give */}
            <section className="py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black mb-12 uppercase tracking-tighter">Alternative Ways to <span className="text-primary italic">Give</span></h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="p-10 border border-dashed border-border rounded-[2.5rem] hover:border-primary hover:bg-primary/5 transition-all group">
                            <Building2 className="mx-auto text-primary mb-6 transition-transform group-hover:scale-110" size={40} />
                            <h4 className="font-black mb-3 uppercase tracking-widest">Wire Transfer</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">Request our secure banking details for significant institutional or individual contributions.</p>
                        </div>
                        <div className="p-10 border border-dashed border-border rounded-[2.5rem] hover:border-primary hover:bg-primary/5 transition-all group">
                            <Handshake className="mx-auto text-primary mb-6 transition-transform group-hover:scale-110" size={40} />
                            <h4 className="font-black mb-3 uppercase tracking-widest">Corporate Partnerships</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">Empower your employees by setting up a recurring matching gift program for rural development.</p>
                        </div>
                        <div className="p-10 border border-dashed border-border rounded-[2.5rem] hover:border-primary hover:bg-primary/5 transition-all group">
                            <Calendar className="mx-auto text-primary mb-6 transition-transform group-hover:scale-110" size={40} />
                            <h4 className="font-black mb-3 uppercase tracking-widest">Legacy Giving</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">Include GaFORD in your will or estate planning to build a lasting foundation for the next generation.</p>
                        </div>
                    </div>

                    <div className="mt-16 bg-muted p-8 rounded-3xl max-w-2xl mx-auto border border-border/50">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                                <Users size={18} className="text-primary" />
                            </div>
                            <p className="text-sm font-bold text-foreground">Need specialized assistance?</p>
                        </div>
                        <a href="mailto:finance@gaford.org" className="bg-primary text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary/90 transition-all inline-block">
                            Contact Finance: finance@gaford.org
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Donate;
