class Paladin extends Character {
  constructor(name, hp = 16, dmg = 3, mana = 160, status = "playing"){
    super(name, hp, dmg, mana, status);
  };

  description = () => {
    return "the Paladin can do some healing lightings that deals 4 dmg to the target and increase his hp by 5. It costs 40 mana.";
  };

  special = (victim) => {
    if (this.mana >= 40) {
      game.showGame(`<br>healing lighting special attack ! ${victim.name} takes 4 damages and ${this.name} healing +5`);
      game.showGame("<br>40 mana less");
      if (!isNaN(victim.protection)) {
        victim.isProtected(4);
      } else {
        victim.hp -= 4;
      }
      this.hp += 5;
      this.mana -= 40;
    } else {
      game.showGame("<br>mana too low, standard attack choosen")
      this.dealDamage(victim);
    }
  };
};
