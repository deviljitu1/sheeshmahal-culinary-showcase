import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const Reviews = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      date: "2 weeks ago",
      review: "Absolutely stunning experience! The Paneer Butter Masala was divine, and the ambiance transported us to a royal palace. Service was impeccable. Will definitely return for special occasions!",
      avatar: "PS",
    },
    {
      name: "Rajesh Verma",
      rating: 5,
      date: "1 month ago",
      review: "Best vegetarian fine dining in Raipur, hands down! The Tandoori platter was cooked to perfection. Love the attention to detail in every dish. The staff is courteous and knowledgeable.",
      avatar: "RV",
    },
    {
      name: "Anita Patel",
      rating: 5,
      date: "3 weeks ago",
      review: "Celebrated our anniversary here and it was magical! The Dal Tadka reminded me of home, but elevated. Beautiful presentation, authentic flavors, and the gold accents everywhere add such elegance.",
      avatar: "AP",
    },
    {
      name: "Mohit Singh",
      rating: 5,
      date: "1 week ago",
      review: "Impressed by the variety! From Indian to Continental to Chinese, everything was top-notch. The Veg Lasagna was surprisingly amazing. Great place for family gatherings with excellent vegetarian options.",
      avatar: "MS",
    },
    {
      name: "Sneha Gupta",
      rating: 5,
      date: "2 months ago",
      review: "The most luxurious dining experience in the city! Staff went above and beyond to make our evening special. Food quality is exceptional, portions are generous, and the pricing is reasonable for the quality.",
      avatar: "SG",
    },
    {
      name: "Arun Kumar",
      rating: 5,
      date: "3 weeks ago",
      review: "Finally, a pure veg restaurant that doesn't compromise on taste or presentation! The Mushroom Kurkure and Paneer Tikka were highlights. Perfect spot for business dinners or romantic dates.",
      avatar: "AK",
    },
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "fill-primary text-primary"
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
    );
  };

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <section className="py-20 md:py-32 bg-gradient-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-gradient mb-4">
            What Our Guests Say
          </h2>
          <div className="h-1 w-24 bg-gradient-gold mx-auto mb-6" />
          
          {/* Rating Summary */}
          <div className="inline-flex flex-col items-center space-y-3 p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/30">
            <div className="flex items-center space-x-2">
              <span className="text-5xl font-bold text-primary">{averageRating.toFixed(1)}</span>
              <div className="flex flex-col">
                <StarRating rating={5} />
                <span className="text-sm text-muted-foreground mt-1">
                  Based on {totalReviews}+ reviews
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-gold transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/30" />

                {/* Review Text */}
                <p className="text-foreground/90 leading-relaxed text-sm">
                  "{review.review}"
                </p>

                {/* Rating */}
                <StarRating rating={review.rating} />

                {/* Reviewer Info */}
                <div className="flex items-center space-x-3 pt-4 border-t border-border/30">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-gold text-background font-semibold">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="inline-block p-8 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/30 shadow-gold">
            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
              Share Your Experience
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg">
              We'd love to hear about your dining experience at Sheesh Mahal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-gold hover:opacity-90 text-background font-semibold transition-opacity"
              >
                <Star className="mr-2 h-5 w-5 fill-background" />
                Leave a Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
