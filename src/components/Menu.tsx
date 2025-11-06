import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Menu = () => {
  const menuCategories = [
    {
      name: "Indian",
      icon: "🍛",
      dishes: [
        "Paneer Butter Masala",
        "Malai Kofta",
        "Dal Tadka",
        "Aloo Jeera",
        "Stuffed Paratha",
      ],
    },
    {
      name: "Tandoori",
      icon: "🔥",
      dishes: [
        "Tandoori Stuffed Aloo",
        "Paneer Tikka",
        "Mushroom Kurkure",
        "Sizzling Veg Platter",
        "Roomali Roti",
      ],
    },
    {
      name: "Continental",
      icon: "🍝",
      dishes: [
        "Veg Au Gratin",
        "Paneer Steak",
        "Veg Lasagna",
        "Grilled Cottage Cheese",
        "Creamy Alfredo",
      ],
    },
    {
      name: "Chinese",
      icon: "🥢",
      dishes: [
        "Veg Manchurian",
        "Hakka Noodles",
        "Paneer Chilli",
        "Spring Rolls",
        "Fried Rice",
      ],
    },
  ];

  return (
    <section id="menu" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute top-20 right-10 w-40 h-40 border border-primary/10 rounded-full" />
      <div className="absolute bottom-20 left-10 w-60 h-60 border border-primary/10 rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-gradient mb-4">
            Our Menu
          </h2>
          <div className="h-1 w-24 bg-gradient-gold mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A curated selection of vegetarian delights from around the world
          </p>
        </div>

        <Tabs defaultValue="Indian" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-2 bg-card/50 p-2 rounded-lg">
            {menuCategories.map((category) => (
              <TabsTrigger
                key={category.name}
                value={category.name}
                className="data-[state=active]:bg-gradient-gold data-[state=active]:text-background font-semibold py-3 px-6 rounded-lg transition-all"
              >
                <span className="mr-2 text-xl">{category.icon}</span>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category.name} value={category.name} className="mt-8">
              <div className="bg-card/30 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-border/50 shadow-elegant animate-fade-in">
                <h3 className="font-playfair text-3xl font-bold text-center text-primary mb-8">
                  {category.name} Specialties
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {category.dishes.map((dish, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-lg p-6 bg-card/50 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-gold cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {dish}
                          </h4>
                          <div className="mt-2 h-px w-12 bg-primary/50 group-hover:w-20 transition-all duration-300" />
                        </div>
                        <span className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity">
                          {category.icon}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-muted-foreground text-sm italic">
            For our complete menu with descriptions and prices, please visit our restaurant
          </p>
          <p className="text-primary font-semibold mt-2">
            3rd Floor, Navbodh Tower, Main Road, Shankar Nagar, Raipur
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
