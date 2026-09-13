import React, { useState } from 'react';
import { Home, Activity, BookOpen, Settings } from 'lucide-react';

type Tab = 'home' | 'stats' | 'guide' | 'settings';

interface LayoutProps {
  children: (currentTab: Tab) => React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [currentTab, setCurrentTab] = useState<Tab>('home');

  const navItems: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Accueil', icon: <Home size={24} /> },
    { id: 'stats', label: 'Bilan', icon: <Activity size={24} /> },
    { id: 'guide', label: 'Conseils', icon: <BookOpen size={24} /> },
    { id: 'settings', label: 'Réglages', icon: <Settings size={24} /> },
  ];

  return (
    <div className="flex flex-col h-[100dvh] max-w-md mx-auto bg-slate-50 relative overflow-hidden shadow-2xl">
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {children(currentTab)}
      </main>

      {/* Bottom Navigation */}
      <nav className="w-full bg-white border-t border-slate-200 px-6 py-3 pb-safe z-50 flex-shrink-0">
        <div className="flex justify-between items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={`flex flex-col items-center gap-1 transition-colors duration-200 ${
                currentTab === item.id ? 'text-sky-500' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <div className={`p-1 rounded-full ${currentTab === item.id ? 'bg-sky-50' : 'bg-transparent'}`}>
                {item.icon}
              </div>
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
