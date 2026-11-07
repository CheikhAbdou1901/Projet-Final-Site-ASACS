# Site web statique de l'ASACS

Ce projet est une première version de site institutionnel réalisée uniquement avec HTML5, CSS3 et JavaScript natif.

## 1. Ouvrir le site

Ouvrez `index.html` dans un navigateur. Pour une expérience de développement plus confortable, utilisez un serveur local (par exemple l'extension Live Server de Visual Studio Code).

## 2. Personnaliser les images

Remplacez les images d'exemple par les images officielles, en conservant les noms ou en modifiant les chemins dans `index.html` et `js/script.js`.

- `assets/images/logo-asacs.png` : logo officiel.
- `assets/images/couverture.jpg` : photo du bureau actuel ou de l'équipe.
- `assets/images/president.jpg` : portrait du président.
- `assets/images/equipe-foot.jpg` : photo de l'équipe.
- `assets/images/activite-1.jpg`, `activite-2.jpg`, `activite-3.jpg` : galerie.
- `assets/images/archives-1991.jpg` : archive historique.
- `assets/videos/video-asacs.mp4` : vidéo à lire dans la médiathèque.
- `assets/produits/` : photos des produits de la boutique.

Les dossiers contiennent un fichier `LISEZ-MOI.txt` qui rappelle les images ou documents à ajouter.

## 3. Ajouter une actualité

Ouvrez `js/script.js`, repérez le tableau `actualites` au début du fichier, puis ajoutez un nouvel objet en respectant ce modèle :

```js
{
  titre: "Titre de votre actualité",
  date: "15 novembre 2026",
  image: "assets/images/mon-actualite.jpg",
  resume: "Un court résumé de l'information.",
  contenu: "Le texte complet de l'actualité."
}
```

Placez la photo correspondante dans `assets/images/`. Aucune base de données n'est nécessaire : les actualités sont écrites directement dans le fichier JavaScript.

## 4. Ajouter des documents PDF

Placez les PDF officiels dans `assets/documents/`, puis modifiez les liens correspondants dans la rubrique Documentation du fichier `index.html`.

## 5. Configurer WhatsApp

Dans `js/script.js`, remplacez la valeur de `NUMERO_WHATSAPP` par le numéro officiel de l'association, au format international sans `+`, sans espace et sans tiret.

Exemple de format : `2217XXXXXXXX`.

Le formulaire prépare le message dans WhatsApp. Le visiteur doit ensuite appuyer sur Envoyer. Le site statique ne stocke pas les messages et ne les transmet pas automatiquement.

## 6. Formulaire de contact

Le formulaire est validé dans le navigateur puis prépare un message WhatsApp. Pour recevoir et archiver les messages directement par e-mail, il faudra connecter ultérieurement un service de formulaire ou un backend.

## 7. Boutique

Les boutons de commande préparent une demande WhatsApp. Les prix et les produits sont des exemples à remplacer par les informations validées par l'association. Aucun paiement en ligne n'est intégré.

## 8. Mise en ligne

Le site peut être hébergé sur GitHub Pages, Netlify ou un hébergeur web classique. Avant publication :
- remplacer toutes les images d'exemple ;
- ajouter les vrais documents PDF et vidéos ;
- configurer le numéro WhatsApp ;
- renseigner les liens officiels des réseaux sociaux ;
- vérifier les textes, les dates et les informations auprès du bureau de l'ASACS ;
- tester les formulaires, les liens et l'affichage sur téléphone.

## 9. Limites volontaires de cette version

Pas de comptes utilisateurs, espace membre, connexion, base de données, paiement, panier automatisé, tableau de bord ni interface d'administration. Cette version reste statique, légère et facile à comprendre et à maintenir.
