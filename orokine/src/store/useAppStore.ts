import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface AppState {
  awarenessCount: number;
  awarenessDate: string;
  awarenessHistory: { date: string; count: number }[];
  streak: number;
  lastActiveDate: string | null;
  completedSessions: { id: string; date: string; type: string }[];
  currentSessionIndex: 1 | 2;
  sessionProgress: number; // 1 to 6
  settings: {
    soundEnabled: boolean;
    transitionDelay: number;
    mirrorEnabled: boolean;
  };
  
  // Actions
  incrementAwareness: () => void;
  checkDailyReset: () => void;
  completeSession: (type: string) => void;
  updateSettings: (settings: Partial<AppState['settings']>) => void;
}

const getTodayString = () => new Date().toISOString().split('T')[0];

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      awarenessCount: 0,
      awarenessDate: getTodayString(),
      awarenessHistory: [],
      streak: 0,
      lastActiveDate: null,
      completedSessions: [],
      currentSessionIndex: 1,
      sessionProgress: 1,
      settings: {
        soundEnabled: true,
        transitionDelay: 5,
        mirrorEnabled: true,
      },

      incrementAwareness: () => {
        get().checkDailyReset();
        set((state) => ({ awarenessCount: state.awarenessCount + 1 }));
      },

      checkDailyReset: () => {
        const today = getTodayString();
        const state = get();
        
        if (state.awarenessDate !== today) {
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayString = yesterday.toISOString().split('T')[0];
          
          let newStreak = state.streak;
          if (state.lastActiveDate === yesterdayString) {
            // Keep streak
          } else if (state.lastActiveDate !== today) {
            newStreak = 0;
          }
          
          set({
            awarenessCount: 0,
            awarenessDate: today,
            awarenessHistory: [...state.awarenessHistory, { date: state.awarenessDate, count: state.awarenessCount }],
            streak: newStreak
          });
        }
      },

      completeSession: (type) => {
        const today = getTodayString();
        set((state) => {
          const newCompleted = [...state.completedSessions, { id: crypto.randomUUID(), date: today, type }];
          
          // Update streak
          let newStreak = state.streak;
          if (state.lastActiveDate !== today) {
            newStreak += 1;
          }
          
          return {
            completedSessions: newCompleted,
            streak: newStreak,
            lastActiveDate: today
          };
        });
      },

      updateSettings: (newSettings) => {
        set((state) => ({
          settings: { ...state.settings, ...newSettings }
        }));
      }
    }),
    {
      name: 'orokine-storage',
    }
  )
);
