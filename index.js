document.getElementById("navbar");

async function fetchHeader() {
    let response = await fetch('header.html');
    navbar.innerHTML = await response.text();
};

addEventListener('load', fetchHeader());

document.getElementById("footer");

async function fetchfooter() {
    let foot = await fetch('footer.html');
    footer.innerHTML = await foot.text();
};

addEventListener('load', fetchfooter());

