'use strict';

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

var counter2 = function(){
  window.location.href = './counter2.html';
};
var match2Click = document.getElementById('match2');
match2Click.addEventListener('click', counter2);

var winClick = document.getElementById('winButton');
winClick.addEventListener('click', youWin);


var getPlayer1 = localStorage.getItem('setP1');
var getPlayer2 = localStorage.getItem('setP2');
var getPlayer3 = localStorage.getItem('setP3');
var getPlayer4 = localStorage.getItem('setP4');
var getPlayerWin1 = localStorage.getItem('setWin1');
var getPlayerWin2 = localStorage.getItem('setWin2');
// var getWinner = localStorage.getItem('winner');


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
match1PlayersA();
match1PlayersB();

function match2Players(){
  var versus3 = document.getElementById('vs5');
  var addText3 = document.createTextNode(`${getPlayerWin1} player info here`);
  versus3.appendChild(addText3);
  var versus4 = document.getElementById('vs6');
  var addText4 = document.createTextNode(`${getPlayerWin2} player info here`);
  versus4.appendChild(addText4);
}
match2Players();

//working on points----------------------------------

// var getP1Points = localStorage.getItem('setP1Points');
// console.log(getP1Points);


// var pointsClick = document.getElementById('points1');
// pointsClick.addEventListener('submit', life);
// localStorage.setItem('setLoss', lifeLoss1);

//--------------------new points-----------------------
//life of player1


var lifeP1 = 40;
var lifeP2 = 40;
var lifeP3 = 40;
var lifeP4 = 40;
var runLife = function(){
  //p1
  var lifeText1 = document.getElementById('pts1');
  var updateLifeP1 = function(){
    lifeText1.textContent = lifeP1;
  };
  var lifeMinusP1 = function(){
    console.log('-1');
    updateLifeP1();
    return lifeP1 --;
  };
  var lifeMinusButtonP1 = document.getElementById('tier1p1minus');
  lifeMinusButtonP1.addEventListener('click', lifeMinusP1);
  var lifePlusP1 = function(){
    console.log('+1');
    updateLifeP1();
    return lifeP1 ++;
  };
  var lifePlusButtonP1 = document.getElementById('tier1p1plus');
  lifePlusButtonP1.addEventListener('click', lifePlusP1);

  //---p2

  var lifeText2 = document.getElementById('pts2');
  var updateLifeP2 = function(){
    lifeText2.textContent = lifeP2;
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
    updateLifeP2();
    return lifeP2 ++;
  };
  var lifePlusButtonP2 = document.getElementById('tier1p2plus');
  lifePlusButtonP2.addEventListener('click', lifePlusP2);

  //---p3

  var lifeText3 = document.getElementById('pts3');
  var updateLifeP3 = function(){
    lifeText3.textContent = lifeP3;
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
    updateLifeP3();
    return lifeP3 ++;
  };
  var lifePlusButtonP3 = document.getElementById('tier1p3plus');
  lifePlusButtonP3.addEventListener('click', lifePlusP3);

  //---p4

  var lifeText4 = document.getElementById('pts4');
  var updateLifeP4 = function(){
    lifeText4.textContent = lifeP4;
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
    updateLifeP4();
    return lifeP4 ++;
  };
  var lifePlusButtonP4 = document.getElementById('tier1p4plus');
  lifePlusButtonP4.addEventListener('click', lifePlusP4);

};
localStorage.setItem('p1life', lifeP1);
localStorage.setItem('p2life', lifeP2);
localStorage.setItem('p3life', lifeP3);
localStorage.setItem('p4life', lifeP4);




//page switching
if (window.location.pathname === '/Users/kenny/code201/brackettool/counter.html'
){
  runLife();
}
else{
  runlife2();
}




//-------------------





