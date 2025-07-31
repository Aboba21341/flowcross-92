import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cookie, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CookieConsent = () => {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("flowcross_cookie_consent");
    if (!consent) {
      // Показываем через 2 секунды после загрузки страницы
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("flowcross_cookie_consent", "accepted");
    setIsVisible(false);
    toast({
      title: "Cookies приняты",
      description: "Спасибо! Ваши настройки сохранены."
    });
  };

  const handleReject = () => {
    localStorage.setItem("flowcross_cookie_consent", "rejected");
    setIsVisible(false);
    toast({
      title: "Cookies отклонены",
      description: "Мы будем использовать только необходимые cookies."
    });
  };

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-slide-in-right">
      <Card className="glass-effect border-primary/20 shadow-2xl max-w-2xl mx-auto">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
            
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-2">
                Согласие на использование файлов cookie
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Мы используем файлы cookie для улучшения вашего опыта работы с сайтом, 
                анализа трафика и персонализации контента. Вы можете принять или отклонить 
                использование необязательных cookie.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="default" 
                  size="sm" 
                  onClick={handleAccept}
                  className="flex-1 sm:flex-none"
                >
                  Принять все
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleReject}
                  className="flex-1 sm:flex-none"
                >
                  Отклонить необязательные
                </Button>
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleDismiss}
              className="p-2 h-auto"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;