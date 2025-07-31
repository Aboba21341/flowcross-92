import FlowCrossNavbar from "@/components/FlowCrossNavbar";
import FlowCrossFooter from "@/components/FlowCrossFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin, Clock, Users, Rocket, Heart } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Кишинёв, Молдова / Удаленно",
      type: "Полная занятость",
      description: "Разработка современного пользовательского интерфейса для FlowCross лаунчера"
    },
    {
      title: "Game Developer",
      department: "Engineering", 
      location: "Удаленно",
      type: "Полная занятость",
      description: "Создание игровых модулей и интеграций для Minecraft"
    },
    {
      title: "Community Manager",
      department: "Marketing",
      location: "Кишинёв, Молдова",
      type: "Полная занятость", 
      description: "Управление сообществом и взаимодействие с пользователями"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Медицинская страховка",
      description: "Полное покрытие медицинских расходов"
    },
    {
      icon: Rocket,
      title: "Профессиональный рост",
      description: "Обучение и развитие навыков"
    },
    {
      icon: Users,
      title: "Отличная команда",
      description: "Работа с талантливыми профессионалами"
    }
  ];

  return (
    <div className="min-h-screen">
      <FlowCrossNavbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">
              Карьера в <span className="neon-text text-primary">FlowCross</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Присоединяйтесь к нашей команде и помогите создать будущее игрового лаунчера
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Почему FlowCross?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="glass-effect">
                  <CardHeader className="text-center">
                    <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Открытые вакансии</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {openPositions.map((position, index) => (
                <Card key={index} className="glass-effect hover:scale-[1.02] transition-transform">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{position.title}</span>
                      <Button variant="outline">Подать заявку</Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-muted-foreground">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {position.department}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2" />
                        {position.type}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{position.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Не нашли подходящую позицию?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Мы всегда ищем талантливых людей. Отправьте нам свое резюме, и мы свяжемся с вами.
            </p>
            <Button variant="glow" size="lg">
              Отправить резюме
            </Button>
          </div>
        </section>
      </main>

      <FlowCrossFooter />
    </div>
  );
};

export default Careers;