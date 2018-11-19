'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 110;
var CLOUD_Y = 10;
var SHADOW = 10;
var TEXT_POSITION = 240;
var COLUMN_GAP = 50;
var BAR_WIDTH = 40;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx) {
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X - SHADOW, CLOUD_Y - SHADOW, '#fff');
  ctx.fillStyle = 'blue';

  var players = ['Вы', 'Кекс', 'Катя', 'Игорь'];

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i] , CLOUD_X + BAR_WIDTH + (BAR_WIDTH + COLUMN_GAP) * i, CLOUD_Y + TEXT_POSITION);
    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + COLUMN_GAP) * i, CLOUD_Y + COLUMN_GAP, BAR_WIDTH, 150);
  }
};
