class Wizard extends Character {
  constructor(name, hp = 10, dmg = 2, mana = 200, status = "playing"){
    super(name, hp, dmg, mana, status);
  };

  description = () => {
    return "the Wizard have a powerful fireball that deals 7 dmg to the target. It costs 25 mana.";
  };

  special = (victim) => {
    if (this.mana >= 25) {
      game.showGame(`<br>fireball special feature ! ${victim.name} takes 7 damages`);
      game.showGame("<br>it costs 25 mana");
      if (!isNaN(victim.protection)) {
        victim.isProtected(7);
      } else {
        victim.hp -= 7;
      }
      this.mana -= 25;
    } else {
      game.showGame("<br>insufficient mana, standard attack choosen")
      this.dealDamage(victim);
    }
  };
};
