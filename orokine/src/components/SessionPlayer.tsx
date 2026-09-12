import React, { useState, useEffect, useRef } from 'react';
import { X, Check, Volume2, VolumeX, Camera } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { SESSION_1, SESSION_2 } from '../data/sessions';
import type { Session, Exercise } from '../data/sessions';
import { audioEngine } from '../utils/audio';
import { ExerciseIllustration } from './ExerciseIllustration';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

type PlayerState = 'PREP' | 'COUNTDOWN' | 'EXERCISE' | 'FINISHED';

interface Props {
  onClose: () => void;
  sessionIndex: 1 | 2;
}

export function SessionPlayer({ onClose, sessionIndex }: Props) {
  const [playerState, setPlayerState] = useState<PlayerState>('PREP');
  const [currentExIndex, setCurrentExIndex] = useState(0);
  const [countdown, setCountdown] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [showMirror, setShowMirror] = useState(false);
  
  const { settings, completeSession } = useAppStore();
  
  // Fallback to SESSION_2 for sessions 3-7 since they are not populated yet
  const sessionData = sessionIndex === 1 ? SESSION_1 : SESSION_2;
  const { width, height } = useWindowSize();
  
  // Timer state
  const [timeLeft, setTimeLeft] = useState(0);
  const endTimeRef = useRef<number>(0);
  const rAFRef = useRef<number>();

  const currentEx = sessionData.exercises[currentExIndex];

  useEffect(() => {
    // WakeLock
    let wakeLock: any = null;
    const requestWakeLock = async () => {
      try {
        if ('wakeLock' in navigator) {
          wakeLock = await (navigator as any).wakeLock.request('screen');
        }
      } catch (err) {}
    };
    requestWakeLock();
    return () => {
      if (wakeLock) wakeLock.release().catch(() => {});
    };
  }, []);

  const transitionToExercise = (index: number) => {
    const ex = sessionData.exercises[index];
    if (ex.type === 'timer') {
      setCountdown(3);
      setPlayerState('COUNTDOWN');
    } else {
      setPlayerState('EXERCISE');
      startExercise(ex);
    }
  };

  const handleStartPrep = async () => {
    if (settings.soundEnabled) {
      await audioEngine.init();
    }
    transitionToExercise(0);
  };

  useEffect(() => {
    if (playerState === 'COUNTDOWN') {
      if (settings.soundEnabled) audioEngine.playCountdownBeep();
      
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setPlayerState('EXERCISE');
            if (settings.soundEnabled) audioEngine.playStartBeep();
            startExercise(currentEx);
            return 0;
          }
          if (settings.soundEnabled) audioEngine.playCountdownBeep();
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [playerState, currentExIndex]); // added currentExIndex to deps just in case

  const startExercise = (ex: Exercise) => {
    if (ex.type === 'timer' && ex.duration) {
      const durationMs = ex.duration * 1000;
      setTimeLeft(durationMs);
      endTimeRef.current = Date.now() + durationMs;
      
      const updateTimer = () => {
        if (isPaused) return;
        
        const now = Date.now();
        const remaining = Math.max(0, endTimeRef.current - now);
        setTimeLeft(remaining);
        
        if (remaining > 0) {
          rAFRef.current = requestAnimationFrame(updateTimer);
        } else {
          handleNext();
        }
      };
      
      rAFRef.current = requestAnimationFrame(updateTimer);
    }
  };

  const handleNext = () => {
    if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
    setShowMirror(false);
    
    if (currentExIndex < sessionData.exercises.length - 1) {
      const nextIdx = currentExIndex + 1;
      setCurrentExIndex(nextIdx);
      transitionToExercise(nextIdx);
    } else {
      setPlayerState('FINISHED');
      if (settings.soundEnabled) audioEngine.playSuccessChord();
      completeSession(sessionData.id);
    }
  };

  if (playerState === 'PREP') {
    return (
      <div className="flex-1 flex flex-col bg-slate-50 p-6 pt-12 h-screen overflow-y-auto">
        <button onClick={onClose} className="absolute top-6 left-6 p-2 bg-white rounded-full shadow-sm">
          <X className="w-5 h-5 text-slate-500" />
        </button>
        
        <div className="mt-12 text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">{sessionData.title}</h1>
          <p className="text-slate-500 mb-8">Préparez le matériel avant de commencer.</p>
          
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 text-left mb-8">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-500" />
              Matériel requis
            </h3>
            <ul className="space-y-3">
              {sessionData.equipment.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-slate-200" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <button 
            onClick={handleStartPrep}
            className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 rounded-2xl shadow-lg shadow-sky-500/30 active:scale-95 transition-all"
          >
            Je suis prêt(e)
          </button>
        </div>
      </div>
    );
  }

  // No separate blue screen for COUNTDOWN, it will fall through to EXERCISE view
  
  if (playerState === 'FINISHED') {
    return (
      <div className="flex-1 flex flex-col bg-slate-50 h-screen p-6 overflow-y-auto relative">
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={400}
          gravity={0.15}
          colors={['#38bdf8', '#34d399', '#fbbf24', '#f87171', '#818cf8']}
        />
        <div className="flex flex-col items-center mt-12 mb-8 z-10">
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
            <Check className="w-12 h-12 text-emerald-500" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Séance terminée !</h1>
          <p className="text-slate-500 text-center">Excellent travail pour votre rééducation.</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-8 space-y-6">
          <h3 className="font-bold text-slate-800 text-lg">Évaluation (Optionnelle)</h3>
          
          <div>
            <label className="flex justify-between text-sm font-medium text-slate-700 mb-2">
              <span>Douleur (EVA)</span>
              <span className="text-slate-400">0 - 10</span>
            </label>
            <input type="range" min="0" max="10" defaultValue="0" className="w-full accent-sky-500" />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>Aucune</span>
              <span>Maximale</span>
            </div>
          </div>

          <div>
            <label className="flex justify-between text-sm font-medium text-slate-700 mb-2">
              <span>Difficulté ressentie</span>
              <span className="text-slate-400">0 - 10</span>
            </label>
            <input type="range" min="0" max="10" defaultValue="2" className="w-full accent-sky-500" />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>Facile</span>
              <span>Impossible</span>
            </div>
          </div>
        </div>
        
        <button 
          onClick={onClose}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-2xl shadow-lg active:scale-95 transition-all mt-auto mb-6"
        >
          Valider et Quitter
        </button>
      </div>
    );
  }

  // EXERCISE STATE
  return (
    <div className="flex-1 flex flex-col h-screen bg-slate-50">
      <header className="flex justify-between items-center p-6 pt-safe">
        <button onClick={onClose} className="p-2 bg-white rounded-full shadow-sm">
          <X className="w-5 h-5 text-slate-500" />
        </button>
        <div className="font-bold text-slate-400 text-sm">
          {currentExIndex + 1} / {sessionData.exercises.length}
        </div>
        <button className="p-2 bg-white rounded-full shadow-sm">
          {settings.soundEnabled ? <Volume2 className="w-5 h-5 text-slate-500" /> : <VolumeX className="w-5 h-5 text-slate-300" />}
        </button>
      </header>
      
      <main className="flex-1 flex flex-col items-center p-6 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-1">{currentEx.title}</h2>
        <span className="text-sky-500 font-medium text-sm mb-8">{currentEx.category}</span>
        
        <div className="w-64 h-64 bg-white rounded-full shadow-lg border-8 border-slate-50 flex items-center justify-center mb-8 relative overflow-hidden">
          {showMirror ? (
            <video 
              autoPlay 
              playsInline 
              muted 
              className="w-full h-full object-cover scale-x-[-1]"
              ref={(ref) => {
                if (ref && !ref.srcObject) {
                  navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
                    .then(stream => { ref.srcObject = stream; })
                    .catch(err => console.error("Camera error:", err));
                }
              }}
            />
          ) : (
            <ExerciseIllustration exerciseId={currentEx.id} />
          )}
          
          {playerState === 'COUNTDOWN' ? (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-full z-20">
              <span className="text-6xl font-bold text-sky-500 animate-pulse">{countdown}</span>
            </div>
          ) : currentEx.type === 'timer' && !showMirror && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <span className="text-5xl font-bold text-slate-800 drop-shadow-sm">{Math.ceil(timeLeft / 1000)}</span>
            </div>
          )}

          {/* Toggle Mirror Button */}
          <button 
            onClick={() => setShowMirror(!showMirror)}
            className="absolute bottom-2 right-2 p-3 bg-white rounded-full shadow-md hover:bg-slate-50"
          >
            <Camera className={`w-5 h-5 ${showMirror ? 'text-sky-500' : 'text-slate-400'}`} />
          </button>
        </div>

        <div className="bg-white p-6 rounded-3xl w-full shadow-sm border border-slate-100 flex-1 flex flex-col">
          <h3 className="font-bold text-slate-800 mb-4 text-left">Consignes</h3>
          <ul className="space-y-3 text-left">
            {currentEx.instructions.map((inst, i) => (
              <li key={i} className="flex gap-3 text-slate-600 text-sm">
                <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 font-bold text-[10px]">
                  {i + 1}
                </span>
                {inst}
              </li>
            ))}
          </ul>
          
          <div className="mt-auto pt-6 flex gap-4">
            <button 
              onClick={() => {
                if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
                if (currentExIndex > 0) {
                  const prevIdx = currentExIndex - 1;
                  setCurrentExIndex(prevIdx);
                  transitionToExercise(prevIdx);
                  setShowMirror(false);
                }
              }}
              disabled={currentExIndex === 0}
              className="flex-1 bg-slate-100 text-slate-500 font-bold py-4 rounded-2xl active:scale-95 transition-all disabled:opacity-50"
            >
              Précédent
            </button>
            
            {currentEx.type === 'reps' ? (
              <button 
                onClick={handleNext}
                disabled={playerState === 'COUNTDOWN'}
                className="flex-[2] bg-emerald-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-emerald-500/30 active:scale-95 transition-all disabled:opacity-50 disabled:active:scale-100"
              >
                Terminé
              </button>
            ) : (
              <button 
                onClick={handleNext}
                className="flex-[2] bg-slate-800 text-white font-bold py-4 rounded-2xl active:scale-95 transition-all"
              >
                Passer
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
