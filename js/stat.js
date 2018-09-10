'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

//рисование облака
var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// случайное число от 0 до 1
var getRandom = function(){
  return Math.random();
}

// определение максимального элемента массива
var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.fillText('Ура, вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  ctx.font = '16px PT Mono';

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {

    if(players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + getRandom() + ')';
    }

    var gistHeigth = (times[i] * 150) / getMaxElement(times);

    ctx.fillRect(140 + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - 30 - gistHeigth, BAR_WIDTH, gistHeigth);

    ctx.fillStyle = 'black';
    ctx.fillText(players[i], 140 + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - 10);
    ctx.fillText(Math.round(times[i]), 140 + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - 40 - gistHeigth);
  }
};
