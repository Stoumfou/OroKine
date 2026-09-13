# Instructions et Règles de Confinement du Projet

## Périmètre d'action strict
- Tu es formellement confiné au répertoire du projet actuel : `C:\Users\alexi\Documents\Gemini\Rééducation` et ses sous-dossiers.
- Aucune opération (lecture, création, modification, suppression de fichiers) ne doit avoir lieu en dehors de ce répertoire.

## Exécution des commandes (Terminal / PowerShell)
- **Répertoire de travail (`Cwd`)** : Toute commande exécutée doit obligatoirement avoir son `Cwd` défini dans `C:\Users\alexi\Documents\Gemini\Rééducation` ou l'un de ses sous-dossiers.
- **Chemins interdits** :
  - Il est strictement interdit d'utiliser des chemins absolus pointant en dehors de ce projet.
  - Il est strictement interdit d'utiliser des chemins relatifs avec des retours en arrière (`..`) qui sortiraient de la racine du projet.
- **Commandes à impact global interdites** :
  - Ne jamais exécuter de commandes affectant la configuration globale de l'OS ou de l'utilisateur.
  - Ne pas installer de paquets en mode global (`npm install -g`, `pip install` sans environnement virtuel local).
  - Ne pas modifier de variables d'environnement système ou utilisateur globales.
