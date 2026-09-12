import React from 'react';
import { Wind } from 'lucide-react';

export function PostureBanner() {
  return (
    <div className="bg-sky-100/50 border border-sky-100 rounded-2xl p-4 flex items-start gap-4">
      <div className="bg-sky-500 rounded-full p-2 mt-1 shrink-0 animate-pulse-slow">
        <Wind className="w-5 h-5 text-white" />
      </div>
      <div>
        <h3 className="font-semibold text-slate-800 text-sm mb-1">Rappel Postural Permanent</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Nez • Lèvres • Palais • Dents desserrées
        </p>
      </div>
    </div>
  );
}
