const equipe1 = ["Omen", "Fade", "Phoenix", "Chamber", "Jett"];
const equipe2 = ["Omen", "Fade", "Phoenix", "Chamber", "Jett"];

const equipe1Mort = [];
const equipe2Mort = [];
let i = 0;

function attaquer(cible) {
  const randomTour = Math.random();
  let message = "";
  if (i === 0) {
    i = i + 1;
    if (randomTour < 0.5) {
      equipe2Mort.push(cible);
      equipe2.splice(cible, 1);
      message = cible + ` de l'équipe 2 est mort.`;
      if (randomTour < 0.6) {
        message += "\nLa spike est posée";
      } else {
        message += "\nLa spike n'a pas pu être posée";
      }
    } else {
      equipe1Mort.push(cible);
      equipe1.splice(cible, 1);
      message = cible + ` de l'équipe 1 est mort.`;
      if (randomTour < 0.4) {
        message += "\nLa spike est posée";
      } else {
        message += "\nLa spike n'a pas pu être posée";
      }
    }
  } else {
    const indexEquipe2Mort = equipe2.indexOf(cible);
    const indexEquipe1Mort = equipe1.indexOf(cible);
    if (equipe2Mort.length > 1) {
      if (randomTour < 0.7) {
        equipe2Mort.push(cible);
        equipe2.splice(cible, 1);
        message = cible + ` de l'équipe 2 est mort.`;
        if (indexEquipe2Mort !== -1) {
          equipe2Mort.splice(indexEquipe2Mort, 1);
        }
      } else {
        equipe1Mort.push(cible);
        equipe1.splice(cible, 1);
        message = cible + ` de l'équipe 1 est mort.`;
        if (indexEquipe1Mort !== -1) {
          equipe1Mort.splice(indexEquipe1Mort, 1);
        }
      }
    } else {
      if (randomTour < 0.5) {
        equipe2Mort.push(cible);
        equipe2.splice(cible, 1);
        message = cible + ` de l'équipe 2 est mort.`;
        if (indexEquipe2Mort !== -1) {
          equipe2Mort.splice(indexEquipe2Mort, 1);
        }
      } else {
        equipe1Mort.push(cible);
        equipe1.splice(cible, 1);
        message = cible + ` de l'équipe 1 est mort.`;
        if (indexEquipe1Mort !== -1) {
          equipe1Mort.splice(indexEquipe1Mort, 1);
        }
      }
    }
  }
  return message;
}

let partieFini = false;

while (partieFini === false) {
  let equipe1Manche = 0;
  let equipe2Manche = 0;
  let j = 1;

  while (j < 25 || equipe1Manche === 13 || equipe2Manche === 13) {
    const equipe1Cible = equipe1[Math.floor(Math.random() * equipe1.length)];
    const equipe2Cible = equipe2[Math.floor(Math.random() * equipe2.length)];

    function randomAttaquant() {
      const randomAttaquant = Math.random();
      if (randomAttaquant < 0.5) {
        return attaquer(equipe2Cible);
      } else {
        return attaquer(equipe1Cible);
      }
    }

    const message = randomAttaquant();

    console.log(message);

    if (equipe1.length === 0) {
      console.log("L'équipe 1 a gagné la manche");
      partieFini = true;
      equipe1.splice(0, 5);
      equipe2.splice(0, 5);
      equipe1.push("Omen", "Fade", "Phoenix", "Chamber", "Jett");
      equipe2.push("Omen", "Fade", "Phoenix", "Chamber", "Jett");
      equipe2Manche = equipe2Manche + 1;
      j += 1;
      i = 0;
    } else if (equipe2.length === 0) {
      console.log("L'équipe 2 a gagné la manche");
      partieFini = true;
      equipe1.splice(0, 5);
      equipe2.splice(0, 5);
      equipe1.push("Omen", "Fade", "Phoenix", "Chamber", "Jett");
      equipe2.push("Omen", "Fade", "Phoenix", "Chamber", "Jett");
      equipe1Manche = equipe1Manche + 1;
      j += 1;
      i = 0;
    }

    if (equipe1Manche === 13) {
      console.log(
        "L'équipe 1 a gagné la partie " + equipe1Manche + " - " + equipe2Manche
      );
      break;
    } else if (equipe2Manche === 13) {
      console.log(
        "L'équipe 2 a gagné la partie " + equipe2Manche + " - " + equipe1Manche
      );
      break;
    }
  }
}
