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
      title: '1. Déglutition (Liquide)',
      category: 'Déglutition',
      type: 'reps',
      reps: 10,
      instructions: [
        'Le point de départ de la langue est au palais.',
        'Elle s\'aplatit contre le palais pour amener le liquide vers l\'arrière (mouvement de toboggan).',
        'Prenez de petites à moyennes gorgées (10 fois).',
        'À faire devant un miroir : sans bouger les lèvres et sans que la langue ne touche les dents.'
      ],
      mirrorRecommended: true,
    },
    {
      id: 's1-e2',
      title: '2. Déglutition (Bâtonnet)',
      category: 'Déglutition',
      type: 'reps',
      reps: 5,
      equipment: ['bâtonnet'],
      instructions: [
        'Placez le bâtonnet entre les dents.',
        'Avalez votre salive 5 fois de suite.',
        'Ne refermez pas les lèvres pendant la déglutition.'
      ],
      mirrorRecommended: true,
    },
    {
      id: 's1-e3',
      title: '3. Mobilité de la langue',
      category: 'Mobilité',
      type: 'reps',
      reps: 5,
      instructions: [
        'Bougez la langue dans tous les sens.',
        'Le Singe : passez la langue sous les lèvres (5 allers-retours en haut, 5 en bas).',
        'Dents : passez la pointe de la langue sur chaque dent (5 allers-retours).',
        'Extérieur : mouvements à l\'extérieur de la bouche (5 allers-retours haut/bas, 5 gauche/droite).'
      ],
      mirrorRecommended: true,
    },
    {
      id: 's1-e4a',
      title: '4a. Mobilité arrière langue',
      category: 'Phonation',
      type: 'reps',
      reps: 20,
      instructions: [
        'Prononcez "GA" 20 fois, la bouche grande ouverte, selon vos possibilités.',
        'Maintenez la mâchoire abaissée et immobile (placez une main sur le menton pour vous aider).'
      ],
      mirrorRecommended: true,
    },
    {
      id: 's1-e4b',
      title: '4b. Placage arrière langue',
      category: 'Respiration',
      type: 'timer',
      duration: 15,
      sets: 4,
      pauseBetweenSets: 5,
      instructions: [
        'Maintenez l\'arrière de la langue collée au palais.',
        'Respirez exclusivement par le nez.',
        'Gardez cette position 15 secondes, à faire 4 fois.'
      ],
    },
    {
      id: 's1-e5',
      title: '5. Claquage',
      category: 'Phonation',
      type: 'reps',
      reps: 20,
      instructions: [
        'La langue fait un mouvement d\'enroulement en partant du palais vers l\'arrière. Articulez bien en baissant la mâchoire.',
        'Faites le son "CLA" (20 fois), "CLO" (20 fois), puis "CLA-CLO" (20 fois).',
        'Si c\'est difficile : faites-le dents serrées, pour que la langue tape en bas. Dès que possible, passez au double claquage ("CLAC-CLA", "CLO-CLO").'
      ],
    },
    {
      id: 's1-e6',
      title: '6. Le Piston',
      category: 'Renforcement',
      type: 'timer',
      duration: 10,
      sets: 10,
      pauseBetweenSets: 5,
      instructions: [
        'Appuyez fort la pointe de la langue au niveau des bosses du palais.',
        'Gardez les dents serrées.',
        'Mettez un doigt sous le menton pour sentir l\'appui et appliquez une forte résistance.',
        'Maintenez 10 secondes (10 séries).'
      ],
    },
    {
      id: 's1-e7',
      title: '7. Étirement du frein',
      category: 'Assouplissement',
      type: 'timer',
      duration: 60,
      sets: 2,
      pauseBetweenSets: 10,
      equipment: ['bâtonnet ou index'],
      instructions: [
        'Tirez la langue par-dessus l\'index ou le bâtonnet, placé sur les dents du bas.',
        'Maintenez la position d\'étirement pendant 1 minute.',
        'Faites cet exercice 2 fois.'
      ],
    },
    {
      id: 's1-e8',
      title: '8. Détente musculaire',
      category: 'Relaxation',
      type: 'timer',
      duration: 60,
      sets: 1,
      instructions: [
        'Massage extra-buccal des masséters (de la pommette à l\'angle de la mâchoire).',
        'Faites 10 pressions glissées (en haut et en bas) bilatéralement, des paumes jusqu\'aux doigts.',
        'Massez circulairement (2x10 mouvements).',
        'Maintenez une pression 30s sur les points douloureux (d\'abord en ouverture statique, puis dynamique).'
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
