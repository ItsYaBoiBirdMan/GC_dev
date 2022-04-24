async function attackCards() {
    try {
        const response = await fetch(`/api/attack`);
        if (response.status == 200) {
           var damage = await response.json();
           return damage;
        } else {
            // Treat errors like 404 here
            console.log(response);
        }
    } catch (err) {
        // Treat 500 errors here
        console.log(err);
    }
}