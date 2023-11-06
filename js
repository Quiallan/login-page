// Login Page JS
function initializeNavbarFeatures() {
    // Rotating quotes
    let quotes = ["Quote 1", "Quote 2", "Quote 3"];
    let currentQuoteIndex = 0;
    let textSliderElement = document.querySelector(".text-slider");

    setInterval(changeQuote, 7000);

    function changeQuote() {
        textSliderElement.innerHTML = quotes[currentQuoteIndex];
        textSliderElement.style.animation = "none";
        setTimeout(() => {
            textSliderElement.style.animation = "moveUp 1s ease-in-out";
        }, 0);
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }

    // Dark Mode Toggle
    let toggleSwitchElement = document.querySelector(".slider");
    let toggleLabelElement = document.querySelector(".toggle-label");
    let circleElement = document.querySelector(".circle");  // New
    let isDarkMode = false;

    toggleSwitchElement.addEventListener("click", function() {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            toggleLabelElement.textContent = "On";
            document.body.style.backgroundColor = "black";
        } else {
            toggleLabelElement.textContent = "Off";
            document.body.style.backgroundColor = "white";
        }
        
        circleElement.style.left = isDarkMode ? "27.5px" : "2.5px";  // Updated
    });

    // Scrolling Text
    let scrollingTextElement = document.querySelector(".scrolling-text");
    let textContent = "The Matrix is everywhere, Neo.";
    scrollingTextElement.innerHTML = textContent;

    function scrollText() {
        let firstChar = textContent.charAt(0);
        let remainingText = textContent.slice(1);
        textContent = remainingText + firstChar;
        scrollingTextElement.innerHTML = textContent;
    }

    // Scroll text every 200ms
    setInterval(scrollText, 200);
}
// Fetch navbar.html and insert its content into the div with id="navbar"
fetch('navbar.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
        initializeNavbarFeatures();  // Initialize features after navbar is loaded
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });





const canvas = document.getElementById('matrixLoginColumn');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789@#$%^&*()*&^%";

let columns = canvas.width / 20;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#F00";
    ctx.font = "20px arial";

    for (let i = 0; i < drops.length; i++) {
        let text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(draw, 33);
