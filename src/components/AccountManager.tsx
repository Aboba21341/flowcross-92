import { Users, Shield, Zap, Key, UserCheck, Server } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AccountManager = () => {
  const features = [
    {
      icon: Users,
      title: "Мультиаккаунт",
      description: "Управление неограниченным количеством аккаунтов Minecraft",
      color: "text-blue-400"
    },
    {
      icon: Shield,
      title: "Безопасное хранение",
      description: "Зашифрованное хранение данных аккаунтов локально",
      color: "text-green-400"
    },
    {
      icon: Zap,
      title: "Быстрое переключение",
      description: "Мгновенная смена аккаунта без перезапуска лаунчера",
      color: "text-yellow-400"
    },
    {
      icon: Key,
      title: "Автологин",
      description: "Автоматический вход в аккаунт при запуске игры",
      color: "text-purple-400"
    },
    {
      icon: UserCheck,
      title: "Проверка статуса",
      description: "Автоматическая проверка валидности аккаунтов",
      color: "text-pink-400"
    },
    {
      icon: Server,
      title: "Серверные аккаунты",
      description: "Поддержка аккаунтов для приватных серверов",
      color: "text-cyan-400"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden section-block mx-4 md:mx-8">
      <div className="absolute inset-0 bg-gradient-to-l from-accent/10 via-transparent to-primary/10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Менеджер <span className="neon-text text-primary">аккаунтов</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Удобное управление всеми вашими аккаунтами Minecraft в одном месте
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-border hover:bg-card/80 transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 bg-current/10 rounded-lg flex items-center justify-center mb-4 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Все ваши аккаунты под контролем
            </h3>
            <p className="text-muted-foreground mb-6">
              FlowCross предоставляет мощный и безопасный менеджер аккаунтов, который позволяет 
              вам легко управлять множеством аккаунтов Minecraft, переключаться между ними 
              и обеспечивает безопасное хранение ваших данных.
            </p>
            <Button variant="premium" size="lg" className="mr-4">
              Попробовать сейчас
            </Button>
            <Button variant="outline" size="lg">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountManager;