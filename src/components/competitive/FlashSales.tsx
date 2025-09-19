import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Timer, Flame, Zap } from "lucide-react";

interface FlashSale {
  id: string;
  game: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  endTime: Date;
  itemsLeft: number;
}

export function FlashSales() {
  const [timeLeft, setTimeLeft] = useState<{[key: string]: string}>({});

  const flashSales: FlashSale[] = [
    {
      id: "fs1",
      game: "Mobile Legends - 500 Diamonds",
      originalPrice: 28.90,
      salePrice: 19.90,
      discount: 31,
      endTime: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
      itemsLeft: 47
    },
    {
      id: "fs2", 
      game: "PUBG Mobile - 660 UC",
      originalPrice: 59.90,
      salePrice: 44.90,
      discount: 25,
      endTime: new Date(Date.now() + 4 * 60 * 60 * 1000), // 4 hours from now
      itemsLeft: 23
    },
    {
      id: "fs3",
      game: "Free Fire - 1000 Diamonds", 
      originalPrice: 89.90,
      salePrice: 69.90,
      discount: 22,
      endTime: new Date(Date.now() + 6 * 60 * 60 * 1000), // 6 hours from now
      itemsLeft: 15
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft: {[key: string]: string} = {};
      
      flashSales.forEach(sale => {
        const now = new Date().getTime();
        const distance = sale.endTime.getTime() - now;
        
        if (distance > 0) {
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
          newTimeLeft[sale.id] = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
          newTimeLeft[sale.id] = "EXPIRED";
        }
      });
      
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Flame className="h-8 w-8 text-accent animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              ⚡ FLASH SALES ⚡
            </h2>
            <Flame className="h-8 w-8 text-accent animate-pulse" />
          </div>
          <p className="text-muted-foreground text-lg">
            Limited time offers - Grab them before they're gone!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {flashSales.map((sale) => (
            <div key={sale.id} className="flash-sale rounded-lg p-6 text-center relative overflow-hidden">
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 animate-pulse"></div>
              
              <div className="relative z-10">
                <Badge className="promo-badge mb-3">
                  <Zap className="w-3 h-3 mr-1" />
                  FLASH SALE {sale.discount}% OFF
                </Badge>
                
                <h3 className="text-lg font-bold text-white mb-2">
                  {sale.game}
                </h3>
                
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <span className="text-2xl font-bold text-white">
                    RM{sale.salePrice.toFixed(2)}
                  </span>
                  <span className="text-sm text-white/70 line-through">
                    RM{sale.originalPrice.toFixed(2)}
                  </span>
                </div>
                
                <div className="bg-black/30 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Timer className="w-4 h-4 text-white" />
                    <span className="text-white font-mono text-lg">
                      {timeLeft[sale.id] || "00:00:00"}
                    </span>
                  </div>
                  <p className="text-white/80 text-sm">
                    Only {sale.itemsLeft} left in stock!
                  </p>
                </div>
                
                <Button className="w-full gaming-button-success font-bold">
                  GRAB NOW!
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm">
            ⏰ Flash sales are updated every hour with new deals!
          </p>
        </div>
      </div>
    </section>
  );
}

export function PromoBanner() {
  return (
    <div className="bg-gradient-to-r from-accent to-primary text-white py-3 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/80 to-primary/80 animate-pulse"></div>
      <div className="relative z-10">
        <p className="font-bold text-sm md:text-base">
          🎉 NEW CUSTOMER SPECIAL: Get 15% OFF your first purchase! Use code: WELCOME15 🎉
        </p>
      </div>
    </div>
  );
}