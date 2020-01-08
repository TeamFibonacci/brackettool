'use strict';

//buttons---------------------------------------------------
//button to match 1
// This is a lot of effort to replicate what an `a` tag can already do! In general, better to use the tag that makes link happen than to re-build that functionality yourself.
// var counter1 = function(){
//   window.location.href = 'counter.html';
// };
// var match1Click = document.getElementById('match1');
// match1Click.addEventListener('click', counter1);

// zombie

//button to win screen
// var youWin = function(){
//   window.location.href = 'aboutus.html';
// };
// var aboutClick = document.getElementById('aboutUs');
// aboutClick.addEventListener('click', youWin);

// zombie

// Add var allPlayer = []  help to push this
var allPlayer = [];

function OrganicPlayer(name, points){
  this.name = name;
  this.points = points;
  // Add allPlayer.push(this) to use for graph
  allPlayer.push(this);

}

//get player names
// Instead of using prompts, it would be a nicer user experience to have inputs on your page and then a "submit" button.
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


//localstorage for name brackets-----------------
localStorage.setItem('setP1', one.name);
localStorage.setItem('setP2', two.name);
localStorage.setItem('setP3', three.name);
localStorage.setItem('setP4', four.name);

// about chart-------------------------------------------------------

// oh noooo zombie code! Try to remove things like this in future projects before they're finished!
