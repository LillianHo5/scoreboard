let currentHomeScore = 0;
let currentGuestScore = 0;
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeScoreBackground = document.getElementById("home-score-container");
let guestScoreBackground = document.getElementById("guest-score-container");

function homeAddOne() { 
    currentHomeScore += 1; 
    homeScore.textContent = currentHomeScore;
    compareScores();
}

function homeAddTwo() { 
    currentHomeScore += 2; 
    homeScore.textContent = currentHomeScore;
    compareScores();
}

function homeAddThree() { 
    currentHomeScore += 3; 
    homeScore.textContent = currentHomeScore;
    compareScores();
}

function guestAddOne() { 
    currentGuestScore += 1; 
    guestScore.textContent = currentGuestScore;
    compareScores();
}

function guestAddTwo() { 
    currentGuestScore += 2; 
    guestScore.textContent = currentGuestScore;
    compareScores();
}

function guestAddThree() { 
    currentGuestScore += 3; 
    guestScore.textContent = currentGuestScore;
    compareScores();
}

function compareScores() { 
    if (currentHomeScore < currentGuestScore) { 
        guestScoreBackground.style.backgroundColor = "#4359bb";
        homeScoreBackground.style.backgroundColor = "#1B244A";
    } else if (currentHomeScore > currentGuestScore) { 
        homeScoreBackground.style.backgroundColor = "#4359bb";
        guestScoreBackground.style.backgroundColor = "#1B244A";
    } else { 
        guestScoreBackground.style.backgroundColor = "#1B244A";
        homeScoreBackground.style.backgroundColor = "#1B244A";
    }
}