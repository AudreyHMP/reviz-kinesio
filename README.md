# Réviz' Kinésio — A1 + A2

**Version actuelle : appli 1.3.2 · banque 2.1.3** (24 juin 2026 · 606 questions)

Petite application web de révision pour l'examen de kinésiologie (années 1 et 2).
100 % HTML/CSS/JS, **sans serveur ni installation**. Les scores restent sur l'appareil de chaque utilisatrice (localStorage) — aucune donnée n'est envoyée nulle part.

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | L'application (à ouvrir ou héberger) |
| `questions.js` | **La banque de questions** — c'est ici qu'on ajoute/modifie des questions |
| `questions.json` | Même contenu, en JSON pur (sauvegarde / import / partage) |
| `sauvegardes/` | Copies horodatées automatiques (toi seule — ne pas envoyer aux collègues) |
| `README.md` | Ce fichier |

> Les deux fichiers `questions.js` et `questions.json` ont le **même contenu**. L'application lit `questions.js` (ça fonctionne même en ouvrant le fichier hors-ligne). `questions.json` sert de copie propre, pratique pour l'import/export.

## Utiliser l'app

### Option simple — sur ton ordinateur
Garde les fichiers dans le même dossier et **double-clique sur `index.html`**. Ça s'ouvre dans le navigateur, tout fonctionne hors-ligne.

### Option partage — un lien pour les copines
1. **Netlify Drop** (le plus rapide) : va sur [app.netlify.com/drop](https://app.netlify.com/drop) et **glisse le dossier entier**. Tu obtiens un lien à partager. Gratuit.
2. **GitHub Pages** : crée un dépôt, dépose les fichiers, active *Settings → Pages → branche `main`*. Le lien est `https://ton-pseudo.github.io/nom-du-depot/`.
3. **Ton site** : envoie les 3 fichiers dans un sous-dossier (ex. `/kinesio/`) et partage l'URL.

> Astuce : sur mobile, le lien peut être « ajouté à l'écran d'accueil » pour ressembler à une appli.

## Ouverture directe (ni code, ni prénom)

L'app s'ouvre directement sur le choix du thème — pas de connexion, pas de code, pour ne mettre aucun obstacle. **À utiliser sur ordinateur (PC) ; sur téléphone, l'ouverture des fichiers est trop compliquée.** Les scores sont enregistrés **localement sur chaque appareil** (un profil par appareil), sans aucune donnée patient.

> Si un jour tu veux remettre un code d'accès ou un suivi par prénom, c'est récupérable : dis-le-moi et je te réactive l'écran de connexion.

## Signaler une réponse fausse

Sous chaque correction (et dans le récap de l'examen blanc), un lien **« ⚠️ Signaler »** ouvre une fenêtre avec un texte tout prêt (n° de question, bonne réponse affichée, source). On le copie et on le colle dans le groupe WhatsApp : tu peux ainsi repérer et corriger les questions douteuses. Aucun envoi automatique, aucun serveur.

## Modes de jeu

- **Quiz** : par thème ou global, 5/10/20/toutes questions, filtrable par type (QCM, Vrai-Faux, Association). Correction détaillée après chaque question (explication + source).
- **Examen blanc** : 20 questions chronométrées (20 min), **sans aucun retour pendant l'épreuve**. Toutes les réponses et explications s'affichent **à la fin**, dans un récap dépliable.
- **Forces & faiblesses** : réussite cumulée par thème, avec suggestion des thèmes à réviser (< 60 %).
- **Historique** : les 10 dernières sessions.

> Un thème **« Anatomie en douceur »** propose des questions générales accessibles (os, sang, muscles, système nerveux, digestion, respiration), avec un petit schéma de squelette à repérer.

## Ajouter ou modifier des questions (sans toucher au code)

Ouvre **`questions.js`** dans un éditeur de texte. Après la 1re ligne, tu verras
`window.BANQUE_KINESIO = { ... }`. Ajoute un objet dans le tableau `"questions"`.
Trois formats possibles :

**QCM** (`bonne_reponse` = index de la bonne option, en commençant à 0)
```js
{
  "id": "q131",
  "theme": "meridiens",
  "type": "qcm",
  "difficulte": 2,
  "enonce": "Quel méridien est associé au Psoas ?",
  "options": ["Vessie", "Rein", "Foie", "Estomac"],
  "bonne_reponse": 1,
  "explication": "Psoas → Rein (Rn).",
  "source": "Planche muscles/méridiens"
}
```

**Vrai / Faux** (`bonne_reponse` = `true` ou `false`)
```js
{
  "id": "q132",
  "theme": "neurovasculaires",
  "type": "vrai_faux",
  "difficulte": 1,
  "enonce": "Les points NV concernent le système sanguin.",
  "bonne_reponse": true,
  "explication": "Oui.",
  "source": "Corrigé 2025 – Q.11"
}
```

**Association** (lister les paires `["terme", "bonne correspondance"]`)
```js
{
  "id": "q133",
  "theme": "cinq_elements",
  "type": "association",
  "difficulte": 2,
  "enonce": "Associez l'élément à son goût.",
  "paires": [["Bois","Acide"], ["Feu","Amer"], ["Eau","Salé"]],
  "explication": "Bois=acide, Feu=amer, Eau=salé.",
  "source": "Corrigé 2025 – Q.48"
}
```

Le champ `theme` doit exister dans la liste `"themes"` (en haut du fichier). Pour créer un nouveau thème : ajoute sa clé dans `"themes"` **et** son libellé dans `"themes_labels"`.

> Les champs `explication` et `source` sont **obligatoires** sur chaque question.

### Sans éditer le fichier
Dans l'app, ouvre *« Gérer la banque de questions »* :
- **Exporter le JSON** : télécharge la banque actuelle.
- **Importer un JSON** : charge une banque modifiée (elle remplace celle de l'app sur ton appareil).

### Transférer ses scores (collègues)
Accueil → *« Mes scores & historique (export / import) »* :
- **Exporter** : fichier `reviz-kinesio-scores_AAAA-MM-JJ.json`
- **Importer** : fusionne par défaut avec l'existant ; coche *Remplacer* pour tout écraser.

## Maintenance (Audrey) — scripts Python

Depuis la racine `KinesioApp/` :

```bash
python scripts/reviz_kinesio.py sauvegarder   # copie horodatée js + json + html
python scripts/reviz_kinesio.py restaurer     # liste interactive, restaure un jeu
python scripts/reviz_kinesio.py verifier      # contrôle sans rien modifier
python scripts/build_bank.py                  # régénère questions.js depuis questions.json
```

**Workflow recommandé** : `sauvegarder` → éditer `questions.json` → `build_bank.py` → `verifier`.

Les sauvegardes sont dans `Reviz-Kinesio/sauvegardes/` (20 jeux max). Jamais d'écrasement.

## Mettre à jour la copie d'une collègue

Envoie-lui le dossier `Reviz-Kinesio/` **ou** seulement les fichiers modifiés :
- `questions.js` + `questions.json` (toujours ensemble, contenu identique)
- `index.html` seulement si l'interface a changé

Ne pas envoyer `sauvegardes/` ni les scripts `scripts/reviz_kinesio.py`.

## Versions (pour les copines)

Sur l'écran d'accueil : **appli v… · banque v… · date**.

| Fichier | Version à jour |
|---------|----------------|
| `index.html` | appli **1.3.1** (`data-app-version` dans la balise `<html>`) |
| `questions.js` + `questions.json` | banque **2.1.2** (`meta.version_banque`) |

Si les numéros ne correspondent pas, un avertissement rouge s'affiche → remplace **les 3 fichiers** ensemble.

Historique dans `questions.json` → `meta.journal_version`.

### Filtrer les nouveautés seulement

Accueil → **Version de la banque** :
- **Toutes les versions** (606 questions)
- **v2.0.0 — Nouveautés A2** (84 questions) pour celles qui ont déjà tout fait en v1
- Combinable avec un **thème** et « Toutes » en nombre de questions

## Note de contenu

Les réponses s'appuient sur le **corrigé d'examen 2025**, les **protocoles** (ODT/DOCX/PDF), les **planches muscles/méridiens**, les **fiches des 42 muscles** (14 principaux + 29 tests additionnels, cours A1 p.305-330) et le **catalogue des outils** (`BDD_CATALOGUE.xlsx`, qui fournit aussi l'objectif de chaque protocole et l'année kinésio). Une série récente couvre aussi les **planches de méridiens** (abréviations, nombre de points, repérage ; Cours A1 p.458-471), l'**ostéologie** (classification des os, squelette, vertèbres, crâne, pathologies ; Cours A1 – Steels Baud 2024) et la **neuroplasticité** (formes de plasticité, protocole SAINT, amygdale, ivresse mentale ; support pédagogique A1). Les questions MTC sur les **trajets et le cycle des méridiens** (début/fin, heure de plénitude, élément, couplé, yin/yang) suivent le **modèle classique** de la médecine chinoise ; le détail (couleurs, saveurs, énergies vitales, saisons) vient du cours A1 (p.148, 256-263).

⚠️ **Important** : la grande majorité des réponses sont justes, mais toutes n'ont pas été vérifiées une à une. En cas de doute, vérifie la **source** indiquée sous chaque correction, et signale toute réponse fausse pour qu'on la corrige. En cas de variante selon les écoles, la **fiche du cours fait foi**. C'est un outil de révision, pas une référence clinique.

Un encart de rappel s'affiche aussi sur l'écran d'accueil de l'app.
