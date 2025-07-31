import { useEffect } from "react";
import FlowCrossNavbar from "@/components/FlowCrossNavbar";
import FlowCrossFooter from "@/components/FlowCrossFooter";

const Terms = () => {
  useEffect(() => {
    // Перенаправление на Telegraph статью
    window.location.href = "https://telegra.ph/Usloviya-ispolzovaniya-launchera-Flowcross-07-21";
  }, []);

  return (
    <div className="min-h-screen">
      <FlowCrossNavbar />
      
      <main className="pt-20">
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">
              Условия <span className="neon-text text-primary">использования</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Перенаправление на страницу с условиями использования...
            </p>
            <p className="text-muted-foreground">
              Если перенаправление не произошло автоматически, 
              <a 
                href="https://telegra.ph/Usloviya-ispolzovaniya-launchera-Flowcross-07-21" 
                className="text-primary hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                нажмите здесь
              </a>
            </p>
          </div>
        </section>
      </main>

      <FlowCrossFooter />
    </div>
  );
};

export default Terms;