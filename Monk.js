class Monk extends Character {
  constructor(name, hp = 8, dmg = 2, mana = 200, status = "playing"){
    super(name, hp, dmg, mana, status);
  };

  description = () => {
    return "the Monk can heal him self by 8 hp, it costs 25 mana.";
  };

  special = (victim) => {
    if (this.mana >= 25) {
      game.showGame(`<br>heal special feature ! ${this.name} has +8 hp`);
      game.showGame("<br>it costs 25 mana");
      this.hp += 8;
      this.mana -= 25;
    } else {
      game.showGame("<br>insufficient mana, standard attack choosen")
      this.dealDamage(victim);
    }
  };
};
