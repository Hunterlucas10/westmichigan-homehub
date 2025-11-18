import { Link } from "react-router-dom";
import { Home, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Home className="w-6 h-6" />
              <span>West Michigan Homebuyer Hub</span>
            </Link>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted resource for zero down, low down, and first-time homebuyer programs in West Michigan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/learning-center" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Learning Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@wmihomebuyer.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  info@wmihomebuyer.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {currentYear} West Michigan Homebuyer Hub. All rights reserved.</p>
          <p className="mt-2">Your information is secure and only shared with verified local lenders.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
