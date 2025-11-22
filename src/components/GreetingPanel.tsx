import { useState } from "react";
import { LetterModal } from "./LetterModal";

export const GreetingPanel = () => {
  const [showLetterPrompt, setShowLetterPrompt] = useState(false);
  const [showLater, setShowLater] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 grain-overlay">
      <div 
        className="max-w-2xl w-full bg-surface/60 backdrop-blur-md rounded-3xl p-12 md:p-16 animate-rise animate-glow relative"
        style={{
          boxShadow: '0 20px 60px hsl(var(--glow) / 0.2), inset 0 1px 0 hsl(var(--glow) / 0.1)',
        }}
      >
        {/* Cat ear silhouette watermark */}
        <div 
          className="absolute top-8 right-8 opacity-5"
          style={{ animation: 'cat-tilt 3s ease-in-out infinite' }}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
            <path d="M24 8 L18 2 L14 8 L8 12 L12 18 L16 20 L24 16 Z" />
            <path d="M24 8 L30 2 L34 8 L40 12 L36 18 L32 20 L24 16 Z" />
            <circle cx="24" cy="20" r="12" />
            <circle cx="20" cy="18" r="2" />
            <circle cx="28" cy="18" r="2" />
          </svg>
        </div>

        {/* Halo glow at top */}
        <div 
          className="absolute -top-1 left-1/2 -translate-x-1/2 w-3/4 h-1 rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(var(--glow) / 0.4), transparent)',
            filter: 'blur(4px)'
          }}
        />

        <div className="space-y-8 text-center relative z-10">
          <p className="text-xl md:text-2xl font-serif leading-relaxed" style={{ fontWeight: 300 }}>
            I hope the world feels gentler around you now.
          </p>

          {/* Cat divider */}
          <div className="flex items-center justify-center gap-4 py-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-muted-foreground/30" />
            <svg width="20" height="16" viewBox="0 0 20 16" fill="currentColor" className="opacity-40">
              <path d="M10 4 L6 0 L4 2 L2 4 L4 6 L7 7 L10 5 Z" />
              <path d="M10 4 L14 0 L16 2 L18 4 L16 6 L13 7 L10 5 Z" />
              <ellipse cx="10" cy="8" rx="6" ry="5" />
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-muted-foreground/30" />
          </div>

          <p className="text-xl md:text-2xl font-serif leading-relaxed" style={{ fontWeight: 300 }}>
            I hope your room remembers your breathing.
          </p>

          <p className="text-xl md:text-2xl font-serif leading-relaxed" style={{ fontWeight: 300 }}>
            I can't wait for you to meet Amarah and the babies.
          </p>

          {/* Constellation background */}
          <svg 
            className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
            style={{ animation: 'constellation-pulse 5s ease-in-out infinite' }}
          >
            <circle cx="10%" cy="20%" r="1.5" fill="currentColor" />
            <circle cx="90%" cy="30%" r="1" fill="currentColor" />
            <circle cx="85%" cy="75%" r="1.5" fill="currentColor" />
            <circle cx="15%" cy="85%" r="1" fill="currentColor" />
            <line x1="10%" y1="20%" x2="90%" y2="30%" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
          </svg>

          {!showLetterPrompt && (
            <button
              onClick={() => setShowLetterPrompt(true)}
              className="
                mt-12 px-8 py-3 rounded-full font-serif
                bg-accent/20 text-foreground
                hover:bg-accent hover:text-primary-foreground
                transition-all duration-300
                animate-rise
              "
              style={{
                fontWeight: 400,
                letterSpacing: '0.05em',
                animationDelay: '800ms'
              }}
            >
              Continue
            </button>
          )}

          {showLetterPrompt && !showLater && (
            <div className="mt-12 space-y-6 animate-rise">
              <p className="text-2xl font-script text-muted-foreground">
                Would you like to read your letter?
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="
                    px-10 py-3 rounded-full font-serif
                    bg-accent text-primary-foreground
                    hover:scale-105
                    transition-all duration-300
                    animate-glow
                  "
                  style={{ fontWeight: 400, letterSpacing: '0.05em' }}
                >
                  Yes
                </button>
                <button
                  onClick={() => setShowLater(true)}
                  className="
                    px-10 py-3 rounded-full font-serif
                    bg-surface/50 text-foreground
                    hover:bg-surface
                    transition-all duration-300
                  "
                  style={{ fontWeight: 400, letterSpacing: '0.05em' }}
                >
                  Later
                </button>
              </div>
            </div>
          )}

          {showLater && (
            <p className="mt-8 text-xl font-script text-muted-foreground animate-rise">
              Take your time. I'm here.
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 flex flex-col items-center gap-3 opacity-60">
        <svg width="24" height="20" viewBox="0 0 24 20" fill="currentColor" className="opacity-50">
          <path d="M12 6 L8 1 L6 3 L3 6 L6 9 L9 10 L12 8 Z" />
          <path d="M12 6 L16 1 L18 3 L21 6 L18 9 L15 10 L12 8 Z" />
          <ellipse cx="12" cy="12" rx="7" ry="6" />
        </svg>
        <p className="font-script text-lg">
          made with quiet intention.
        </p>
      </footer>

      <LetterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
