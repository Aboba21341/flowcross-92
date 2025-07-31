import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import FlowCrossNavbar from "@/components/FlowCrossNavbar";
import FlowCrossFooter from "@/components/FlowCrossFooter";
import ParticleBackground from "@/components/ParticleBackground";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <FlowCrossNavbar />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="glass-effect p-12 rounded-3xl max-w-2xl mx-auto animate-fade-in">
            {/* 404 Number */}
            <div className="text-8xl md:text-9xl font-bold mb-6 neon-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              404
            </div>
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Страница не найдена
            </h1>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              К сожалению, запрашиваемая страница не существует или была перемещена.
            </p>
            
            {/* Current Path Info */}
            <div className="mb-8 p-4 bg-muted/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Попытка доступа к: <code className="bg-muted/40 px-2 py-1 rounded text-primary">{location.pathname}</code>
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="premium" 
                size="lg"
                onClick={() => navigate("/")}
                className="w-full sm:w-auto"
              >
                <Home className="w-5 h-5 mr-2" />
                На главную
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate(-1)}
                className="w-full sm:w-auto"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Назад
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <FlowCrossFooter />
    </div>
  );
};

export default NotFound;
