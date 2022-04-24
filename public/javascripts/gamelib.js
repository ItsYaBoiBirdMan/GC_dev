
const width = 1425;
const height = 400;

var cards
var id
var button1
var button2

async function setup() {
    var canvas = createCanvas(width, height);
    id = 3
    canvas.parent('game');
    cards = await getCard(id);
}
async function draw() {
    background(220);
    let x=50;
    if (cards) 
    text(cards.card_name, x, 100, 70, 50);
    text('ATK', x - 7, 135, 70, 50)
    text('HP', x + 27, 135, 70, 50)
    text(cards.card_hp, x + 30, 150, 70,50);
    text(cards.card_atk, x, 150, 70, 50)
    x+=100

}

function changeCradId(newId){
    id = newId
}