
const width = 1425;
const height = 400;

var cards
var attack
var restore
var buttonAttack
var buttonReset

async function setup() {
    var canvas = createCanvas(width, height);
    canvas.parent('game');
    cards = await getCards();
    buttonAttack = createButton('Attack')
    buttonAttack.position(100, 400)
    buttonAttack.mousePressed()
    buttonReset = createButton('Restore')
    buttonReset.position(200, 400)
    buttonReset.mousePressed()
}
async function draw() {
    background(220);
    let x=50;
    if (cards) 
    for (let card of cards) {
        text(card.card_name, x, 100, 70, 50);
        text('ATK', x - 7, 135, 70, 50)
        text('HP', x + 27, 135, 70, 50)
        text(card.card_hp, x + 30, 150, 70,50);
        text(card.card_atk, x, 150, 70, 50)
        x+=100
    }
}