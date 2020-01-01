'use strict';

//buttons---------------------------------------------------
//button to match 1
var counter1 = function(){
  window.location.href = 'counter.html';
};
var match1Click = document.getElementById('match1');
match1Click.addEventListener('click', counter1);

//button to win screen
var youWin = function(){
  window.location.href = 'aboutus.html';
};

var aboutClick = document.getElementById('aboutUs');
aboutClick.addEventListener('click', youWin);
//button to scroll to chart
var graph = function(){
  window.location.href = '#myChart';
};
var statsClick = document.getElementById('stats');
statsClick.addEventListener('click', graph);


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




//localstorage for points------------------------
// localStorage.setItem('setP1Points', one.points);
// var p1Minus = localStorage.getItem('setLoss');

// one.points = one.points - p1Minus;

// one.points --;
// three.points --;


//Decide who wins first upper set based on points
// function playerWinMatch1A(){
//   if (one.points <= two.points){
//     return one;
//   } else{
//     return two;
//   }
// }
// playerWinMatch1A();
// //Decide who wins lower set based on points
// function playerWinMatch1B(){
//   if (three.points <= four.points){
//     return three;
//   } else{
//     return four;
//   }
// }
// playerWinMatch1B();

// //MATCH2
// //Adding winners from match 1 to match 2
// function organicplayersMatch2(){
//   var table = document.getElementById('playersWin1');
//   var newTD = document.createElement('td');
//   var addText = document.createTextNode(` ${playerWinMatch1A().name} vs ${playerWinMatch1B().name} Get ready!`);
//   newTD.appendChild(addText);
//   table.appendChild(newTD);
// }
// organicplayersMatch2();
//Return winner
// function win(){
//   if (playerWinMatch1A().points <= playerWinMatch1B().points){
//     return playerWinMatch1A().name;
//   } else{
//     return playerWinMatch1B().name;
//   }
// }
// win();
//Render winner to screen
function winRender(){
  var table = document.getElementById('win');
  var newTD = document.createElement('td');
  var addText = document.createTextNode(` ${win()} wins the tournament!!`);
  newTD.appendChild(addText);
  table.appendChild(newTD);
}
winRender();

//localstorage for name brackets-----------------
localStorage.setItem('setP1', one.name);
localStorage.setItem('setP2', two.name);
localStorage.setItem('setP3', three.name);
localStorage.setItem('setP4', four.name);
// localStorage.setItem('setWin1', playerWinMatch1A().name);
// localStorage.setItem('setWin2', playerWinMatch1B().name);
// localStorage.setItem('setWinner'. win());





// about chart-------------------------------------------------------

function playersName() {
  var answer = [];
  for(var i = 0; i < allPlayer.length; i++) {
    answer[i] = allPlayer[i].name;
  }
  return answer;
}



// function pointsWin() {
//   var answer = [];
//   for(var i = 0; i < allPlayer.points; i++) {
//     answer[i] = allPlayer[i].points;
//   }
//   return answer;
// }


function renderChart(){
  var ctx = document.getElementById('myChart').getContext('2d');
  // eslint-disable-next-line no-undef
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: playersName(),
      datasets: [{
        label: '# of points',
        data: [2, 6, 5, 9],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
renderChart();

//--counter Js
