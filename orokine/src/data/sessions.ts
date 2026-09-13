export type ExerciseType = 'timer' | 'reps';

export interface Exercise {
  id: string;
  title: string;
  category?: string;
  type?: string;
  duration?: number;
  reps?: number;
  sets?: number;
  pauseBetweenSets?: number;
  instructions?: string[];
  description?: string;
  equipment?: string[];
  mirrorRecommended?: boolean;
  timerOptions?: { label: string; duration?: number; sets?: number }[];
}

export interface Session {
  id: string;
  title: string;
  description?: string;
  exercises: Exercise[];
  equipment?: string[];
}

export const SESSION_1: Session = {
  id: 'session-1',
  title: 'Séance 1 : Fondations',
  equipment: ['1 verre d\'eau', '1 bâtonnet (abaisse-langue ou cuillère)', '1 miroir'],
  exercises: [
    {
      id: 's1-e1a',
      title: '1a. Déglutition (Liquide)',
      category: 'Mouvement de toboggan',
      type: 'reps',
      reps: 10,
      instructions: [
        'Le point de départ de la langue est au palais.',
        'Elle s\'aplatit contre le palais pour amener le liquide vers l\'arrière (mouvement de toboggan).',
        'Prenez de petites à moyennes gorgées (10 fois).',
        'À faire devant un miroir : sans bouger les lèvres et sans que la langue ne touche les dents.'
      ],
      mirrorRecommended: true,
      equipment: ['verre d\'eau']
    },
    {
      id: 's1-e1b',
      title: '1b. Déglutition (Salive)',
      category: 'Mouvement de toboggan',
      type: 'reps',
      reps: 5,
      instructions: [
        'Placez le bâtonnet entre les dents.',
        'Avalez votre salive 5 fois de suite sans refermer les lèvres.'
      ],
      mirrorRecommended: true,
      equipment: ['bâtonnet']
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
      id: 's1-e3a',
      title: '3a. Mobilité arrière langue',
      category: 'Arrière de la langue',
      type: 'reps',
      reps: 20,
      instructions: [
        'Prononcez "GA" 20 fois, la bouche grande ouverte. Maintenez la mâchoire abaissée immobile avec la main sur le menton.'
      ],
      mirrorRecommended: true,
    },
    {
      id: 's1-e3b',
      title: '3b. Placage arrière langue',
      category: 'Arrière de la langue',
      type: 'timer',
      duration: 15,
      sets: 4,
      pauseBetweenSets: 5,
      instructions: [
        'Maintenez l\'arrière de la langue collée au palais.',
        'Respirez exclusivement par le nez.',
        'Gardez cette position 15 secondes, à faire 4 fois.'
      ],
      mirrorRecommended: true,
    },
    {
      id: 's1-e5',
      title: '4. Claquage',
      category: 'Mouvement d\'enroulement en partant du palais vers l\'arrière',
      type: 'reps',
      reps: 60,
      instructions: [
        'CLA 20 fois',
        'CLO 20 fois',
        'CLA-CLO 20 fois',
        'Dès que possible, passer au double claquage : son "CLAC-CLA-CLO-CLO" x 20.',
        'Si difficile, à effectuer dents serrées avec la volonté que la langue tape en bas.'
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
        'Pressions-glissées 10 fois bilatérales de haut en bas (en commençant avec les paumes jusqu\'aux doigts).'
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
        'Maintenez une pression ferme de 30 secondes sur ces points.',
        'Evolution du massage en position d\'ouverture statique de la mâchoire pour un meilleur étirement puis en ouverture dynamique.'
      ],
    }
  ]
};

export const SESSION_2: Session = {
  id: 'session-2',
  title: 'Séance 2 : Renforcement',
  equipment: ['1 verre d\'eau', '1 bâtonnet ou crayon à papier', '1 miroir'],
  exercises: [
    {
      id: 's2-e1a',
      title: '1a. SLURPS (Bouche ouverte)',
      category: 'Placement de la langue',
      type: 'reps',
      reps: 10,
      instructions: [
        'Tenue du petit carnet : LANGUE = PALAIS + Avaler la salive avec l\'arrière de la langue, bien garder les lèvres en contact, mâchoire desserrée.',
        'Imitez le bruit que l\'on fait quand on boit de la soupe.',
        'La langue s\'étale contre le palais et ne touche surtout pas les dents.',
        'Faites durer le bruit le plus longtemps possible.',
        'À faire la bouche ouverte.'
      ],
      mirrorRecommended: false,
    },
    {
      id: 's2-e1b',
      title: '1b. SLURPS (Bouche semi-fermée)',
      category: 'Placement de la langue',
      type: 'reps',
      reps: 10,
      instructions: [
        'Même exercice que le précédent (Slurps longs).',
        'À faire cette fois-ci la bouche semi-fermée (dents serrées).'
      ],
      mirrorRecommended: false,
    },
    {
      id: 's2-e2a',
      title: '2a. Déglutition (Liquide)',
      category: 'Déglutition',
      type: 'reps',
      reps: 5,
      equipment: ['1 verre d\'eau'],
      instructions: [
        'Prenez 5 gorgées moyennes.',
        'À faire devant un miroir sans bouger les lèvres et sans que la langue ne touche les dents.'
      ],
      mirrorRecommended: true,
    },
    {
      id: 's2-e2b',
      title: '2b. Déglutition (En série)',
      category: 'Déglutition',
      type: 'reps',
      reps: 5,
      sets: 3,
      pauseBetweenSets: 10,
      equipment: ['1 verre d\'eau'],
      instructions: [
        'Prenez 5 gorgées de suite sans bouger les lèvres en gardant le verre à la bouche.'
      ],
      mirrorRecommended: true,
    },
    {
      id: 's2-e2c',
      title: '2c. Déglutition (Bâtonnet)',
      category: 'Déglutition',
      type: 'reps',
      reps: 5,
      equipment: ['1 bâtonnet ou crayon à papier'],
      instructions: [
        'Avalez la salive (ou gorgée) avec le bâtonnet mis de biais entre les dents ou bouche ouverte.',
        'En cas de difficulté, reprenez la position "GA" en maintenant fortement l\'arrière langue collée au palais.'
      ],
      mirrorRecommended: true,
    },
    {
      id: 's2-e3a',
      title: '3a. PISTON (Résistance sous menton)',
      category: 'Renforcement de la langue',
      type: 'timer',
      duration: 15,
      sets: 6,
      pauseBetweenSets: 10,
      instructions: [
        'Faites le mouvement du piston au palais.',
        'Maintenez une forte résistance sous le menton pendant 15 secondes.'
      ],
      mirrorRecommended: false,
    },
    {
      id: 's2-e3b',
      title: '3b. MICROPISTONS',
      category: 'Renforcement de la langue',
      type: 'reps',
      reps: 15,
      sets: 3,
      pauseBetweenSets: 10,
      instructions: [
        'Effectuez de grands pistons à la suite dans toute l\'amplitude (comme des pompes).',
        'Mettez une forte résistance sous le menton pendant les poussées.'
      ],
      mirrorRecommended: false,
    },
    {
      id: 's2-e3c',
      title: '3c. CRISSEMENT (Bouche ouverte)',
      category: 'Renforcement de la langue',
      type: 'reps',
      reps: 10,
      instructions: [
        'Imitez le cri du tigre ("Crrrrr" ou "Grrrrr").',
        'La langue ne reste pas figée : bien ressentir les vibrations au niveau du palais et au fond de la langue (elle recule et vibre).',
        'Fort et longtemps. À faire la bouche ouverte.'
      ],
      mirrorRecommended: false,
    },
    {
      id: 's2-e3d',
      title: '3d. CRISSEMENT (Bouche semi-fermée)',
      category: 'Renforcement de la langue',
      type: 'reps',
      reps: 10,
      instructions: [
        'Même consigne que le précédent (Crrrrr / Grrrrr).',
        'À faire cette fois-ci la bouche semi-fermée (dents serrées).'
      ],
      mirrorRecommended: false,
    },
    {
      id: 's2-e3e',
      title: '3e. LANGUE POINTUE',
      category: 'Renforcement de la langue',
      type: 'timer',
      duration: 60,
      instructions: [
        'Tirez la langue horizontalement et resserrez-la transversalement pour ne pas qu\'elle s\'étale.',
        'La langue doit ressembler à une épée bien aiguisée (et non un obus).',
        'Bien garder la bouche ouverte avec les dents inférieures visibles.'
      ],
      mirrorRecommended: true,
    },
    {
      id: 's2-e4a',
      title: '4a. ÉTIREMENT DU FREIN (si court)',
      category: 'Étirement',
      type: 'timer',
      duration: 60,
      sets: 2,
      pauseBetweenSets: 15,
      equipment: ['1 bâtonnet ou index'],
      instructions: [
        'Tirez la langue par-dessus l\'index (ou le bâtonnet) placé sur les dents du bas.'
      ],
      mirrorRecommended: false,
    },
    {
      id: 's2-e4b',
      title: '4b. Massage du frein',
      category: 'Étirement',
      type: 'reps',
      reps: 45, // 15 + 15 + 15
      instructions: [
        'Effectuez des massages sur le frein : 15 pressions verticales.',
        '15 pressions horizontales.',
        '15 pressions circulaires.'
      ],
      mirrorRecommended: false,
    },
    {
      id: 's2-e5',
      title: '5. TONICITÉ DES LÈVRES',
      category: 'Lèvres',
      type: 'timer',
      duration: 15,
      sets: 6,
      pauseBetweenSets: 10,
      equipment: ['1 bâtonnet ou crayon à papier', 'Optionnel: 2 pinces à linge'],
      instructions: [
        'Tenez le bâtonnet ou un crayon horizontalement entre les lèvres.',
        'Vous pouvez ajouter une ou deux pinces à linge pour que le bâtonnet soit plus lourd.',
        'Le point de départ du bâtonnet est à mettre sur les dents du haut.'
      ],
      mirrorRecommended: true,
    },
    {
      id: 's2-e6',
      title: '6. PHONATION',
      category: 'Phonation',
      type: 'reps',
      reps: 5,
      instructions: [
        'Devant le miroir, la pointe de la langue s\'appuie contre le palais (elle ne touche jamais les dents).',
        'Maintenez la mâchoire abaissée immobile (ou doigt entre les dents sur le côté).',
        'Répétez 5 fois la série complète :',
        'LaLeliLoLulou, NaNeNiNoNuNou, DaDeDiDoDuDou, TaTeTiToTuTou, LaNaDaTa.'
      ],
      mirrorRecommended: true,
    },
    {
      id: 's2-e7a',
      title: '7a. DÉTENTE MUSCULAIRE (Pressions-glissées)',
      category: 'Massage',
      type: 'reps',
      reps: 10,
      sets: 2,
      pauseBetweenSets: 5,
      instructions: [
        'Pince pouce-doigts entre l\'intérieur de la joue et le muscle masséter.',
        'Relâchez et étirez transversalement le muscle vers l\'avant, le bas et/ou l\'extérieur.',
        'Faites des pressions-glissées.'
      ],
      mirrorRecommended: false,
    },
    {
      id: 's2-e7b',
      title: '7b. DÉTENTE MUSCULAIRE (Ponçage)',
      category: 'Massage',
      type: 'reps',
      reps: 10,
      sets: 2,
      pauseBetweenSets: 5,
      instructions: [
        'Même positionnement, effectuez un mouvement de ponçage sur les masséters, les lèvres et les joues.'
      ],
      mirrorRecommended: false,
    },
    {
      id: 's2-e7c',
      title: '7c. DÉTENTE MUSCULAIRE (Points douloureux)',
      category: 'Massage',
      type: 'timer',
      duration: 30,
      instructions: [
        'Maintenez une pression de 30 secondes sur les points particulièrement douloureux.',
        'Associez ensuite les pressions à l\'ouverture de la bouche.',
        'Terminez par un massage intra buccal sous les lèvres supérieures/inférieures et des joues droite/gauche.'
      ],
      mirrorRecommended: false,
    }
  ]
};
export const SESSION_3: Session = {
  "id": "session-3",
  "title": "Séance 3",
  "description": "Niveau intermédiaire",
  "exercises": [
    {
      "id": "s3-exo-1",
      "title": "Placement de la langue au quotidien",
      "description": "À L'EFFORT : Mettre la langue au palais avec une respiration et une récupération par le nez. (Exemple : Sauter et toucher le sol)\nVENTOUSE : Plaquer toute la langue au palais comme un début de claquage.",
      "duration": 20,
      "reps": 20,
      "timerOptions": [
        {
          "label": "À l'effort (20 sauts)",
          "duration": 20,
          "sets": 1
        },
        {
          "label": "Ventouse (15s)",
          "duration": 15,
          "sets": 4
        }
      ]
    },
    {
      "id": "s3-exo-2",
      "title": "Déglutition",
      "description": "1. Moyennes ou grosses gorgées devant un miroir sans bouger les lèvres.\n2. Avaler la salive bouche (ou gorgée) ouverte (Si besoin, s'aider du bâtonnet).\n3. Pratiquer la bonne déglutition en buvant une boisson sucrée.",
      "duration": 5,
      "reps": 5,
      "timerOptions": [
        {
          "label": "Gorgées (x5)",
          "duration": 5,
          "sets": 5
        },
        {
          "label": "Salive bouche ouverte (x5)",
          "duration": 5,
          "sets": 5
        }
      ]
    },
    {
      "id": "s3-exo-3",
      "title": "Renforcement de la langue",
      "description": "PISTON : Maintenir une forte résistance\nMICROPISTONS : 3 x 15 poussées\nLANGUE POINTUE CONTRE RÉSISTANCE BÂTONNET : Tirer la langue le plus fortement possible. Bouche ouverte.",
      "duration": 20,
      "reps": 10,
      "timerOptions": [
        {
          "label": "Piston (20s)",
          "duration": 20,
          "sets": 4
        },
        {
          "label": "Micropistons (x15)",
          "duration": 15,
          "sets": 3
        },
        {
          "label": "Langue pointue (10s)",
          "duration": 10,
          "sets": 10
        }
      ]
    },
    {
      "id": "s3-exo-4",
      "title": "Étirement du frein (uniquement si le frein est court)",
      "description": "1. Tirer la langue par-dessus l'index/bâtonnet placé sur les dents du bas.\n2. Massage avec la langue au palais : Pressions verticales, horizontales, circulaires.\n3. Tirer la langue en arrière bouche ouverte.",
      "duration": 60,
      "reps": 1,
      "timerOptions": [
        {
          "label": "Tirer sur l'index (1 min)",
          "duration": 60,
          "sets": 1
        },
        {
          "label": "Massage palais (x20 chaque)",
          "duration": 20,
          "sets": 3
        },
        {
          "label": "Langue en arrière (10s)",
          "duration": 10,
          "sets": 6
        }
      ]
    },
    {
      "id": "s3-exo-5",
      "title": "Tonicité des lèvres",
      "description": "GENDARME : Serrer les lèvres l'une contre l'autre.\nSOURIRE FORCÉ SYMÉTRIQUE : Sourire en dégageant bien les gencives, refermer les lèvres à chaque sourire.",
      "duration": 60,
      "reps": 30,
      "timerOptions": [
        {
          "label": "Gendarme (1 min)",
          "duration": 60,
          "sets": 1
        },
        {
          "label": "Sourire forcé symétrique (x30)",
          "duration": 30,
          "sets": 1
        }
      ]
    },
    {
      "id": "s3-exo-6",
      "title": "Phonation L, N, D, T",
      "description": "Répéter devant un miroir, mâchoire abaissée immobile.\nPRONONCER Lala Nana Dada Tata, puis avec E, I, O, U, OU.\nPuis: LalalaLanananaDadadadaTatatata, avec toutes les voyelles.",
      "duration": 10,
      "reps": 5,
      "timerOptions": [
        {
          "label": "Lala Nana... (x5)",
          "duration": 10,
          "sets": 5
        },
        {
          "label": "Lalala Lananana... (x5)",
          "duration": 10,
          "sets": 5
        }
      ]
    },
    {
      "id": "s3-exo-7",
      "title": "Détente musculaire",
      "description": "Massage des muscles temporaux et sous-mandibulaires.\nFrictions circulaires, étirements des cheveux.\nPonçage bilatéral avec les pouces en crochet sous la mandibule.\nContinuer le massage des masséters.",
      "duration": 120,
      "reps": 1,
      "timerOptions": [
        {
          "label": "Muscles temporaux",
          "duration": 60,
          "sets": 1
        },
        {
          "label": "Zone sous-mandibulaire",
          "duration": 60,
          "sets": 1
        }
      ]
    }
  ]
};

export const SESSION_4: Session = {
  "id": "session-4",
  "title": "Séance 4",
  "description": "Progression 4",
  "exercises": [
    {
      "id": "s4-exo-1",
      "title": "Placement de la langue au quotidien",
      "description": "À L'EFFORT : Mettre la langue au palais avec respiration par le nez. Sauter et toucher le sol.\nVeiller à garder une respiration nasale, bouche fermée, langue au palais au quotidien et lors du sommeil.",
      "duration": 20,
      "reps": 20,
      "timerOptions": [
        {
          "label": "À l'effort (20 sauts)",
          "duration": 20,
          "sets": 1
        }
      ]
    },
    {
      "id": "s4-exo-2",
      "title": "Déglutition",
      "description": "1. Grosses gorgées devant un miroir sans bouger les lèvres.\n2. Avaler la salive (et gorgée) bouche grande ouverte.\n3. Pratiquer la bonne déglutition en prenant un dessert.",
      "duration": 5,
      "reps": 5,
      "timerOptions": [
        {
          "label": "Gorgées sans lèvres (x5)",
          "duration": 5,
          "sets": 5
        },
        {
          "label": "Salive bouche ouverte (x5)",
          "duration": 5,
          "sets": 5
        }
      ]
    },
    {
      "id": "s4-exo-3",
      "title": "Renforcement de la langue",
      "description": "PISTON : Maintenir une forte résistance\nMICROPISTONS : Poussées\nLANGUE POINTUE CONTRE RÉSISTANCE BÂTONNET\nBÂILLEMENT : Aplatir la langue bouche ouverte avec la pointe derrière les dents du bas. (Voir la luette).",
      "duration": 30,
      "reps": 10,
      "timerOptions": [
        {
          "label": "Piston (30s)",
          "duration": 30,
          "sets": 2
        },
        {
          "label": "Micropistons (x15)",
          "duration": 15,
          "sets": 3
        },
        {
          "label": "Langue pointue (15s)",
          "duration": 15,
          "sets": 6
        },
        {
          "label": "Bâillement (x10)",
          "duration": 10,
          "sets": 1
        }
      ]
    },
    {
      "id": "s4-exo-4",
      "title": "Étirement du frein",
      "description": "Uniquement si le frein est court.\n1. Tirer la langue par-dessus l'index.\n2. Massage avec la langue au palais (Pressions verticales, horizontales, circulaires).\n3. Cisaillement avec les dents.",
      "duration": 60,
      "reps": 20,
      "timerOptions": [
        {
          "label": "Tirer la langue (1 min)",
          "duration": 60,
          "sets": 1
        },
        {
          "label": "Massage palais (x20)",
          "duration": 20,
          "sets": 3
        },
        {
          "label": "Cisaillement (x10 allers-retours)",
          "duration": 10,
          "sets": 3
        }
      ]
    },
    {
      "id": "s4-exo-5",
      "title": "Tonicité des lèvres",
      "description": "GENDARME : 1 minute.\nSOURIRE FORCÉ SYMÉTRIQUE : Limiter contraction du cou.\nSOURIRE FORCÉ ASYMÉTRIQUE : Clin d'œil et Mine triste.\nRENFORCEMENT ISOLÉ DES LÈVRES : Lutter contre bâtonnet vertical.",
      "duration": 60,
      "reps": 15,
      "timerOptions": [
        {
          "label": "Gendarme (1 min)",
          "duration": 60,
          "sets": 1
        },
        {
          "label": "Sourire symétrique (x15)",
          "duration": 15,
          "sets": 1
        },
        {
          "label": "Sourire asymétrique (x5 chaque)",
          "duration": 20,
          "sets": 1
        },
        {
          "label": "Lèvre supérieure (x10)",
          "duration": 10,
          "sets": 1
        },
        {
          "label": "Lèvre inférieure (x10)",
          "duration": 10,
          "sets": 1
        }
      ]
    },
    {
      "id": "s4-exo-6",
      "title": "Phonation S, Z / Ch, J",
      "description": "Répéter devant un miroir. Les bords latéraux de la langue en contact avec les molaires, dos aplati ou creux. Pointe de la langue ne touche pas les dents devant.\nAlterner CH et S, SSA-SSE..., CHA-CHE..., ZZA-ZZE..., JA-JE...",
      "duration": 20,
      "reps": 20,
      "timerOptions": [
        {
          "label": "Alterner CH et S (x20)",
          "duration": 20,
          "sets": 1
        },
        {
          "label": "SSA-SSE... (x5)",
          "duration": 5,
          "sets": 5
        },
        {
          "label": "CHA-CHE... (x5)",
          "duration": 5,
          "sets": 5
        },
        {
          "label": "ZZA-ZZE... (x5)",
          "duration": 5,
          "sets": 5
        },
        {
          "label": "JA-JE... (x5)",
          "duration": 5,
          "sets": 5
        }
      ]
    },
    {
      "id": "s4-exo-7",
      "title": "Détente musculaire",
      "description": "Massage global des séances précédentes.\nMassage des masséters, parties jugales, sous labiales, temporaux et région sous-mandibulaire en 5 minutes. Insister sur zones douloureuses.",
      "duration": 300,
      "reps": 1,
      "timerOptions": [
        {
          "label": "Massage global (5 min)",
          "duration": 300,
          "sets": 1
        }
      ]
    }
  ]
};

export const SESSION_5: Session = {
  "id": "session-5",
  "title": "Séance 5",
  "description": "Progression 5",
  "exercises": [
    {
      "id": "s5-exo-1",
      "title": "Placement de la langue au quotidien",
      "description": "Respiration nasale, bouche fermée, langue au palais (sommeil).\nSi non acquise : utiliser RESPIRELAX+ (5s inspi, 5s expi pendant 5 min).",
      "duration": 300,
      "reps": 1,
      "timerOptions": [
        {
          "label": "Respiration (5 min)",
          "duration": 300,
          "sets": 1
        }
      ]
    },
    {
      "id": "s5-exo-2",
      "title": "Déglutition",
      "description": "1. Avaler les joues gonflées (salive ou gorgées).\n2. Vigilance à pratiquer la bonne déglutition lors de l'alimentation.",
      "duration": 5,
      "reps": 5,
      "timerOptions": [
        {
          "label": "Joues gonflées (x5)",
          "duration": 5,
          "sets": 5
        }
      ]
    },
    {
      "id": "s5-exo-3",
      "title": "Renforcement de la langue",
      "description": "PISTON : 60s.\nMICROPISTONS : 3 x 15 poussées.\nLANGUE POINTUE CONTRE RÉSISTANCE : 4 x 20s.\nBÂILLEMENT : 6 x 10s (Ouvrir bouche, langue tirée ou aplatie, faire le son 'Aahh' pour soulever luette).",
      "duration": 60,
      "reps": 1,
      "timerOptions": [
        {
          "label": "Piston (60s)",
          "duration": 60,
          "sets": 1
        },
        {
          "label": "Micropistons (x15)",
          "duration": 15,
          "sets": 3
        },
        {
          "label": "Langue pointue (20s)",
          "duration": 20,
          "sets": 4
        },
        {
          "label": "Bâillement (10s)",
          "duration": 10,
          "sets": 6
        }
      ]
    },
    {
      "id": "s5-exo-4",
      "title": "Étirement du frein",
      "description": "Uniquement si le frein est court.\n1. Tirer la langue par-dessus l'index (1 min).\n2. Massage : Pressions (x20).\n3. Contracté-Relâché : poussées de langue.",
      "duration": 60,
      "reps": 1,
      "timerOptions": [
        {
          "label": "Tirer langue (1 min)",
          "duration": 60,
          "sets": 1
        },
        {
          "label": "Massage (x20)",
          "duration": 20,
          "sets": 3
        },
        {
          "label": "Contracté-Relâché (x10)",
          "duration": 10,
          "sets": 3
        }
      ]
    },
    {
      "id": "s5-exo-5",
      "title": "Tonicité des lèvres",
      "description": "GENDARME : 1 minute.\nRENFORCEMENT ISOLÉ LÈVRES : bâtonnet vertical sous lèvre sup / inf.\nBULLE : Mettre de l'air sous les lèvres (haut, bas, droite, gauche).\nAVEC BOUTON : Tirer ficelle (face, biais).",
      "duration": 60,
      "reps": 1,
      "timerOptions": [
        {
          "label": "Gendarme (1 min)",
          "duration": 60,
          "sets": 1
        },
        {
          "label": "Bâtonnet lèvre sup (10s)",
          "duration": 10,
          "sets": 6
        },
        {
          "label": "Bâtonnet lèvre inf (10s)",
          "duration": 10,
          "sets": 6
        },
        {
          "label": "Bulle haut (30s)",
          "duration": 30,
          "sets": 1
        },
        {
          "label": "Bulle bas (30s)",
          "duration": 30,
          "sets": 1
        },
        {
          "label": "Bulle droite (30s)",
          "duration": 30,
          "sets": 1
        },
        {
          "label": "Bulle gauche (30s)",
          "duration": 30,
          "sets": 1
        },
        {
          "label": "Bouton de face (x10)",
          "duration": 10,
          "sets": 1
        },
        {
          "label": "Bouton de biais (x10)",
          "duration": 10,
          "sets": 1
        }
      ]
    },
    {
      "id": "s5-exo-6",
      "title": "Phonation",
      "description": "Dents serrées : ZASACHAJA.\nEt avec autres voyelles : ZESECHEJE, ZISICHIJI, ZOSOSCHOJO... \nBien respecter respiration nasale.",
      "duration": 5,
      "reps": 5,
      "timerOptions": [
        {
          "label": "ZASACHAJA (x5)",
          "duration": 5,
          "sets": 5
        },
        {
          "label": "ZESECHEJE (x5)",
          "duration": 5,
          "sets": 5
        },
        {
          "label": "ZISICHIJI (x5)",
          "duration": 5,
          "sets": 5
        }
      ]
    },
    {
      "id": "s5-exo-7",
      "title": "Détente musculaire",
      "description": "Massage péri articulaire et muscle ptérygoïdien.\nPressions, ponçage, palper-rouler en avant de l'oreille.\nPression en intrabuccal avec index.",
      "duration": 10,
      "reps": 10,
      "timerOptions": [
        {
          "label": "Massage avant oreille (x10)",
          "duration": 10,
          "sets": 3
        },
        {
          "label": "Pression intrabuccale (10s)",
          "duration": 10,
          "sets": 6
        }
      ]
    },
    {
      "id": "s5-exo-8",
      "title": "Mobilité et renforcement de la mâchoire",
      "description": "DÉCOMPRESSION : Contraction rythmée (10s travail, 5s repos) avec bouchon de liège.\nOUVERTURE avec langue au palais.\nTRANSLATION : déplacement latéral.\nPROPULSION : avancée du menton.",
      "duration": 10,
      "reps": 10,
      "timerOptions": [
        {
          "label": "Décompression (10s)",
          "duration": 10,
          "sets": 10
        },
        {
          "label": "Ouverture (x15)",
          "duration": 15,
          "sets": 1
        },
        {
          "label": "Translation latérale (x10)",
          "duration": 10,
          "sets": 1
        },
        {
          "label": "Propulsion (x10)",
          "duration": 10,
          "sets": 1
        }
      ]
    }
  ]
};

export const SESSION_6: Session = {
  "id": "session-6",
  "title": "Séance 6",
  "description": "Progression 6",
  "exercises": [
    {
      "id": "s6-exo-1",
      "title": "Placement de la langue au quotidien",
      "description": "Respiration nasale, bouche fermée, langue au palais.\nCohérence cardiaque (RESPIRELAX).\nEssayer de mettre scotch sur la bouche pour dormir ou repos long.",
      "duration": 0,
      "reps": 0
    },
    {
      "id": "s6-exo-2",
      "title": "Déglutition",
      "description": "Avaler les joues gonflées et bouche ouverte (avec salive ou gorgées).",
      "duration": 5,
      "reps": 5,
      "timerOptions": [
        {
          "label": "Joues gonflées bouche ouverte (x5)",
          "duration": 5,
          "sets": 5
        }
      ]
    },
    {
      "id": "s6-exo-3",
      "title": "Renforcement de la langue",
      "description": "PISTON : 30s.\nMICROPISTONS : 3 x 15 poussées.\nLANGUE POINTUE CONTRE RÉSISTANCE : 2 x 30s.\nBÂILLEMENT : 30s avec respiration nasale.",
      "duration": 30,
      "reps": 1,
      "timerOptions": [
        {
          "label": "Piston (30s)",
          "duration": 30,
          "sets": 1
        },
        {
          "label": "Micropistons (x15)",
          "duration": 15,
          "sets": 3
        },
        {
          "label": "Langue pointue (30s)",
          "duration": 30,
          "sets": 2
        },
        {
          "label": "Bâillement (30s)",
          "duration": 30,
          "sets": 1
        }
      ]
    },
    {
      "id": "s6-exo-4",
      "title": "Étirement du frein",
      "description": "Uniquement si le frein est court.",
      "duration": 0,
      "reps": 0
    },
    {
      "id": "s6-exo-5",
      "title": "Tonicité des lèvres",
      "description": "RENFORCEMENT AVEC BOUTON : de face et de biais (6x10s).\nRENFORCEMENT ISOLÉ LÈVRES : Lutter contre poussée bâtonnet horizontal (enrouler lèvre vers les dents).",
      "duration": 10,
      "reps": 10,
      "timerOptions": [
        {
          "label": "Bouton de face (10s)",
          "duration": 10,
          "sets": 6
        },
        {
          "label": "Bouton de biais (10s)",
          "duration": 10,
          "sets": 6
        },
        {
          "label": "Lèvre supérieure (x10)",
          "duration": 10,
          "sets": 1
        },
        {
          "label": "Lèvre inférieure (x10)",
          "duration": 10,
          "sets": 1
        }
      ]
    },
    {
      "id": "s6-exo-6",
      "title": "Phonation",
      "description": "PRONONCER : ZAZASASACHACHAJAJA. Puis avec autres voyelles.",
      "duration": 5,
      "reps": 5,
      "timerOptions": [
        {
          "label": "Syllabes A (x5)",
          "duration": 5,
          "sets": 5
        },
        {
          "label": "Syllabes E, I, O, U, OU (x5)",
          "duration": 5,
          "sets": 5
        }
      ]
    },
    {
      "id": "s6-exo-7",
      "title": "Détente musculaire : Région cervicale",
      "description": "Pressions glissées (x10).\nÉtirement des tissus antérieurs du cou (30s séries).\nÉtirement latéral et postérieur du cou (inclinaisons et rotations).\nMicro-mobilisation : petit OUI, petit NON.",
      "duration": 30,
      "reps": 1,
      "timerOptions": [
        {
          "label": "Pressions glissées (x10)",
          "duration": 10,
          "sets": 1
        },
        {
          "label": "Étirement antérieur (30s)",
          "duration": 30,
          "sets": 2
        },
        {
          "label": "Étirement latéral (30s)",
          "duration": 30,
          "sets": 2
        },
        {
          "label": "Petit OUI / NON (30s)",
          "duration": 30,
          "sets": 1
        }
      ]
    },
    {
      "id": "s6-exo-8",
      "title": "Renforcement de la mâchoire (contre résistance)",
      "description": "OUVERTURE dynamique (poing sous menton).\nFERMETURE dynamique (doigts sur menton ou bâtonnet).\nTRANSLATION dynamique latérale.\nPROPULSION dynamique (poing).",
      "duration": 15,
      "reps": 2,
      "timerOptions": [
        {
          "label": "Ouverture (x15)",
          "duration": 15,
          "sets": 2
        },
        {
          "label": "Fermeture (x15)",
          "duration": 15,
          "sets": 2
        },
        {
          "label": "Translation (x10)",
          "duration": 10,
          "sets": 1
        },
        {
          "label": "Propulsion (x10)",
          "duration": 10,
          "sets": 1
        }
      ]
    }
  ]
};

export const SESSION_7: Session = {
  "id": "session-7",
  "title": "Séance 7",
  "description": "Progression 7",
  "exercises": [
    {
      "id": "s7-exo-1",
      "title": "Placement de la langue et déglutition",
      "description": "Vigilance à garder respiration nasale, bouche fermée, langue au palais, bonne déglutition.",
      "duration": 0,
      "reps": 0
    },
    {
      "id": "s7-exo-2",
      "title": "Renforcement de la langue",
      "description": "Faire le programme de renforcement.",
      "duration": 0,
      "reps": 0
    },
    {
      "id": "s7-exo-3",
      "title": "Étirement du frein",
      "description": "Si le frein est court.",
      "duration": 0,
      "reps": 0
    },
    {
      "id": "s7-exo-4",
      "title": "Tonicité des lèvres",
      "description": "RENFORCEMENT AVEC BOUTON : face et côtés.\nRENFORCEMENT ISOLÉ LÈVRES : bâtonnet horizontal et vertical.",
      "duration": 10,
      "reps": 10,
      "timerOptions": [
        {
          "label": "Bouton face (10s)",
          "duration": 10,
          "sets": 6
        },
        {
          "label": "Bouton côtés (10s)",
          "duration": 10,
          "sets": 6
        },
        {
          "label": "Lèvre supérieure (x10)",
          "duration": 10,
          "sets": 1
        },
        {
          "label": "Lèvre inférieure (x10)",
          "duration": 10,
          "sets": 1
        }
      ]
    },
    {
      "id": "s7-exo-5",
      "title": "Phonation",
      "description": "Veiller à ne pas toucher la langue avec les dents.",
      "duration": 0,
      "reps": 0
    },
    {
      "id": "s7-exo-6",
      "title": "Détente musculaire",
      "description": "Masser et étirer les zones douloureuses (au moins 5 minutes).",
      "duration": 300,
      "reps": 1,
      "timerOptions": [
        {
          "label": "Massage et étirement (5 min)",
          "duration": 300,
          "sets": 1
        }
      ]
    },
    {
      "id": "s7-exo-7",
      "title": "Renforcement de la mâchoire (statique ou dynamique)",
      "description": "OUVERTURE statique.\nFERMETURE statique.\nTRANSLATION statique.\nPROPULSION statique.",
      "duration": 10,
      "reps": 10,
      "timerOptions": [
        {
          "label": "Ouverture statique (10s)",
          "duration": 10,
          "sets": 10
        },
        {
          "label": "Fermeture statique (10s)",
          "duration": 10,
          "sets": 10
        },
        {
          "label": "Translation statique (10s)",
          "duration": 10,
          "sets": 12
        },
        {
          "label": "Propulsion statique (10s)",
          "duration": 10,
          "sets": 6
        }
      ]
    }
  ]
};

export const SESSION_8: Session = {
  "id": "session-8",
  "title": "Séance 8",
  "description": "Progression 8",
  "exercises": [
    {
      "id": "s8-exo-1",
      "title": "Placement de la langue",
      "description": "Vigilance respiration nasale, bouche fermée, langue au palais.",
      "duration": 0,
      "reps": 0
    },
    {
      "id": "s8-exo-2",
      "title": "Déglutition",
      "description": "Vigilance de la déglutition lors de l'alimentation.",
      "duration": 0,
      "reps": 0
    },
    {
      "id": "s8-exo-3",
      "title": "Renforcement de la langue",
      "description": "Faire le programme de renforcement au moins 3 fois dans la semaine.",
      "duration": 0,
      "reps": 0
    },
    {
      "id": "s8-exo-4",
      "title": "Étirement du frein",
      "description": "Uniquement si le frein est court.",
      "duration": 0,
      "reps": 0
    },
    {
      "id": "s8-exo-5",
      "title": "Renforcement de la mâchoire",
      "description": "Selon indications du thérapeute.",
      "duration": 0,
      "reps": 0
    },
    {
      "id": "s8-exo-6",
      "title": "Détente et renforcement musculaire",
      "description": "Faire le programme de détente au moins 3 fois dans la semaine.\n\nRESTER VIGILANT À :\n- MAINTENIR MÂCHOIRE DESSERRÉE\n- RESPIRER PAR LE NEZ, LANGUE AU PALAIS\n- NE PAS TOUCHER VOS DENTS AVEC LA LANGUE À LA PHONATION ET DÉGLUTITION",
      "duration": 0,
      "reps": 0
    }
  ]
};


export const SESSION_9: Session = {
  id: 'session-9',
  title: 'Phonation',
  equipment: [],
  exercises: [
    {
      id: 's9-e1',
      title: 'Exercices de lecture',
      category: 'Phonation',
      type: 'reps',
      reps: 11,
      instructions: [
        'Rappel pour les consonnes L, N, D, T : la pointe de la langue "tape" au niveau des bosses supérieures du palais.',
        'Pour le S : la pointe de la langue reste libre, appui sur les molaires supérieures.',
        'Pour le V : la lèvre inférieure ne rentre pas sous les incisives.',
        'Pour le Ch, J : veiller à un bon recul de la langue.',
        'Les lectures se feront avec la langue le plus en arrière possible.',
        'Inspiration nasale avant de lire chaque phrase.',
        'Lecture n°1 : Lulu, Nina, Lili, Nini, nu, uni, li, lu, lon no, non.',
        'Lecture n°2 : Toto, ni, no, li, lu, lo, lolo, lino, luli, li, lino, nu, no, loto.',
        'Lecture n°3 : Ti, tu, to, loti, Titi, Toni, Nini, Toto, lino, luli, li, nu, no, titu.',
        'Lecture n°4 : Nini, line, tenu, tôle, une, annen, Annette, le, Lulu, lutte. Toto note le loto. Le lino utile. Lili ôte le tulle.',
        'Lecture n°5 : Âne, Anatole, latte, lilas, Aline, Anna. Nini a une natte. Toto lit, Nathalie a lu.',
        'Lecture n°6 : Dodo, dindon, dôme, commode, midi, datte, madame, mélodie, panade, dune, étude, dîner, dînette, timide.',
        'Lecture n°7 : Le vélo va vite. Éva évite le vélo... (voir livret)',
        'Lecture n°8 : Sa, se, si, so, su, saint, sous, son, ses... (voir livret)',
        'Lecture n°9 : Chat, cher, chaise, champ, chic, choc... (voir livret)',
        'Lecture n°10 : Dédé a été malade, il a vidé à demi un pot de pommade... (voir livret)',
        'Lecture n°11 : Samedi, Sidonie a cassé une tasse et un pot... (voir livret)'
      ]
    }
  ]
};

export const SESSION_10: Session = {
  id: 'session-10',
  title: 'Diction',
  equipment: [],
  exercises: [
    {
      id: 's10-e1',
      title: 'Phrases de diction',
      category: 'Diction',
      type: 'reps',
      reps: 29,
      instructions: [
        'Les phrases sont à prononcer rapidement, distinctement et sans hésitation.',
        'La langue ne doit pas toucher les dents.',
        'Inspiration nasale avant de débuter chaque phrase.',
        'Il y a 29 phrases dans le livret à répéter. (ex: Quand un toqué t\'attaque, t\'as qu\'à quitter ton tank.)'
      ]
    }
  ]
};

export const SESSION_11: Session = {
  id: 'session-11',
  title: 'Programme d\'entretien',
  equipment: ['bâtonnet', 'bouchon', 'miroir'],
  exercises: [
    {
      id: 's11-e1',
      title: 'Renforcement de la langue',
      category: 'Entretien',
      type: 'timer',
      duration: 300,
      instructions: [
        'Piston : 30 s. + Micropistons : 30 fois.',
        'Langue pointue seule : 30 s. + contre résistance du bâtonnet : 30 poussées.',
        'Gendarme : 30 s. + avec bâtonnet/pince à linge : 30 s.',
        'Ventouse : 30 s. ou 30 ouvertures + claquage x 30.',
        'Bâillement : 30 s. + prononcer "GA" x 10 + maintenir position "GA" 20 s.',
        'Sourire symétrique forcé x 30 + asymétrique 4 côtés x 5.',
        'Étirement du frein sous lingual : x 30 ou 30 s.',
        '6 grosses gorgées + 5 gorgées de suite + déglutition bouche ouverte x 3.'
      ]
    },
    {
      id: 's11-e2',
      title: 'Détente musculaire (Extra-buccal)',
      category: 'Entretien',
      type: 'reps',
      reps: 10,
      instructions: [
        'Masséters : pressions glissées x 10 bilatérales + ponçage poings x 10.',
        'Temporaux : pressions circulaires avec les paumes x 10, tractions vers le haut avec ouverture x 10.',
        'Région péri-articulaire : pressions circulaires avec les doigts x 10.',
        'Région mandibulo-cervicale : ponçage circulaire global x 10.',
        'Étirement cervical : pressions glissées sur la région postérieure.'
      ]
    },
    {
      id: 's11-e3',
      title: 'Détente musculaire (Intra-buccal)',
      category: 'Entretien',
      type: 'reps',
      reps: 10,
      instructions: [
        'Masséters : pressions glissées x 10 droite et gauche.',
        'Région jugale, sous-labiale, et péri-articulaire : pressions glissées x 10.'
      ]
    },
    {
      id: 's11-e4',
      title: 'Mobilité et entretien musculaire',
      category: 'Entretien',
      type: 'reps',
      reps: 15,
      instructions: [
        'Ouverture contrôlée x 15, Ouverture contre résistance : 15 allers-retours.',
        'Fermeture contre résistance : 15 allers-retours.',
        'Diduction : 15 allers-retours libres et 15 avec résistance.',
        'Propulsion : 15 allers-retours libres et 15 avec résistance.'
      ]
    }
  ]
};
