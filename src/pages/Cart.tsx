import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface CartItem {
  id: string;
  gameId: string;
  gameName: string;
  gameImage: string;
  amount: string;
  price: number;
  quantity: number;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      gameId: "mobile-legends",
      gameName: "Mobile Legends",
      gameImage: "/api/placeholder/100/100",
      amount: "500 Diamonds",
      price: 28.90,
      quantity: 1,
    },
    {
      id: "2",
      gameId: "pubg-mobile",
      gameName: "PUBG Mobile",
      gameImage: "/api/placeholder/100/100",
      amount: "660 UC",
      price: 59.90,
      quantity: 2,
    }
  ]);
  
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Item Removed",
      description: "Item has been removed from your cart.",
    });
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "welcome10") {
      setDiscount(0.1);
      toast({
        title: "Promo Code Applied!",
        description: "You got 10% discount!",
      });
    } else {
      toast({
        title: "Invalid Promo Code",
        description: "Please check your promo code and try again.",
        variant: "destructive",
      });
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = subtotal * discount;
  const tax = (subtotal - discountAmount) * 0.06; // 6% SST
  const total = subtotal - discountAmount + tax;

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is Empty",
        description: "Please add items to your cart before checkout.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Redirecting to Checkout",
      description: "Processing your order...",
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gaming-gradient">
        <Header cartItemCount={0} />
        
        <main className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-foreground mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any games to your cart yet.
            </p>
            <Button className="gaming-button-primary">
              <a href="/">Continue Shopping</a>
            </Button>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gaming-gradient">
      <Header cartItemCount={cartItems.length} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground">Home</a>
          <span className="mx-2">/</span>
          <span className="text-foreground">Shopping Cart</span>
        </nav>

        <h1 className="text-3xl font-bold text-foreground mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="gaming-card">
                <div className="flex items-center space-x-4">
                  <img 
                    src={item.gameImage} 
                    alt={item.gameName}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{item.gameName}</h3>
                    <p className="text-muted-foreground">{item.amount}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-lg font-bold text-primary">
                        RM{item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    
                    <span className="w-12 text-center font-semibold">
                      {item.quantity}
                    </span>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-bold text-foreground">
                      RM{(item.price * item.quantity).toFixed(2)}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Continue Shopping */}
            <div className="pt-4">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="/">← Continue Shopping</a>
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="gaming-card h-fit">
            <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>
            
            {/* Promo Code */}
            <div className="mb-6">
              <Label className="text-sm font-medium text-foreground">Promo Code</Label>
              <div className="flex mt-2">
                <Input
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code"
                  className="gaming-input rounded-r-none"
                />
                <Button 
                  onClick={applyPromoCode}
                  className="rounded-l-none gaming-button-accent"
                >
                  Apply
                </Button>
              </div>
              {discount > 0 && (
                <Badge className="mt-2 bg-green-500 text-white">
                  10% Discount Applied!
                </Badge>
              )}
            </div>
            
            {/* Price Breakdown */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">RM{subtotal.toFixed(2)}</span>
              </div>
              
              {discount > 0 && (
                <div className="flex justify-between text-green-500">
                  <span>Discount (10%)</span>
                  <span>-RM{discountAmount.toFixed(2)}</span>
                </div>
              )}
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax (SST 6%)</span>
                <span className="font-semibold">RM{tax.toFixed(2)}</span>
              </div>
              
              <div className="border-t border-border pt-3">
                <div className="flex justify-between text-lg">
                  <span className="font-bold text-foreground">Total</span>
                  <span className="font-bold text-primary">RM{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            {/* Checkout Button */}
            <Button 
              onClick={handleCheckout}
              className="w-full gaming-button-primary"
              size="lg"
            >
              Proceed to Checkout
            </Button>
            
            {/* Security Notice */}
            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground">
                🔒 Your payment information is secure and encrypted
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

function Label({ children, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...props} className="text-sm font-medium text-foreground">{children}</label>;
}