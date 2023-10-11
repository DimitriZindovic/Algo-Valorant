const prenoms = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Emma",
  "François",
  "Grace",
  "Hugo",
  "Isabella",
  "Jack",
  "Kate",
  "Louis",
  "Mia",
  "Noah",
  "Olivia",
  "Pierre",
  "Quinn",
  "Rachel",
  "Samuel",
  "Tara",
  "Ulysse",
  "Victoria",
  "William",
  "Xavier",
  "Yasmine",
  "Zachary",
];

const personnages = [
  {
    nom: "Nerd",
    probabiliteMourir: 0.3,
    probabiliteDegats: 0.5,
    probabiliteMourirEnDegats: 0.2,
  },
  {
    nom: "Sportif",
    probabiliteMourir: 0.1,
    probabiliteDegats: 0.6,
    probabiliteMourirEnDegats: 0.3,
  },
  {
    nom: "Blonde",
    probabiliteMourir: 0.2,
    probabiliteDegats: 0.4,
    probabiliteMourirEnDegats: 0.4,
  },
  {
    nom: "Scientifique",
    probabiliteMourir: 0.15,
    probabiliteDegats: 0.7,
    probabiliteMourirEnDegats: 0.15,
  },
  {
    nom: "Super-héros",
    probabiliteMourir: 0.1,
    probabiliteDegats: 0.2,
    probabiliteMourirEnDegats: 0.7,
  },
  {
    nom: "Vampire",
    probabiliteMourir: 0.2,
    probabiliteDegats: 0.5,
    probabiliteMourirEnDegats: 0.3,
  },
  {
    nom: "Zombie",
    probabiliteMourir: 0.2,
    probabiliteDegats: 0.3,
    probabiliteMourirEnDegats: 0.5,
  },
  {
    nom: "Magicien",
    probabiliteMourir: 0.15,
    probabiliteDegats: 0.75,
    probabiliteMourirEnDegats: 0.1,
  },
  {
    nom: "Pirate",
    probabiliteMourir: 0.3,
    probabiliteDegats: 0.6,
    probabiliteMourirEnDegats: 0.1,
  },
  {
    nom: "Aventurier",
    probabiliteMourir: 0.2,
    probabiliteDegats: 0.7,
    probabiliteMourirEnDegats: 0.1,
  },
];

const jason = {
  nom: "Jason",
  pointsDeVie: 100,
};

const survivants = [];

for (let i = 0; i < 5; i++) {
  const nomSurvivant = prenoms[Math.floor(Math.random() * prenoms.length)];
  const caracteristiqueAleatoire =
    personnages[Math.floor(Math.random() * personnages.length)];
  survivants.push({
    nom: nomSurvivant,
    caracteristiques: caracteristiqueAleatoire,
  });
}

function attaquer(tueur, cible) {
  const probMourir = Math.random();
  if (probMourir < cible.caracteristiques.probabiliteMourir) {
    return `${cible.nom} est mort.`;
  } else if (probMourir < cible.caracteristiques.probabiliteMourirEnDegats) {
    tueur.pointsDeVie -= 15;
    return `${cible.nom} a infligé 15 points de dégâts à ${tueur.nom} mais est mort.`;
  } else {
    tueur.pointsDeVie -= 10;
    return `${cible.nom} a esquivé et infligé 10 points de dégâts à ${tueur.nom}.`;
  }
}

let jasonMort = false;
const survivantsMorts = [];

while (jason.pointsDeVie > 0 && survivants.length > 0) {
  const survivantCible =
    survivants[Math.floor(Math.random() * survivants.length)];
  const message = attaquer(jason, survivantCible);

  console.log(message);

  if (message.includes("est mort.")) {
    survivantsMorts.push(survivantCible);
    const indexSurvivantMort = survivants.indexOf(survivantCible);
    if (indexSurvivantMort !== -1) {
      survivants.splice(indexSurvivantMort, 1);
    }
  }

  if (jason.pointsDeVie <= 0) {
    jasonMort = true;
  }
}

if (jasonMort) {
  console.log("Jason est mort.");
  if (survivantsMorts.length === 0) {
    console.log("Les survivants ont gagné.");
  } else {
    console.log(
      "Les survivants ont gagné mais RIP à " +
        survivantsMorts.map((s) => s.nom).join(", ")
    );
  }
} else {
  console.log("Jason a gagné.");
}
