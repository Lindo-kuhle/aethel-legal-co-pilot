import HeroSection from "@/components/ui/hero-section";
import FeaturesSection from "@/components/features/features-section";
import ChatDemo from "@/components/demo/chat-demo";
import DashboardPreview from "@/components/dashboard/dashboard-preview";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white">
              <Scale className="w-8 h-8 text-legal-gold" />
              <span className="text-xl font-bold">Aethel Counsel</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-white/90">
              <a href="#features" className="hover:text-legal-gold transition-colors">Features</a>
              <a href="#demo" className="hover:text-legal-gold transition-colors">Demo</a>
              <a href="#contact" className="hover:text-legal-gold transition-colors">Contact</a>
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <div id="features">
        <FeaturesSection />
      </div>

      {/* Demo Section */}
      <div id="demo">
        <ChatDemo />
      </div>

      {/* Dashboard Preview */}
      <DashboardPreview />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join forward-thinking legal professionals who've already streamlined 
              their workflows with Aethel Counsel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10"
              >
                Book Demo Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-legal-navy py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-white mb-4">
                <Scale className="w-6 h-6 text-legal-gold" />
                <span className="text-lg font-bold">Aethel Counsel</span>
              </div>
              <p className="text-white/70 text-sm">
                AI-powered legal automation for independent practitioners and small firms.
              </p>
            </div>
            
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-legal-gold mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-white/70 text-sm">hello@aethelcounsel.com</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-legal-gold mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-white/70 text-sm">1-800-AETHEL-1</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-white/50 text-sm">
              © 2024 Aethel Counsel. All rights reserved. Built for legal professionals.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;