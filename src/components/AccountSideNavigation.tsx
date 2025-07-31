import { useState, useEffect } from "react";
import {
  User,
  Settings,
  Palette,
  Shield,
  Bell,
  Download,
  Crown,
  Activity,
  HelpCircle,
  LogOut,
  ChevronRight
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AccountSideNavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
  onLogout: () => void;
  userData: {
    username: string;
    email?: string;
    avatar?: string;
    verified?: boolean;
    loginTime: number;
  };
}

const menuItems = [
  { 
    id: "profile", 
    title: "Профиль", 
    icon: User, 
    description: "Основная информация",
    hasNotification: false
  },
  { 
    id: "settings", 
    title: "Настройки", 
    icon: Settings, 
    description: "Общие настройки",
    hasNotification: false
  },
  { 
    id: "themes", 
    title: "Темы", 
    icon: Palette, 
    description: "Персонализация",
    hasNotification: false
  },
  { 
    id: "security", 
    title: "Безопасность", 
    icon: Shield, 
    description: "Верификация и защита",
    hasNotification: true
  },
  { 
    id: "notifications", 
    title: "Уведомления", 
    icon: Bell, 
    description: "Настройки оповещений",
    hasNotification: false
  },
  { 
    id: "downloads", 
    title: "Загрузки", 
    icon: Download, 
    description: "История скачиваний",
    hasNotification: false
  },
  { 
    id: "subscription", 
    title: "Подписка", 
    icon: Crown, 
    description: "Премиум статус",
    hasNotification: false
  },
  { 
    id: "activity", 
    title: "Активность", 
    icon: Activity, 
    description: "Статистика использования",
    hasNotification: false
  }
];

const supportItems = [
  { 
    id: "help", 
    title: "Помощь", 
    icon: HelpCircle, 
    description: "FAQ и поддержка",
    hasNotification: false
  }
];

export function AccountSideNavigation({ currentSection, onSectionChange, onLogout, userData }: AccountSideNavigationProps) {
  const isActive = (section: string) => currentSection === section;

  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId);
  };

  return (
    <div className="w-80 min-h-screen bg-black/80 backdrop-blur-xl border-r border-white/10 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-pink-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="relative z-10 p-6">
        {/* User Profile Header */}
        <div className="p-4 mb-6 bg-gradient-to-r from-white/10 to-primary/20 rounded-lg border border-white/20 backdrop-blur-sm relative overflow-hidden">
          {/* Animated glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 animate-pulse"></div>
          
          <div className="flex items-center gap-3 mb-3 relative z-10">
            <Avatar className="w-12 h-12 border-2 border-primary/50 shadow-lg">
              <AvatarImage src={userData.avatar} />
              <AvatarFallback className="bg-primary/20 text-primary font-bold backdrop-blur-sm">
                {userData.username.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm truncate text-white">{userData.username}</h3>
              <p className="text-xs text-white/70 truncate">
                {userData.email || "Без email"}
              </p>
              <div className="flex items-center gap-1 mt-1">
                {userData.verified && (
                  <Badge variant="default" className="text-xs py-0 px-2 bg-primary/80 text-white border border-primary/50 backdrop-blur-sm">
                    Подтвержден
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-3">
            Аккаунт
          </h3>
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className={`w-full group cursor-pointer relative transition-all duration-200 hover:scale-[1.02] p-3 rounded-lg ${
                  isActive(item.id) 
                    ? "bg-primary/20 text-primary font-medium border-r-2 border-primary shadow-lg backdrop-blur-sm" 
                    : "hover:bg-white/10 hover:text-white text-white/80"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center w-full">
                  <item.icon className={`h-4 w-4 transition-colors ${
                    isActive(item.id) ? "text-primary" : "text-white/60 group-hover:text-white"
                  }`} />
                  
                  <div className="flex-1 flex items-center justify-between ml-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-white">{item.title}</span>
                        {item.hasNotification && (
                          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse shadow-lg" />
                        )}
                        {item.id === "subscription" && (
                          <Badge variant="secondary" className="text-xs h-4 px-1.5 bg-accent/80 text-white border border-accent">
                            PRO
                          </Badge>
                        )}
                      </div>
                      <div className="text-xs text-white/60 mt-0.5">
                        {item.description}
                      </div>
                    </div>
                    <ChevronRight className={`w-3 h-3 text-white/60 transition-transform ${
                      isActive(item.id) ? "rotate-90" : "group-hover:translate-x-1"
                    }`} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Support */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-3">
            Поддержка
          </h3>
          <div className="space-y-1">
            {supportItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className={`w-full group cursor-pointer transition-all duration-200 hover:scale-[1.02] p-3 rounded-lg ${
                  isActive(item.id) 
                    ? "bg-primary/20 text-primary font-medium" 
                    : "hover:bg-white/10 text-white/80 hover:text-white"
                }`}
              >
                <div className="flex items-center w-full">
                  <item.icon className={`h-4 w-4 transition-colors ${
                    isActive(item.id) ? "text-primary" : "text-white/60 group-hover:text-white"
                  }`} />
                  <div className="flex-1 flex items-center justify-between ml-3">
                    <div>
                      <div className="text-sm font-medium text-white">{item.title}</div>
                      <div className="text-xs text-white/60">
                        {item.description}
                      </div>
                    </div>
                    <ChevronRight className={`w-3 h-3 text-white/60 transition-transform ${
                      isActive(item.id) ? "rotate-90" : "group-hover:translate-x-1"
                    }`} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Logout */}
        <div className="mt-auto border-t border-white/20 bg-white/5 backdrop-blur-sm relative p-3 rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded opacity-50"></div>
          <Button
            variant="outline"
            onClick={onLogout}
            className="w-full justify-start hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/50 transition-all duration-200 text-white border-white/20 relative z-10 backdrop-blur-sm"
          >
            <LogOut className="h-4 w-4 mr-2" />
            <span>Выйти из аккаунта</span>
          </Button>
        </div>
      </div>
    </div>
  );
}