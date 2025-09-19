import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GameCard } from "@/components/game/GameCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Clock, DollarSign, Headphones } from "lucide-react";
import { games } from "@/data/games";
import { toast } from "@/hooks/use-toast";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const popularGames = games.filter(game => game.isPopular).slice(0, 6);
  const allGames = games.slice(0, 8);

  const handleTopUp = (gameId: string, gameName: string) => {
    setCartItemCount(prev => prev + 1);
    toast({
      title: "Added to Cart",
      description: `${gameName} top-up has been added to your cart.`,
    });
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    toast({
      title: "Login Successful",
      description: "Welcome back to XYZGAMER!",
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  const testimonials = [
    {
      name: "Ahmad R.",
      rating: 5,
      comment: "Fast delivery, got my diamonds in 2 minutes!",
      avatar: "AR"
    },
    {
      name: "Sarah L.",
      rating: 5,
      comment: "Best prices in Malaysia, very reliable",
      avatar: "SL"
    },
    {
      name: "Kevin T.",
      rating: 5,
      comment: "24/7 support really helped me",
      avatar: "KT"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Instant Delivery",
      description: "Get your top-ups delivered within minutes"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "100% secure transactions with SSL protection"
    },
    {
      icon: DollarSign,
      title: "Best Prices",
      description: "Lowest prices guaranteed in Malaysia"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support"
    }
  ];

  return (
    <div className="min-h-screen bg-gaming-gradient">
      <Header 
        cartItemCount={cartItemCount}
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroBanner} 
              alt="Gaming top-up hero" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-accent text-accent-foreground">
                🔥 Malaysia's #1 Gaming Platform
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Malaysia's Most
                <span className="text-primary block">Affordable</span>
                Gaming Top-Up Platform
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Instant delivery, secure payments, and 24/7 support. 
                Top up your favorite games at the best prices in Malaysia.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="gaming-button-primary text-lg px-8 py-3">
                  Browse Games
                </Button>
                <Button variant="outline" className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View Promotions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Games */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Popular Games
              </h2>
              <p className="text-muted-foreground text-lg">
                Top up the most popular games in Malaysia
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {popularGames.map((game) => (
                <GameCard
                  key={game.id}
                  id={game.id}
                  name={game.name}
                  image={game.image}
                  category={game.category}
                  rating={game.rating}
                  isPopular={game.isPopular}
                  onTopUp={() => handleTopUp(game.id, game.name)}
                />
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Games
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose XYZGAMER?
              </h2>
              <p className="text-muted-foreground text-lg">
                Experience the best gaming top-up service in Malaysia
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Games */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                All Games
              </h2>
              <p className="text-muted-foreground text-lg">
                Discover our complete collection of games
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allGames.map((game) => (
                <GameCard
                  key={game.id}
                  id={game.id}
                  name={game.name}
                  image={game.image}
                  category={game.category}
                  rating={game.rating}
                  isPopular={game.isPopular}
                  onTopUp={() => handleTopUp(game.id, game.name)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our Customers Say
              </h2>
              <p className="text-muted-foreground text-lg">
                Join thousands of satisfied gamers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="gaming-card text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                    {testimonial.avatar}
                  </div>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
