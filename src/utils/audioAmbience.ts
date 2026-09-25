// Web Audio API ambient sound generator simulating the gentle sea breeze and calm acoustic warmth of Palu
class AmbientSoundManager {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private noiseNode: AudioNode | null = null;
  private filterNode: BiquadFilterNode | null = null;
  private lfoNode: OscillatorNode | null = null;
  private toneNode: OscillatorNode | null = null;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public start() {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!this.ctx) {
        this.ctx = new AudioCtx();
      }

      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const now = this.ctx.currentTime;
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.12, now + 2);
      this.masterGain.connect(this.ctx.destination);

      // Pink/Brown noise simulation for ocean waves and coastal wind
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.05;
        b6 = white * 0.115926;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Lowpass filter mimicking the low rumble of ocean surf & mountain breeze
      this.filterNode = this.ctx.createBiquadFilter();
      this.filterNode.type = 'lowpass';
      this.filterNode.frequency.setValueAtTime(260, now);

      // Low frequency oscillator (LFO) for slow oceanic tidal wave swell
      this.lfoNode = this.ctx.createOscillator();
      this.lfoNode.type = 'sine';
      this.lfoNode.frequency.setValueAtTime(0.15, now); // ~7 second wave cycle

      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(140, now);

      this.lfoNode.connect(lfoGain);
      lfoGain.connect(this.filterNode.frequency);

      // Warm harmonic sine drone representing the stillness and sunrise light
      this.toneNode = this.ctx.createOscillator();
      this.toneNode.type = 'sine';
      this.toneNode.frequency.setValueAtTime(146.83, now); // D3 chord root

      const toneGain = this.ctx.createGain();
      toneGain.gain.setValueAtTime(0.018, now);

      this.toneNode.connect(toneGain);
      toneGain.connect(this.masterGain);

      whiteNoise.connect(this.filterNode);
      this.filterNode.connect(this.masterGain);

      whiteNoise.start(now);
      this.lfoNode.start(now);
      this.toneNode.start(now);

      this.noiseNode = whiteNoise;
      this.isPlaying = true;
    } catch (e) {
      console.warn('Audio ambience initialisation paused:', e);
      this.isPlaying = false;
    }
  }

  public stop() {
    if (!this.ctx || !this.masterGain) {
      this.isPlaying = false;
      return;
    }

    try {
      const now = this.ctx.currentTime;
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      setTimeout(() => {
        if (this.noiseNode && 'stop' in this.noiseNode) {
          (this.noiseNode as AudioScheduledSourceNode).stop();
        }
        if (this.lfoNode) {
          this.lfoNode.stop();
        }
        if (this.toneNode) {
          this.toneNode.stop();
        }
        this.isPlaying = false;
      }, 1250);
    } catch {
      this.isPlaying = false;
    }
  }
}

export const ambientSound = new AmbientSoundManager();
