import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Search, Menu, X, Download, LogIn, User, Settings, LogOut, Stars, Zap, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate, Link } from "react-router-dom";
import FeaturesBlock from "@/components/FeaturesBlock";
import PhoneVerification from "@/components/PhoneVerification";
import SearchComponent from "@/components/SearchComponent";
import RegistrationSystem from "@/components/RegistrationSystem";
import RegistrationAdvantages from "@/components/RegistrationAdvantages";
import flowcrossLogo from "@/assets/flowcross-logo.png";

const FlowCrossNavbar = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"choice" | "login" | "register">("choice");
  const [starsEnabled, setStarsEnabled] = useState(() => {
    return localStorage.getItem("flowcross_falling_stars") === "true";
  });
  const [performanceMode, setPerformanceMode] = useState(() => {
    return localStorage.getItem("flowcross_performance_mode") === "true";
  });
  const [animationsEnabled, setAnimationsEnabled] = useState(() => {
    return localStorage.getItem("flowcross_animations") !== "false";
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    
    // Проверяем сохраненные данные
    const savedUser = localStorage.getItem("flowcross_user");
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setIsLoggedIn(true);
      setUsername(userData.username);
    }
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username && loginData.password) {
      // Проверяем зарегистрированных пользователей
      const registeredUsers = JSON.parse(localStorage.getItem("flowcross_registered_users") || "[]");
      const user = registeredUsers.find((u: any) => 
        u.username === loginData.username && u.password === loginData.password
      );

      if (user) {
        const userData = { 
          username: loginData.username, 
          email: user.email,
          loginTime: Date.now() 
        };
        localStorage.setItem("flowcross_user", JSON.stringify(userData));
        setIsLoggedIn(true);
        setUsername(loginData.username);
        setIsLoginOpen(false);
        setLoginData({ username: "", password: "" });
        toast({ title: "Успешный вход!", description: `Добро пожаловать, ${loginData.username}!` });
      } else {
        toast({ 
          title: "Ошибка входа", 
          description: "Неверное имя пользователя или пароль. Сначала зарегистрируйтесь.",
          variant: "destructive"
        });
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("flowcross_user");
    setIsLoggedIn(false);
    setUsername("");
    navigate("/");
    toast({ title: "Выход выполнен", description: "До свидания!" });
  };

  const handleStarsToggle = (enabled: boolean) => {
    setStarsEnabled(enabled);
    localStorage.setItem("flowcross_falling_stars", enabled.toString());
    // Уведомляем другие компоненты об изменении
    window.dispatchEvent(new CustomEvent('falling-stars-toggle', { detail: { enabled } }));
  };

  const handlePerformanceToggle = (enabled: boolean) => {
    setPerformanceMode(enabled);
    localStorage.setItem("flowcross_performance_mode", enabled.toString());
    // Применяем производительные настройки
    const root = document.documentElement;
    if (enabled) {
      root.style.setProperty('--backdrop-blur', 'none');
      root.style.setProperty('--glass-bg', 'hsl(var(--card))');
      root.classList.add('performance-mode');
    } else {
      root.style.removeProperty('--backdrop-blur');
      root.style.removeProperty('--glass-bg');
      root.classList.remove('performance-mode');
    }
    window.dispatchEvent(new CustomEvent('performance-mode-toggle', { detail: { enabled } }));
  };

  const handleAnimationsToggle = (enabled: boolean) => {
    setAnimationsEnabled(enabled);
    localStorage.setItem("flowcross_animations", enabled.toString());
    // Отключаем/включаем анимации
    const root = document.documentElement;
    if (!enabled) {
      root.classList.add('no-animations');
    } else {
      root.classList.remove('no-animations');
    }
    window.dispatchEvent(new CustomEvent('animations-toggle', { detail: { enabled } }));
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-effect backdrop-blur-xl shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">
              <span className="neon-text">FlowCross</span>
              <span className="text-muted-foreground ml-1">LLC</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {/* Все пункты теперь будут в бургер-меню */}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <SearchComponent />
            
            {/* Settings Button - Always visible */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Settings className="w-5 h-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="glass-effect max-w-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Настройки
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Performance Settings */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Zap className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">Режим производительности</span>
                      </div>
                      <Switch
                        checked={performanceMode}
                        onCheckedChange={handlePerformanceToggle}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground ml-8">
                      Убирает блюр, свечения и партиклы для повышения производительности
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Sparkles className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">Анимации</span>
                      </div>
                      <Switch
                        checked={animationsEnabled}
                        onCheckedChange={handleAnimationsToggle}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground ml-8">
                      Включить/отключить все анимации интерфейса
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Stars className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">Падающие звезды</span>
                      </div>
                      <Switch
                        checked={starsEnabled}
                        onCheckedChange={handleStarsToggle}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground ml-8">
                      Включить анимацию падающих звезд на фоне
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Button 
              variant="outline" 
              size="sm" 
              className="bg-white text-black hover:bg-white/90"
              onClick={() => navigate("/download")}
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => window.open('https://github.com/flowcross-LLC/flowcross', '_blank')}
              className="p-2"
            >
              <div className="w-3 h-3 border-l-2 border-r-2 border-t-2 border-foreground transform rotate-45"></div>
            </Button>

            {/* Burger Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            
            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={() => navigate("/account")}>
                  <Settings className="w-4 h-4 mr-2" />Аккаунт
                </Button>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" />Выйти
                </Button>
              </div>
            ) : (
              <Dialog open={isLoginOpen} onOpenChange={(open) => {
                setIsLoginOpen(open);
                if (!open) setAuthMode("choice");
              }}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm"><LogIn className="w-4 h-4 mr-2" />Log In</Button>
                </DialogTrigger>
                <DialogContent className="glass-effect max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>
                      {authMode === "choice" && "Добро пожаловать в FlowCross"}
                      {authMode === "login" && "Вход в аккаунт"}
                      {authMode === "register" && "Регистрация"}
                    </DialogTitle>
                  </DialogHeader>
                  
                  {authMode === "choice" && (
                    <div className="space-y-6 text-center">
                      <p className="text-muted-foreground">Выберите действие для продолжения</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Button 
                          variant="outline" 
                          className="h-20 text-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                          onClick={() => setAuthMode("login")}
                        >
                          <LogIn className="w-6 h-6 mr-2" />
                          Войти в аккаунт
                        </Button>
                        <Button 
                          variant="outline" 
                          className="h-20 text-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                          onClick={() => setAuthMode("register")}
                          style={{ animationDelay: "0.1s" }}
                        >
                          <User className="w-6 h-6 mr-2" />
                          Создать аккаунт
                        </Button>
                      </div>
                    </div>
                  )}

                  {authMode === "register" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <RegistrationAdvantages />
                      </div>
                      <div>
                        <RegistrationSystem 
                          onRegistrationComplete={(userData) => {
                            toast({
                              title: "Регистрация завершена!",
                              description: `Теперь вы можете войти как ${userData.username}`
                            });
                            setAuthMode("login");
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {authMode === "login" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="glass-effect rounded-xl p-6">
                        <h3 className="text-xl font-bold mb-4 text-center">Вход в аккаунт</h3>
                        <form onSubmit={handleLogin} className="space-y-4">
                          <div>
                            <Label htmlFor="username">Имя пользователя</Label>
                            <Input 
                              id="username" 
                              value={loginData.username} 
                              onChange={(e) => setLoginData({...loginData, username: e.target.value})} 
                              placeholder="Введите имя пользователя" 
                              className="glass-effect"
                            />
                          </div>
                          <div>
                            <Label htmlFor="password">Пароль</Label>
                            <Input 
                              id="password" 
                              type="password" 
                              value={loginData.password} 
                              onChange={(e) => setLoginData({...loginData, password: e.target.value})} 
                              placeholder="Введите пароль" 
                              className="glass-effect"
                            />
                          </div>
                          <Button type="submit" variant="default" className="w-full bg-white text-black hover:bg-white/90">Войти</Button>
                          <div className="text-center">
                            <Button 
                              type="button" 
                              variant="ghost" 
                              onClick={() => setAuthMode("register")}
                              className="text-sm text-muted-foreground"
                            >
                              Нет аккаунта? Зарегистрироваться
                            </Button>
                          </div>
                        </form>
                      </div>
                      <div>
                        <PhoneVerification 
                          onVerificationComplete={(phone) => {
                            toast({
                              title: "Телефон подтвержден!",
                              description: `Номер ${phone} успешно верифицирован`
                            });
                          }}
                        />
                      </div>
                    </div>
                  )}


                  {authMode !== "choice" && (
                    <div className="flex justify-center pt-4">
                      <Button 
                        variant="ghost" 
                        onClick={() => setAuthMode("choice")}
                        className="text-sm text-muted-foreground"
                      >
                        ← Назад к выбору
                      </Button>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            )}
          </div>

          {/* Mobile menu button is now part of the main navigation above */}
        </div>

        {/* Desktop & Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md animate-fade-in">
            {/* Overlay to close menu */}
            <div 
              className="absolute inset-0" 
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu positioned under the button */}
            <div className={`absolute top-20 right-4 w-80 max-w-[calc(100vw-2rem)] glass-effect p-6 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl transition-all duration-300 ${
              isMobileMenuOpen ? 'animate-slide-in-right opacity-100 scale-100' : 'animate-slide-out-right opacity-0 scale-95'
            }`}>
              {/* Close button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Logo */}
              <div className="text-center mb-6">
                <span className="text-xl font-bold neon-text">FlowCross</span>
                <p className="text-xs text-muted-foreground mt-1">Меню навигации</p>
              </div>

              {/* Navigation Items */}
              <div className="space-y-2">
                <a 
                  href="#features" 
                  className="flex items-center w-full p-2.5 rounded-lg text-sm text-foreground hover:bg-white/10 hover:text-primary transition-all duration-300 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                  Функции
                </a>
                
                <Button 
                  variant="ghost" 
                  className="flex items-center w-full p-2.5 rounded-lg text-sm text-foreground hover:bg-white/10 hover:text-primary transition-all duration-300 group justify-start h-auto"
                  onClick={() => {
                    navigate("/download");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                  Скачать
                </Button>

                <Button 
                  variant="ghost" 
                  className="flex items-center w-full p-2.5 rounded-lg text-sm text-foreground hover:bg-white/10 hover:text-primary transition-all duration-300 group justify-start h-auto"
                  onClick={() => {
                    navigate("/product");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                  Продукт
                </Button>

                <Button 
                  variant="ghost" 
                  className="flex items-center w-full p-2.5 rounded-lg text-sm text-foreground hover:bg-white/10 hover:text-primary transition-all duration-300 group justify-start h-auto"
                  onClick={() => {
                    navigate("/advanced");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                  Продвинутые возможности
                </Button>

                <a 
                  href="#stats-section" 
                  className="flex items-center w-full p-2.5 rounded-lg text-sm text-foreground hover:bg-white/10 hover:text-primary transition-all duration-300 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                  Статистика
                </a>

                <Button 
                  variant="ghost" 
                  className="flex items-center w-full p-2.5 rounded-lg text-sm text-foreground hover:bg-white/10 hover:text-primary transition-all duration-300 group justify-start h-auto"
                  onClick={() => {
                    navigate("/marketplace");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                  Маркетплейс
                </Button>

                <button 
                  onClick={() => {
                    window.open('https://discord.gg/flowcross', '_blank');
                    setIsMobileMenuOpen(false);
                  }} 
                  className="flex items-center w-full p-2.5 rounded-lg text-sm text-foreground hover:bg-white/10 hover:text-primary transition-all duration-300 group text-left"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                  Сообщество
                </button>

                <a 
                  href="#pricing" 
                  className="flex items-center w-full p-2.5 rounded-lg text-sm text-foreground hover:bg-white/10 hover:text-primary transition-all duration-300 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                  Тарифы
                </a>
              </div>
              
              {/* Action Buttons */}
              <div className="border-t border-white/10 pt-6 mt-6 space-y-3">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full bg-white/10 border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
                  onClick={() => {
                    navigate("/download");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Скачать
                </Button>
                
                {!isLoggedIn && (
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-white/20 text-white hover:bg-white/10 transition-all duration-300"
                    onClick={() => {
                      setIsLoginOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Войти
                  </Button>
                )}
              </div>

              {/* Animated background elements */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                <div className="absolute top-4 left-4 w-16 h-16 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default FlowCrossNavbar;