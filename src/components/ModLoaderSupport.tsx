import { Package, Wrench, Layers } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ModLoaderSupport = () => {
  const modLoaders = [
    {
      name: "Fabric",
      icon: Package,
      version: "0.15.11",
      description: "Легкий и быстрый модлоадер для современных версий",
      color: "text-blue-400",
      gradient: "from-blue-400/20 to-cyan-400/20",
      features: ["Быстрая загрузка", "Низкое потребление RAM", "Совместимость с Sodium"]
    },
    {
      name: "Forge",
      icon: Wrench,
      version: "47.2.20",
      description: "Самый популярный модлоадер с большой библиотекой модов",
      color: "text-orange-400",
      gradient: "from-orange-400/20 to-red-400/20",
      features: ["Огромная библиотека модов", "Стабильная работа", "Расширенные возможности"]
    },
    {
      name: "Quilt",
      icon: Layers,
      version: "0.24.0",
      description: "Современная альтернатива с улучшенной производительностью",
      color: "text-purple-400",
      gradient: "from-purple-400/20 to-pink-400/20",
      features: ["Совместимость с Fabric", "Улучшенная стабильность", "Новые возможности"]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden section-block mx-4 md:mx-8">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Поддержка <span className="neon-text text-primary">модлоадеров</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            FlowCross поддерживает все популярные модлоадеры для максимальной совместимости
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {modLoaders.map((loader, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl glass-effect hover:scale-105 transition-all duration-500 floating-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${loader.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`inline-block p-4 rounded-xl ${loader.color} bg-current/10`}>
                    <loader.icon className={`w-8 h-8 ${loader.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    v{loader.version}
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground">{loader.name}</h3>
                <p className="text-muted-foreground mb-6">{loader.description}</p>
                
                <div className="space-y-2">
                  {loader.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModLoaderSupport;