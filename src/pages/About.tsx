import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Zap, Heart, Github, MessageCircle } from "lucide-react";
import FlowCrossNavbar from "@/components/FlowCrossNavbar";
import FlowCrossFooter from "@/components/FlowCrossFooter";

const About = () => {
  const values = [
    {
      icon: Zap,
      title: "Производительность",
      description: "Мы создаем быстрые и эффективные решения для геймеров"
    },
    {
      icon: Users,
      title: "Сообщество",
      description: "Строим платформу вместе с нашими пользователями"
    },
    {
      icon: Target,
      title: "Простота",
      description: "Сложные вещи должны быть просты в использовании"
    },
    {
      icon: Heart,
      title: "Страсть",
      description: "Мы любим то, что делаем, и делимся этой страстью"
    }
  ];

  const stats = [
    { number: "50K+", label: "Активных пользователей" },
    { number: "1000+", label: "Модов в библиотеке" },
    { number: "99.9%", label: "Время работы" },
    { number: "24/7", label: "Поддержка сообщества" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <FlowCrossNavbar />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              О <span className="neon-text text-primary">FlowCross</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы создаем инновационные решения для Minecraft сообщества, 
              объединяя производительность, простоту и мощные возможности в одном лаунчере.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="glass-effect text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission */}
          <Card className="glass-effect mb-16">
            <CardHeader>
              <CardTitle className="text-center text-3xl">Наша миссия</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                FlowCross создан для того, чтобы дать игрокам Minecraft лучший опыт взаимодействия 
                с игрой. Мы верим, что технологии должны упрощать, а не усложнять жизнь. 
                Наш лаунчер объединяет все необходимые инструменты в единой, интуитивно понятной 
                платформе, позволяя сосредоточиться на том, что действительно важно — на игре.
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Наши <span className="neon-text text-primary">ценности</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card 
                  key={index} 
                  className="glass-effect text-center hover:scale-105 transition-transform duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team */}
          <Card className="glass-effect mb-16">
            <CardHeader>
              <CardTitle className="text-center text-3xl">Команда</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground mb-8">
                FlowCross разрабатывается небольшой, но страстной командой разработчиков 
                и геймеров, которые понимают потребности Minecraft сообщества.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="glow">
                  <Users className="w-4 h-4 mr-2" />
                  Присоединиться к команде
                </Button>
                <Button variant="outline" onClick={() => window.open('https://github.com/flowcross-LLC/flowcross', '_blank')}>
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="text-center text-3xl">Свяжитесь с нами</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Есть вопросы, предложения или просто хотите поговорить? 
                Мы всегда рады услышать от нашего сообщества.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Discord сообщество
                </Button>
                <Button variant="outline">
                  Написать нам
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <FlowCrossFooter />
    </div>
  );
};

export default About;