import { MessageSquare, FileText, Workflow, Brain } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: MessageSquare,
    title: "Conversational Client Onboarding",
    description: "AI-powered intake that guides clients through structured questionnaires, automatically capturing case details and screening for conflicts.",
    benefits: ["Reduces intake time by 85%", "24/7 client availability", "Structured data collection"]
  },
  {
    icon: FileText,
    title: "Template-Based Document Generation",
    description: "Automatically drafts engagement letters, motions, and client questionnaires using your firm's templates and intake data.",
    benefits: ["Consistent document quality", "Firm-specific templates", "Instant draft generation"]
  },
  {
    icon: Workflow,
    title: "Secure Matter-Centric Workspace",
    description: "Organized workspaces for each case with integrated calendar, document management, and client communication tracking.",
    benefits: ["Centralized case management", "Secure client data", "Workflow automation"]
  },
  {
    icon: Brain,
    title: "Adaptive Learning System",
    description: "Learns from your edits and preferences to improve document suggestions and workflow recommendations over time.",
    benefits: ["Personalized to your practice", "Continuous improvement", "Smart recommendations"]
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Core Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Streamline your practice with intelligent automation designed specifically 
            for solo practitioners and small law firms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="shadow-card border-0 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;