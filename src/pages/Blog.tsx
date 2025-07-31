import FlowCrossNavbar from "@/components/FlowCrossNavbar";
import FlowCrossFooter from "@/components/FlowCrossFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "FlowCross v2.9.3: Новые возможности и улучшения",
      excerpt: "Представляем новую версию лаунчера с улучшенной производительностью и новыми функциями для комфортной игры.",
      author: "Команда FlowCross",
      date: "25 июля 2025",
      readTime: "5 мин",
      category: "Обновления",
      featured: true
    },
    {
      id: 2,
      title: "Как оптимизировать Minecraft для максимальной производительности",
      excerpt: "Подробное руководство по настройке игры для получения максимального FPS и плавного геймплея.",
      author: "Alex Петров",
      date: "20 июля 2025",
      readTime: "8 мин",
      category: "Руководства"
    },
    {
      id: 3,
      title: "Новые модификации в FlowCross Marketplace",
      excerpt: "Обзор самых популярных модов месяца и рекомендации от нашего сообщества.",
      author: "Maria Иванова",
      date: "15 июля 2025",
      readTime: "6 мин",
      category: "Моды"
    },
    {
      id: 4,
      title: "Интервью с создателем популярного мода TechCraft",
      excerpt: "Поговорили с разработчиком одного из самых загружаемых модов о процессе создания и планах на будущее.",
      author: "Dmitry Сидоров",
      date: "10 июля 2025",
      readTime: "12 мин",
      category: "Интервью"
    },
    {
      id: 5,
      title: "Советы по созданию идеального сервера",
      excerpt: "Все что нужно знать для запуска собственного Minecraft сервера с оптимальными настройками.",
      author: "Sergey Волков",
      date: "5 июля 2025",
      readTime: "10 мин",
      category: "Серверы"
    }
  ];

  const categories = ["Все", "Обновления", "Руководства", "Моды", "Интервью", "Серверы"];

  return (
    <div className="min-h-screen">
      <FlowCrossNavbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">
              Блог <span className="neon-text text-primary">FlowCross</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Последние новости, гайды и обновления из мира FlowCross и Minecraft
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            {blogPosts.filter(post => post.featured).map((post) => (
              <Card key={post.id} className="glass-effect max-w-4xl mx-auto overflow-hidden hover:scale-[1.02] transition-transform">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Badge variant="secondary" className="mb-4">Рекомендуемое</Badge>
                      <h3 className="text-2xl font-bold">Главная статья</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge>{post.category}</Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                    <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{post.author}</span>
                      </div>
                      <Button variant="ghost">
                        Читать полностью <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Последние статьи</h2>
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <Card key={post.id} className="glass-effect hover:scale-[1.02] transition-transform">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{post.author}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        Читать <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Подпишитесь на обновления</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Получайте последние новости и статьи прямо на вашу почту
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="glow">Подписаться</Button>
            </div>
          </div>
        </section>
      </main>

      <FlowCrossFooter />
    </div>
  );
};

export default Blog;