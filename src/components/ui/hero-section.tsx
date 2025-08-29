import { Button } from "@/components/ui/button";
import heroImage from "@/assets/legal-tech-hero.jpg";
import { Scale, Users, FileText, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern legal technology workspace"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-hero/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Scale className="w-8 h-8 text-legal-gold" />
            <span className="text-2xl font-bold">Aethel Counsel</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your AI Legal
            <span className="text-legal-gold block">Co-Pilot</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Like a skilled paralegal that never sleeps, handling client intake, 
            document drafting, and workflow automation so you can focus on 
            high-value strategic work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Try Live Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-legal-gold mb-2">85%</div>
              <div className="text-white/80">Time Saved on Intake</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-legal-gold mb-2">24/7</div>
              <div className="text-white/80">Client Availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-legal-gold mb-2">100%</div>
              <div className="text-white/80">Template Accuracy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;