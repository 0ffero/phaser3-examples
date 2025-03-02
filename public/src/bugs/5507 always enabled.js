var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create()
{
    var invisibleRect = this.add.rectangle(400, 300, 300, 300, 0x00ff00);
    var rect = this.add.rectangle(400, 300, 256, 256, 0x0000ff);
    var text = this.add.text(128, 128, "0").setFontSize(28);
    var count = 0;

    invisibleRect.name = 'invis';
    invisibleRect.setInteractive();
    invisibleRect.input.alwaysEnabled = true;

    invisibleRect.on('pointerdown', function () {
        count++;
        text.text = count.toString();
    });

    rect.name = 'rect';
    rect.setInteractive();

    invisibleRect.alpha = 0;

    // invisibleRect.setDepth(0);
    rect.setDepth(-1);
}
