import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

export function InstallBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // Check if already in standalone mode (installed)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;
    
    if (isStandalone) {
      setIsVisible(false);
      return;
    }

    // Always show the banner on mobile browsers if not standalone
    // But we might also catch the beforeinstallprompt for Android
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // On iOS we don't get beforeinstallprompt, so we just show the banner if not standalone
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    if (isIOS && !isStandalone) {
      setIsVisible(true);
    } else if (!isStandalone && !deferredPrompt) {
      // Show for other browsers as a fallback
      setIsVisible(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, [deferredPrompt]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsVisible(false);
      }
      setDeferredPrompt(null);
    } else {
      // Tell iOS users how to install
      alert("Pour installer l'application sur iPhone ou iPad, appuyez sur l'icône de partage puis sur 'Sur l'écran d'accueil'.");
    }
  };

  if (!isVisible) return null;

  return (
    <div className="bg-sky-500 text-white px-4 py-3 rounded-2xl flex items-center justify-between shadow-lg shadow-sky-500/20">
      <div className="flex items-center gap-3 flex-1" onClick={handleInstallClick}>
        <div className="bg-white/20 p-2 rounded-full">
          <Download className="w-5 h-5 text-white" />
        </div>
        <div className="text-sm font-medium">
          Installer l'application pour un accès rapide
        </div>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="p-2 -mr-2 text-white/80 hover:text-white"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
