import { vi } from 'vitest';
import '@testing-library/jest-dom/vitest';

globalThis.matchMedia = vi.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));

class MockAudioContext {
  state = 'running';
  currentTime = 0;
  destination = {};
  createGain() { return { connect: vi.fn(), gain: { setValueAtTime: vi.fn(), linearRampToValueAtTime: vi.fn(), exponentialRampToValueAtTime: vi.fn() } }; }
  createOscillator() { return { connect: vi.fn(), start: vi.fn(), stop: vi.fn(), frequency: { setValueAtTime: vi.fn(), value: 0 }, type: 'sine' }; }
  async resume() {}
}
globalThis.AudioContext = MockAudioContext as any;

globalThis.window.speechSynthesis = {
  speak: vi.fn(),
  cancel: vi.fn(),
  getVoices: vi.fn().mockReturnValue([])
} as any;

globalThis.SpeechSynthesisUtterance = vi.fn() as any;
