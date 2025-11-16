import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "VA Loans", path: "/va-loans" },
    { name: "First Time Home Buyer", path: "/first-time-buyer" },
    { name: "MSHDA Info Center", path: "/mshda-info-center" },
    { name: "Learning Center", path: "/learning-center" },
    { name: "West Michigan Living", path: "/west-michigan-living" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-primary font-bold text-xl">
            <Home className="w-6 h-6" />
            <span>West Michigan Homebuyer Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-4 py-2 rounded-lg text-foreground hover:text-secondary hover:bg-muted transition-all font-medium text-sm relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-3 text-foreground hover:text-secondary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
