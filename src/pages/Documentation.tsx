import FlowCrossNavbar from "@/components/FlowCrossNavbar";
import FlowCrossFooter from "@/components/FlowCrossFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Book, Download, Settings, Gamepad2, Code, Users, ArrowRight } from "lucide-react";

const Documentation = () => {
  const sections = [
    {
      title: "Начало работы",
      icon: Download,
      description: "Установка и первый запуск FlowCross",
      articles: [
        "Системные требования",
        "Скачивание и установка",
        "Первоначальная настройка",
        "Создание аккаунта"
      ]
    },
    {
      title: "Интерфейс",
      icon: Settings,
      description: "Изучение интерфейса лаунчера",
      articles: [
        "Главное меню",
        "Настройки лаунчера",
        "Управление профилями",
        "Библиотека игр"
      ]
    },
    {
      title: "Игровой процесс",
      icon: Gamepad2,
      description: "Настройка игры и модификаций",
      articles: [
        "Выбор версии Minecraft",
        "Установка модов",
        "Настройки графики",
        "Решение проблем"
      ]
    },
    {
      title: "Для разработчиков",
      icon: Code,
      description: "API и создание модификаций",
      articles: [
        "FlowCross API",
        "Создание модов",
        "SDK документация",
        "Примеры кода"
      ]
    },
    {
      title: "Серверы",
      icon: Users,
      description: "Настройка и управление серверами",
      articles: [
        "Подключение к серверам",
        "Создание сервера",
        "Администрирование",
        "Модерация"
      ]
    },
    {
      title: "Справочник",
      icon: Book,
      description: "Полный справочник функций",
      articles: [
        "Горячие клавиши",
        "Командная строка",
        "Файлы конфигурации",
        "Частые вопросы"
      ]
    }
  ];

  const popularArticles = [
    "Как установить моды через FlowCross",
    "Настройка Java для оптимальной производительности",
    "Решение проблем с запуском игры",
    "Создание и настройка профилей",
    "Подключение к серверам"
  ];

  return (
    <div className="min-h-screen">
      <FlowCrossNavbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">
              Документация <span className="neon-text text-primary">FlowCross</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Полное руководство по использованию лаунчера FlowCross
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Поиск в документации..."
                className="pl-12 py-4 text-lg glass-effect"
              />
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline">Быстрый старт</Button>
              <Button variant="outline">API Reference</Button>
              <Button variant="outline">Примеры</Button>
              <Button variant="outline">Видео-уроки</Button>
              <Button variant="outline">FAQ</Button>
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <Card key={index} className="glass-effect hover:scale-[1.02] transition-transform">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <section.icon className="w-8 h-8 text-primary mr-3" />
                      <CardTitle>{section.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">{section.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.articles.map((article, articleIndex) => (
                        <li key={articleIndex}>
                          <Button
                            variant="ghost"
                            className="w-full justify-start p-2 h-auto text-left"
                          >
                            <ArrowRight className="w-4 h-4 mr-2 text-muted-foreground" />
                            {article}
                          </Button>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full mt-4">
                      Смотреть все
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Популярные статьи</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <Card key={index} className="glass-effect hover:scale-[1.01] transition-transform cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                            <span className="text-primary font-bold">{index + 1}</span>
                          </div>
                          <h3 className="text-lg font-semibold">{article}</h3>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Нужна помощь?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Не нашли ответ в документации? Наша команда поддержки всегда готова помочь
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glow">Связаться с поддержкой</Button>
              <Button variant="outline">Сообщество Discord</Button>
            </div>
          </div>
        </section>
      </main>

      <FlowCrossFooter />
    </div>
  );
};

export default Documentation;