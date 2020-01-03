'use strict';

//buttons---------------------------------------------------
//button to match 1
var counter1 = function(){
  window.location.href = 'counter.html';
};
var match1Click = document.getElementById('match1');
match1Click.addEventListener('click', counter1);

// var graphP = document.getElementById('myChart');
// graphP.addEventListener(renderChart);

//button to win screen
var youWin = function(){
  window.location.href = 'aboutus.html';
};
var aboutClick = document.getElementById('aboutUs');
aboutClick.addEventListener('click', youWin);

//button to scroll to chart
// var graph = function(){
//   window.location.href = '#myChart';
// };
// var statsClick = document.getElementById('stats');
// statsClick.addEventListener('click', graph);


// Add var allPlayer = []  help to push this
var allPlayer = [];

function OrganicPlayer(name, points){
  this.name = name;
  this.points = points;
  // Add allPlayer.push(this) to use for graph
  allPlayer.push(this);

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

// function playersName() {
//   var answer = [];
//   for(var i = 0; i < allPlayer.length; i++) {
//     answer[i] = allPlayer[i].name;
//   }
//   return answer;
// }

// function renderChart(){
//   var ctx = document.getElementById('myChart').getContext('2d');
//   // eslint-disable-next-line no-undef
//   new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: playersName(),
//       datasets: [{
//         label: '# of points',
//         data: [2, 6, 5, 9],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)'
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)'
//         ],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         yAxes: [{
//           ticks: {
//             beginAtZero: true
//           }
//         }]
//       }
//     }
//   });
// }
// renderChart();

//--counter Js
