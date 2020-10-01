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
      game.showGame(`<br>shadow hit special feature ! ${victim.name} gets 7 damages and ${this.name} has absolute protection for next turn`);
      game.showGame("<br>it costs 20 mana");
      this.protection = true;
      if (!isNaN(victim.protection)) {
        victim.isProtected(7);
      } else {
        victim.hp -= 7;
      }
      if (victim.hp > 0) {
        this.hp -= 7;
        game.showGame(`<br>the target doesn't die, ${this.name} got 7 damages in return`);
        if (this.hp < 1) {
          game.showGame(`<br>${this.name} died ... too bad !`)
        }
      }
      this.mana -= 20;
    } else {
      game.showGame("<br>insufficient mana, standard attack choosen")
      this.dealDamage(victim);
    }
  };
};
