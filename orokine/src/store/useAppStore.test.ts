import { describe, it, expect, beforeEach } from 'vitest';
import { useAppStore } from './useAppStore';

describe('useAppStore', () => {
  beforeEach(() => {
    useAppStore.setState({
      awarenessCount: 0,
      streak: 0,
      completedSessions: [],
      currentSessionIndex: 1,
      sessionProgress: 1,
      lastActiveDate: null
    });
  });

  it('should unlock session 2 after 7 completions of session 1', () => {
    
    for (let i = 0; i < 7; i++) {
      useAppStore.getState().completeSession('session-1');
    }
    
    const state = useAppStore.getState();
    expect(state.currentSessionIndex).toBe(2);
    expect(state.sessionProgress).toBe(1);
  });
});
