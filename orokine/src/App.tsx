import React from 'react';
import { Layout } from './components/Layout';
import { AwarenessCounter } from './components/AwarenessCounter';
import { SessionCard } from './components/SessionCard';
import { useAppStore } from './store/useAppStore';

import { InstallBanner } from './components/InstallBanner';

function HomeTab({ onStartSession }: { onStartSession: (index: number) => void }) {
  const { streak, completedSessions } = useAppStore();
  
  const todayStr = new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date());
  const today = new Date().toISOString().split('T')[0];

  const sessions = Array.from({ length: 7 }, (_, i) => i + 1);

  return (
    <div className="p-6 pb-8 space-y-6">
      <header className="flex justify-between items-center mb-2">
        <div>
          <p className="text-slate-500 font-medium capitalize">{todayStr}</p>
          <h1 className="text-2xl font-bold text-slate-800">Ma Rééducation</h1>
        </div>
        <div className="flex items-center gap-1 bg-orange-100 text-orange-600 px-3 py-1.5 rounded-full font-bold text-sm">
          🔥 {streak} {streak > 1 ? 'jours' : 'jour'}
        </div>
      </header>
      
      <InstallBanner />
      
      <AwarenessCounter />
      
      <h3 className="font-bold text-slate-800 pt-2">Vos Séances</h3>
      <div className="space-y-4">
        {sessions.map((sessionNum) => {
          const sessionType = `session-${sessionNum}`;
          const timesCompleted = completedSessions.filter(s => s.type === sessionType).length;
          const isCompletedToday = completedSessions.some(s => s.type === sessionType && s.date === today);
          
          let isLocked = false;
          if (sessionNum > 1) {
            const prevSessionType = `session-${sessionNum - 1}`;
            const prevTimesCompleted = completedSessions.filter(s => s.type === prevSessionType).length;
            if (prevTimesCompleted < 7) {
              isLocked = true;
            }
          }

          return (
            <SessionCard 
              key={sessionNum}
              sessionName={`Séance n°${sessionNum}`} 
              dayProgress={timesCompleted} 
              isCompletedToday={isCompletedToday}
              isLocked={isLocked}
              onStart={() => onStartSession(sessionNum)} 
            />
          );
        })}
      </div>
    </div>
  );
}

function StatsTab() {
  const { streak, completedSessions, awarenessHistory } = useAppStore();
  
  return (
    <div className="p-6 pb-8 space-y-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Bilan Kiné</h1>
        <p className="text-slate-500 font-medium mt-1">Suivi de votre observance</p>
      </header>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-orange-500 mb-1">🔥 {streak}</span>
          <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">Jours de suite</span>
        </div>
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-sky-500 mb-1">{completedSessions.length}</span>
          <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">Séances totales</span>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mt-4">
        <h3 className="font-bold text-slate-800 mb-4">Historique Récent</h3>
        {awarenessHistory.length === 0 && completedSessions.length === 0 ? (
          <p className="text-sm text-slate-400">Aucune donnée pour le moment.</p>
        ) : (
          <ul className="space-y-4">
            {/* Affichage des séances terminées */}
            {completedSessions.slice(-5).reverse().map((session, i) => (
              <li key={`sess-${i}`} className="flex justify-between items-center text-sm border-b border-slate-50 pb-3">
                <div className="flex flex-col">
                  <span className="font-bold text-slate-700">Séance validée</span>
                  <span className="text-slate-400 text-xs">{session.date}</span>
                </div>
                <span className="font-medium text-sky-600 bg-sky-50 px-2 py-1 rounded-lg">
                  {session.type === 'session-1' ? 'Fondations' : 'Renforcement'}
                </span>
              </li>
            ))}
            
            {/* Affichage de la conscience de placement */}
            {awarenessHistory.slice(-5).reverse().map((record, i) => (
              <li key={`aw-${i}`} className="flex justify-between items-center text-sm border-b border-slate-50 pb-3">
                <div className="flex flex-col">
                  <span className="font-bold text-slate-700">Conscience Posturale</span>
                  <span className="text-slate-400 text-xs">{record.date}</span>
                </div>
                <span className="font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                  {record.count} clics
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="bg-slate-900 rounded-3xl p-6 text-white mt-4">
        <h3 className="font-bold mb-2">Exporter pour mon praticien</h3>
        <p className="text-sm text-slate-400 mb-4">Générez un résumé de vos séances, vos douleurs (EVA) et votre observance pour votre prochain rendez-vous.</p>
        <button className="w-full bg-white text-slate-900 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">
          Copier le bilan
        </button>
      </div>
    </div>
  );
}

function GuideTab() {
  return (
    <div className="p-6 pb-8 space-y-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Conseils</h1>
      </header>

      <div className="bg-sky-50 rounded-3xl p-6 border border-sky-100 mb-6">
        <h3 className="font-bold text-sky-900 mb-2">Les 4 Piliers</h3>
        <ul className="space-y-3 text-sky-800 text-sm">
          <li><strong>1. Respiration :</strong> Toujours par le nez.</li>
          <li><strong>2. Lèvres :</strong> En contact, sans forcer.</li>
          <li><strong>3. Langue :</strong> Au palais, derrière les incisives.</li>
          <li><strong>4. Dents :</strong> Desserrées, espace libre.</li>
        </ul>
      </div>
    </div>
  );
}

function SettingsTab() {
  const { settings, updateSettings } = useAppStore();
  
  return (
    <div className="p-6 pb-8 space-y-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Réglages</h1>
      </header>

      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-slate-800">Effets Sonores</h3>
            <p className="text-xs text-slate-500">Bips et validations</p>
          </div>
          <button 
            onClick={() => updateSettings({ soundEnabled: !settings.soundEnabled })}
            className={`w-12 h-6 rounded-full transition-colors relative ${settings.soundEnabled ? 'bg-sky-500' : 'bg-slate-300'}`}
          >
            <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${settings.soundEnabled ? 'left-7' : 'left-1'}`} />
          </button>
        </div>
      </div>
    </div>
  );
}

import { SessionPlayer } from './components/SessionPlayer';

export default function App() {
  const [activeSession, setActiveSession] = React.useState<number | null>(null);

  if (activeSession !== null) {
    return (
      <SessionPlayer 
        sessionIndex={activeSession} 
        onClose={() => setActiveSession(null)} 
      />
    );
  }

  return (
    <Layout>
      {(currentTab) => {
        switch (currentTab) {
          case 'home':
            return <HomeTab onStartSession={(idx) => setActiveSession(idx)} />;
          case 'stats':
            return <StatsTab />;
          case 'guide':
            return <GuideTab />;
          case 'settings':
            return <SettingsTab />;
          default:
            return <HomeTab onStartSession={(idx) => setActiveSession(idx)} />;
        }
      }}
    </Layout>
  );
}
