var catPhoto = 'https://cataas.com/cat?json=true';

fetch(catPhoto)
    .then(response => response.json())
    .then(data => document.getElementById("cat-image").innerHTML = `
    <img src = "${data.url}" alt="Cat Image" width = "300"/>
    `);