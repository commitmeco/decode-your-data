import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BarChart3, Users, Target, Shield, Smartphone, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-data-visualization.jpg";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Behavioral Insights",
      description: "Uncover hidden friction points affecting user experience"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User-Centered Content",
      description: "Align your messaging with user needs and expectations"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Conversion Optimization",
      description: "Identify and fix funnel leaks that cost you customers"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trust & Credibility",
      description: "Build confidence through strategic trust indicators"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Experience",
      description: "Ensure flawless performance across all devices"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Data Intelligence",
      description: "Transform analytics into actionable growth strategies"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <span className="font-semibold text-lg text-foreground">CMCD</span>
          </div>
          <Badge variant="secondary" className="text-sm">
            Digital UX Research
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-primary-light text-primary-foreground px-4 py-2">
                Free Digital Health Check
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Your data already knows the way.{" "}
                <span className="text-primary">Decode it here.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover the hidden friction points costing you customers. Our research-backed quiz reveals exactly where your digital experience is failing—and how to fix it.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => navigate('/quiz')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              >
                Start Your Digital Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>2-minute assessment</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Instant results</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>No email required</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={heroImage} 
              alt="Data visualization and analytics dashboard"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">85% see improvements</p>
                  <p className="text-sm text-muted-foreground">within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            What We'll Uncover Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our diagnostic reveals the six critical areas where small changes create massive impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary-extra-light rounded-lg flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-primary text-primary-foreground p-12 text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to decode your data?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Join hundreds of business leaders who've discovered their hidden growth opportunities. 
              Your competitors aren't waiting—why should you?
            </p>
            <Button 
              size="lg"
              variant="secondary"
              onClick={() => navigate('/quiz')}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg"
            >
              Start Free Assessment Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">C</span>
            </div>
            <span className="font-semibold text-foreground">Commit Me Co Design</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 CMCD. Helping businesses decode their digital potential.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;