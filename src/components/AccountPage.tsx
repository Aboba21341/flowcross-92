import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AccountSideNavigation } from "@/components/AccountSideNavigation";
import { AccountSections } from "@/components/AccountSections";
import flowcrossLogo from "@/assets/flowcross-logo.png";

interface UserData {
  username: string;
  email?: string;
  loginTime: number;
  avatar?: string;
  verified?: boolean;
  verification?: {
    phone?: boolean;
    flowId?: boolean;
    flowSecurity?: boolean;
    phoneNumber?: string;
    flowIdValue?: string;
  };
  preferences?: {
    background?: string;
    theme?: string;
  };
}

const AccountPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [currentSection, setCurrentSection] = useState("profile");
  const [currentTheme, setCurrentTheme] = useState("default");

  useEffect(() => {
    const stored = localStorage.getItem("flowcross_user");
    if (stored) {
      const data = JSON.parse(stored);
      setUserData(data);
      setCurrentTheme(data.preferences?.theme || "default");
    }
  }, []);

  const handleUpdateUserData = (updates: UserData) => {
    setUserData(updates);
    localStorage.setItem("flowcross_user", JSON.stringify(updates));
  };

  const handleThemeChange = (themeId: string) => {
    setCurrentTheme(themeId);
    if (userData) {
      const updatedData = {
        ...userData,
        preferences: {
          ...userData.preferences,
          theme: themeId
        }
      };
      handleUpdateUserData(updatedData);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("flowcross_user");
    toast({
      title: "Выход выполнен",
      description: "До свидания!"
    });
    navigate("/");
  };

  if (!userData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Аккаунт не найден</h2>
          <p className="text-muted-foreground mb-6">Пожалуйста, войдите в систему</p>
          <Button onClick={() => navigate("/")}>
            Вернуться на главную
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="h-16 border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              На главную
            </Button>
            <div className="flex items-center gap-3">
              <img src={flowcrossLogo} alt="FlowCross" className="w-8 h-8 rounded-lg" />
              <div>
                <h1 className="text-lg font-bold">FlowCross Account</h1>
                <p className="text-sm text-muted-foreground">Добро пожаловать, {userData.username}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Side Navigation */}
        <AccountSideNavigation
          currentSection={currentSection}
          onSectionChange={setCurrentSection}
          onLogout={handleLogout}
          userData={userData}
        />
        
        {/* Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          <AccountSections 
            section={currentSection}
            userData={userData}
            onUpdate={handleUpdateUserData}
            currentTheme={currentTheme}
            onThemeChange={handleThemeChange}
          />
        </main>
      </div>
    </div>
  );
};

export default AccountPage;