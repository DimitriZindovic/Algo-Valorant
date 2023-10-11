class Pokemon {
  constructor(name, attack, defense, hp, luck) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.luck = luck;
  }

  isLucky() {
    let random = Math.random();
    if (random > this.luck) {
      return false;
    } else {
      return true;
    }
  }
}

let lippoutou = new Pokemon("Lippoutou", 10, 5, 15, 0.5);
let miasmax = new Pokemon("Miasmax", 8, 10, 15, 0.7);

function attackPokemon(pokemon1, pokemon2) {
  while (pokemon2.hp >= 0 && pokemon1.hp >= 0) {
    if (pokemon1.isLucky() === true) {
      pokemon2.hp = pokemon2.hp - pokemon1.attack;
      console.log(pokemon1.name + " inflige " + pokemon1.attack + " de dégât.");
      if (pokemon2.hp <= 0) {
        console.log("Le " + pokemon2.name + " est mort.");
      } else {
        console.log(pokemon2.name + " est à " + pokemon2.hp + " de hp.");
      }
    }
    if (pokemon2.isLucky() === true && pokemon2.hp > 0) {
      pokemon1.hp = pokemon1.hp - pokemon2.attack;
      console.log(pokemon2.name + " inflige " + pokemon2.attack + " de dégât.");
      if (pokemon1.hp <= 0) {
        console.log("Le " + pokemon1.name + " est mort.");
      } else {
        console.log(pokemon1.name + " est à " + pokemon1.hp + " de hp.");
      }
    }
  }
}

attackPokemon(lippoutou, miasmax);
