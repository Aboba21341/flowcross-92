import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import InteractiveShowcase from "@/components/InteractiveShowcase";
import AdvancedFeatures from "@/components/AdvancedFeatures";

const Advanced = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="hover:bg-accent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Продвинутые возможности</h1>
              <p className="text-muted-foreground">Интерактивная демонстрация и расширенные функции FlowCross</p>
            </div>
          </div>
        </div>
      </div>

      <main className="relative z-10">
        <InteractiveShowcase />
        <AdvancedFeatures />
      </main>
    </div>
  );
};

export default Advanced;