import { motion } from "framer-motion";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <section className="bg-primary/5 py-16 md:py-24 border-b border-border/50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6">
                            Privacy <span className="text-primary italic">Policy</span>
                        </h1>
                        <p className="text-lg text-muted-foreground font-medium">
                            Your assurance of privacy and transparency at GaFORD.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto prose prose-slate prose-lg">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-12 text-muted-foreground leading-relaxed"
                        >
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment</h2>
                                <p>
                                    Thank you for wanting to make a difference. Gateway for Rural Development (GaFORD) has created this privacy statement notice in order to demonstrate our firm commitment to your privacy. This policy discloses our information gathering and dissemination practices for this site.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">Collection of Information</h2>
                                <p>
                                    You do not have to provide any personal information on our website unless you choose to do so. Various locations on our website may invite you to give us certain contact information (e.g., name, address, telephone numbers, e-mail address) and other demographic information if you desire more information about our organization.
                                </p>
                                <p className="mt-4">
                                    We use this contact information to send you information about GaFORD and its programs. Your contact information may also be used to contact you when necessary. You may opt out of receiving future communications at any time by submitting a request.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">Confidentiality</h2>
                                <p>
                                    GaFORD assures you that the identity of all who contact us through this website is kept confidential: we do not rent, sell, or exchange our mailing lists, or otherwise disclose such information to third parties, except as may be required through voluntary cooperation with authorities if we judge that such cooperation is necessary to avoid potential serious harm.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Technical Data</h2>
                                <p>
                                    As with most other Internet sites, our web servers utilize "cookies" to track user activity within our site as well as record the IP address of each visitor. A cookie is a small data file that is stored on your computer which allows our system to recognize you when you return to our site.
                                </p>
                                <p className="mt-4">
                                    The recorded IP address tells us which domain you visited from, but not your email address or other private and personal information. We use the information we record to help diagnose problems with our servers, administer this website more effectively, and gather broad demographic information about our visitors' behavior on our site to improve the user experience.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">Analytics</h2>
                                <p>
                                    We use statistical tools (such as Google Analytics) to gather information about web traffic and user engagement. This data is used solely to optimize our website for our visitors and does not include personally identifiable information.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">External Links</h2>
                                <p>
                                    This website may contain links to other sites. GaFORD is not responsible for the privacy practices or the content of such other websites, even if our branding is present.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">Policy Updates</h2>
                                <p>
                                    GaFORD may make changes to this privacy notice from time to time. The revised notice will be effective immediately upon posting to our website. Please check this page periodically to determine whether changes have been made since your last visit.
                                </p>
                            </div>

                            <div className="pt-8 border-t border-border/50">
                                <p className="text-sm italic">
                                    Effective as of March 2026. If you have any questions about this privacy notice, please Contact Us.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
