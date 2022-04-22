
const width = 1000;
const height = 400;

var cards;

/*
function preload() {
    BoardManager.preloadImages();
    boardMan = new BoardManager(width,height,0,0,room);
    boardMan.initBoard();
}
*/
async function setup() {
    var canvas = createCanvas(width, height);
    canvas.parent('game');
    cards = await getCards();
}
async function draw() {
    background(220);
    let x=50;
    if (cards) 
    for (let card of cards) {
        text(card.card_name, x, 100, 70, 50);
        text(card.card_hp, x + 20, 150,70,50);
        text(card.card_atk,x ,150,70,50)
        x+=80
    }
}

function mouseClicked() {
   
}