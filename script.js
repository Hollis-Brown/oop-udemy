//constructor function less structured and organized way to define an object with inheritance but still works
function Player(name) {
  this.name = name; //name property
  this.lvl = 1; //level property
  this.points = 0;  //points property set to 0 by default
  }
  
  //creating the gainXp method meant to model a player's experience
  Player.prototype.gainXp = function (xp) {
  this.points += xp;

  //game dynamics
  if (this.points >= 10) {
    this.lvl++;
    this.points -= 10;
  }
  };
  
  //creating a method meant to describe the players' overall performance
  Player.prototype.describe = function () {
  return `${this.name} is level ${this.lvl} with ${this.points} experience points`;
  };
  
  //instantiated players
  let player1 = new Player('Hollis');
  let player2 = new Player('Pollis');
  
  //calling the gainXp method to pass numeric arugments corresponding to their experience which affects game points and level
  player1.gainXp(5);
  player2.gainXp(7);
  player1.gainXp(3);
  player2.gainXp(2);
  player1.gainXp(8);
  player2.gainXp(4);
  player1.gainXp(5);
  player2.gainXp(7);
  player1.gainXp(3);
  player2.gainXp(2);
  player1.gainXp(8);
  player2.gainXp(4);
  player1.gainXp(5);
  player2.gainXp(7);
  player1.gainXp(3);
  player2.gainXp(2);
  player1.gainXp(8);
  player2.gainXp(4);
  

  //calling the players overall performance which will generate a string with template literals to the console. 
  console.log(player1.describe());
  console.log(player2.describe());