import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface GameCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  rating: number;
  isPopular?: boolean;
  onTopUp: () => void;
}

export function GameCard({ id, name, image, category, rating, isPopular, onTopUp }: GameCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/game/${id}`);
  };

  const handleTopUpClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onTopUp();
  };

  return (
    <div className="gaming-card group cursor-pointer" onClick={handleCardClick}>
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {isPopular && (
          <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">
            Popular
          </Badge>
        )}
      </div>
      
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">{category}</p>
        </div>
        
        <div className="flex items-center space-x-1">
          <Star className="h-4 w-4 fill-accent text-accent" />
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-sm text-muted-foreground">(4.5k reviews)</span>
        </div>
        
        <Button 
          onClick={handleTopUpClick}
          className="w-full gaming-button-primary"
          size="sm"
        >
          Top Up Now
        </Button>
      </div>
    </div>
  );
}