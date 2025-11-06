import { Heart, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-dark border-t border-border/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsIDE3NSwgNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Sheesh Mahal Logo" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold text-primary font-playfair">Sheesh Mahal</h3>
                <p className="text-xs text-muted-foreground italic">Serving Memories</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Experience the finest pure vegetarian fine dining in Raipur
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Menu", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Cuisines */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-foreground mb-4">Our Cuisines</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Indian Specialties</li>
              <li>Tandoori Delights</li>
              <li>Continental Classics</li>
              <li>Chinese Favorites</li>
              <li>100% Pure Veg</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>3rd Floor, Navbodh Tower</p>
              <p>Main Road, Shankar Nagar</p>
              <p>Raipur, Chhattisgarh</p>
              <a
                href="https://www.instagram.com/sheeshmahalraipur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary-glow transition-colors mt-4"
              >
                <Instagram className="w-5 h-5 mr-2" />
                @sheeshmahalraipur
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sheesh Mahal. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-primary fill-primary" /> in Raipur
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
