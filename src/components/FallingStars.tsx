import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

interface FallingStarsProps {
  enabled: boolean;
}

const FallingStars = ({ enabled }: FallingStarsProps) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    if (!enabled) {
      setStars([]);
      return;
    }

    const createStar = (): Star => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: -50,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2
    });

    const updateStars = () => {
      setStars(prevStars => {
        let newStars = prevStars.map(star => ({
          ...star,
          y: star.y + star.speed,
          x: star.x - star.speed * 0.3 // Диагональное падение
        })).filter(star => star.y < window.innerHeight + 50);

        // Добавляем новые звезды
        if (Math.random() < 0.1 && newStars.length < 50) {
          newStars.push(createStar());
        }

        return newStars;
      });
    };

    const interval = setInterval(updateStars, 50);
    return () => clearInterval(interval);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map(star => (
        <div key={star.id} className="absolute">
          {/* Белый след за звездой */}
          <div
            className="absolute bg-gradient-to-b from-white/40 to-transparent"
            style={{
              left: star.x + star.speed * 0.3 * 3,
              top: star.y - star.size * 6,
              width: star.size * 0.5,
              height: star.size * 6,
              opacity: star.opacity * 0.6,
              transform: `rotate(45deg)`,
              borderRadius: '50%'
            }}
          />
          {/* Основная звезда */}
          <div
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: star.x,
              top: star.y,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity})`,
              transform: `rotate(45deg)`
            }}
          >
            {/* Звездочка */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FallingStars;