// Essential Phaser config
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    init: init,
    preload: preload,
    create: create,
    update: update,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: {
        y: 0,
      },
    },
  },
};

var game = new Phaser.Game(config);

function init() {}

// Preload assets
function preload() {
  this.load.image('button1', 'assets/images/ui/blue_button01.png');
  this.load.spritesheet('items', 'assets/images/items.png', {
    frameWidth: 32,
    frameHeight: 32,
  });
}

function create() {
  this.add.sprite(300, 100, 'button1');

  this.add.image(300, 300, 'items', 0);

  this.physics.add.image(500, 100, 'button1');
}

function update() {}
