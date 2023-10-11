class Personnage {
  constructor(name, sante) {
    this.name = name;
    this.sante = sante;
  }
}

let john = new Personnage("John", 10);
let musiques = [
  "Anissa - Wejdene",
  "Le pousin Piou",
  "La danse des canards",
  "René la taupe",
  "Baby Shark",
];

function trajet(client, radio) {
  let feu = 0;
  let changement = 0;
  while (feu <= 30) {
    feu += 1;
    let random = Math.floor(Math.random() * 4);
    if (client.sante > 0) {
      if (radio[random] === "Anissa - Wejdene") {
        changement += 1;
        client.sante -= 1;
      }
    }
  }
  if (client.sante === 0) {
    console.log("Explosion");
  } else {
    console.log(
      "Il est bien arriver à destination, il lui a fallu " +
        changement +
        " changements"
    );
  }
}

trajet(john, musiques);
