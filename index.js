document.getElementById('navbar');

async function fetchHeader() {
    let response = await fetch('header.html');
    navbar.innerHTML = await response.text();
};

addEventListener('load', fetchHeader());