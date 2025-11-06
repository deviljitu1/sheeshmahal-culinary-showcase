import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroDish from "@/assets/hero-dish.jpg";

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroDish}
          alt="Signature Dish"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      </div>

      {/* Ornamental decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-t-2 border-l-2 border-primary/30 opacity-50" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border-b-2 border-r-2 border-primary/30 opacity-50" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in-up">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold">
            <span className="text-gradient">Sheesh Mahal</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-foreground/90 font-light italic">
            Serving Memories
          </p>

          <div className="h-px w-32 mx-auto bg-gradient-gold" />

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience the finest <span className="text-primary font-semibold">Pure Vegetarian</span> fine dining
            in Raipur. A symphony of authentic Indian, Tandoori, Continental & Chinese flavors
            crafted with passion and tradition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              onClick={scrollToMenu}
              className="bg-gradient-gold hover:opacity-90 text-background font-semibold px-8 py-6 text-lg shadow-gold"
            >
              Explore Our Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
            >
              Reserve a Table
            </Button>
          </div>

          <div className="pt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
