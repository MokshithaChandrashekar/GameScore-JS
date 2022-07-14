let homeScore = document.getElementById("scorebtn1")
let guestScore = document.getElementById("guestbtn2")
let homeTot = 0
let guestTot = 0

function home1() {
    homeTot +=1
    homeScore.textContent = homeTot
}

function home2() {
    homeTot +=2
    homeScore.textContent = homeTot
}

function home3() {
    homeTot +=3
    homeScore.textContent = homeTot
}

function guest1() {
    guestTot +=1
    guestScore.textContent = guestTot
}

function guest2() {
    guestTot +=2
    guestScore.textContent = guestTot
}

function guest3() {
    guestTot +=3
    guestScore.textContent = guestTot
}


function reset() {
    homeTot = 0
    guestTot = 0
    homeScore.textContent = homeTot
    guestScore.textContent = guestTot
}
