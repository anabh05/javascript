async function fetchData() {
    try {
        const response = await fetch(`https://api.agify.io?name=michael`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error ', error);
    }
}

fetchData()