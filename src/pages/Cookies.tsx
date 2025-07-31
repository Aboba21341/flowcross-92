import FlowCrossNavbar from "@/components/FlowCrossNavbar";
import FlowCrossFooter from "@/components/FlowCrossFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Cookie, Shield, Settings, BarChart3 } from "lucide-react";
import { useState } from "react";

const Cookies = () => {
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    functional: true,
    advertising: false
  });

  const cookieTypes = [
    {
      id: "necessary",
      icon: Shield,
      title: "Необходимые cookie",
      description: "Эти cookie необходимы для работы сайта и не могут быть отключены.",
      required: true,
      examples: [
        "Сессия пользователя",
        "Настройки безопасности",
        "Функциональность корзины",
        "Данные аутентификации"
      ]
    },
    {
      id: "analytics",
      icon: BarChart3,
      title: "Аналитические cookie",
      description: "Помогают нам понять, как посетители взаимодействуют с сайтом.",
      required: false,
      examples: [
        "Google Analytics",
        "Статистика посещений",
        "Анализ поведения пользователей",
        "Метрики производительности"
      ]
    },
    {
      id: "functional",
      icon: Settings,
      title: "Функциональные cookie",
      description: "Обеспечивают расширенную функциональность и персонализацию.",
      required: false,
      examples: [
        "Языковые предпочтения",
        "Тема оформления",
        "Сохраненные настройки",
        "Предпочтения интерфейса"
      ]
    },
    {
      id: "advertising",
      icon: Cookie,
      title: "Рекламные cookie",
      description: "Используются для показа релевантной рекламы.",
      required: false,
      examples: [
        "Таргетированная реклама",
        "Ретаргетинг",
        "Измерение эффективности рекламы",
        "Персонализированные предложения"
      ]
    }
  ];

  const handlePreferenceChange = (type: string, value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const savePreferences = () => {
    localStorage.setItem('flowcross_cookie_preferences', JSON.stringify(preferences));
    // Здесь можно добавить логику для применения настроек cookie
    alert('Настройки cookie сохранены!');
  };

  return (
    <div className="min-h-screen">
      <FlowCrossNavbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">
              Настройки <span className="neon-text text-primary">Cookie</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Управляйте своими предпочтениями по использованию файлов cookie
            </p>
          </div>
        </section>

        {/* What are Cookies */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <Card className="glass-effect max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Cookie className="w-8 h-8 mr-3 text-primary" />
                  Что такое cookie?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Cookie - это небольшие текстовые файлы, которые веб-сайты размещают на вашем устройстве 
                  для запоминания информации о вас. Они помогают сайтам работать более эффективно и 
                  предоставлять вам персонализированный опыт. Мы используем cookie для улучшения 
                  функциональности FlowCross и анализа того, как пользователи взаимодействуют с нашим сервисом.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cookie Preferences */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Управление cookie</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {cookieTypes.map((cookieType) => (
                <Card key={cookieType.id} className="glass-effect">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <cookieType.icon className="w-6 h-6 mr-3 text-primary" />
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            {cookieType.title}
                            {cookieType.required && (
                              <Badge variant="secondary">Обязательные</Badge>
                            )}
                          </CardTitle>
                          <p className="text-muted-foreground mt-1">{cookieType.description}</p>
                        </div>
                      </div>
                      <Switch
                        checked={preferences[cookieType.id as keyof typeof preferences]}
                        onCheckedChange={(checked) => handlePreferenceChange(cookieType.id, checked)}
                        disabled={cookieType.required}
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-semibold mb-2">Примеры использования:</h4>
                      <ul className="space-y-1">
                        {cookieType.examples.map((example, index) => (
                          <li key={index} className="text-muted-foreground flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Save Preferences */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-6">Сохранить настройки</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              После сохранения настроек они будут применены к вашему браузеру. 
              Вы можете изменить их в любое время, вернувшись на эту страницу.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={savePreferences} variant="glow" size="lg">
                Сохранить настройки
              </Button>
              <Button variant="outline" size="lg">
                Отклонить все (кроме необходимых)
              </Button>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Дополнительная информация</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle>Как удалить cookie?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Вы можете удалить cookie через настройки вашего браузера. 
                      В большинстве браузеров это можно сделать в разделе "Конфиденциальность" или "Безопасность".
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle>Сторонние cookie</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Некоторые cookie устанавливаются третьими сторонами (например, Google Analytics). 
                      Мы не контролируем эти cookie напрямую.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle>Обновления политики</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Мы можем обновлять нашу политику использования cookie. 
                      О значительных изменениях мы уведомим вас заранее.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle>Вопросы?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Если у вас есть вопросы о нашем использовании cookie, 
                      свяжитесь с нами по адресу privacy@flowcross.space
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FlowCrossFooter />
    </div>
  );
};

export default Cookies;