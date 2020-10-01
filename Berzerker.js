class Berzerker extends Character {
  constructor(name, hp = 8, dmg = 4, mana = 0, status = "playing"){
    super(name, hp, dmg, mana, status);
  };

  description = () => {
    return "the Berzerker can increase his dmg by 1 but it decreases its hp by 1.";
  };

  special = (victim) => {
    if (this.hp > 1) {
      game.showGame(`<br>Special Rage attack ! ${this.name} has +1 dmg and -1 hp`);
      this.hp -= 1;
      this.dmg += 1;
      this.dealDamage(victim);
    } else {
      game.showGame("<br>hp too low, standard attack choosen")
      this.dealDamage(victim);
    }
  };
};
