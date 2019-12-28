'use strict';

function OrganicPlayer(name, points){
  this.name = name;
  this.points = points;
}

//get player names
function player1Name(){
  var getPlayerName = prompt('Player 1, what is your name?');
  getPlayerName;
  return getPlayerName;
}
function player2Name(){
  var getPlayerName = prompt('Player 2, what is your name?');
  getPlayerName;
  return getPlayerName;
}
function player3Name(){
  var getPlayerName = prompt('Player 3, what is your name?');
  getPlayerName;
  return getPlayerName;
}
function player4Name(){
  var getPlayerName = prompt('Player 4, what is your name?');
  getPlayerName;
  return getPlayerName;
}

//player names in vars for later use
var player1 = player1Name();
var player2 = player2Name();
var player3 = player3Name();
var player4 = player4Name();
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



//-----reserved for counter.html-------------------------------






