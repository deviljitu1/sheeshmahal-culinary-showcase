import { Leaf, Award, Users, Heart } from "lucide-react";
import restaurantExterior from "@/assets/restaurant-exterior.png";

const About = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Pure Vegetarian",
      description: "100% vegetarian cuisine crafted with the finest ingredients",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Award-winning chefs bringing culinary excellence to every dish",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Friendly",
      description: "Elegant ambiance perfect for families and celebrations",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Made with Love",
      description: "Every dish prepared with passion and attention to detail",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-gradient mb-4">
            Our Story
          </h2>
          <div className="h-1 w-24 bg-gradient-gold mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Where tradition meets innovation in pure vegetarian fine dining
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg leading-relaxed text-foreground/90">
              At <span className="text-primary font-semibold">Sheesh Mahal</span>, we believe that exceptional 
              vegetarian cuisine is an art form. Since our inception, we've been committed to serving not just 
              food, but cherished memories that last a lifetime.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              Our master chefs blend traditional Indian culinary techniques with contemporary presentation, 
              creating dishes that delight all senses. From authentic North Indian flavors to Continental 
              sophistication and Chinese favorites, every plate tells a story.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              Located in the heart of Raipur at Navbodh Tower, Shankar Nagar, we invite you to experience 
              the finest in vegetarian dining excellence.
            </p>
          </div>

          <div className="relative animate-fade-in-up">
            <div className="relative rounded-lg overflow-hidden shadow-elegant">
              <img
                src={restaurantExterior}
                alt="Sheesh Mahal Restaurant"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-lg -z-10" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-gold animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
