import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Clock } from "lucide-react";
import { games, TopUpOption } from "@/data/games";
import { toast } from "@/hooks/use-toast";

export default function GameDetail() {
  const { gameId } = useParams();
  const [selectedOption, setSelectedOption] = useState<TopUpOption | null>(null);
  const [userId, setUserId] = useState("");
  const [server, setServer] = useState("");
  const [email, setEmail] = useState("");
  const [cartItemCount, setCartItemCount] = useState(0);

  const game = games.find(g => g.id === gameId);

  if (!game) {
    return <div>Game not found</div>;
  }

  const handleOptionSelect = (option: TopUpOption) => {
    setSelectedOption(option);
  };

  const handleAddToCart = () => {
    if (!selectedOption) {
      toast({
        title: "Please select a top-up option",
        variant: "destructive",
      });
      return;
    }

    if (!userId) {
      toast({
        title: "Please enter your User ID",
        variant: "destructive",
      });
      return;
    }

    setCartItemCount(prev => prev + 1);
    toast({
      title: "Added to Cart",
      description: `${selectedOption.amount} for ${game.name} has been added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    if (!selectedOption) {
      toast({
        title: "Please select a top-up option",
        variant: "destructive",
      });
      return;
    }

    if (!userId) {
      toast({
        title: "Please enter your User ID",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Redirecting to Checkout",
      description: "Processing your order...",
    });
  };

  return (
    <div className="min-h-screen bg-gaming-gradient">
      <Header cartItemCount={cartItemCount} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground">Home</a>
          <span className="mx-2">/</span>
          <a href="/games" className="hover:text-foreground">Games</a>
          <span className="mx-2">/</span>
          <span className="text-foreground">{game.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Game Info */}
          <div className="lg:col-span-2">
            <div className="gaming-card mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <img 
                  src={game.image} 
                  alt={game.name}
                  className="w-full md:w-48 h-48 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h1 className="text-3xl font-bold text-foreground">{game.name}</h1>
                    {game.isPopular && (
                      <Badge className="bg-accent text-accent-foreground">
                        Most Popular
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{game.category}</p>
                  
                  <div className="flex items-center space-x-1 mb-6">
                    <Star className="h-5 w-5 fill-accent text-accent" />
                    <span className="font-medium">{game.rating}</span>
                    <span className="text-muted-foreground">(4.5k reviews)</span>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Instant Delivery</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>Secure Payment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top-up Options */}
            <div className="gaming-card">
              <h2 className="text-2xl font-bold text-foreground mb-6">Select Top-up Amount</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {game.topUpOptions.map((option) => (
                  <div
                    key={option.id}
                    className={`relative border rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                      selectedOption?.id === option.id
                        ? 'border-primary bg-primary/10 shadow-gaming-glow'
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option.isPopular && (
                      <Badge className="absolute -top-2 left-4 bg-accent text-accent-foreground text-xs">
                        Popular
                      </Badge>
                    )}
                    
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-foreground">{option.amount}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xl font-bold text-primary">
                            RM{option.price.toFixed(2)}
                          </span>
                          {option.discount && (
                            <>
                              <span className="text-sm text-muted-foreground line-through">
                                RM{option.originalPrice.toFixed(2)}
                              </span>
                              <Badge variant="secondary" className="text-xs">
                                -{option.discount}%
                              </Badge>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Purchase Form */}
          <div className="gaming-card h-fit">
            <h2 className="text-xl font-bold text-foreground mb-6">Purchase Details</h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="userId">User ID *</Label>
                <Input
                  id="userId"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder="Enter your User ID"
                  className="gaming-input mt-1"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Need help finding your User ID? Check the instructions below.
                </p>
              </div>

              <div>
                <Label htmlFor="server">Server</Label>
                <Select value={server} onValueChange={setServer}>
                  <SelectTrigger className="gaming-input mt-1">
                    <SelectValue placeholder="Select server" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asia">Asia</SelectItem>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="americas">Americas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="email">Email (for receipt)</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="gaming-input mt-1"
                />
              </div>

              {selectedOption && (
                <div className="border-t border-border pt-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Item:</span>
                      <span>{selectedOption.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Price:</span>
                      <span className="font-semibold">RM{selectedOption.price.toFixed(2)}</span>
                    </div>
                    {selectedOption.discount && (
                      <div className="flex justify-between text-green-500">
                        <span>You save:</span>
                        <span>RM{(selectedOption.originalPrice - selectedOption.price).toFixed(2)}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="space-y-3 pt-4">
                <Button 
                  onClick={handleBuyNow}
                  className="w-full gaming-button-primary"
                  size="lg"
                >
                  Buy Now
                </Button>
                <Button 
                  onClick={handleAddToCart}
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  size="lg"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 gaming-card">
          <h2 className="text-2xl font-bold text-foreground mb-6">How to Find Your User ID</h2>
          
          <div className="prose prose-invert max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Step 1: Open the Game</h3>
                <p className="text-muted-foreground">
                  Launch {game.name} on your device and make sure you're logged into your account.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Step 2: Go to Profile</h3>
                <p className="text-muted-foreground">
                  Navigate to your profile or settings section. Your User ID will be displayed there.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Step 3: Copy User ID</h3>
                <p className="text-muted-foreground">
                  Copy the User ID and paste it in the form above. Make sure it's correct!
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Step 4: Complete Purchase</h3>
                <p className="text-muted-foreground">
                  Select your desired amount and complete the purchase. You'll receive your top-up instantly!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}