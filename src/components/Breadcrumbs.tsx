import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbSchema } from "./StructuredData";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <>
      <BreadcrumbSchema items={items} />
      <section className="pt-24 pb-2 px-4">
        <div className="container mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            {items.slice(1).map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                {index === items.length - 2 ? (
                  <span className="text-foreground font-medium">{item.name}</span>
                ) : (
                  <Link to={item.url} className="hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        </div>
      </section>
    </>
  );
};

export default Breadcrumbs;

