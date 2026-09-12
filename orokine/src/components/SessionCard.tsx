import React from 'react';
import { Play, CheckCircle2, Clock, Lock } from 'lucide-react';

interface SessionCardProps {
  sessionName: string;
  dayProgress: number; // completed times
  isCompletedToday: boolean;
  isLocked: boolean;
  onStart: () => void;
}

export function SessionCard({ sessionName, dayProgress, isCompletedToday, isLocked, onStart }: SessionCardProps) {
  if (isLocked) {
    return (
      <div className="bg-white rounded-3xl p-6 text-slate-400 relative overflow-hidden shadow-sm border border-slate-100 opacity-60">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-slate-100 text-slate-500 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                Verrouillé
              </span>
            </div>
            <h2 className="text-2xl font-bold text-slate-400">{sessionName}</h2>
          </div>
          <div className="flex flex-col items-center justify-center w-12 h-12 rounded-full bg-slate-50 border border-slate-200">
            <Lock className="w-5 h-5 text-slate-400" />
          </div>
        </div>
        <button disabled className="w-full py-4 rounded-2xl flex items-center justify-center gap-2 font-bold transition-all bg-slate-100 text-slate-400 cursor-not-allowed">
          Débloquez la séance précédente
        </button>
      </div>
    );
  }

  const cappedProgress = Math.min(dayProgress, 7);

  return (
    <div className="bg-white rounded-3xl p-6 text-slate-800 relative overflow-hidden shadow-sm border border-slate-100">
      {/* Decorative background element */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-sky-50 rounded-full blur-3xl opacity-60"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-sky-100 text-sky-600 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                {cappedProgress >= 7 ? 'Validée' : 'En cours'}
              </span>
            </div>
            <h2 className="text-2xl font-bold">{sessionName}</h2>
            <div className="flex items-center gap-2 text-slate-500 text-sm mt-2">
              <Clock className="w-4 h-4" />
              <span>~ 12 min</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center w-12 h-12 rounded-full border border-sky-100 bg-white shadow-sm">
            <span className={`text-sm font-bold ${cappedProgress >= 7 ? 'text-emerald-500' : 'text-sky-500'}`}>
              {cappedProgress}/7
            </span>
          </div>
        </div>

        <button 
          onClick={onStart}
          className={`w-full py-4 rounded-2xl flex items-center justify-center gap-2 font-bold transition-all ${
            isCompletedToday 
              ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/25 active:scale-[0.98]' 
              : 'bg-sky-500 hover:bg-sky-400 text-white shadow-lg shadow-sky-500/25 active:scale-[0.98]'
          }`}
        >
          {isCompletedToday ? (
            <>
              <CheckCircle2 className="w-5 h-5 fill-current" />
              Séance terminée (Refaire)
            </>
          ) : (
            <>
              <Play className="w-5 h-5 fill-current" />
              {cappedProgress >= 7 ? 'Refaire la séance' : 'Commencer'}
            </>
          )}
        </button>
      </div>
    </div>
  );
}
