import { describe, it, expect, vi } from 'vitest';
import { audioEngine } from './audio';

describe('AudioEngine', () => {
  it('should call speechSynthesis when speak is called', () => {
    audioEngine.speak('Test');
    expect(window.speechSynthesis.speak).toHaveBeenCalled();
  });

  it('should call navigator.vibrate when vibrate is called', () => {
    navigator.vibrate = vi.fn();
    audioEngine.vibrate(200);
    expect(navigator.vibrate).toHaveBeenCalledWith(200);
  });
});
