import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import SuccessStories from "@/components/SuccessStories";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { BreadcrumbSchema, LocalBusinessSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contact Us - West Michigan Homebuyer Hub | Get Pre-Qualified Today</title>
        <meta 
          name="description" 
          content="Contact West Michigan Homebuyer Hub to connect with trusted local lenders. Get pre-qualified for zero down, low down payment, and first-time homebuyer programs in Grand Rapids and West Michigan." 
        />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
        <meta property="og:title" content="Contact Us - West Michigan Homebuyer Hub | Get Pre-Qualified Today" />
        <meta property="og:description" content="Contact West Michigan Homebuyer Hub to connect with trusted local lenders specializing in affordable loan programs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
        <meta property="og:image" content={`${SITE_URL}/og-image-contact.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - West Michigan Homebuyer Hub" />
        <meta name="twitter:description" content="Contact us to connect with trusted local lenders specializing in affordable loan programs." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image-contact.jpg`} />
      </Helmet>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get Started Today
            </h1>
            <p className="text-xl text-muted-foreground">
              Connect with trusted West Michigan lenders and take the first step toward homeownership.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions? Want to learn more about specific loan programs? 
                We're here to help guide you through the process.
              </p>

              <div className="space-y-6 mb-8">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        Grand Rapids, MI<br />
                        Serving all of West Michigan
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a href="tel:+16165551234" className="text-primary hover:underline">
                        (616) 555-1234
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:info@wmhomebuyerhub.com" className="text-primary hover:underline">
                        info@wmhomebuyerhub.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-6 bg-muted">
                <h3 className="font-semibold text-foreground mb-4">Your Information is Secure</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Free Consultation</strong> - No cost to you
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">No Obligation</strong> - You're never pressured
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">100% Secure</strong> - Encrypted and protected
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">We Never Sell Your Info</strong> - Your privacy matters
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Lead Form */}
            <div id="contact-form">
              <LeadForm variant="sidebar" />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <SuccessStories />

      {/* FAQ Section */}
      <FAQ />

      <Footer />
    </div>
  );
};

export default Contact;
