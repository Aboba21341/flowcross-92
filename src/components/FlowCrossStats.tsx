import { useEffect, useState } from "react";
import { Users, Download, Server, Trophy } from "lucide-react";

const FlowCrossStats = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      icon: Users,
      value: "1.7.10",
      suffix: " - 1.20.4",
      label: "Поддержка версий",
      description: "все популярные версии",
      color: "text-blue-400",
      gradient: "from-blue-400/20 to-cyan-400/20",
      isText: true
    },
    {
      icon: Server,
      value: "12",
      suffix: "/12",
      label: "Серверы онлайн",
      description: "все серверы работают",
      color: "text-green-400",
      gradient: "from-green-400/20 to-emerald-400/20",
      isText: true
    },
    {
      icon: Trophy,
      value: 180,
      suffix: " FPS",
      label: "Производительность",
      description: "на 40% быстрее",
      color: "text-purple-400",
      gradient: "from-purple-400/20 to-pink-400/20"
    },
    {
      icon: Download,
      value: 25,
      suffix: "%",
      label: "Меньше RAM",
      description: "чем у конкурентов",
      color: "text-yellow-400",
      gradient: "from-yellow-400/20 to-orange-400/20"
    }
  ];

  const [counters, setCounters] = useState(stats.map((stat) => stat.isText ? stat.value : 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) => {
      if (stat.isText) return null;
      
      const numericValue = typeof stat.value === 'number' ? stat.value : 0;
      const increment = numericValue / 100;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          current = numericValue;
          clearInterval(intervals[index]);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, 20);
    });

    return () => intervals.forEach(interval => interval && clearInterval(interval));
  }, [isVisible]);

  const formatValue = (value: string | number, isText?: boolean) => {
    if (isText || typeof value === 'string') {
      return value;
    }
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + 'M';
    }
    if (value >= 1000) {
      return (value / 1000).toFixed(0) + 'K';
    }
    return value.toString();
  };

  return (
    <section id="stats-section" className="py-20 relative overflow-hidden section-block mx-4 md:mx-8">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Технические <span className="neon-text text-primary">характеристики</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Совместимость, производительность и стабильность FlowCross
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl glass-effect hover:scale-105 transition-all duration-500 floating-glow text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`inline-block p-4 rounded-xl mb-6 ${stat.color} bg-current/10`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                
                <div className="mb-2">
                  <span className="text-4xl font-bold text-foreground">
                    {formatValue(counters[index], stat.isText)}{stat.suffix}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 text-foreground">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowCrossStats;