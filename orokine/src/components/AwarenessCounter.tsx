import { useEffect } from 'react';
import { BrainCircuit } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

export function AwarenessCounter() {
  const { awarenessCount, incrementAwareness, checkDailyReset } = useAppStore();
  
  useEffect(() => {
    checkDailyReset();
    
    // Check reset periodically if app is left open
    const interval = setInterval(checkDailyReset, 60000);
    return () => clearInterval(interval);
  }, [checkDailyReset]);

  const handleIncrement = () => {
    incrementAwareness();
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col items-center">
      <div className="flex items-center gap-2 mb-4 w-full">
        <BrainCircuit className="w-5 h-5 text-emerald-500" />
        <h3 className="font-semibold text-slate-800 flex-1">Conscience de placement</h3>
        <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded-full">
          Aujourd'hui
        </span>
      </div>

      <div className="bg-sky-50 text-sky-900 p-4 rounded-2xl w-full text-sm mb-6 border border-sky-100">
        <strong>Rappel postural :</strong> La pointe de la langue au palais (au niveau des bosses). Respirer par le nez, lèvres fermées, dents desserrées.
      </div>
      
      <button 
        onClick={handleIncrement}
        className="w-32 h-32 rounded-full bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition-all duration-200 flex flex-col items-center justify-center text-white shadow-lg shadow-emerald-500/30 mb-2"
      >
        <span className="text-4xl font-bold mb-1">{awarenessCount}</span>
        <span className="text-xs opacity-90 uppercase tracking-wide font-medium">Bon placement</span>
      </button>
      
      <p className="text-xs text-slate-400 text-center mt-2 max-w-[200px]">
        Appuyez à chaque fois que vous y pensez au repos. La valeur est sauvegardée chaque nuit.
      </p>
    </div>
  );
}
