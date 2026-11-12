
// =====================================
// GET HTML ELEMENTS
// =====================================

const startBtn = document.getElementById("startBtn");
const roast = document.getElementById("roast");

const wishBtn = document.getElementById("wishBtn");
const wishMessage = document.getElementById("wishMessage");

const letterBtn = document.getElementById("letterBtn");
const letter = document.getElementById("letter");


// =====================================
// BACKGROUND MUSIC VARIABLES
// =====================================

let youtubePlayer;
let musicStarted = false;


// =====================================
// LOAD YOUTUBE PLAYER API
// =====================================

const youtubeScript = document.createElement("script");

youtubeScript.src = "https://www.youtube.com/iframe_api";

document.head.appendChild(youtubeScript);


// =====================================
// CREATE YOUTUBE PLAYER
// =====================================

function onYouTubeIframeAPIReady() {

    youtubePlayer = new YT.Player("youtube-player", {

        height: "1",
        width: "1",

        videoId: "c9w47mortQw",

        playerVars: {
            autoplay: 0,
            controls: 0,
            loop: 1,
            playlist: "c9w47mortQw"
        },

        events: {

            onReady: function () {
                console.log("Birthday song is ready!");
            },

            onError: function (event) {
                console.log("YouTube playback error:", event.data);
            }

        }

    });

}


// =====================================
// START BUTTON + BACKGROUND MUSIC
// =====================================

startBtn.addEventListener("click", function () {

    roast.scrollIntoView({
        behavior: "smooth"
    });

    makeConfetti();


    // Start background music

    if (youtubePlayer && !musicStarted) {

        youtubePlayer.playVideo();

        musicStarted = true;

    }

});


// =====================================
// WISH BUTTON
// =====================================

wishBtn.addEventListener("click", function () {

    wishMessage.classList.remove("hidden");

    wishBtn.innerText = "WISH SENT! 💖";

    makeConfetti();

});


// =====================================
// SURPRISE LETTER BUTTON
// =====================================

letterBtn.addEventListener("click", function () {

    letter.classList.toggle("hidden");

    if (letter.classList.contains("hidden")) {

        letterBtn.innerText = "OPEN YOUR SURPRISE 💌";

    } else {

        letterBtn.innerText = "CLOSE YOUR SURPRISE 💌";

        letter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        makeConfetti();

    }

});


// =====================================
// CONFETTI EFFECT
// =====================================

function makeConfetti() {

    const confettiBox = document.getElementById("confetti");

    const emojis = [
        "❤️",
        "💖",
        "🎉",
        "✨",
        "💕",
        "🎊",
        "🥳"
    ];

    for (let i = 0; i < 45; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti-piece");

        piece.innerText =
            emojis[Math.floor(Math.random() * emojis.length)];

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        confettiBox.appendChild(piece);


        // Remove confetti after animation

        setTimeout(function () {

            piece.remove();

        }, 5500);

    }

}
