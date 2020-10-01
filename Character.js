// Primary class for all the characters
class Character {
  constructor(name, hp, dmg, mana, status = "playing"){

    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = status;
  };

  isLoser = () => {
    if (this.hp === 0) {
      this.status = "loser";
    }
  };

  takeDamage = (x) => {
    this.hp -= x;
    game.showGame(`<br>${this.name} has ${this.hp} lifepoints left.`);
  };

  dealDamage = (victim) => {
    game.showGame(`<br>${this.name} is attacking ${victim.name} with ${this.dmg} damages`);
    if (!isNaN(victim.protection)) {
      victim.isProtected(this.dmg);
    } else {
      victim.takeDamage(this.dmg);
    }
  };

  isProtected = (dmg) => {
    if (this.protection === true) {
      game.showGame(`<br>${this.name} did not get any damages, he is protected on this turn`);
    } else if (this.protection > 0) {
      game.showGame(`<br>${this.name} has a ${this.protection} hp protection`);
      if (this.protection - dmg < 0) {
        game.showGame(`<br>he lost his protection and ${dmg - this.protection} hp`);
        this.hp -= dmg - this.protection;
        this.protection = 0;
      } else {
        this.protection -= dmg;
        game.showGame("<br>he didn't loose any hp");
      }
    }
  }
};
