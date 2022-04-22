async function getCards() {
    try {
        const response = await fetch(`/api/cards`);
        if (response.status == 200) {
           var cards = await response.json();
           return cards;
        } else {
            // Treat errors like 404 here
            console.log(response);
        }
    } catch (err) {
        // Treat 500 errors here
        console.log(err);
    }
}