class Game {
  constructor(turnLeft = 10, gameOver = false, characters = []) {
    this.turnLeft = turnLeft;
    this.gameOver = gameOver;
    this.characters = characters;
  };

  totalPlayers = (nbPlayer) => {
    let grace = new Fighter("Grace");
    let ulder = new Paladin("Ulder");
    let moana = new Monk("Moana");
    let draven = new Berzerker("Draven");
    let carl = new Assassin("Carl");
    let zedd = new Wizard("Zedd");
    this.characters.push(grace, ulder, moana, draven, carl, zedd);
    for (let i = 0; i < 6-nbPlayer; i++) {
      this.characters.splice(Math.floor(Math.random() * Math.floor(7 - i)), 1);
    }
  };

  skipTurn = () => {
    this.turnLeft -= 1;
    this.isGameOver();
  };

  isGameOver = () => {
    if (this.turnLeft === 0 || this.characters.length === 1) {
      this.showGame("<br>game over !");
      this.gameOver = true;
    }
  };

  startTurn = () => {
    this.showGame(`<br>---------------------- It's Turn ${11 - this.turnLeft}-----------------------`);
    let random_call = [];
    random_call = this.characters.sort(function(a, b){return 0.5 - Math.random()});
    random_call.map(player => {
      if (player.hp > 0) {
        this.watchStats();
        this.showGame("<br> ==> It's time for " + player.name + " to play ! <==");
        this.showGame("<br>Look at the console and choose an ennemy to attack :");
        this.showGame(`<br>${this.characters.map(player => this.characters.indexOf(player) + ". " + player.name + " ")}`);
        
        console.log(`${this.characters.map(player => this.characters.indexOf(player) + ". " + player.name + " ")}`)

        let targetIndex = prompt(`${player.name}, Look at the console and Choose a character to attack: 0 ? 1 ? ...`);
        let target = this.characters[targetIndex];
        this.showGame(`<br>${target.name} selected`);
        this.showGame("<br>now choose your attack : type 0 for standard attack and 1 for the special one");

        console.log("Now choose your attack : type 0 for standard attack and 1 for the special one")

        let attack = prompt("your attack : ");
        if (attack === "0") {
          player.dealDamage(target);
        } else if (attack === "1") {
          player.special(target);
        } else {
          console.log("Wrong entry, your turn is skiped. Beware next time !")
          this.showGame("<br>wrong entry, your turn is skiped. Beware next time !")
        }
        if (target.hp < 1) {
          this.mana += 20;
          this.showGame(`<br>${target.name} is dead !`);
          this.showGame(`<br>${player.name} earned 20 points of mana`);
        }
      } else {
        this.showGame(`<br>${player.name} is already dead ... next player !`)
      }
    });
    this.showGame("<br>----------------End of this turn------------------");
    this.showGame("<br>players still alive :")
    let playerAlive = this.characters.filter(player => player.hp > 0);
    this.characters = playerAlive;
    this.showGame(this.characters);
    this.skipTurn();
  };

  startGame = () => {
    this.gameInit();
    this.showGame("Welcome to the THP RPG game ! There are 10 turns");
    this.watchStats();
    while (this.gameOver === false) {
      this.startTurn();
    }
    this.endGame(this.characters);
  };

  endGame = (winners) => {
    this.showGame("<br>------------------The game is over -----------------")
    if (this.turnLeft === 0 && winners.length > 1) {
      winners.sort((a, b) => a.hp - b.hp);
      this.showGame(`<br>players ranking : ${winners}`);
    }
    if (winners.length === 1) {
      this.showGame(`<br>the winner is ${winners}`);
    }
    this.showGame(`<br>winners ranking : ${winners}`)
  };

  watchStats = () => {
    let stats = document.getElementById("stats");
    stats.innerHTML = "";
    this.characters.map(player => {
      stats.innerHTML += `<br>--------------- ${player.name} is a ${player.constructor.name} ---------------`;
      stats.innerHTML += `<br> ${player.description()}`;
      stats.innerHTML += `<br> hp = ${player.hp}, mana = ${player.mana}, dmg = ${player.dmg}`;
      stats.innerHTML += "<br> ----------------------------------------------------------------------";
    })
  };

  showGame = (text) => {
    let show = document.getElementById("game");
    show.innerHTML += text;
  };

  gameInit = () => {
    console.log("please enter the number of player for this game")
    let nbPlayer = prompt("please enter the number of player for this game")
    this.totalPlayers(nbPlayer);
  };
}
