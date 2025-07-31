import FlowCrossNavbar from "@/components/FlowCrossNavbar";
import FlowCrossFooter from "@/components/FlowCrossFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileImage, FileText, Palette } from "lucide-react";

const PressKit = () => {
  const assets = [
    {
      category: "Логотипы",
      icon: FileImage,
      items: [
        { name: "FlowCross Logo (PNG)", size: "2.1 MB" },
        { name: "FlowCross Logo (SVG)", size: "156 KB" },
        { name: "FlowCross Icon", size: "890 KB" }
      ]
    },
    {
      category: "Скриншоты",
      icon: FileImage,
      items: [
        { name: "Главный экран", size: "3.2 MB" },
        { name: "Интерфейс игры", size: "2.8 MB" },
        { name: "Настройки", size: "1.9 MB" }
      ]
    },
    {
      category: "Документы",
      icon: FileText,
      items: [
        { name: "Пресс-релиз", size: "245 KB" },
        { name: "Fact Sheet", size: "180 KB" },
        { name: "Биография команды", size: "320 KB" }
      ]
    }
  ];

  const brandColors = [
    { name: "Primary", color: "hsl(var(--primary))", hex: "#007BFF" },
    { name: "Accent", color: "hsl(var(--accent))", hex: "#6C63FF" },
    { name: "Secondary", color: "hsl(var(--secondary))", hex: "#64748B" }
  ];

  return (
    <div className="min-h-screen">
      <FlowCrossNavbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">
              Пресс-кит <span className="neon-text text-primary">FlowCross</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Медиа-ресурсы, логотипы и информация для прессы
            </p>
            <Button variant="glow" size="lg">
              <Download className="w-5 h-5 mr-2" />
              Скачать полный пресс-кит
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">О FlowCross</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Описание</h3>
                  <p className="text-muted-foreground mb-4">
                    FlowCross - это современный минималистичный лаунчер для Minecraft, 
                    созданный для обеспечения максимальной производительности и простоты использования.
                  </p>
                  <p className="text-muted-foreground">
                    Наша миссия - предоставить игрокам лучший опыт игры в Minecraft 
                    через инновационный и интуитивно понятный интерфейс.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Ключевые факты</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Основан в 2024 году</li>
                    <li>• Штаб-квартира в Кишинёве, Молдова</li>
                    <li>• Более 100,000 активных пользователей</li>
                    <li>• Поддержка всех версий Minecraft</li>
                    <li>• Открытый исходный код</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Assets Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Медиа-ресурсы</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {assets.map((category, index) => (
                <Card key={index} className="glass-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <category.icon className="w-6 h-6 mr-2 text-primary" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">{item.size}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Colors */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Фирменные цвета</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {brandColors.map((color, index) => (
                <Card key={index} className="glass-effect text-center">
                  <CardHeader>
                    <div 
                      className="w-24 h-24 rounded-full mx-auto mb-4"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <CardTitle>{color.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-mono">{color.hex}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Контакты для прессы</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              По вопросам прессы и партнерства свяжитесь с нами
            </p>
            <div className="text-center">
              <p className="text-lg"><strong>Email:</strong> press@flowcross.space</p>
              <p className="text-lg"><strong>Телефон:</strong> +373 XX XXX XXX</p>
            </div>
          </div>
        </section>
      </main>

      <FlowCrossFooter />
    </div>
  );
};

export default PressKit;