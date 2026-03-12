import { motion } from "framer-motion";

const TermsOfUse = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <section className="bg-primary/5 py-16 md:py-24 border-b border-border/50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-max-w-3xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6">
                            Terms of <span className="text-primary italic">Use</span>
                        </h1>
                        <p className="text-lg text-muted-foreground font-medium">
                            Guidelines for your engagement with GaFORD's digital platforms.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto prose prose-slate prose-lg text-muted-foreground leading-relaxed">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-12"
                        >
                            <div className="bg-secondary/30 p-8 rounded-2xl border border-border/50 mb-12">
                                <p className="mb-4">
                                    You have arrived at an online service location that is owned and operated by Gateway for Rural Development (GaFORD). By accessing and using this Site, you acknowledge and accept these Terms of Use and all conditions contained herein.
                                </p>
                                <p>
                                    By using this Site, you also acknowledge and accept the Site’s Privacy Policy and consent to the collection and use of your data in accordance with such policy.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">1. Modifications to Terms</h2>
                                <p>
                                    GaFORD may, at its sole discretion, modify or revise these Terms and policies at any time. Any modifications will be effective immediately upon posting. Your continued use of the Site confirms your acceptance of such changes. We encourage you to periodically review these Terms to stay informed.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">2. Content and Intellectual Property</h2>
                                <p>
                                    The Site and all content—including logos, designs, text, graphics, photographs, and data (collectively, the “Site Materials”)—are owned by or licensed to GaFORD and are protected by intellectual property rights.
                                </p>
                                <p className="mt-4">
                                    We grant you a limited, non-exclusive, revocable license to access and use the Site Materials for your informational, non-commercial, and personal use, provided you maintain all copyright and proprietary notices.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">3. Use Restrictions</h2>
                                <p>The limited license granted does not include:</p>
                                <ul className="list-disc pl-6 mt-4 space-y-2">
                                    <li>Any resale or commercial use of the Site or Site Materials.</li>
                                    <li>Distribution, public performance, or display of any Materials without authorization.</li>
                                    <li>Modifying or making derivative uses of the Site.</li>
                                    <li>Use of data mining, robots, or similar extraction methods.</li>
                                    <li>Any use of the Site other than for its intended community-driven purpose.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">4. External Links</h2>
                                <p>
                                    The Site contains links to external internet sites and resources. GaFORD is not responsible for the availability or content of these outside resources. Any concerns regarding external links should be directed to the respective site administrator.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">5. User Submissions</h2>
                                <p>
                                    Any questions, comments, or ideas provided by you to GaFORD are non-confidential and shall become the sole property of GaFORD. We shall be entitled to the unrestricted use and dissemination of these submissions for any purpose without further acknowledgement or compensation to you.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-1">6. Disclaimer of Warranties</h2>
                                <p className="italic text-sm mb-4 uppercase tracking-tighter">Provided "As Is"</p>
                                <p>
                                    THE SITE AND SITE MATERIALS ARE PROVIDED ON AN "AS IS" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. GaFORD DISCLAIMS ALL OTHER WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. WE DO NOT WARRANT THAT THE SITE IS ERROR-FREE OR FREE OF HARMFUL COMPONENTS.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
                                <p>
                                    IN NO EVENT SHALL GaFORD, ITS DIRECTORS, OR AGENTS BE LIABLE FOR ANY DIRECT, SPECIAL, INDIRECT, OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE SITE, INCLUDING LOSS OF DATA OR PROFITS.
                                </p>
                            </div>

                            <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
                                <p className="text-sm italic">
                                    Effective as of March 2026.
                                </p>
                                <p className="text-sm font-medium">
                                    Questions? Contact us at info@gaford.org
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsOfUse;
