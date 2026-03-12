import { Link } from "react-router-dom";
import { Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/gaford-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto pt-16 md:pt-24 pb-8 px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="GaFORD" className="h-14 w-auto mb-4 bg-card rounded p-1" />
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Gateway for Rural Development — empowering youth, strengthening communities through health, education, and economic opportunity.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: Facebook, href: "https://web.facebook.com/profile.php?id=100083167848712" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/gateway-for-rural-development-gaford/posts/?feedView=all" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              {[
                { label: "About Us", to: "/about" },
                { label: "Our Programs", to: "/programs" },
                { label: "Impact & Stories", to: "/impact" },
                { label: "Get Involved", to: "/get-involved" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              {[
                { label: "Privacy Policy", to: "/privacy" },
                { label: "Terms of Use", to: "/terms" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-6 flex justify-center items-center text-xs text-secondary-foreground/50">
          <p>© {new Date().getFullYear()} GaFORD — Gateway for Rural Development. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
