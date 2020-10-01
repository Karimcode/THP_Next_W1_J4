//Le Fighter commence avec 12 points de vie (hp) et 40 points de mana (mana). Il a 4 points de dégât (dmg).
//Le Fighter aura une attaque spéciale Dark Vision, infligeant 5 dégâts. 
//Lors du prochain tour, il prendra 2 dégâts de moins par coup reçu. Elle coute 20 manas.


class Fighter extends Character {
  constructor(name, hp = 12, dmg = 4, mana = 40, status = "playing", protection = 0){
    super(name, hp, dmg, mana, status);
    this.protection = protection;
  };

  description = () => {
    return "the Fighter can do dark vision hit that deals 5 dmg to the target. The Fighter is then protected by 2 hp for the next attacks. This costs 20 mana";
  };

  special = (victim) => {
    if (this.mana >= 20) {
      game.showGame(`<br>dark vision special feature ! ${victim.name} takes 5 damages and ${this.name} has a protection of 2 points for the next attack`);
      game.showGame("<br>it costs 20 mana")
      if (!isNaN(victim.protection)) {
        victim.isProtected(5);
      } else {
        victim.hp -= 5;
      }
      this.mana -= 20;
      this.protection += 2;
    } else {
      game.showGame("<br>insufficient mana, standard attack choosen")
      this.dealDamage(victim);
    }
  };
};
