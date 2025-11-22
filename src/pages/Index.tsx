import { useState } from "react";
import { ColorSelection } from "@/components/ColorSelection";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { GreetingPanel } from "@/components/GreetingPanel";

type Phase = 'selection' | 'welcome' | 'greeting';
type Palette = 'rose' | 'lavender' | 'ivory';

const Index = () => {
  const [phase, setPhase] = useState<Phase>('selection');
  const [selectedPalette, setSelectedPalette] = useState<Palette>('rose');

  const handlePaletteSelect = (palette: Palette) => {
    setSelectedPalette(palette);
    // Apply theme class to document
    document.documentElement.className = `theme-${palette}`;
    // Transition to welcome screen
    setTimeout(() => setPhase('welcome'), 400);
  };

  const handleEnter = () => {
    setTimeout(() => setPhase('greeting'), 600);
  };

  return (
    <div className={`theme-${selectedPalette} transition-colors duration-700`}>
      {phase === 'selection' && (
        <ColorSelection onPaletteSelect={handlePaletteSelect} />
      )}
      
      {phase === 'welcome' && (
        <WelcomeScreen onEnter={handleEnter} />
      )}
      
      {phase === 'greeting' && (
        <GreetingPanel />
      )}
    </div>
  );
};

export default Index;
