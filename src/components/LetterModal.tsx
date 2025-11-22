interface LetterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LetterModal = ({ isOpen, onClose }: LetterModalProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-6 animate-cinematic"
      onClick={onClose}
    >
      {/* Frosted backdrop */}
      <div 
        className="absolute inset-0 backdrop-blur-xl"
        style={{
          background: 'radial-gradient(circle at center, hsl(var(--background) / 0.8), hsl(var(--background) / 0.95))'
        }}
      />

      {/* Letter card */}
      <div 
        className="relative max-w-3xl w-full max-h-[80vh] overflow-y-auto bg-surface/90 backdrop-blur-md rounded-3xl p-12 md:p-16 animate-rise animate-glow"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 30px 80px hsl(var(--glow) / 0.3), inset 0 1px 0 hsl(var(--glow) / 0.2)',
          backgroundImage: `
            linear-gradient(180deg, hsl(var(--surface) / 0.95), hsl(var(--surface) / 0.98)),
            url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence baseFrequency='0.04' numOctaves='5' seed='2'/%3E%3CfeColorMatrix values='0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 0.015 0'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23paper)'/%3E%3C/svg%3E")
          `
        }}
      >
        {/* Cat ear watermark */}
        <div className="absolute top-8 right-8 opacity-5">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 6 L15 1 L12 5 L7 8 L10 13 L14 15 L20 12 Z" />
            <path d="M20 6 L25 1 L28 5 L33 8 L30 13 L26 15 L20 12 Z" />
            <circle cx="20" cy="17" r="10" />
          </svg>
        </div>

        {/* Constellation background */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-7 pointer-events-none"
          style={{ animation: 'constellation-pulse 6s ease-in-out infinite' }}
        >
          <circle cx="15%" cy="15%" r="1.5" fill="currentColor" />
          <circle cx="85%" cy="20%" r="1" fill="currentColor" />
          <circle cx="80%" cy="80%" r="1.5" fill="currentColor" />
          <circle cx="20%" cy="85%" r="1" fill="currentColor" />
          <circle cx="50%" cy="50%" r="1" fill="currentColor" />
          <line x1="15%" y1="15%" x2="85%" y2="20%" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
          <line x1="85%" y1="20%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
          <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
        </svg>

        {/* Letter content */}
        <div className="relative z-10 space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-serif mb-2" style={{ fontWeight: 300 }}>
              A Letter For You
            </h2>
            <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
          </div>

          <div className="prose prose-lg max-w-none font-serif leading-relaxed space-y-6">
            <p style={{ fontWeight: 300, fontSize: '1.125rem', lineHeight: '1.8' }}>
              Dear [Name],
            </p>
            
            <p style={{ fontWeight: 300, fontSize: '1.125rem', lineHeight: '1.8' }}>
              {/* PLACE LETTER HERE */}
              The house has been keeping your space warm. The light by your door—I've left it on every evening, 
              a small runway of warmth for when you return. Amarah asks about you in her own way, curling up 
              where you used to sit, and the babies—they've grown so much. Their eyes are open now, curious 
              and bright, and I think they're waiting to meet you too.
            </p>

            <p style={{ fontWeight: 300, fontSize: '1.125rem', lineHeight: '1.8' }}>
              I hope the world was gentle with you out there. I hope you found moments that felt like 
              soft landings. And I hope coming back feels less like an ending and more like 
              remembering how to breathe in a language you've always known.
            </p>

            <p style={{ fontWeight: 300, fontSize: '1.125rem', lineHeight: '1.8' }}>
              Welcome home, queen. The walls missed you. So did I.
            </p>

            <div className="pt-8">
              <p className="font-script text-2xl text-muted-foreground">
                with quiet intention,
              </p>
              <p className="font-script text-2xl text-muted-foreground mt-1">
                [Your Name]
              </p>
            </div>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="
            absolute top-6 right-6 w-10 h-10 rounded-full
            bg-surface/50 hover:bg-accent/20
            flex items-center justify-center
            transition-all duration-300
            group
          "
          aria-label="Close"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            stroke="currentColor" 
            className="group-hover:rotate-90 transition-transform duration-300"
          >
            <line x1="4" y1="4" x2="16" y2="16" strokeWidth="2" strokeLinecap="round" />
            <line x1="16" y1="4" x2="4" y2="16" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};
