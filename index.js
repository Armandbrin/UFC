// header
document.getElementById("navbar");

async function fetchHeader() {
    let response = await fetch('header.html');
    navbar.innerHTML = await response.text();
};

addEventListener('load', fetchHeader());

// footer
document.getElementById("footer");

async function fetchfooter() {
    let foot = await fetch('footer.html');
    footer.innerHTML = await foot.text();
};

addEventListener('load', fetchfooter());

function profil() {
    // info
    let fullname = document.getElementById('fullname');
    let nickname = document.getElementById("nickname");
    let birthdate = document.getElementById("birthdate");
    let height = document.getElementById("height");
    let weight = document.getElementById("weight");
    let reach = document.getElementById("reach");
    let wins = document.getElementById("wins");
    let losses = document.getElementById("losses");
    let draws = document.getElementById("draws");
    let nocontests = document.getElementById("nocontests");
    let tkowins = document.getElementById("tkowins");
    let tkolosses = document.getElementById("tkolosses");
    let submissions = document.getElementById("submissions");
    let submissionlosses = document.getElementById("submissionlosses");
    let titlewins = document.getElementById("titlewins");
    let titlelosses = document.getElementById("titlelosses");
    let titledraws = document.getElementById("titledraws");
    // stat
    let sigstrikeslandedperminute = document.getElementById("sigstrikeslandedperminute");
    let sigstrikeaccuracy = document.getElementById("sigstrikeaccuracy");
    let takedownaverage = document.getElementById("takedownaverage");
    let submissionaverage = document.getElementById("submissionaverage");
    let knockoutpercentage = document.getElementById("knockoutpercentage");
    let technicalknockoutpercentage = document.getElementById("technicalknockoutpercentage");
    let decisionpercentage = document.getElementById("decisionpercentage");
    // id url
    let chaine = window.location.href;
    let result = chaine.split('=');
    let id = result[1]
    fetch("json/Fighters.json", {
        headers: {
            'Authorization': 'Basic ',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    })
        .then(rep => rep.json())
        .then(rep => {
            for (let i = 0; i < rep.length; i++) {
                if (id == rep[i].FighterId) {
                    // info
                    fullname.innerText = `${rep[i].LastName} ${rep[i].FirstName}`;
                    birthdate.innerText = `${anniv(rep[i].BirthDate)}`;
                    height.innerText = `${taille(rep[i].Height)}`;
                    weight.innerText = `${poids(rep[i].Weight)}`;
                    reach.innerText = `${portée(rep[i].Reach)}`;
                    wins.innerText = `${rep[i].Wins}`;
                    losses.innerText = `${rep[i].Losses}`;
                    draws.innerText = `${rep[i].Draws}`;
                    nocontests.innerText = `${rep[i].NoContests}`;
                    tkowins.innerText = `${rep[i].TechnicalKnockouts}`;
                    tkolosses.innerText = `${rep[i].TechnicalKnockoutLosses}`;
                    submissions.innerText = `${rep[i].Submissions}`;
                    submissionlosses.innerText = `${rep[i].SubmissionLosses}`;
                    titlewins.innerText = `${rep[i].TitleWins}`;
                    titlelosses.innerText = `${rep[i].TitleLosses}`;
                    titledraws.innerText = `${rep[i].TitleDraws}`;
                    nickname.innerText = `${rep[i].Nickname}`;
                    // stat
                    sigstrikeslandedperminute.innerText = `${rep[i].CareerStats?.SigStrikesLandedPerMinute}`;
                    sigstrikeaccuracy.innerText = `${rep[i].CareerStats?.SigStrikeAccuracy}`;
                    takedownaverage.innerText = `${rep[i].CareerStats?.TakedownAverage}`;
                    submissionaverage.innerText = `${rep[i].CareerStats?.SubmissionAverage}`;
                    knockoutpercentage.innerText = `${rep[i].CareerStats?.KnockoutPercentage}`;
                    technicalknockoutpercentage.innerText = `${rep[i].CareerStats?.TechnicalKnockoutPercentage}`;
                    decisionpercentage.innerText = `${rep[i].CareerStats?.DecisionPercentage}`;
                }
            }
        });
}

// calcul
function taille(Height) {
    return Math.trunc(((Height / 15.44) * 25.4)) / 100
}

function poids(Weight) {
    return Math.trunc((Weight / 1.535) / 2.205)
}

function portée(Reach) {
    return Math.trunc(((Reach / 15.44) * 25.4)) / 100
}

function anniv(BirthDate) {
    let today = new Date();
    let anniversaire = new Date(BirthDate);
    let age = today - anniversaire;
    return Math.trunc(age / 31540000000)
}



// change le calendrier en fonction de la taille de l'écran
if (window.matchMedia("(max-width: 900px)").matches) {
    document.addEventListener('DOMContentLoaded', function () {


        fetch("json/date-combat.json")
            .then(rep => rep.json())
            .then(rep => {
                let newData = [];

                for (let i = 0; i < rep.length; i++) {
                    newData.push({
                        title: rep[i].ShortName,
                        start: rep[i].DateTime,
                        borderColor: "#a20000",
                    })
                }
                let calendarEl = document.getElementById('calendar');
                let calendar = new FullCalendar.Calendar(calendarEl, {
                    initialView: 'listWeek',
                    progressiveEventRendering: true,
                    events: newData,
                    views: {
                        timeGrid: {
                            dayMaxEventRows: 1
                        }
                    }
                });
                calendar.render();
                calendar.setOption('locale', 'fr');
            })

    });
} else {
    
    document.addEventListener('DOMContentLoaded', function () {


        fetch("json/date-combat.json")
            .then(rep => rep.json())
            .then(rep => {
                let newData = [];

                for (let i = 0; i < rep.length; i++) {
                    newData.push({
                        title: rep[i].ShortName,
                        start: rep[i].DateTime,
                        display: "block",
                        backgroundColor: "white",
                        textColor: "black",
                        borderColor: "#a20000",
                    })
                }
                let calendarEl = document.getElementById('calendar');
                let calendar = new FullCalendar.Calendar(calendarEl, {
                    initialView: 'dayGridMonth',
                    progressiveEventRendering: true,
                    events: newData,
                    views: {
                        timeGrid: {
                            dayMaxEventRows: 1
                        }
                    }
                });
                calendar.render();
                calendar.setOption('locale', 'fr');
            })

    });
}

