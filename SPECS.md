# Spécifications de l'Application "OroKiné"

## 1. Vision et Objectifs
Création d'une Progressive Web App (PWA) mobile-first pour la rééducation linguale et maxillo-faciale, basée sur le Livret de rééducation de la région temporo-mandibulaire. 
L'ergonomie s'inspire fortement de l'application "Bend" (design épuré, fond blanc, cartes avec ombres portées, animations fluides, timer circulaire).

## 2. Choix de Design & Progression Validés
- **Nom de l'application** : OroKiné
- **Cycle de progression (7 séances)** : L'application contient 7 séances distinctes, affichées sur l'accueil. Une séance est verrouillée tant que la séance précédente n'a pas été effectuée **7 fois**.
- **Interface & Expérience (UI/UX)** :
  - Design "Light Mode" privilégié : cartes blanches sur fond légèrement grisé.
  - Pas d'écrans de transition agressifs entre les exercices.
  - Animation de "Confettis" à la validation de la séance.
- **Audio** : Bips très doux (basses fréquences, enveloppe ADSR) pour éviter tout stress (pas de "bip CrossFit").
- **Mode Miroir** : Intégration de la caméra frontale optionnelle pour le contrôle visuel.
- **Rappel Postural & Conscience** : Bloc fusionné en haut de l'accueil. Rappelle le positionnement ("La pointe de la langue au palais..."). L'utilisateur clique à chaque prise de conscience. Le compteur se réinitialise chaque jour et s'enregistre dans l'historique.

## 3. Stack Technique
- **Framework** : React (via Vite) + TypeScript.
- **Styling** : Tailwind CSS, `lucide-react` (icônes).
- **Stockage** : Zustand + Persist middleware (`localStorage`), 100% hors-ligne.
- **Audio** : Web Audio API (Oscillateurs natifs, sans dépendance lourde).
- **Timer de précision** : Calculs basés sur `Date.now()` et `requestAnimationFrame` pour éviter les décalages de mise en veille mobile.
- **Gestion de l'écran** : API `navigator.wakeLock` pour maintenir l'écran allumé pendant les exercices.
- **Graphismes** : Animations CSS sur SVG vectoriels sur-mesure (profil de lèvre, dents, langue), dessinant précisément le contexte anatomique.

## 4. Fonctionnalités Clés
- **Accueil (HomeTab)** : 
  - Compteur de conscience quotidien.
  - Liste des 7 séances (Cadenas sur les séances bloquées, compteur de validation `x/7`).
- **Lecteur de Séance (SessionPlayer)** :
  - Prévisualisation du matériel (verre d'eau, bâtonnet).
  - Navigation libre (boutons "Précédent" / "Passer").
  - Timer circulaire ou compteur de répétitions par tap.
  - Bouton Miroir (Caméra).
- **Bilan (StatsTab)** :
  - Journal historique chronologique mixant les séances terminées (avec score EVA de difficulté) et les scores de "Conscience de placement" quotidiens.

## 5. Contenu des Séances
- **Séance 1 : Fondations (Implémentée)** 
  1. Déglutition (Liquide - toboggan).
  2. Déglutition (Bâtonnet).
  3. Mobilité (Singe, dents, extérieur).
  4a. Arrière de la langue (Prononciation GA).
  4b. Placage respiratoire arrière langue.
  5. Claquage (CLA-CLO).
  6. Le Piston (Papille + résistance).
  7. Étirement du frein (sur bâtonnet).
  8. Détente musculaire (Masséters).
- **Séances 2 à 7** : À concevoir et implémenter.
