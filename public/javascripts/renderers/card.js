const imgCenterVertical = 0.4;
const imgRelWidth = 0.6;
const textCenterVertical = 0.8;

class Card{
    constructor(x, y, card) {
        this.x = x;
        this.y = y;
        this.card = card;
    }
    draw() {
        text(this.card_name, x, 100, 70, 50);
    }
}