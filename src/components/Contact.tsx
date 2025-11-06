import { MapPin, Phone, Clock, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "3rd Floor, Navbodh Tower, Main Road, Shankar Nagar, Raipur",
      action: "Get Directions",
      link: "https://maps.google.com/?q=Sheesh+Mahal+Navbodh+Tower+Raipur",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+91 XXX XXX XXXX",
      action: "Call Now",
      link: "tel:+91XXXXXXXXXX",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Opening Hours",
      content: "Mon - Sun: 11:00 AM - 11:00 PM",
      action: null,
      link: null,
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Follow Us",
      content: "@sheeshmahalraipur",
      action: "View Instagram",
      link: "https://www.instagram.com/sheeshmahalraipur",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-gradient mb-4">
            Visit Us
          </h2>
          <div className="h-1 w-24 bg-gradient-gold mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We look forward to serving you an unforgettable dining experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:border-primary/50 hover:shadow-gold transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                {info.icon}
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                {info.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {info.content}
              </p>
              {info.action && info.link && (
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-glow font-medium text-sm inline-flex items-center transition-colors"
                >
                  {info.action}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="relative rounded-lg overflow-hidden shadow-elegant h-96 bg-card/30 backdrop-blur-sm border border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.7837428!2d81.6369!3d21.2514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE1JzA1LjAiTiA4McKwMzgnMTIuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sheesh Mahal Location"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="inline-block p-8 rounded-lg bg-gradient-gold/10 border border-primary/30 shadow-gold">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-4">
              Reserve Your Table Today
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg">
              Experience the finest vegetarian dining. Call us or visit to make a reservation.
            </p>
            <Button
              size="lg"
              className="bg-gradient-gold hover:opacity-90 text-background font-semibold px-8 py-6 text-lg shadow-gold"
              asChild
            >
              <a href="tel:+91XXXXXXXXXX">
                <Phone className="mr-2 h-5 w-5" />
                Call to Reserve
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
