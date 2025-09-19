import { useState, useEffect } from "react";
import { Shield, Award, Users, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-8">
      <div className="trust-badge">
        <Shield className="w-4 h-4 mr-2" />
        SSL Secured
      </div>
      <div className="trust-badge">
        <Award className="w-4 h-4 mr-2" />
        Verified Merchant
      </div>
      <div className="trust-badge">
        <Users className="w-4 h-4 mr-2" />
        1M+ Happy Customers
      </div>
      <div className="trust-badge">
        <Shield className="w-4 h-4 mr-2" />
        Money Back Guarantee
      </div>
    </div>
  );
}

export function LiveChatBubble() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="live-chat-bubble"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </div>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="gaming-card max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-foreground">Live Support</h3>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Hi! I'm here to help with your gaming top-up needs. How can I assist you today?
              </p>
              <div className="bg-muted rounded-lg p-3">
                <p className="text-sm text-muted-foreground mb-2">Quick Help:</p>
                <div className="space-y-1">
                  <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                    How to find my User ID?
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                    Payment methods available
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                    Order not received
                  </Button>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button className="flex-1 gaming-button-primary">
                  Start Chat
                </Button>
                <Button variant="outline" className="flex-1">
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function RecentPurchaseNotification() {
  const [notifications, setNotifications] = useState<Array<{
    id: number;
    user: string;
    game: string;
    amount: string;
  }>>([]);

  const purchaseData = [
    { user: "Ahmad★★★", game: "Mobile Legends", amount: "500 Diamonds" },
    { user: "Sarah★★★★★", game: "PUBG Mobile", amount: "660 UC" },
    { user: "Kevin★★★★", game: "Free Fire", amount: "1000 Diamonds" },
    { user: "Mei Ling★★★★★", game: "Genshin Impact", amount: "980 Genesis Crystals" },
    { user: "Raj★★★", game: "Valorant", amount: "2050 VP" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomPurchase = purchaseData[Math.floor(Math.random() * purchaseData.length)];
      const newNotification = {
        id: Date.now(),
        ...randomPurchase
      };
      
      setNotifications(prev => [newNotification, ...prev.slice(0, 2)]);
      
      // Auto remove after 5 seconds
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
      }, 5000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {notifications.map((notification, index) => (
        <div 
          key={notification.id}
          className="recent-purchase"
          style={{ bottom: `${(index * 80) + 20}px` }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
              {notification.user.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {notification.user}
              </p>
              <p className="text-xs text-muted-foreground">
                bought {notification.amount}
              </p>
              <p className="text-xs text-primary">{notification.game}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export function PaymentMethods() {
  const paymentMethods = [
    { name: "Maybank2u", logo: "🏦", popular: true },
    { name: "CIMB Clicks", logo: "🏦", popular: true },
    { name: "Public Bank", logo: "🏦", popular: false },
    { name: "Touch 'n Go", logo: "💳", popular: true },
    { name: "GrabPay", logo: "🚗", popular: true },
    { name: "Boost", logo: "⚡", popular: false },
    { name: "Visa", logo: "💳", popular: true },
    { name: "Mastercard", logo: "💳", popular: true },
    { name: "PayPal", logo: "🌐", popular: false },
    { name: "FPX", logo: "🏦", popular: true },
  ];

  return (
    <div className="bg-card rounded-lg p-6">
      <h3 className="text-lg font-bold text-foreground mb-4 text-center">
        Safe & Secure Payment Methods
      </h3>
      <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
        {paymentMethods.map((method, index) => (
          <div 
            key={index}
            className={`payment-method relative p-3 bg-muted rounded-lg flex items-center justify-center ${
              method.popular ? 'ring-2 ring-primary' : ''
            }`}
          >
            <span className="text-2xl">{method.logo}</span>
            {method.popular && (
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full"></div>
            )}
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground mt-4">
        All payments are encrypted and secured with 256-bit SSL technology
      </p>
    </div>
  );
}