import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MessageCircle, Mail, Phone, HelpCircle } from "lucide-react";
import FlowCrossNavbar from "@/components/FlowCrossNavbar";
import FlowCrossFooter from "@/components/FlowCrossFooter";

const Help = () => {
  const faqItems = [
    {
      question: "Как установить FlowCross лаунчер?",
      answer: "Скачайте установочный файл с официального сайта, запустите его и следуйте инструкциям мастера установки. Убедитесь, что у вас установлена Java 8 или выше."
    },
    {
      question: "Почему лаунчер не запускается?",
      answer: "Проверьте, что у вас установлена актуальная версия Java. Также убедитесь, что антивирус не блокирует запуск лаунчера. Попробуйте запустить от имени администратора."
    },
    {
      question: "Как добавить моды в игру?",
      answer: "В лаунчере перейдите в раздел 'Моды', найдите нужный мод и нажмите 'Установить'. Мод автоматически загрузится и будет доступен в игре."
    },
    {
      question: "Можно ли играть оффлайн?",
      answer: "Да, FlowCross поддерживает оффлайн режим. В настройках лаунчера включите 'Автономный режим', но учтите, что некоторые функции будут недоступны."
    },
    {
      question: "Как создать свой сервер?",
      answer: "В разделе 'Серверы' нажмите 'Создать сервер', выберите тип сервера и следуйте инструкциям. Для публичного сервера потребуется Flow+ подписка."
    },
    {
      question: "Что делать если игра крашится?",
      answer: "Проверьте логи в папке лаунчера. Чаще всего проблема в конфликте модов или нехватке памяти. Попробуйте увеличить выделенную RAM в настройках."
    }
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Discord",
      description: "Присоединяйтесь к нашему сообществу",
      action: "Открыть Discord",
      color: "text-indigo-400"
    },
    {
      icon: Mail,
      title: "Email",
      description: "support@flowcross.space",
      action: "Написать письмо", 
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Техподдержка",
      description: "Онлайн чат с поддержкой",
      action: "Начать чат",
      color: "text-green-400"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <FlowCrossNavbar />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Центр <span className="neon-text text-primary">помощи</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Найдите ответы на частые вопросы или свяжитесь с нашей службой поддержки
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Поиск по базе знаний..."
                  className="pl-10 glass-effect"
                />
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className="glass-effect hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <method.icon className={`w-12 h-12 mx-auto mb-4 ${method.color}`} />
                  <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                  <Button variant="outline" className="w-full">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-primary" />
                Часто задаваемые вопросы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </main>

      <FlowCrossFooter />
    </div>
  );
};

export default Help;