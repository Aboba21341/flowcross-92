import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, ExternalLink, Key, Book } from "lucide-react";
import FlowCrossNavbar from "@/components/FlowCrossNavbar";
import FlowCrossFooter from "@/components/FlowCrossFooter";

const API = () => {
  const endpoints = [
    {
      method: "GET",
      path: "/api/v1/mods",
      description: "Получить список доступных модов",
      auth: false
    },
    {
      method: "GET", 
      path: "/api/v1/mods/{id}",
      description: "Получить информацию о конкретном моде",
      auth: false
    },
    {
      method: "POST",
      path: "/api/v1/mods",
      description: "Загрузить новый мод",
      auth: true
    },
    {
      method: "GET",
      path: "/api/v1/servers",
      description: "Получить список серверов",
      auth: false
    },
    {
      method: "GET",
      path: "/api/v1/user/profile",
      description: "Получить профиль пользователя",
      auth: true
    }
  ];

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "POST":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "PUT":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "DELETE":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <FlowCrossNavbar />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              FlowCross <span className="neon-text text-primary">API</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Интегрируйте возможности FlowCross в ваши приложения
            </p>
          </div>

          {/* Quick Start */}
          <Card className="glass-effect mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-6 h-6 text-primary" />
                Быстрый старт
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  FlowCross API предоставляет RESTful интерфейс для взаимодействия с нашей платформой.
                </p>
                <div className="bg-muted/20 rounded-lg p-4 font-mono text-sm">
                  <div className="text-muted-foreground mb-2"># Базовый URL</div>
                  <div>https://api.flowcross.space/v1</div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button variant="glow">
                    <Key className="w-4 h-4 mr-2" />
                    Получить API ключ
                  </Button>
                  <Button variant="outline">
                    <Book className="w-4 h-4 mr-2" />
                    Документация
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* API Endpoints */}
          <Card className="glass-effect mb-8">
            <CardHeader>
              <CardTitle>Доступные эндпоинты</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {endpoints.map((endpoint, index) => (
                  <div 
                    key={index} 
                    className="border border-border rounded-lg p-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Badge className={`font-mono ${getMethodColor(endpoint.method)}`}>
                          {endpoint.method}
                        </Badge>
                        <code className="text-sm text-foreground">{endpoint.path}</code>
                      </div>
                      {endpoint.auth && (
                        <Badge variant="outline" className="text-xs">
                          <Key className="w-3 h-3 mr-1" />
                          Требует авторизацию
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{endpoint.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Authentication */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle>Авторизация</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Для авторизованных запросов используйте Bearer токен в заголовке:
                </p>
                <div className="bg-muted/20 rounded-lg p-4 font-mono text-sm">
                  <div className="text-muted-foreground mb-2"># Пример запроса</div>
                  <div>curl -H "Authorization: Bearer YOUR_API_KEY" \</div>
                  <div className="ml-4">https://api.flowcross.space/v1/user/profile</div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Key className="w-4 h-4" />
                  <span>API находится в разработке. Скоро будет доступен публичный доступ.</span>
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

export default API;