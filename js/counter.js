'use strict';


if (window.location.pathname.includes('index.html') || window.location.pathname.includes('counter.html') || window.location.pathname.includes('counter2.html')){
//---buttons-------------------------------------------
//home button-----------
  var home = function(){
    window.location.href = './index.html';
  };
  var homeClick = document.getElementById('home');
  homeClick.addEventListener('click', home);
  //aboutus button----------
  var youWin = function(){
    window.location.href = 'aboutus.html';
  };
  var aboutClick = document.getElementById('aboutUs');
  aboutClick.addEventListener('click', youWin);

  var winScreen = function(){
    var winClick = document.getElementById('winButton');
    winClick.addEventListener('click', youWin);
  };
  if (window.location.pathname.includes('counter2.html')){
    winScreen();
  }

  var counter2 = function(){
    window.location.href = 'counter2.html';
  };
  var counter2Screen = function(){
    var match2Click = document.getElementById('match2');
    match2Click.addEventListener('click', counter2);
  };
  if (window.location.pathname.includes('counter.html')){
    counter2Screen();
  }
}

//get player names
var getPlayer1 = localStorage.getItem('setP1');
var getPlayer2 = localStorage.getItem('setP2');
var getPlayer3 = localStorage.getItem('setP3');
var getPlayer4 = localStorage.getItem('setP4');


function match1PlayersA(){
  var versus1 = document.getElementById('vs1');
  var addText1 = document.createTextNode(`${getPlayer1} `);
  versus1.appendChild(addText1);
  var versus2 = document.getElementById('vs2');
  var addText2 = document.createTextNode(`${getPlayer2} `);
  versus2.appendChild(addText2);
}
function match1PlayersB(){
  var versus1 = document.getElementById('vs3');
  var addText1 = document.createTextNode(`${getPlayer3} `);
  versus1.appendChild(addText1);
  var versus2 = document.getElementById('vs4');
  var addText2 = document.createTextNode(`${getPlayer4} `);
  versus2.appendChild(addText2);
}
if (window.location.pathname.includes('index.html') || window.location.pathname.includes('counter.html') || window.location.pathname.includes('counter2.html')){
  match1PlayersA();
  match1PlayersB();
}

var player1b = localStorage.getItem('pwa');
var player2b = localStorage.getItem('pwb');

function match2Players(){
  var versus3 = document.getElementById('vs5');
  var addText3 = document.createTextNode(`${player1b} `);
  versus3.appendChild(addText3);
  var versus4 = document.getElementById('vs6');
  var addText4 = document.createTextNode(`${player2b} `);
  versus4.appendChild(addText4);
}
if (window.location.pathname.includes('index.html') || window.location.pathname.includes('counter2.html')){
  match2Players();
}

//declare life
var lifeP1 = 40;
var lifeP2 = 40;
var lifeP3 = 40;
var lifeP4 = 40;
var lifeM2P1 = 40;
var lifeM2P2 = 40;


var runLife = function(){
  //p1
  var lifeText1 = document.getElementById('pts1');
  var updateLifeP1 = function(){
    lifeText1.textContent = lifeP1 - 1;
  };
  var updateLifeP1b = function(){
    lifeText1.textContent = lifeP1 + 1;
  };
  var lifeMinusP1 = function(){
    console.log('-1');
    updateLifeP1();
    return lifeP1 -- ;
  };
  var lifeMinusButtonP1 = document.getElementById('tier1p1minus');
  lifeMinusButtonP1.addEventListener('click', lifeMinusP1);
  var lifePlusP1 = function(){
    console.log('+1');
    updateLifeP1b();
    return lifeP1 ++;
  };
  var lifePlusButtonP1 = document.getElementById('tier1p1plus');
  lifePlusButtonP1.addEventListener('click', lifePlusP1);

  //---p2

  var lifeText2 = document.getElementById('pts2');
  var updateLifeP2 = function(){
    lifeText2.textContent = lifeP2 - 1;
  };
  var updateLifeP2b = function(){
    lifeText2.textContent = lifeP2 + 1;
  };
  var lifeMinusP2 = function(){
    console.log('-1');
    updateLifeP2();
    return lifeP2 --;
  };
  var lifeMinusButtonP2 = document.getElementById('tier1p2minus');
  lifeMinusButtonP2.addEventListener('click', lifeMinusP2);
  var lifePlusP2 = function(){
    console.log('+1');
    updateLifeP2b();
    return lifeP2 ++;
  };
  var lifePlusButtonP2 = document.getElementById('tier1p2plus');
  lifePlusButtonP2.addEventListener('click', lifePlusP2);

  //---p3

  var lifeText3 = document.getElementById('pts3');
  var updateLifeP3 = function(){
    lifeText3.textContent = lifeP3 - 1;
  };
  var updateLifeP3b = function(){
    lifeText3.textContent = lifeP3 + 1;
  };
  var lifeMinusP3 = function(){
    console.log('-1');
    updateLifeP3();
    return lifeP3 --;
  };
  var lifeMinusButtonP3 = document.getElementById('tier1p3minus');
  lifeMinusButtonP3.addEventListener('click', lifeMinusP3);
  var lifePlusP3 = function(){
    console.log('+1');
    updateLifeP3b();
    return lifeP3 ++;
  };
  var lifePlusButtonP3 = document.getElementById('tier1p3plus');
  lifePlusButtonP3.addEventListener('click', lifePlusP3);

  //---p4

  var lifeText4 = document.getElementById('pts4');
  var updateLifeP4 = function(){
    lifeText4.textContent = lifeP4 - 1;
  };
  var updateLifeP4b = function(){
    lifeText4.textContent = lifeP4 + 1;
  };
  var lifeMinusP4 = function(){
    console.log('-1');
    updateLifeP4();
    return lifeP4 --;
  };
  var lifeMinusButtonP4 = document.getElementById('tier1p4minus');
  lifeMinusButtonP4.addEventListener('click', lifeMinusP4);
  var lifePlusP4 = function(){
    console.log('+1');
    updateLifeP4b();
    return lifeP4 ++;
  };
  var lifePlusButtonP4 = document.getElementById('tier1p4plus');
  lifePlusButtonP4.addEventListener('click', lifePlusP4);

};

var runLife2 = function(){
  //match 2 p1
  var lifeText5 = document.getElementById('pts5');
  var updateLifeP5 = function(){
    lifeText5.textContent = lifeM2P1 - 1;
  };
  var updateLifeP5b = function(){
    lifeText5.textContent = lifeM2P1 + 1;
  };
  var lifeMinusP5 = function(){
    console.log('-1');
    updateLifeP5();
    return lifeM2P1 --;
  };
  var lifeMinusButtonP5 = document.getElementById('tier2p1minus');
  lifeMinusButtonP5.addEventListener('click', lifeMinusP5);
  var lifePlusP5 = function(){
    console.log('+1');
    updateLifeP5b();
    return lifeM2P1 ++;
  };
  var lifePlusButtonP5 = document.getElementById('tier2p1plus');
  lifePlusButtonP5.addEventListener('click', lifePlusP5);

  //match 2 p2-------------

  var lifeText6 = document.getElementById('pts6');
  var updateLifeP6 = function(){
    lifeText6.textContent = lifeM2P2 - 1;
  };
  var updateLifeP6b = function(){
    lifeText6.textContent = lifeM2P2 + 1;
  };
  var lifeMinusP6 = function(){
    console.log('-1');
    updateLifeP6();
    return lifeM2P2 --;
  };
  var lifeMinusButtonP6 = document.getElementById('tier2p2minus');
  lifeMinusButtonP6.addEventListener('click', lifeMinusP6);
  var lifePlusP6 = function(){
    console.log('+1');
    updateLifeP6b();
    return lifeM2P2 ++;
  };
  var lifePlusButtonP6 = document.getElementById('tier2p2plus');
  lifePlusButtonP6.addEventListener('click', lifePlusP6);

};

localStorage.setItem('p1life', lifeP1);
localStorage.setItem('p2life', lifeP2);
localStorage.setItem('p3life', lifeP3);
localStorage.setItem('p4life', lifeP4);

//page switching
if (window.location.pathname.includes('counter.html')){
  runLife();
}
if (window.location.pathname.includes('counter2.html')){
  runLife2();
}

//Decide who wins upper set based on points
//..and set localstorage to save this round's winners
function playerWinMatch1A(){
  if (lifeP1 >= lifeP2){
    return getPlayer1;
  } else{
    return getPlayer2;
  }
}
if (window.location.pathname.includes('counter.html')){
  playerWinMatch1A();
  //-----new
  var storeA = function(){
    localStorage.setItem('pwa', playerWinMatch1A());
  };
  var listenA = document.getElementById('match2');
  listenA.addEventListener('click', storeA);
}
//Decide who wins lower set based on points
function playerWinMatch1B(){
  if (lifeP3 >= lifeP4){
    return getPlayer3;
  } else{
    return getPlayer4;
  }
}
if (window.location.pathname.includes('counter.html')){
  playerWinMatch1B();
  var storeB = function(){
    localStorage.setItem('pwb', playerWinMatch1B());
  };
  var listenB = document.getElementById('match2');
  listenB.addEventListener('click', storeB);
}


function win(){
  if (lifeM2P1 >= lifeM2P2){
    return player1b;
  } else{
    return player2b;
  }
}
//---------
if (window.location.pathname.includes('counter2.html')){
  // player1b;
  var store1b = function(){
    localStorage.setItem('pwc', win());
  };
  var listen1b = document.getElementById('winButton');
  listen1b.addEventListener('click', store1b);

}
//---------
var winner = localStorage.getItem('pwc');

if (window.location.pathname.includes('aboutus.html')){
  localStorage.getItem('pwc');
  var getWinner = document.getElementById('winner');
  getWinner.textContent = winner;

  var home2 = function(){
    window.location.href = './index.html';
  };
  var homeClick2 = document.getElementById('home');
  homeClick2.addEventListener('click', home2);
}

// var kenWin = 0 ;
// localStorage.setItem('kenwin+', kenWin);
// var kenStore = localStorage.getItem('kenwin');

// if(win().includes('ken')){
//   kenStore ++;
// }
// var kenString = kenStore.toString();
