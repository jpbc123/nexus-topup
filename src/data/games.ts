import mobilelegendsLogo from "@/assets/mobile-legends-logo.jpg";
import pubgLogo from "@/assets/pubg-logo.jpg";
import freefireLogo from "@/assets/free-fire-logo.jpg";

export interface Game {
  id: string;
  name: string;
  image: string;
  category: string;
  rating: number;
  isPopular: boolean;
  topUpOptions: TopUpOption[];
}

export interface TopUpOption {
  id: string;
  amount: string;
  originalPrice: number;
  price: number;
  discount?: number;
  isPopular?: boolean;
}

export const games: Game[] = [
  {
    id: "mobile-legends",
    name: "Mobile Legends",
    image: mobilelegendsLogo,
    category: "MOBA",
    rating: 4.8,
    isPopular: true,
    topUpOptions: [
      { id: "ml-100", amount: "100 Diamonds", originalPrice: 6.90, price: 5.90, discount: 15 },
      { id: "ml-250", amount: "250 Diamonds", originalPrice: 16.90, price: 14.90, discount: 12 },
      { id: "ml-500", amount: "500 Diamonds", originalPrice: 32.90, price: 28.90, discount: 12, isPopular: true },
      { id: "ml-1000", amount: "1000 Diamonds", originalPrice: 64.90, price: 58.90, discount: 9 },
      { id: "ml-2000", amount: "2000 Diamonds", originalPrice: 128.90, price: 118.90, discount: 8 },
      { id: "ml-3000", amount: "3000 Diamonds", originalPrice: 192.90, price: 159.90, discount: 17 },
    ]
  },
  {
    id: "pubg-mobile",
    name: "PUBG Mobile",
    image: pubgLogo,
    category: "Battle Royale",
    rating: 4.7,
    isPopular: true,
    topUpOptions: [
      { id: "pubg-60", amount: "60 UC", originalPrice: 6.90, price: 5.90, discount: 15 },
      { id: "pubg-325", amount: "325 UC", originalPrice: 32.90, price: 29.90, discount: 9 },
      { id: "pubg-660", amount: "660 UC", originalPrice: 64.90, price: 59.90, discount: 8, isPopular: true },
      { id: "pubg-1800", amount: "1800 UC", originalPrice: 168.90, price: 149.90, discount: 11 },
      { id: "pubg-3850", amount: "3850 UC", originalPrice: 328.90, price: 299.90, discount: 9 },
      { id: "pubg-8100", amount: "8100 UC", originalPrice: 648.90, price: 599.90, discount: 8 },
    ]
  },
  {
    id: "free-fire",
    name: "Free Fire",
    image: freefireLogo,
    category: "Battle Royale",
    rating: 4.6,
    isPopular: true,
    topUpOptions: [
      { id: "ff-50", amount: "50 Diamonds", originalPrice: 5.90, price: 4.90, discount: 17 },
      { id: "ff-100", amount: "100 Diamonds", originalPrice: 10.90, price: 9.90, discount: 9 },
      { id: "ff-210", amount: "210 Diamonds", originalPrice: 21.90, price: 19.90, discount: 9, isPopular: true },
      { id: "ff-520", amount: "520 Diamonds", originalPrice: 52.90, price: 49.90, discount: 6 },
      { id: "ff-1080", amount: "1080 Diamonds", originalPrice: 108.90, price: 99.90, discount: 8 },
      { id: "ff-2000", amount: "2000 Diamonds", originalPrice: 198.90, price: 179.90, discount: 10 },
    ]
  },
  {
    id: "genshin-impact",
    name: "Genshin Impact",
    image: "/api/placeholder/300/200",
    category: "RPG",
    rating: 4.9,
    isPopular: false,
    topUpOptions: [
      { id: "gi-60", amount: "60 Genesis Crystals", originalPrice: 5.90, price: 4.90, discount: 17 },
      { id: "gi-300", amount: "300 Genesis Crystals", originalPrice: 24.90, price: 22.90, discount: 8 },
      { id: "gi-980", amount: "980 Genesis Crystals", originalPrice: 79.90, price: 74.90, discount: 6, isPopular: true },
      { id: "gi-1980", amount: "1980 Genesis Crystals", originalPrice: 159.90, price: 149.90, discount: 6 },
      { id: "gi-3280", amount: "3280 Genesis Crystals", originalPrice: 259.90, price: 239.90, discount: 8 },
      { id: "gi-6480", amount: "6480 Genesis Crystals", originalPrice: 519.90, price: 479.90, discount: 8 },
    ]
  },
  {
    id: "valorant",
    name: "Valorant",
    image: "/api/placeholder/300/200",
    category: "FPS",
    rating: 4.7,
    isPopular: false,
    topUpOptions: [
      { id: "val-475", amount: "475 VP", originalPrice: 24.90, price: 19.90, discount: 20 },
      { id: "val-1000", amount: "1000 VP", originalPrice: 49.90, price: 44.90, discount: 10 },
      { id: "val-2050", amount: "2050 VP", originalPrice: 99.90, price: 89.90, discount: 10, isPopular: true },
      { id: "val-3650", amount: "3650 VP", originalPrice: 179.90, price: 159.90, discount: 11 },
      { id: "val-5350", amount: "5350 VP", originalPrice: 259.90, price: 229.90, discount: 12 },
      { id: "val-11000", amount: "11000 VP", originalPrice: 519.90, price: 449.90, discount: 13 },
    ]
  },
  {
    id: "steam-wallet",
    name: "Steam Wallet",
    image: "/api/placeholder/300/200",
    category: "Platform",
    rating: 4.9,
    isPopular: true,
    topUpOptions: [
      { id: "steam-10", amount: "RM10", originalPrice: 10.90, price: 10.00, discount: 8 },
      { id: "steam-20", amount: "RM20", originalPrice: 21.90, price: 20.00, discount: 9 },
      { id: "steam-50", amount: "RM50", originalPrice: 54.90, price: 50.00, discount: 9, isPopular: true },
      { id: "steam-100", amount: "RM100", originalPrice: 109.90, price: 100.00, discount: 9 },
      { id: "steam-200", amount: "RM200", originalPrice: 219.90, price: 200.00, discount: 9 },
      { id: "steam-500", amount: "RM500", originalPrice: 549.90, price: 500.00, discount: 9 },
    ]
  },
  {
    id: "roblox",
    name: "Roblox",
    image: "/api/placeholder/300/200",
    category: "Platform",
    rating: 4.5,
    isPopular: false,
    topUpOptions: [
      { id: "roblox-80", amount: "80 Robux", originalPrice: 5.90, price: 4.90, discount: 17 },
      { id: "roblox-400", amount: "400 Robux", originalPrice: 24.90, price: 19.90, discount: 20 },
      { id: "roblox-800", amount: "800 Robux", originalPrice: 49.90, price: 39.90, discount: 20, isPopular: true },
      { id: "roblox-1700", amount: "1700 Robux", originalPrice: 99.90, price: 79.90, discount: 20 },
      { id: "roblox-4500", amount: "4500 Robux", originalPrice: 249.90, price: 199.90, discount: 20 },
      { id: "roblox-10000", amount: "10000 Robux", originalPrice: 519.90, price: 399.90, discount: 23 },
    ]
  },
  {
    id: "minecraft",
    name: "Minecraft",
    image: "/api/placeholder/300/200",
    category: "Sandbox",
    rating: 4.8,
    isPopular: false,
    topUpOptions: [
      { id: "mc-320", amount: "320 Minecoins", originalPrice: 10.90, price: 9.90, discount: 9 },
      { id: "mc-1020", amount: "1020 Minecoins", originalPrice: 32.90, price: 29.90, discount: 9 },
      { id: "mc-1720", amount: "1720 Minecoins", originalPrice: 54.90, price: 49.90, discount: 9, isPopular: true },
      { id: "mc-3500", amount: "3500 Minecoins", originalPrice: 109.90, price: 99.90, discount: 9 },
      { id: "mc-8000", amount: "8000 Minecoins", originalPrice: 249.90, price: 229.90, discount: 8 },
    ]
  },
];