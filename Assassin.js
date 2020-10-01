class Assassin extends Character {
  constructor(name, hp = 6, dmg = 6, mana = 20, status = "playing", protection){
    super(name, hp, dmg, mana, status);
    this.protection = protection;
  };

  description = () => {
    return "the Assassin can do a shadow hit that deals 7 dmg to the target and costs 20 mana. The assassin is then totally protected from any damages in the next turn. If the victim is still alive, the assassin gets also -7 hp.";
  };

  special = (victim) => {
    if (this.mana >= 20) {
      game.showGame(`<br>Shadow hit special attack ! ${victim.name} gets 7 damages and ${this.name} has total protection for next turn`);
      game.showGame("<br>20 mana less");
      this.protection = true;
      if (!isNaN(victim.protection)) {
        victim.isProtected(7);
      } else {
        victim.hp -= 7;
      }
      if (victim.hp > 0) {
        this.hp -= 7;
        game.showGame(`<br>the target didn't die and  ${this.name} got 7 damages in return`);
        if (this.hp < 1) {
          game.showGame(`<br>${this.name} died ... It's so sad :( !`)
        }
      }
      this.mana -= 20;
    } else {
      game.showGame("<br> mana too low, standard attack choosen")
      this.dealDamage(victim);
    }
  };
};
