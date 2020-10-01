class Monk extends Character {
  constructor(name, hp = 8, dmg = 2, mana = 200, status = "playing"){
    super(name, hp, dmg, mana, status);
  };

  description = () => {
    return "the Monk can heal himself by 8 hp, it costs 25 mana.";
  };

  special = (victim) => {
    if (this.mana >= 25) {
      game.showGame(`<br>heal special attack ! ${this.name} has +8 hp`);
      game.showGame("<br>25 mana less");
      this.hp += 8;
      this.mana -= 25;
    } else {
      game.showGame("<br>mana too low, standard attack choosen")
      this.dealDamage(victim);
    }
  };
};
