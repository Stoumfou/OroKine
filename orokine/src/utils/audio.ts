class AudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private initialized = false;

  public async init() {
    if (this.initialized && this.ctx?.state === 'running') return;
    
    // Create context on first interaction
    this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    this.masterGain = this.ctx.createGain();
    this.masterGain.connect(this.ctx.destination);
    
    if (this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }
    
    this.initialized = true;
  }

  public playBeep(frequency: number = 440, type: OscillatorType = 'sine', duration: number = 0.5, volume: number = 0.15) {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);

    // ADSR Envelope - very soft attack and long release
    gain.gain.setValueAtTime(0, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(volume, this.ctx.currentTime + 0.1); // attack 100ms
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration); // release

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(this.ctx.currentTime);
    osc.stop(this.ctx.currentTime + duration);
  }

  public playCountdownBeep() {
    this.playBeep(349.23, 'sine', 0.4, 0.1); // F4, very soft and quiet
  }

  public playStartBeep() {
    this.playBeep(523.25, 'sine', 0.6, 0.15); // C5, soft ringing
  }

  public playSuccessChord() {
    if (!this.ctx || !this.masterGain) return;
    
    const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5
    const now = this.ctx.currentTime;

    frequencies.forEach((freq, i) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'sine';
      osc.frequency.value = freq;

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.3 / frequencies.length, now + 0.1 + (i * 0.05));
      gain.gain.exponentialRampToValueAtTime(0.01, now + 1.5 + (i * 0.2));

      osc.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(now);
      osc.stop(now + 2.0);
    });
  }

  public vibrate(pattern: number | number[]) {
    if ('vibrate' in navigator) {
      navigator.vibrate(pattern);
    }
  }

  public speak(text: string) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop any current speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'fr-FR';
      utterance.rate = 1.0;
      utterance.pitch = 1.1; // Slightly friendly
      window.speechSynthesis.speak(utterance);
    }
  }
}

export const audioEngine = new AudioEngine();
