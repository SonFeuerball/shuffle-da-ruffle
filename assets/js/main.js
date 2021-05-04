//16 peepos
const ruffle = [
    'Isabelle',
    'Andreas',
    'Bernd',
    'Bob',
    'Daniel',
    'Daniela',
    'Esther',
    'Olesja',
    'Özcan',
    'Matija',
    'Samir',
    'Rico',
    'Severin',
    'Svitlana',
    'Mohamed',
    'Lucas',
]

const groupOneHtml = document.getElementById('groupOne')
const groupTwoHtml = document.getElementById('groupTwo')
const groupThreeHtml = document.getElementById('groupThree')
const groupFourHtml = document.getElementById('groupFour')

const wheel = document.getElementById('wheel')

//shuffle da ruffle 
//https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb

let shuffledRuffle = ruffle;
function shuffleDaRuffle() {

    //list reset
    groupOneHtml.innerHTML = ""
    groupTwoHtml.innerHTML = ""
    groupThreeHtml.innerHTML = ""
    groupFourHtml.innerHTML = ""

    wheel.classList.add('spinny-anim')

    wheel.addEventListener('animationend', onAnimEnd, false)

    function onAnimEnd() {
        wheel.classList.remove('spinny-anim')
    }

    for (let i = shuffledRuffle.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = shuffledRuffle[i]
        shuffledRuffle[i] = shuffledRuffle[j]
        shuffledRuffle[j] = temp
    }

    shuffledRuffle.forEach(entry => console.log(entry))

    let groupOne = shuffledRuffle.slice(0, 4)
    groupOne.forEach(peepo => {
        console.log("GroupOne: " + peepo)
        groupOneHtml.innerHTML += "<li>" + peepo + "</li>"
    })

    let groupTwo = shuffledRuffle.slice(4, 8)
    groupTwo.forEach(peepo => {
        console.log("GroupTwo: " + peepo)
        groupTwoHtml.innerHTML += "<li>" + peepo + "</li>"
    })

    let groupThree = shuffledRuffle.slice(8, 12)
    groupThree.forEach(peepo => {
        console.log("GroupThree: " + peepo)
        groupThreeHtml.innerHTML += "<li>" + peepo + "</li>"
    })

    let groupFour = shuffledRuffle.slice(12, 16)
    groupFour.forEach(peepo => {
        console.log("GroupFour: " + peepo)
        groupFourHtml.innerHTML += "<li>" + peepo + "</li>"
    })
}


