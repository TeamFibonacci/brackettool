'use strict';

var playerHolder = 'player';

function match1Player(){
  var table = document.getElementById('vs1');
  var addText = document.createTextNode(`${playerHolder} player info here`);
  table.appendChild(addText);
}
match1Player();







