# Projet-DevSecOps-5DVSCOP-

**Membre groupe:**
Marlyse Saintich Majorie HANGAMALONGO MAPAGA,
Kokou Kami Landry Ulrich MAMAN,
Ben-Jamin MAMFOUMBI KOUELY et
Saleck EL JILI

[https://devsecops.eljili.fr/](https://devsecops.eljili.fr/)

## Application React

![](https://i.imgur.com/wTZ3pnO.png)

### le champ de saisie accepte que les données alphanumériques

![](https://i.imgur.com/dIPJ1Ds.png)

### Alert if is alphanumeric

![](https://i.imgur.com/mfkzizJ.png)

### If not alphanumeric

![](https://i.imgur.com/lzaXkyw.png)

## Tests Unitaires

![](https://i.imgur.com/lWnuEa2.png)

# Deploy to kubernets

créez un .env et ajoutez-y le contenu suivant pour définir le port sur 3002

```
PORT=3002
```

build notre application pour la production

```
npm run build
```

**créer des fichiers Docker file, Deployment.yaml, load-balancer.yaml**

Exécutez la commande suivante pour créer l'image
![](https://i.imgur.com/of06u1I.png)
exécutez l'application dockerisée avec ce qui suit
![](https://i.imgur.com/LIN62Ky.png)

poussez votre image vers votre compte Docker Hub

![](https://i.imgur.com/2EHu4nX.png)

Démarrez votre cluster Kubernetes local avec minikube
![](https://i.imgur.com/B3THh4W.png)
Ensuite, utilisez kubectl pour créer un nouvel espace de nom
![](https://i.imgur.com/e1g5DE6.png)
Maintenant, définissez namespace comme contexte par défaut
![](https://i.imgur.com/HBEGNJc.png)
Déployez l'application avec les éléments suivants
![](https://i.imgur.com/KO5aina.png)
Et surveillez l'état du déploiement avec la commande suivante
![](https://i.imgur.com/4SBDWQ6.png)
Maintenant, nous pouvons déployer le service comme ça
![](https://i.imgur.com/Xz9EUTe.png)
Et nous pouvons surveiller l'état du service avec la commande suivante
![](https://i.imgur.com/ncIlXgH.png)

![](https://i.imgur.com/qSLL0Gc.png)
