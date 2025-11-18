import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, Home, Wrench, Zap, Droplets, ChevronRight } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const SITE_URL = "https://westmichigan-homehub.com";

const HomeInspectionChecklist = () => {
  const checklistItems = [
    { category: "Structural", items: ["Foundation", "Walls", "Roof", "Floors"] },
    { category: "Electrical", items: ["Wiring", "Outlets", "Circuit breaker", "GFCI outlets"] },
    { category: "Plumbing", items: ["Pipes", "Water pressure", "Hot water heater", "Drains"] },
    { category: "HVAC", items: ["Heating system", "Cooling system", "Ductwork", "Thermostat"] }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Home Inspection Checklist for First-Time Buyers | West Michigan</title>
        <meta name="description" content="Complete home inspection checklist for first-time buyers in West Michigan. Learn what inspectors check and how to use inspection results in negotiations." />
        <link rel="canonical" href={`${SITE_URL}/blog/home-inspection-checklist`} />
        <meta property="og:title" content="Home Inspection Checklist for First-Time Buyers" />
        <meta property="og:description" content="Complete home inspection checklist for first-time buyers in West Michigan." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/home-inspection-checklist`} />
      </Helmet>
      <ArticleSchema title="Home Inspection Checklist for First-Time Buyers | West Michigan" description="Complete home inspection checklist for first-time buyers in West Michigan." url="/blog/home-inspection-checklist" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Learning Center", url: "/learning-center" }, { name: "Home Inspection Checklist", url: "/blog/home-inspection-checklist" }]} />
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Home Inspection Checklist for First-Time Buyers</h1>
            <p className="text-xl text-muted-foreground mb-8">Learn what inspectors check and how to use inspection results in negotiations.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              A home inspection is one of the most important steps in the homebuying process. It's your opportunity to discover any issues 
              with the property before you finalize the purchase. While a home inspection isn't required by lenders (unlike an appraisal), 
              it's highly recommended and can save you thousands of dollars in unexpected repairs. Understanding what inspectors check and 
              how to use the inspection results can help you make an informed decision and negotiate effectively.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              What is a Home Inspection?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              A home inspection is a visual examination of a property's physical structure and systems. A licensed inspector evaluates the 
              condition of the home, identifies problems, and provides a detailed report. The inspection typically takes 2-4 hours and covers 
              everything from the foundation to the roof. While inspectors can identify issues, they don't typically test every system or 
              move furniture—they perform a visual, non-invasive examination.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              When to Schedule an Inspection
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              The inspection should be scheduled after your offer is accepted but before closing. Most purchase agreements include an 
              inspection contingency that gives you a specified period (typically 7-10 days) to complete the inspection and negotiate 
              repairs or price adjustments based on findings.
            </p>

            <Card className="p-6 bg-muted mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Inspection Timeline</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Schedule immediately:</strong> Book your inspector as soon as your offer is accepted</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Attend the inspection:</strong> Be present to see issues firsthand and ask questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Review the report:</strong> You'll receive a detailed report within 24-48 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Negotiate:</strong> Use findings to request repairs or price reductions</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Complete Home Inspection Checklist
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Here's a comprehensive breakdown of what inspectors examine in each area of the home:
            </p>

            <div className="space-y-6 mb-8">
              <Card className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Home className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Structural Components</h3>
                    <p className="text-muted-foreground mb-4">
                      The inspector examines the home's foundation, framing, and structural integrity:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Foundation:</strong> Cracks, settling, water damage, structural issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Walls:</strong> Cracks, bowing, water stains, structural problems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Roof:</strong> Shingles, flashing, gutters, signs of leaks, age and condition</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Floors:</strong> Sagging, uneven surfaces, water damage, structural support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Ceilings:</strong> Water stains, cracks, sagging, signs of previous leaks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Doors and windows:</strong> Operation, seals, frames, locks</span>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4">
                      <strong>Common issues in West Michigan:</strong> Foundation settling due to freeze-thaw cycles, roof damage from 
                      harsh winters, and water intrusion from heavy snow and rain.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Zap className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Electrical System</h3>
                    <p className="text-muted-foreground mb-4">
                      The inspector checks the electrical system for safety and code compliance:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Main panel:</strong> Condition, capacity, proper labeling, code compliance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Wiring:</strong> Type (aluminum vs. copper), age, visible damage, proper installation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Outlets and switches:</strong> Functionality, GFCI protection in wet areas, proper grounding</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Circuit breaker:</strong> Proper operation, capacity, no double-tapping</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Light fixtures:</strong> Operation, proper installation, safety</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Smoke and carbon monoxide detectors:</strong> Presence, operation, placement</span>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4">
                      <strong>Red flags:</strong> Knob-and-tube wiring (old and potentially dangerous), aluminum wiring (fire risk), 
                      overloaded circuits, missing GFCI outlets in bathrooms and kitchens.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Droplets className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Plumbing System</h3>
                    <p className="text-muted-foreground mb-4">
                      The inspector examines all plumbing components for functionality and potential issues:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Water supply:</strong> Water pressure, pipe material (lead, copper, PEX), leaks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Drainage:</strong> Drains, sewer lines, proper slope, blockages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Hot water heater:</strong> Age, condition, capacity, safety features, leaks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Fixtures:</strong> Faucets, toilets, showers, operation, leaks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Water quality:</strong> Visible issues (inspectors don't test water quality)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Sump pump:</strong> Operation, discharge location (important in West Michigan basements)</span>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4">
                      <strong>Common issues:</strong> Old galvanized pipes (can corrode and reduce water pressure), polybutylene pipes 
                      (prone to failure), water heater near end of life (typically 10-15 years), sump pump failure in basements.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Wrench className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-4">HVAC System</h3>
                    <p className="text-muted-foreground mb-4">
                      Heating, ventilation, and air conditioning systems are critical in Michigan's climate:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Heating system:</strong> Type (furnace, boiler, heat pump), age, operation, efficiency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Cooling system:</strong> Central AC, window units, operation, age, efficiency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Ductwork:</strong> Condition, insulation, leaks, proper routing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Thermostat:</strong> Operation, programming, compatibility</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Vents and registers:</strong> Proper placement, operation, airflow</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><strong>Chimney and flue:</strong> Condition, proper venting, safety (if applicable)</span>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4">
                      <strong>Important in Michigan:</strong> Heating systems are critical for harsh winters. Inspectors check for proper 
                      operation, but may recommend a separate HVAC specialist for detailed evaluation of older systems.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Additional Areas Inspected
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Inspectors also examine these important areas:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Interior</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Walls, ceilings, floors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Windows and doors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Stairs and railings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Cabinets and countertops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Appliances (if included)</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Exterior</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Siding and trim</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Gutters and downspouts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Driveway and walkways</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Deck, patio, porch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Drainage and grading</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Attic and Insulation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Insulation type and depth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Ventilation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Signs of leaks or pests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Structural issues</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Basement/Crawl Space</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Moisture and water intrusion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Foundation condition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Sump pump operation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Vapor barriers</span>
                  </li>
                </ul>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              What Inspectors DON'T Check
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              It's important to understand the limitations of a standard home inspection:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Septic systems (requires separate inspection)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Wells and water quality (requires separate testing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Pest inspections (requires separate termite/wood-destroying organism inspection)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Mold testing (requires separate specialist)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Radon testing (requires separate test, recommended in Michigan)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Chimney flue inspection (may require separate specialist)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Swimming pools and hot tubs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Items behind walls or under floors (non-invasive inspection)</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Understanding the Inspection Report
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              The inspection report will categorize issues by severity:
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Safety Issues</h3>
                <p className="text-muted-foreground">
                  These are critical problems that pose immediate safety risks, such as electrical hazards, structural problems, or gas leaks. 
                  These should be addressed immediately and are typically non-negotiable.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Major Defects</h3>
                <p className="text-muted-foreground">
                  Significant problems that need repair, such as a failing HVAC system, roof replacement needed, or foundation issues. These 
                  are expensive to fix and should be negotiated.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Minor Issues</h3>
                <p className="text-muted-foreground">
                  Small problems like a leaky faucet, missing caulk, or cosmetic issues. These are typically not deal-breakers but can be 
                  used in negotiations.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Maintenance Recommendations</h3>
                <p className="text-muted-foreground">
                  Suggestions for future maintenance, such as cleaning gutters, servicing HVAC, or replacing filters. These are informational 
                  and not typically negotiated.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Using Inspection Results in Negotiations
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              The inspection report gives you leverage to negotiate repairs or price adjustments:
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Request Repairs</h3>
                <p className="text-muted-foreground">
                  Ask the seller to fix specific issues before closing. This is common for safety issues and major defects. Be reasonable—focus 
                  on significant problems, not cosmetic issues.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Request Price Reduction</h3>
                <p className="text-muted-foreground">
                  Instead of asking for repairs, request a price reduction equal to the estimated cost of repairs. This gives you control 
                  over who does the work and when.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Request Seller Credit</h3>
                <p className="text-muted-foreground">
                  Ask for a credit at closing to cover repair costs. This reduces your cash needed at closing and allows you to address 
                  issues after you move in.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Walk Away</h3>
                <p className="text-muted-foreground">
                  If the inspection reveals major problems and the seller won't negotiate, you can typically walk away and get your earnest 
                  money back (if you have an inspection contingency).
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Choosing a Home Inspector
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Selecting the right inspector is crucial. Here's what to look for:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Licensed and certified:</strong> Check for state licensing and certifications (ASHI, InterNACHI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Experience:</strong> Look for inspectors with several years of experience, especially in your area</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Insurance:</strong> Ensure they have errors and omissions insurance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>References:</strong> Ask for references from recent clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Sample report:</strong> Review a sample report to ensure it's detailed and easy to understand</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Cost:</strong> Typical cost is $300-$500, but don't choose based solely on price</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Attending the Inspection
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              While not required, attending the inspection is highly recommended:
            </p>

            <Card className="p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>See issues firsthand:</strong> Photos in the report are helpful, but seeing problems in person gives better context</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Ask questions:</strong> The inspector can explain issues and answer questions on the spot</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Learn about the home:</strong> Inspectors often share maintenance tips and explain how systems work</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Prioritize issues:</strong> You can discuss which issues are most critical</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Note:</strong> Don't bring the seller or their agent—this is your time to evaluate the property</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Common Issues Found in West Michigan Homes
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Due to Michigan's climate and older housing stock, inspectors commonly find:
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Foundation Issues</h3>
                <p className="text-muted-foreground">
                  Freeze-thaw cycles can cause foundation settling and cracking. Inspectors look for signs of movement, water intrusion, 
                  and structural problems.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Basement Moisture</h3>
                <p className="text-muted-foreground">
                  High water tables and heavy precipitation can lead to basement moisture issues. Inspectors check for water stains, 
                  sump pump operation, and proper drainage.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Roof Damage</h3>
                <p className="text-muted-foreground">
                  Harsh winters with ice dams and heavy snow can damage roofs. Inspectors check for missing shingles, leaks, and signs 
                  of ice dam damage.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Old HVAC Systems</h3>
                <p className="text-muted-foreground">
                  Many Michigan homes have older heating systems. Inspectors evaluate age, efficiency, and operation, but may recommend 
                  a specialist for detailed evaluation.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Insulation Issues</h3>
                <p className="text-muted-foreground">
                  Older homes may have insufficient insulation, leading to high energy costs. Inspectors check attic and wall insulation 
                  levels.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Specialized Inspections to Consider
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              In addition to the standard inspection, consider these specialized inspections in Michigan:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Radon testing:</strong> Recommended in Michigan due to high radon levels in some areas. Costs $100-$200</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Termite inspection:</strong> Required by some lenders, checks for wood-destroying organisms. Costs $75-$150</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Septic inspection:</strong> If the home has a septic system, requires separate inspection. Costs $300-$500</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Well inspection:</strong> If the home has a well, test water quality and system operation. Costs $200-$400</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Mold inspection:</strong> If you see signs of mold or moisture issues. Costs $300-$600</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Chimney inspection:</strong> If the home has a fireplace or wood stove. Costs $150-$300</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              After the Inspection
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Once you receive the inspection report, you have several options:
            </p>

            <Card className="p-6 mb-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-foreground mb-2">1. Review the Report Thoroughly</h4>
                  <p className="text-muted-foreground">
                    Read through the entire report, paying special attention to safety issues and major defects. Don't panic over minor 
                    cosmetic issues—every home has them.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">2. Get Estimates for Major Repairs</h4>
                  <p className="text-muted-foreground">
                    For significant issues, get contractor estimates. This helps you negotiate effectively and understand the true cost 
                    of repairs.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">3. Decide What to Negotiate</h4>
                  <p className="text-muted-foreground">
                    Focus on safety issues and major defects. Be reasonable—sellers aren't required to fix every minor issue, and 
                    asking for too much can kill the deal.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">4. Submit Your Request</h4>
                  <p className="text-muted-foreground">
                    Work with your real estate agent to submit a repair request or request for price reduction/credit. Be specific and 
                    include estimates when possible.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">5. Be Prepared to Compromise</h4>
                  <p className="text-muted-foreground">
                    Sellers may counter your request. Be willing to negotiate and prioritize the most important issues. Remember, no home 
                    is perfect.
                  </p>
                </div>
              </div>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Inspection Contingency
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Most purchase agreements include an inspection contingency that protects you:
            </p>

            <Card className="p-6 bg-muted mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Time period:</strong> Typically 7-10 days to complete inspection and negotiate</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Your options:</strong> Request repairs, negotiate price, or walk away</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Earnest money:</strong> If you walk away due to inspection issues, you typically get your earnest money back</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Waiving contingency:</strong> In competitive markets, some buyers waive the inspection contingency, but this is risky</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get Pre-approved</h2>
            <p className="text-xl text-muted-foreground">Connect with local lenders who can recommend qualified inspectors.</p>
          </div>
          <Card className="p-8"><LeadForm /></Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomeInspectionChecklist;

