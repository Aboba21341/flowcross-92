import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import FlowCrossNavbar from "@/components/FlowCrossNavbar";
import FlowCrossFooter from "@/components/FlowCrossFooter";

const License = () => {
  const licensesSections = [
    {
      title: "FlowCross Launcher",
      license: "Проприетарная лицензия",
      description: "Основной лаунчер FlowCross распространяется по проприетарной лицензии FlowCross LLC."
    },
    {
      title: "Open Source компоненты",
      license: "Различные лицензии",
      description: "Лаунчер использует открытые библиотеки с соответствующими лицензиями."
    },
    {
      title: "Пользовательский контент",
      license: "Права пользователя",
      description: "Моды и контент, загруженные пользователями, остаются их интеллектуальной собственностью."
    }
  ];

  const thirdPartyLibraries = [
    { name: "React", license: "MIT", url: "https://reactjs.org/" },
    { name: "Electron", license: "MIT", url: "https://electronjs.org/" },
    { name: "Node.js", license: "MIT", url: "https://nodejs.org/" },
    { name: "Tailwind CSS", license: "MIT", url: "https://tailwindcss.com/" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <FlowCrossNavbar />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="neon-text text-primary">Лицензия</span> и права
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Информация о лицензиях и правах использования FlowCross
            </p>
          </div>

          {/* License Overview */}
          <Card className="glass-effect mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                Обзор лицензий
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {licensesSections.map((section, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <h3 className="font-semibold text-foreground mb-2">{section.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">Лицензия: {section.license}</p>
                    <p className="text-muted-foreground">{section.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* FlowCross License */}
          <Card className="glass-effect mb-8">
            <CardHeader>
              <CardTitle>Лицензионное соглашение FlowCross</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <h4 className="font-semibold text-foreground">1. Предоставление лицензии</h4>
                <p>
                  FlowCross LLC предоставляет вам ограниченную, неисключительную, 
                  непередаваемую лицензию на использование лаунчера FlowCross для личных нужд.
                </p>

                <h4 className="font-semibold text-foreground">2. Ограничения</h4>
                <p>
                  Вы не можете копировать, модифицировать, распространять, продавать или 
                  сдавать в аренду лаунчер или его части без письменного разрешения.
                </p>

                <h4 className="font-semibold text-foreground">3. Интеллектуальная собственность</h4>
                <p>
                  Все права на лаунчер FlowCross принадлежат FlowCross LLC. 
                  Торговые марки и логотипы являются собственностью их владельцев.
                </p>

                <h4 className="font-semibold text-foreground">4. Отказ от гарантий</h4>
                <p>
                  Программное обеспечение предоставляется "как есть" без каких-либо гарантий.
                </p>
              </div>
              
              <div className="mt-6 flex gap-4">
                <Button variant="glow">
                  <Download className="w-4 h-4 mr-2" />
                  Скачать полный текст
                </Button>
                <Button variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Просмотреть онлайн
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Third Party Libraries */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle>Сторонние библиотеки</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                FlowCross использует следующие открытые библиотеки и фреймворки:
              </p>
              <div className="space-y-4">
                {thirdPartyLibraries.map((lib, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-4 border border-border rounded-lg animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div>
                      <h4 className="font-medium text-foreground">{lib.name}</h4>
                      <p className="text-sm text-muted-foreground">Лицензия: {lib.license}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => window.open(lib.url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <FlowCrossFooter />
    </div>
  );
};

export default License;