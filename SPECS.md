# Spécifications de l'Application "OroKiné"

## 1. Vision et Objectifs
Création d'une Progressive Web App (PWA) mobile-first pour la rééducation linguale et maxillo-faciale, basée sur le Livret de rééducation de la région temporo-mandibulaire. 
L'ergonomie s'inspire fortement de l'application "Bend" (design épuré, couleurs pastel, cartes arrondies, animations fluides, timer circulaire).

## 2. Choix de Design Validés
- **Nom de l'application** : OroKiné
- **Mode Miroir** : Intégration de la caméra frontale optionnelle (non obligatoire) pour les exercices nécessitant un contrôle visuel (phonation, placement de la langue).
- **Cycle de progression** : Validation du cycle de 6 jours (ou 6 répétitions de séances) exigé par le livret avant de pouvoir débloquer la séance suivante.
- **Navigation (Bottom Navigation Bar)** :
  1. Accueil (Dashboard, Rappel de posture, Lancement de séance, Compteur de conscience)
  2. Bilan Kiné (Statistiques, Suivi, EVA Douleur/Difficulté, Calendrier)
  3. Conseils (Fiches pédagogiques, posture, consignes)
  4. Réglages (Son, Timer, Miroir, Export de données)

## 3. Stack Technique
- **Framework** : React (via Vite) + TypeScript.
- **Styling** : Tailwind CSS, `lucide-react` (icônes).
- **Stockage** : 100% hors-ligne via `localStorage` (pas de backend).
- **Audio** : Web Audio API native pour le métronome et les validations, déclenchée lors de l'interaction utilisateur.
- **Timer** : Calculs basés sur `Date.now()` et `requestAnimationFrame` pour éviter les désynchronisations lors de la mise en veille.
- **Gestion de l'écran** : `navigator.wakeLock` pour maintenir l'écran allumé pendant les exercices.
- **Graphismes** : Animations CSS sur SVG vectoriels, aucune image lourde.

## 4. Fonctionnalités Clés
- **Tableau de Bord** : Bannière permanente "Nez - Lèvres - Palais - Dents desserrées". Bouton "Compteur de conscience" (+1 au clic, stocké par jour).
- **Lecteur de Séance** :
  - Prévisualisation du matériel (verre d'eau, bâtonnet, etc.).
  - Compte à rebours 3-2-1.
  - Timer circulaire, animations SVG.
  - Bouton Miroir (Caméra).
- **Suivi Kiné** :
  - Notation Douleur / Difficulté à la fin de chaque séance (Échelle EVA).
  - Journal historique.

## 5. Contenu des Séances
- **Séance 1** : Déglutition (petites gorgées, salive bâtonnet), Mobilité (le singe, chaque dent, extérieur), Arrière de langue (GA, plaquage), Claquage, Le piston, Étirement du frein, Massages (pressions, ponçage, points trigger).
- **Séance 2** : Placement et slurps, Déglutition avancée, Renforcement lingual, Phonation (L-N-D-T), Détente musculaire.
