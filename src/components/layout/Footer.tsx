import { Gamepad2, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">XYZGAMER</span>
            </div>
            <p className="text-muted-foreground">
              Malaysia's most trusted gaming top-up platform. Instant delivery, secure payments, 24/7 support.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/games" className="text-muted-foreground hover:text-foreground transition-colors">Browse Games</a></li>
              <li><a href="/gift-cards" className="text-muted-foreground hover:text-foreground transition-colors">Gift Cards</a></li>
              <li><a href="/promotions" className="text-muted-foreground hover:text-foreground transition-colors">Promotions</a></li>
              <li><a href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="/help" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="/refund" className="text-muted-foreground hover:text-foreground transition-colors">Refund Policy</a></li>
              <li><a href="/track-order" className="text-muted-foreground hover:text-foreground transition-colors">Track Order</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="/security" className="text-muted-foreground hover:text-foreground transition-colors">Security</a></li>
              <li><a href="/disclaimer" className="text-muted-foreground hover:text-foreground transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">
            © 2024 XYZGAMER. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-sm text-muted-foreground">We accept:</span>
            <div className="flex space-x-2">
              <div className="bg-muted rounded px-2 py-1 text-xs">Visa</div>
              <div className="bg-muted rounded px-2 py-1 text-xs">Mastercard</div>
              <div className="bg-muted rounded px-2 py-1 text-xs">PayPal</div>
              <div className="bg-muted rounded px-2 py-1 text-xs">TnG</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}