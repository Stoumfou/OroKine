export type ExerciseType = 'timer' | 'reps';

export interface Exercise {
  id: string;
  title: string;
  category: string;
  type: ExerciseType;
  duration?: number; // total duration in seconds if timer
  reps?: number; // total reps if reps
  sets?: number; // number of sets
  pauseBetweenSets?: number; // seconds
  instructions: string[];
  equipment?: string[];
  mirrorRecommended?: boolean;
}

export interface Session {
  id: string;
  title: string;
  exercises: Exercise[];
  equipment: string[];
}

export const SESSION_1: Session = {
  id: 'session-1',
  title: 'Séance 1 : Fondations',
  equipment: ['1 verre d\'eau', '1 bâtonnet (abaisse-langue ou cuillère)', '1 miroir'],
  exercises: [
    {
      id: 's1-e1',
      title: '1. Déglutition',
      category: 'Mouvement de toboggan',
      type: 'reps',
      reps: 10,
      instructions: [
        'Le point de départ de la langue est au palais.',
        'Elle s\'aplatit contre le palais pour amener le liquide vers l\'arrière (mouvement de toboggan).',
        'Prenez de petites à moyennes gorgées (10 fois).',
        'À faire devant un miroir : sans bouger les lèvres et sans que la langue ne touche les dents.',
        'Ensuite, placez le bâtonnet entre les dents et avalez votre salive 5 fois de suite sans refermer les lèvres.'
      ],
      mirrorRecommended: true,
      equipment: ['bâtonnet', 'verre d\'eau']
    },
    {
      id: 's1-e3',
      title: '2. Mobilité de la langue',
      category: 'Bouger la langue dans tous les sens',
      type: 'reps',
      reps: 5,
      instructions: [
        'Le Singe : passez la langue sous les lèvres (5 allers-retours en haut, 5 en bas).',
        'Dents : passez la pointe de la langue sur chaque dent (5 allers-retours).',
        'Extérieur : mouvements à l\'extérieur de la bouche (5 allers-retours haut/bas, 5 gauche/droite).'
      ],
      mirrorRecommended: true,
    },
    {
      id: 's1-e4a',
      title: '3. Mobilité et Placage',
      category: 'Arrière de la langue',
      type: 'timer',
      duration: 15,
      sets: 4,
      pauseBetweenSets: 5,
      instructions: [
        'Prononcez "GA" 20 fois, la bouche grande ouverte. Maintenez la mâchoire abaissée.',
        'Puis, maintenez l\'arrière de la langue collée au palais.',
        'Respirez exclusivement par le nez.',
        'Gardez cette position 15 secondes, à faire 4 fois.'
      ],
      mirrorRecommended: true,
    },
    {
      id: 's1-e5',
      title: '4. Claquage',
      category: 'Phonation',
      type: 'reps',
      reps: 60,
      instructions: [
        'CLA 20 fois',
        'CLO 20 fois',
        'CLA-CLO 20 fois',
        'Dès que possible, passer au double claquage : son "CLAC-CLA-CLO-CLO" x 20.',
        '(Si exercice difficile, serrez les dents et répétez "CLA CLA CLA")'
      ],
    },
    {
      id: 's1-e6',
      title: '5. Le Piston',
      category: 'Renforcement',
      type: 'timer',
      duration: 10,
      sets: 10,
      pauseBetweenSets: 5,
      instructions: [
        'Poussez la pointe de la langue très fort contre la papille (juste derrière les incisives).',
        'Placez un doigt sous le menton pour résister à la force de la langue.',
        'Maintenez la pression 10 secondes.',
        'Faites 10 séries de 10 secondes.'
      ],
    },
    {
      id: 's1-e7',
      title: '6. Étirement du frein',
      category: 'Étirement',
      type: 'timer',
      duration: 60,
      sets: 2,
      pauseBetweenSets: 15,
      equipment: ['bâtonnet'],
      instructions: [
        'La bouche est grande ouverte.',
        'Le bâtonnet ou l\'index est posé sur les incisives inférieures.',
        'Tirez la langue au maximum par-dessus, vers le bas.',
        'Maintenez l\'étirement 1 minute, 2 fois.'
      ],
    },
    {
      id: 's1-e8a',
      title: '7a. Détente - Pressions',
      category: 'Massages',
      type: 'reps',
      reps: 10,
      instructions: [
        'Massez les muscles masséters (muscles des joues/mâchoire).',
        'Faites des pressions glissées (10 fois).'
      ],
    },
    {
      id: 's1-e8b',
      title: '7b. Détente - Ponçage',
      category: 'Massages',
      type: 'reps',
      reps: 10,
      sets: 2,
      pauseBetweenSets: 5,
      instructions: [
        'Faites un ponçage avec les poings.',
        'Effectuez des mouvements circulaires (2 séries de 10).'
      ],
    },
    {
      id: 's1-e8c',
      title: '7c. Détente - Points douloureux',
      category: 'Massages',
      type: 'timer',
      duration: 30,
      instructions: [
        'Cherchez les points particulièrement douloureux.',
        'Maintenez une pression ferme de 30 secondes sur ces points.'
      ],
    }
  ]
};

export const SESSION_2: Session = {
  id: 'session-2',
  title: 'Séance 2 : Renforcement',
  equipment: ['1 verre d\'eau', '1 bâtonnet', '2 pinces à linge', '1 miroir'],
  exercises: [
    {
      id: 's2-e1',
      title: 'Placement et Slurps',
      category: 'Déglutition',
      type: 'reps',
      reps: 20, // 10 ouvertes, 10 serrées
      instructions: ['Étirer la langue au palais.', 'Aspirer fort comme pour avaler (slurp).', '10 fois bouche ouverte, 10 fois dents serrées.'],
    },
    {
      id: 's2-e2',
      title: 'Tonicité des lèvres',
      category: 'Renforcement',
      type: 'timer',
      duration: 15,
      sets: 6,
      pauseBetweenSets: 5,
      equipment: ['bâtonnet', 'pinces à linge'],
      instructions: ['Pincez le bâtonnet lesté avec les lèvres uniquement.', 'Ne pas mordre.', 'Maintenir à l\'horizontale.'],
    },
    {
      id: 's2-e3',
      title: 'Phonation',
      category: 'Phonation',
      type: 'reps',
      reps: 1,
      instructions: ['Répétez énergiquement devant le miroir :', 'LA LE LI LO LU LOU', 'NA NE NI NO NU NOU', 'DA DE DI DO DU DOU', 'TA TE TI TO TU TOU'],
      mirrorRecommended: true,
    }
  ]
};
