import { ArrowLeft, Download, CheckCircle, Shield, Zap, Users, Monitor, Smartphone, Apple, Clock, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const DownloadPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedChannel, setSelectedChannel] = useState("stable");
  const [timeLeft, setTimeLeft] = useState<number>(0);

  // Дата разблокировки - 3 августа 2025
  const unlockDate = new Date("2025-08-03T00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = unlockDate.getTime() - now;
      setTimeLeft(distance > 0 ? distance : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (milliseconds: number) => {
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);
  const isUnlocked = timeLeft === 0;

  const channels = [
    { id: "stable", name: "Stable", version: "v2.9.3", description: "Стабильная версия" },
    { id: "beta", name: "Beta", version: "v2.10.0-beta", description: "Бета-версия с новыми функциями" },
    { id: "dev", name: "Dev", version: "v2.11.0-dev", description: "Экспериментальная версия" }
  ];

  const downloadOptions = [
    {
      name: "Windows",
      icon: Monitor,
      version: "v2.9.3",
      size: "45.2 MB",
      requirements: "Windows 10/11",
      downloadUrl: "#",
      primary: true,
      available: true
    },
    {
      name: "macOS",
      icon: Apple,
      version: "v2.9.3",
      size: "52.1 MB",
      requirements: "macOS 11.0+",
      downloadUrl: "#",
      available: false
    },
    {
      name: "Linux",
      icon: Monitor,
      version: "v2.9.3",
      size: "48.7 MB",
      requirements: "Ubuntu 20.04+",
      downloadUrl: "#",
      available: false
    }
  ];

  const handleDownload = (option: any) => {
    if (option.name === "Windows" && !isUnlocked) {
      toast({
        title: "Загрузка заблокирована",
        description: `Загрузка будет доступна через ${days}д ${hours}ч ${minutes}м ${seconds}с`,
        variant: "destructive"
      });
      return;
    }
    
    if (!option.available) {
      toast({
        title: "Скоро",
        description: `Версия для ${option.name} будет доступна в ближайшее время`,
      });
      return;
    }

    // Логика скачивания для Windows после разблокировки
    toast({
      title: "Начинается загрузка",
      description: `Скачивание FlowCross для ${option.name}...`,
    });
  };

  const features = [
    {
      icon: Zap,
      title: "Молниеносная установка",
      description: "Установка завершается за 30 секунд"
    },
    {
      icon: Shield,
      title: "Безопасность",
      description: "Цифровая подпись и защита от вирусов"
    },
    {
      icon: Users,
      title: "Поддержка сообщества",
      description: "24/7 помощь от команды и сообщества"
    }
  ];

  const systemRequirements = {
    windows: {
      minimum: {
        os: "Windows 10 (64-bit)",
        ram: "4 GB",
        storage: "2 GB",
        java: "Java 8+"
      },
      recommended: {
        os: "Windows 11 (64-bit)",
        ram: "8 GB",
        storage: "4 GB SSD",
        java: "Java 17+"
      }
    }
  };

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
              <h1 className="text-3xl font-bold text-foreground">Скачать FlowCross</h1>
              <p className="text-muted-foreground">Получите самый быстрый лаунчер Minecraft</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Скачайте <span className="neon-text text-primary">FlowCross</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Присоединяйтесь к миллионам игроков, которые выбрали FlowCross для лучшего игрового опыта
            </p>
            
            {/* Version Badge */}
            <div className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Последняя версия v2.9.3</span>
              <Badge variant="secondary" className="text-xs">Стабильная</Badge>
            </div>
          </div>
        </div>

        {/* Channel Selection */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">Выберите канал обновлений</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {channels.map((channel) => (
              <Button
                key={channel.id}
                variant={selectedChannel === channel.id ? "default" : "outline"}
                className={`transition-all duration-300 ${
                  selectedChannel === channel.id 
                    ? "scale-105 shadow-lg bg-primary text-primary-foreground" 
                    : "hover:scale-105"
                }`}
                onClick={() => setSelectedChannel(channel.id)}
              >
                <Star className="w-4 h-4 mr-2" />
                {channel.name} {channel.version}
              </Button>
            ))}
          </div>
          <div className="text-center">
            <p className="text-muted-foreground">
              {channels.find(c => c.id === selectedChannel)?.description}
            </p>
          </div>
        </div>

        {/* Download Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {downloadOptions.map((option, index) => (
            <Card 
              key={index} 
              className={`relative bg-card/50 border-border hover:bg-card/80 transition-all duration-300 hover:scale-105 ${
                option.primary ? 'border-primary' : ''
              } ${!option.available || (option.name === "Windows" && !isUnlocked) ? 'opacity-75' : ''}`}
            >
              {option.primary && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Рекомендуемый
                </Badge>
              )}
              {!option.available && (
                <Badge 
                  variant="secondary" 
                  className="absolute -top-3 right-4 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                >
                  Скоро
                </Badge>
              )}
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-xl flex items-center justify-center">
                  <option.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{option.name}</CardTitle>
                <CardDescription>
                  <div className="space-y-1">
                    <div>Версия {option.version}</div>
                    <div className="text-xs">Размер: {option.size}</div>
                    <div className="text-xs">{option.requirements}</div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                {option.name === "Windows" && !isUnlocked ? (
                  <div className="space-y-3">
                    <div className="glass-effect p-3 rounded-lg text-center">
                      <Clock className="w-5 h-5 mx-auto mb-2 text-primary" />
                      <div className="text-sm font-medium">Разблокировка через:</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {days}д {hours}ч {minutes}м {seconds}с
                      </div>
                    </div>
                    <Button 
                      className="w-full" 
                      variant="outline"
                      disabled
                      onClick={() => handleDownload(option)}
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      Заблокировано до 3 августа
                    </Button>
                  </div>
                ) : (
                  <Button 
                    className="w-full" 
                    variant={option.primary && option.available ? "default" : "outline"}
                    disabled={!option.available}
                    onClick={() => handleDownload(option)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {option.available ? `Скачать для ${option.name}` : 'Скоро'}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 border-border text-center">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/20 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* System Requirements */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Системные требования</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  Минимальные требования
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ОС:</span>
                  <span>{systemRequirements.windows.minimum.os}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">RAM:</span>
                  <span>{systemRequirements.windows.minimum.ram}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Место:</span>
                  <span>{systemRequirements.windows.minimum.storage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Java:</span>
                  <span>{systemRequirements.windows.minimum.java}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Рекомендуемые требования
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ОС:</span>
                  <span>{systemRequirements.windows.recommended.os}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">RAM:</span>
                  <span>{systemRequirements.windows.recommended.ram}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Место:</span>
                  <span>{systemRequirements.windows.recommended.storage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Java:</span>
                  <span>{systemRequirements.windows.recommended.java}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Installation Guide */}
        <div className="mt-12 text-center">
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Нужна помощь с установкой?
            </h3>
            <p className="text-muted-foreground mb-6">
              Ознакомьтесь с нашим подробным руководством по установке или обратитесь в службу поддержки
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" onClick={() => navigate("/documentation")}>
                Руководство по установке
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate("/support")}>
                Служба поддержки
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;