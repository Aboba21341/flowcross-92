import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, XCircle, Clock } from "lucide-react";
import FlowCrossNavbar from "@/components/FlowCrossNavbar";
import FlowCrossFooter from "@/components/FlowCrossFooter";

const Status = () => {
  const services = [
    {
      name: "FlowCross Launcher",
      status: "operational",
      uptime: "99.9%",
      description: "Основной лаунчер и загрузчик модов"
    },
    {
      name: "Authentication Service",
      status: "operational", 
      uptime: "99.8%",
      description: "Система авторизации и аккаунтов"
    },
    {
      name: "Mod Repository",
      status: "maintenance",
      uptime: "98.5%",
      description: "Хранилище модов и плагинов"
    },
    {
      name: "Game Servers",
      status: "operational",
      uptime: "99.7%",
      description: "Игровые серверы Minecraft"
    },
    {
      name: "API Gateway",
      status: "degraded",
      uptime: "95.2%",
      description: "API для внешних интеграций"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case "degraded":
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case "maintenance":
        return <Clock className="w-5 h-5 text-blue-400" />;
      case "outage":
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return <CheckCircle className="w-5 h-5 text-green-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      operational: "default",
      degraded: "secondary", 
      maintenance: "outline",
      outage: "destructive"
    } as const;

    const labels = {
      operational: "Работает",
      degraded: "Снижена производительность",
      maintenance: "Техобслуживание", 
      outage: "Недоступен"
    };

    return (
      <Badge variant={variants[status as keyof typeof variants] || "default"}>
        {labels[status as keyof typeof labels] || "Неизвестно"}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <FlowCrossNavbar />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Статус <span className="neon-text text-primary">системы</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Отслеживайте состояние всех служб FlowCross в реальном времени
            </p>
          </div>

          {/* Overall Status */}
          <Card className="glass-effect mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                Общий статус: Все системы работают
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Последнее обновление: {new Date().toLocaleString("ru-RU")}
              </p>
            </CardContent>
          </Card>

          {/* Services List */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <Card key={index} className="glass-effect animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {getStatusIcon(service.status)}
                      <div>
                        <h3 className="font-semibold text-foreground">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Uptime</div>
                        <div className="font-mono text-foreground">{service.uptime}</div>
                      </div>
                      {getStatusBadge(service.status)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Incident History */}
          <Card className="glass-effect mt-12">
            <CardHeader>
              <CardTitle>История инцидентов</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Все системы работают стабильно</h4>
                      <p className="text-sm text-muted-foreground">Никаких проблем не обнаружено</p>
                    </div>
                    <span className="text-sm text-muted-foreground">Сегодня</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <FlowCrossFooter />
    </div>
  );
};

export default Status;