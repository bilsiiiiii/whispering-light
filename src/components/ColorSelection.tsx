import { useState } from "react";

interface ColorSelectionProps {
  onPaletteSelect: (palette: 'rose' | 'lavender' | 'ivory') => void;
}

export const ColorSelection = ({ onPaletteSelect }: ColorSelectionProps) => {
  const [selectedPalette, setSelectedPalette] = useState<'rose' | 'lavender' | 'ivory' | null>(null);

  const palettes = [
    {
      id: 'rose' as const,
      name: 'Rose Beige',
      gradient: 'linear-gradient(135deg, hsl(350, 60%, 85%) 0%, hsl(20, 40%, 90%) 100%)',
      description: 'warm blush & cream'
    },
    {
      id: 'lavender' as const,
      name: 'Lavender Dusk',
      gradient: 'linear-gradient(135deg, hsl(280, 50%, 80%) 0%, hsl(270, 30%, 92%) 100%)',
      description: 'soft purple twilight'
    },
    {
      id: 'ivory' as const,
      name: 'Soft Ivory',
      gradient: 'linear-gradient(135deg, hsl(40, 50%, 88%) 0%, hsl(45, 40%, 96%) 100%)',
      description: 'gentle golden light'
    }
  ];

  const handleSelect = (paletteId: 'rose' | 'lavender' | 'ivory') => {
    setSelectedPalette(paletteId);
  };

  const handleContinue = () => {
    if (selectedPalette) {
      onPaletteSelect(selectedPalette);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 grain-overlay animate-cinematic">
      <div className="max-w-4xl w-full">
        <h1 
          className="text-5xl md:text-6xl font-serif text-center mb-4 text-foreground"
          style={{ fontWeight: 300, letterSpacing: '0.02em' }}
        >
          Choose Your Atmosphere
        </h1>
        <p className="text-center text-muted-foreground font-script text-2xl mb-16">
          each one holds a different warmth
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {palettes.map((palette, index) => (
            <button
              key={palette.id}
              onClick={() => handleSelect(palette.id)}
              className={`
                relative group overflow-hidden rounded-2xl p-8 h-64
                transition-all duration-300 ease-out
                ${selectedPalette === palette.id 
                  ? 'scale-105 ring-2 ring-offset-4' 
                  : 'hover:scale-102 hover:shadow-2xl'
                }
              `}
              style={{
                background: palette.gradient,
                animationDelay: `${index * 100}ms`,
                boxShadow: selectedPalette === palette.id 
                  ? '0 20px 60px rgba(0,0,0,0.15)' 
                  : '0 8px 24px rgba(0,0,0,0.08)',
              }}
            >
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                <h3 className="font-serif text-3xl mb-2 text-foreground" style={{ fontWeight: 400 }}>
                  {palette.name}
                </h3>
                <p className="font-script text-xl text-muted-foreground">
                  {palette.description}
                </p>
                {selectedPalette === palette.id && (
                  <div className="mt-4 animate-rise">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-foreground opacity-70">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Subtle grain texture overlay */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                }}
              />
            </button>
          ))}
        </div>

        {selectedPalette && (
          <div className="flex justify-center animate-rise">
            <button
              onClick={handleContinue}
              className="
                px-12 py-4 rounded-full font-serif text-lg
                bg-surface text-foreground
                hover:bg-accent hover:text-primary-foreground
                transition-all duration-300
                animate-glow
              "
              style={{
                boxShadow: '0 8px 32px hsl(var(--glow) / 0.2)',
                fontWeight: 400,
                letterSpacing: '0.05em'
              }}
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
