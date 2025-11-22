import { useEffect, useRef } from "react";

interface WelcomeScreenProps {
  onEnter: () => void;
}

export const WelcomeScreen = ({ onEnter }: WelcomeScreenProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Subtle floating particles
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-6 py-12 overflow-hidden grain-overlay animate-cinematic">
      <canvas 
        ref={canvasRef} 
        className="particle-canvas"
      />

      {/* Subtle light path leading inward */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, hsl(var(--glow) / 0.08), transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-3xl text-center">
        <h1 
          className="text-6xl md:text-7xl lg:text-8xl font-serif mb-8 animate-rise"
          style={{ 
            fontWeight: 300, 
            letterSpacing: '0.02em',
            textShadow: '0 2px 20px hsl(var(--glow) / 0.3)'
          }}
        >
          Welcome home, queen.
        </h1>

        <p 
          className="text-2xl md:text-3xl font-script text-muted-foreground mb-16 animate-rise"
          style={{ animationDelay: '200ms' }}
        >
          You've been missed by more than just the walls.
        </p>

        <button
          onClick={onEnter}
          className="
            px-16 py-5 rounded-full font-serif text-xl
            bg-surface/80 backdrop-blur-sm text-foreground
            hover:bg-accent hover:text-primary-foreground hover:scale-105
            transition-all duration-500
            animate-rise animate-glow
          "
          style={{
            fontWeight: 400,
            letterSpacing: '0.1em',
            boxShadow: '0 8px 32px hsl(var(--glow) / 0.3)',
            animationDelay: '400ms'
          }}
        >
          ENTER
        </button>

        {/* Constellation dots */}
        <svg 
          className="absolute -z-10 w-full h-full top-0 left-0 opacity-10"
          style={{ animation: 'constellation-pulse 4s ease-in-out infinite' }}
        >
          <circle cx="20%" cy="15%" r="2" fill="currentColor" />
          <circle cx="75%" cy="25%" r="1.5" fill="currentColor" />
          <circle cx="85%" cy="70%" r="2" fill="currentColor" />
          <circle cx="15%" cy="80%" r="1" fill="currentColor" />
          <circle cx="60%" cy="85%" r="1.5" fill="currentColor" />
          <line x1="20%" y1="15%" x2="75%" y2="25%" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <line x1="75%" y1="25%" x2="85%" y2="70%" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        </svg>
      </div>
    </div>
  );
};
