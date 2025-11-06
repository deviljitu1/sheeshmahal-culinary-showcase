import { Instagram, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";
import insta4 from "@/assets/insta-4.jpg";
import insta5 from "@/assets/insta-5.jpg";
import insta6 from "@/assets/insta-6.jpg";

const InstagramFeed = () => {
  const posts = [
    {
      image: insta1,
      likes: "245",
      comments: "18",
      caption: "Traditional Thali - A complete feast 🍛✨",
    },
    {
      image: insta2,
      likes: "189",
      comments: "12",
      caption: "Malai Kofta perfection 🤤",
    },
    {
      image: insta3,
      likes: "312",
      comments: "24",
      caption: "Crispy Spring Rolls with love ❤️",
    },
    {
      image: insta4,
      likes: "278",
      comments: "31",
      caption: "Dine in luxury at Sheesh Mahal 🕯️",
    },
    {
      image: insta5,
      likes: "421",
      comments: "45",
      caption: "Sweet endings with Gulab Jamun 🍮",
    },
    {
      image: insta6,
      likes: "356",
      comments: "28",
      caption: "Sizzling Paneer Steak 🔥",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsIDE3NSwgNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <Instagram className="w-10 h-10 text-primary" />
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-gradient">
              Follow Our Journey
            </h2>
          </div>
          <div className="h-1 w-24 bg-gradient-gold mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
            Join our community and stay updated with daily specials, behind-the-scenes moments, and culinary inspiration
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10"
            asChild
          >
            <a
              href="https://www.instagram.com/sheeshmahalraipur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 h-5 w-5" />
              @sheeshmahalraipur
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <a
              key={index}
              href="https://www.instagram.com/sheeshmahalraipur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg aspect-square shadow-elegant animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 space-y-3">
                  <p className="text-foreground text-sm font-medium line-clamp-2">
                    {post.caption}
                  </p>
                  <div className="flex items-center space-x-4 text-foreground/90">
                    <span className="flex items-center space-x-1 text-sm">
                      <Heart className="w-4 h-4 fill-primary text-primary" />
                      <span>{post.likes}</span>
                    </span>
                    <span className="flex items-center space-x-1 text-sm">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Instagram icon indicator */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <Instagram className="w-6 h-6 text-foreground drop-shadow-lg" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-muted-foreground mb-4">
            Tag us in your photos for a chance to be featured!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              #SheeshMahal
            </span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              #RaipurFoodie
            </span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              #VegFineDining
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
