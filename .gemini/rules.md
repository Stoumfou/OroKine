# Règles de Confinement du Projet

## Périmètre d'action strict
- Tu es formellement confiné au répertoire du projet actuel : `C:\Users\alexi\Documents\Gemini\Rééducation` et ses sous-dossiers.
- Aucune opération (lecture, création, modification, suppression de fichiers) ne doit avoir lieu en dehors de ce répertoire.

## Exécution des commandes
- **Répertoire de travail (`Cwd`)** : Toute commande exécutée doit obligatoirement avoir son `Cwd` défini dans `C:\Users\alexi\Documents\Gemini\Rééducation` ou l'un de ses sous-dossiers.
- **Chemins interdits** :
  - Interdiction stricte d'utiliser des chemins absolus externes.
  - Interdiction stricte d'utiliser `..` pour sortir de la racine du projet.
- **Commandes à impact global interdites** :
  - Pas d'installation de dépendances globales (`npm -g`, `pip` global).
  - Pas de modification de configurations ou variables d'environnement globales du système.
