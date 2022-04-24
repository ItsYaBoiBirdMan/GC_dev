async function restoreCards() {
    try {
        const response = await fetch(`/api/restore`);
        if (response.status == 200) {
           var restore = await response.json();
           return restore;
        } else {
            // Treat errors like 404 here
            console.log(response);
        }
    } catch (err) {
        // Treat 500 errors here
        console.log(err);
    }
}