import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
                <h3 className="font-semibold text-foreground mb-2">Your Information is Secure</h3>
                <p className="text-sm text-muted-foreground">
                  We take your privacy seriously. Your information is encrypted and only shared 
                  with verified local lenders who can help you with your homebuying needs. 
                  We never sell your information to third parties.
                </p>
              </Card>
            </div>

            {/* Lead Form */}
            <div>
              <LeadForm variant="sidebar" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
