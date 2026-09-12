
interface Props {
  exerciseId: string;
}

export function ExerciseIllustration({ exerciseId }: Props) {
  // Styles communs pour les animations
  const animationStyles = `
    @keyframes arrowMoveBack {
      0% { transform: translateX(0) scale(1); opacity: 0; }
      20% { opacity: 1; }
      80% { opacity: 1; transform: translateX(20px) scale(0.9); }
      100% { transform: translateX(20px) scale(0.9); opacity: 0; }
    }
    @keyframes arrowPushUp {
      0% { transform: translateY(5px); opacity: 0; }
      50% { transform: translateY(-5px); opacity: 1; }
      100% { transform: translateY(5px); opacity: 0; }
    }
    @keyframes sweepArch {
      0% { transform: rotate(-60deg); }
      50% { transform: rotate(60deg); }
      100% { transform: rotate(-60deg); }
    }
    @keyframes monkeyMove {
      0% { transform: translateY(0); }
      25% { transform: translateY(-15px); }
      50% { transform: translateY(0); }
      75% { transform: translateY(15px); }
      100% { transform: translateY(0); }
    }
    @keyframes suction {
      0% { transform: scale(1); opacity: 0.5; }
      50% { transform: scale(0.8); opacity: 1; }
      100% { transform: scale(1); opacity: 0.5; }
    }
    @keyframes pulse {
      0% { transform: scale(0.95); opacity: 0.8; }
      50% { transform: scale(1.05); opacity: 1; }
      100% { transform: scale(0.95); opacity: 0.8; }
    }
  `;

  const tongueColor = "#fca5a5"; 
  const palateColor = "#fda4af"; 
  const lipColor = "#fecdd3"; 
  const teethColor = "#f8fafc"; 
  const strokeColor = "#cbd5e1";
  const arrowColor = "#38bdf8";

  // Arrowhead definition for reuse
  const defs = (
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={arrowColor} />
      </marker>
    </defs>
  );

  // Lèvres de profil très réalistes (lèvre sup, ouverture, lèvre inf)
  const ProfileLips = () => (
    <path 
      d="M 10 25 C 25 30, 30 38, 22 45 C 32 50, 25 60, 10 65" 
      fill="none" stroke={lipColor} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" 
    />
  );

  // Dent réaliste (incisive de profil)
  const ProfileTooth = () => (
    <path 
      d="M 23 45 L 28 45 L 27 55 C 26 58, 25 58, 24 55 Z" 
      fill="#ffffff" stroke={strokeColor} strokeWidth="1.5" strokeLinejoin="round" 
    />
  );

  // 1. Déglutition (Toboggan / Bâtonnet) - Statique et clair
  if (exerciseId === 's1-e1' || exerciseId === 's1-e2') {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full p-4 drop-shadow-sm">
        <ProfileLips />
        {/* Palais profil */}
        <path d="M 23 45 Q 50 15 80 45" fill="none" stroke={palateColor} strokeWidth="4" strokeLinecap="round" />
        <ProfileTooth />
        
        {/* Langue aplatie et collée au palais (statique) */}
        <path 
          d="M 28 45 Q 45 20 75 45 Q 65 65 45 65 L 28 65 Z" 
          fill={tongueColor} 
        />
        
        {exerciseId === 's1-e2' && (
          <rect x="0" y="48" width="40" height="4" fill="#a1a1aa" transform="rotate(-10 23 48)" />
        )}
      </svg>
    );
  }

  // 3. Mobilité (Singe, Dents, Extérieur) - Boule rouge fait toute la séquence
  if (exerciseId === 's1-e3') {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full p-4 drop-shadow-sm">
        <style>
          {`
            @keyframes fullMobility {
              /* Singe Haut (Sous lèvre sup) */
              0% { transform: translate(-30px, -20px); }
              8% { transform: translate(30px, -20px); }
              /* Singe Bas (Sous lèvre inf) */
              16% { transform: translate(30px, 20px); }
              24% { transform: translate(-30px, 20px); }
              /* Dents Haut */
              32% { transform: translate(-20px, -10px); }
              40% { transform: translate(20px, -10px); }
              /* Dents Bas */
              48% { transform: translate(20px, 10px); }
              56% { transform: translate(-20px, 10px); }
              /* Extérieur Haut / Bas */
              64% { transform: translate(0, -35px); }
              72% { transform: translate(0, 35px); }
              80% { transform: translate(0, -35px); }
              /* Extérieur Gauche / Droite */
              88% { transform: translate(-40px, 0); }
              96% { transform: translate(40px, 0); }
              100% { transform: translate(-30px, -20px); }
            }
          `}
        </style>
        {/* Lèvres face (contour extérieur) */}
        <path d="M 15 50 Q 50 10 85 50 Q 50 90 15 50" fill="none" stroke={lipColor} strokeWidth="5" strokeLinecap="round" />
        {/* Arcades dentaires internes */}
        <path d="M 25 45 Q 50 30 75 45" fill="none" stroke={teethColor} strokeWidth="8" strokeLinecap="round" />
        <path d="M 25 55 Q 50 70 75 55" fill="none" stroke={teethColor} strokeWidth="8" strokeLinecap="round" />
        
        {/* Langue qui reproduit tout l'exercice */}
        <circle 
          cx="50" cy="50" r="8" 
          fill={tongueColor} 
          style={{ animation: 'fullMobility 12s linear infinite' }} 
        />
      </svg>
    );
  }

  // 4a. Prononcer GA (Juste le texte)
  if (exerciseId === 's1-e4a') {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full p-4 drop-shadow-sm">
        <style>{animationStyles}</style>
        <text x="50" y="55" fill={arrowColor} fontWeight="bold" fontSize="36" textAnchor="middle" style={{ animation: 'pulse 1.5s infinite' }}>GA</text>
      </svg>
    );
  }

  // 4b. Placage arrière langue
  if (exerciseId === 's1-e4b') {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full p-4 drop-shadow-sm">
        <style>{animationStyles}</style>
        {defs}
        <ProfileLips />
        <path d="M 23 45 Q 50 15 80 45" fill="none" stroke={palateColor} strokeWidth="4" strokeLinecap="round" />
        <path d="M 23 45 Q 50 25 75 45 Q 50 65 23 45 Z" fill={tongueColor} />
        <g style={{ animation: 'arrowPushUp 1.5s infinite' }}>
          <line x1="40" y1="40" x2="40" y2="30" stroke={arrowColor} strokeWidth="3" markerEnd="url(#arrow)" />
          <line x1="60" y1="40" x2="60" y2="30" stroke={arrowColor} strokeWidth="3" markerEnd="url(#arrow)" />
        </g>
      </svg>
    );
  }

  // 5. Claquage
  if (exerciseId === 's1-e5') {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full p-4 drop-shadow-sm">
        <style>{animationStyles}</style>
        {/* Bouche ouverte de face stylisée simple */}
        <path d="M 25 50 Q 50 30 75 50 Q 50 70 25 50" fill="none" stroke={lipColor} strokeWidth="6" />
        {/* Langue qui claque (simple rond qui s'élargit) */}
        <circle cx="50" cy="50" r="10" fill={tongueColor} style={{ animation: 'pulse 0.8s infinite' }} />
        {/* Textes clairs */}
        <text x="35" y="20" fill={arrowColor} fontWeight="bold" style={{ animation: 'pulse 1.6s infinite' }}>CLA</text>
        <text x="35" y="90" fill={arrowColor} fontWeight="bold" style={{ animation: 'pulse 1.6s infinite', animationDelay: '0.8s' }}>CLO</text>
      </svg>
    );
  }

  // 6. Le Piston (Poussée forte papille)
  if (exerciseId === 's1-e6') {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full p-4 drop-shadow-sm">
        <style>{animationStyles}</style>
        {defs}
        <ProfileLips />
        <ProfileTooth />
        <path d="M 25 45 Q 50 15 80 45" fill="none" stroke={palateColor} strokeWidth="4" />
        <circle cx="32" cy="38" r="5" fill="#ef4444" /> {/* Papille */}
        
        {/* Langue qui pousse droit sur la papille */}
        <path d="M 30 42 Q 50 50 60 70 L 40 70 Z" fill={tongueColor} />
        
        <line x1="45" y1="55" x2="35" y2="42" stroke={arrowColor} strokeWidth="4" markerEnd="url(#arrow)" style={{ animation: 'arrowPushUp 1s infinite' }} />
        
        {/* Résistance sous le menton */}
        <line x1="45" y1="90" x2="45" y2="75" stroke="#fcd34d" strokeWidth="6" markerEnd="url(#arrow)" style={{ animation: 'arrowPushUp 1s infinite' }} />
      </svg>
    );
  }

  // 7. Étirement du frein
  if (exerciseId === 's1-e7') {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full p-4 drop-shadow-sm">
        <style>{animationStyles}</style>
        {defs}
        {/* Bouche grande ouverte (face) */}
        <path d="M 20 40 Q 50 10 80 40 Q 50 90 20 40 Z" fill="none" stroke={lipColor} strokeWidth="6" strokeLinecap="round" />
        <path d="M 30 65 Q 50 75 70 65" fill="none" stroke={teethColor} strokeWidth="6" />
        
        {/* Bâtonnet / doigt posé sur les dents du bas */}
        <rect x="10" y="62" width="80" height="6" rx="3" fill="#fcd34d" />
        
        {/* Langue qui sort et s'étire vers le bas par dessus */}
        <path d="M 35 40 Q 50 30 65 40 Q 65 80 50 85 Q 35 80 35 40 Z" fill={tongueColor} style={{ animation: 'arrowPushUp 2s infinite reverse' }} />
      </svg>
    );
  }

  // 8. Détente musculaire
  if (exerciseId === 's1-e8') {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full p-4 drop-shadow-sm">
        <style>{animationStyles}</style>
        {/* Visage (contour très simple) */}
        <circle cx="50" cy="50" r="40" fill="none" stroke={lipColor} strokeWidth="3" />
        <path d="M 40 70 Q 50 75 60 70" fill="none" stroke={lipColor} strokeWidth="3" /> {/* Petite bouche */}
        
        {/* Mains */}
        <circle cx="25" cy="50" r="15" fill="#fcd34d" opacity="0.6" style={{ animation: 'pulse 1s infinite' }} />
        <circle cx="75" cy="50" r="15" fill="#fcd34d" opacity="0.6" style={{ animation: 'pulse 1s infinite' }} />
      </svg>
    );
  }

  // 6. Slurps (Aspiration)
  if (exerciseId === 's2-e1') {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full p-4 drop-shadow-sm">
        <style>{animationStyles}</style>
        <path d="M 20 50 Q 50 20 80 50" fill="none" stroke={palateColor} strokeWidth="4" />
        <path d="M 25 50 Q 50 25 75 50 Q 50 65 25 50 Z" fill={tongueColor} />
        {/* Lignes d'aspiration concentriques */}
        <circle cx="50" cy="45" r="10" fill="none" stroke={arrowColor} strokeWidth="2" style={{ animation: 'suction 1s infinite' }} />
        <circle cx="50" cy="45" r="15" fill="none" stroke={arrowColor} strokeWidth="2" style={{ animation: 'suction 1s infinite', animationDelay: '0.2s' }} />
      </svg>
    );
  }

  // 7. Tonicité Lèvres (Bâtonnet)
  if (exerciseId === 's2-e2') {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full p-4 drop-shadow-sm">
        <style>{animationStyles}</style>
        {defs}
        {/* Lèvres fermées tenant le bâtonnet */}
        <path d="M 30 50 Q 50 35 70 50 Q 50 65 30 50 Z" fill={lipColor} />
        <rect x="10" y="48" width="80" height="4" fill="#a1a1aa" />
        {/* Poids aux extrémités */}
        <rect x="10" y="52" width="6" height="15" fill="#38bdf8" />
        <rect x="84" y="52" width="6" height="15" fill="#38bdf8" />
        
        {/* Flèches montrant la force des lèvres qui se pincent */}
        <line x1="50" y1="20" x2="50" y2="35" stroke={arrowColor} strokeWidth="3" markerEnd="url(#arrow)" style={{ animation: 'arrowPushUp 1.5s infinite reverse' }} />
        <line x1="50" y1="80" x2="50" y2="65" stroke={arrowColor} strokeWidth="3" markerEnd="url(#arrow)" style={{ animation: 'arrowPushUp 1.5s infinite' }} />
      </svg>
    );
  }

  // 8. Phonation
  if (exerciseId === 's2-e3') {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full p-4 drop-shadow-sm">
        <style>{animationStyles}</style>
        <path d="M 20 40 Q 50 10 80 40 Q 50 70 20 40 Z" fill={lipColor} />
        <circle cx="50" cy="45" r="12" fill={tongueColor} style={{ animation: 'pulse 0.5s infinite' }} />
        {/* Ondes sonores */}
        <path d="M 85 30 Q 95 40 85 50" fill="none" stroke={arrowColor} strokeWidth="3" style={{ animation: 'arrowMoveBack 1s infinite' }} />
        <path d="M 90 25 Q 105 40 90 55" fill="none" stroke={arrowColor} strokeWidth="3" style={{ animation: 'arrowMoveBack 1s infinite', animationDelay: '0.2s' }} />
      </svg>
    );
  }

  // Fallback
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-4 drop-shadow-sm">
      <circle cx="50" cy="50" r="30" fill={tongueColor} opacity="0.8" />
    </svg>
  );
}
