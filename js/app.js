'use strict';


function OrganicPlayer(name, points){
  this.name = name;
  this.points = points;
}

//get player names
var getPlayer1Name = prompt('Player 1, what is your name?');
function player1Name(){
  getPlayer1Name;
  return getPlayer1Name;
}
var getPlayer2Name = prompt('Player 2, what is your name?');
function player2Name(){
  getPlayer2Name;
  return getPlayer2Name;
}
var getPlayer3Name = prompt('Player 3, what is your name?');
function player3Name(){
  getPlayer3Name;
  return getPlayer3Name;
}
var getPlayer4Name = prompt('Player 4, what is your name?');
function player4Name(){
  getPlayer4Name;
  return getPlayer4Name;
}

var player1;
var player2;
var player3;
var player4;

//player names in vars for later use

player1 = player1Name();
player2 = player2Name();
player3 = player3Name();
player4 = player4Name();

//adding first set of organic players to document
function organicPlayers1(){
  var table = document.getElementById('players1');
  var newTD = document.createElement('td');
  var addText = document.createTextNode(` ${player1} vs ${player2} Get ready!`);
  newTD.appendChild(addText);
  table.appendChild(newTD);
}
//adding second set of organic players to document
function organicPlayers2(){
  var table = document.getElementById('players2');
  var newTD = document.createElement('td');
  var addText = document.createTextNode(` ${player3} vs ${player4} Get ready!`);
  newTD.appendChild(addText);
  table.appendChild(newTD);
}
organicPlayers1();
organicPlayers2();
//Giving life to our OrganicPlayers from our constructor
var one = new OrganicPlayer(player1, 40);
var two = new OrganicPlayer(player2, 40);
var three = new OrganicPlayer(player3, 40);
var four = new OrganicPlayer(player4, 40);

// TODO!!  write a function to control these points
one.points --;

three.points --;
//Decide who wins first upper set based on points
function playerWinMatch1A(){
  if (one.points <= two.points){
    return one;
  } else{
    return two;
  }
}
playerWinMatch1A();
//Decide who wins lower set based on points
function playerWinMatch1B(){
  if (three.points <= four.points){
    return three;
  } else{
    return four;
  }
}
playerWinMatch1B();

//MATCH2
//Adding winners from match 1 to match 2
function organicplayersMatch2(){
  var table = document.getElementById('playersWin1');
  var newTD = document.createElement('td');
  var addText = document.createTextNode(` ${playerWinMatch1A().name} vs ${playerWinMatch1B().name} Get ready!`);
  newTD.appendChild(addText);
  table.appendChild(newTD);
}
organicplayersMatch2();
//Return winner
function win(){
  if (playerWinMatch1A().points <= playerWinMatch1B().points){
    return playerWinMatch1A().name;
  } else{
    return playerWinMatch1B().name;
  }
}
win();
//Render winner to screen
function winRender(){
  var table = document.getElementById('win');
  var newTD = document.createElement('td');
  var addText = document.createTextNode(` ${win()} wins the tournament!!`);
  newTD.appendChild(addText);
  table.appendChild(newTD);
}
winRender();


//---cpus for stretch goal------------------------------------------

//cpu constructor
function Player(name, points){
  this.name = name;
  this.points = points;
}
//new cpu players from constructor
var matthew = new Player('matthew', 0);
var mark = new Player('mark', 0);
var luke = new Player('luke', 0);
var john = new Player('john', 0);
var mario = new Player('mario', 0);
var luigi = new Player('luigi', 0);
var yoshi = new Player('yoshi', 0);
var bowser = new Player('bowser', 0);
//declare arrays and randoms
var cpu1Array = [matthew.name, mark.name, luke.name, john.name];
var cpu2Array = [mario.name, luigi.name, yoshi.name, bowser.name];
var randomize = Math.floor(Math.random() * cpu1Array.length);
var cpuRandom = cpu1Array[randomize];
var cpu2Random = cpu2Array[randomize];
//puts in random layers from 2 different arrays
function cpuPlayers(){
  var table = document.getElementById('cpu');
  var newTD = document.createElement('td');
  var addText = document.createTextNode(`${cpuRandom} vs ${cpu2Random}`);
  newTD.appendChild(addText);
  table.appendChild(newTD);
}
cpuPlayers();


//assign points to players

// //working on this
// function cpuPlayersMatch2(){
//   var table = document.getElementById('cpu2');
//   var newTD = document.createElement('td');
//   var addText = document.createTextNode(`${cpuRandom} vs ${cpu2Random}`);
//   newTD.appendChild(addText);
//   table.appendChild(newTD);
// }
// cpuPlayersMatch2();


//button to match 1
var counter1 = function(){
  window.location.href = 'counter.html';
};
var match1Click = document.getElementById('match1');
match1Click.addEventListener('click', counter1);
//button to match 2
var counter2 = function(){
  window.location.href = 'counter2.html';
};
var match2Click = document.getElementById('match2');
match2Click.addEventListener('click', counter2);
//button to win screen
var youWin = function(){
  window.location.href = 'aboutus.html';
};
var winClick = document.getElementById('winButton');
winClick.addEventListener('click', youWin);

//-----reserved for counter.html-------------------------------
