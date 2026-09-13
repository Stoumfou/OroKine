import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface AppState {
  awarenessCount: number;
  awarenessDate: string;
  awarenessHistory: { date: string; count: number }[];
  streak: number;
  lastActiveDate: string | null;
  completedSessions: { id: string; date: string; type: string; evaluation?: { pain: number; difficulty: number } }[];
  currentSessionIndex: 1 | 2;
  sessionProgress: number; // 1 to 6
  settings: {
    soundEnabled: boolean;
    vibrationEnabled: boolean;
    voiceCoachEnabled: boolean;
  };
  
  // Actions
  incrementAwareness: () => void;
  checkDailyReset: () => void;
  completeSession: (type: string, evaluation?: { pain: number; difficulty: number }) => void;
  updateSettings: (settings: Partial<AppState['settings']>) => void;
}

const formatDateLocal = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getTodayString = () => formatDateLocal(new Date());

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
        vibrationEnabled: true,
        voiceCoachEnabled: true,
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
          const yesterdayString = formatDateLocal(yesterday);
          
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

      completeSession: (type, evaluation) => {
        const today = getTodayString();
        set((state) => {
          // If we completed 7 sessions of type 'session-1', unlock 'session-2'
          const session1Count = state.completedSessions.filter(s => s.type === 'session-1').length + 1;
          let nextProgress = state.sessionProgress;
          let nextIndex = state.currentSessionIndex;
          
          if (type === 'session-1') {
             if (session1Count >= 7) {
                nextIndex = 2;
                nextProgress = 1;
             } else {
                nextProgress = session1Count;
             }
          }

          const newCompleted = [...state.completedSessions, { 
            id: crypto.randomUUID(), 
            date: today, 
            type,
            evaluation
          }];
          
          // Update streak
          let newStreak = state.streak;
          if (state.lastActiveDate !== today) {
            newStreak += 1;
          }
          
          return {
            completedSessions: newCompleted,
            streak: newStreak,
            lastActiveDate: today,
            sessionProgress: nextProgress,
            currentSessionIndex: nextIndex as 1 | 2
          };
        });
      },

      updateSettings: (newSettings) => 
        set((state) => ({ settings: { ...state.settings, ...newSettings } }))
    }),
    {
      name: 'orokine-storage',
    }
  )
);
