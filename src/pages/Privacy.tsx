import FlowCrossNavbar from "@/components/FlowCrossNavbar";
import FlowCrossFooter from "@/components/FlowCrossFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Users, Mail, FileText } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      icon: Eye,
      title: "Какую информацию мы собираем",
      content: [
        "Персональные данные (имя, email, номер телефона)",
        "Техническая информация (IP-адрес, тип устройства, версия ОС)",
        "Данные об использовании (время в игре, настройки, предпочтения)",
        "Информация об аккаунте (логины, пароли в зашифрованном виде)"
      ]
    },
    {
      icon: Lock,
      title: "Как мы используем информацию",
      content: [
        "Предоставление и улучшение наших услуг",
        "Персонализация игрового опыта",
        "Связь с пользователями по важным вопросам",
        "Анализ использования для улучшения продукта",
        "Обеспечение безопасности и предотвращение мошенничества"
      ]
    },
    {
      icon: Users,
      title: "Передача информации третьим лицам",
      content: [
        "Мы не продаем персональные данные третьим лицам",
        "Информация может передаваться поставщикам услуг (хостинг, аналитика)",
        "Данные могут быть переданы при соблюдении законных требований",
        "При слиянии или продаже компании с соблюдением конфиденциальности"
      ]
    },
    {
      icon: Shield,
      title: "Защита данных",
      content: [
        "Использование современных методов шифрования",
        "Регулярные проверки безопасности систем",
        "Ограниченный доступ к персональным данным сотрудников",
        "Соблюдение международных стандартов безопасности",
        "Регулярные резервные копии с защищенным хранением"
      ]
    },
    {
      icon: FileText,
      title: "Ваши права",
      content: [
        "Право на доступ к вашим персональным данным",
        "Право на исправление неточной информации",
        "Право на удаление ваших данных",
        "Право на ограничение обработки данных",
        "Право на переносимость данных",
        "Право на отзыв согласия в любое время"
      ]
    },
    {
      icon: Mail,
      title: "Связь с нами",
      content: [
        "Email: privacy@flowcross.space",
        "Почтовый адрес: FlowCross LLC, Кишинёв, Молдова",
        "Время ответа: в течение 72 часов",
        "Все запросы обрабатываются конфиденциально"
      ]
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
              Политика <span className="neon-text text-primary">конфиденциальности</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Мы серьезно относимся к защите ваших персональных данных
            </p>
            <p className="text-sm text-muted-foreground">
              Последнее обновление: 25 июля 2025 года
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <Card className="glass-effect max-w-4xl mx-auto">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Эта Политика конфиденциальности описывает, как FlowCross LLC ("мы", "нас", "наш") 
                  собирает, использует и защищает информацию, которую вы предоставляете при использовании 
                  нашего лаунчера FlowCross и связанных с ним услуг. Используя наши услуги, 
                  вы соглашаетесь с практиками, описанными в этой политике.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {sections.map((section, index) => (
                <Card key={index} className="glass-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <section.icon className="w-6 h-6 mr-3 text-primary" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cookies Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Использование файлов cookie</h2>
              <Card className="glass-effect">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Что такое cookie?</h3>
                      <p className="text-muted-foreground">
                        Cookie - это небольшие текстовые файлы, которые сохраняются на вашем устройстве 
                        при посещении веб-сайтов. Они помогают нам улучшить ваш опыт использования сервиса.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Типы cookie, которые мы используем:</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• <strong>Необходимые cookie:</strong> Обеспечивают базовую функциональность</li>
                        <li>• <strong>Аналитические cookie:</strong> Помогают понять, как используется сайт</li>
                        <li>• <strong>Функциональные cookie:</strong> Запоминают ваши предпочтения</li>
                        <li>• <strong>Рекламные cookie:</strong> Показывают релевантную рекламу</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Управление cookie</h3>
                      <p className="text-muted-foreground">
                        Вы можете контролировать и удалять cookie через настройки вашего браузера. 
                        Обратите внимание, что отключение cookie может повлиять на функциональность сайта.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Data Retention */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Хранение данных</h2>
              <Card className="glass-effect">
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed">
                    Мы храним ваши персональные данные только до тех пор, пока это необходимо для 
                    предоставления наших услуг или соблюдения правовых обязательств. 
                    Аккаунты, неактивные более 2 лет, могут быть удалены после предварительного уведомления. 
                    Вы можете запросить удаление ваших данных в любое время, связавшись с нами.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Changes */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Изменения в политике</h2>
              <Card className="glass-effect">
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed">
                    Мы можем периодически обновлять эту Политику конфиденциальности. 
                    О существенных изменениях мы уведомим вас по электронной почте или 
                    через уведомления в лаунчере. Дата последнего обновления всегда указана в верхней части документа.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <FlowCrossFooter />
    </div>
  );
};

export default Privacy;