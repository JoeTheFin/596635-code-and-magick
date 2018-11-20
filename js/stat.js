'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 110;
var CLOUD_Y = 10;
var SHADOW = 10;
var TEXT_POSITION = 220;
var TEXT_GAP = 10;
var COLUMN_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = -150;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X - SHADOW, CLOUD_Y - SHADOW, '#fff');
  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + 25, 20);
  ctx.fillText('Список результатов:', CLOUD_X + 25, 35);

  var players = ['Вы', 'Кекс', 'Катя', 'Игорь'];
  var randomNumberColor = Math.round(0 + (Math.random() * (255 - 0))) / i;

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i] , CLOUD_X + BAR_WIDTH + (BAR_WIDTH + COLUMN_GAP) * i, CLOUD_Y + TEXT_POSITION + TEXT_GAP);
    ctx.fillStyle = 'rgb(0, randomNumberColor / i, 255)';
    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + COLUMN_GAP) * i, CLOUD_Y + TEXT_POSITION, BAR_WIDTH, BAR_HEIGHT);
  }
};
