'use strict';

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

//player names in vars for later use
var player1 = player1Name();
var player2 = player2Name();
//adding organic players to document
function organicPlayers(){
  var table = document.getElementById('players');
  var newTD = document.createElement('td');
  var addText = document.createTextNode(` ${player1} vs ${player2} Get ready!`);
  newTD.appendChild(addText);
  table.appendChild(newTD);
}
organicPlayers();
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






