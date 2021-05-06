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

//shuffle da ruffle 
//https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb

const groupOneHtml = document.getElementById('groupOne')
const groupTwoHtml = document.getElementById('groupTwo')
const groupThreeHtml = document.getElementById('groupThree')
const groupFourHtml = document.getElementById('groupFour')

const revealOneButton = document.getElementById('revealOne')
const revealTwoButton = document.getElementById('revealTwo')
const revealThreeButton = document.getElementById('revealThree')
const revealFourButton = document.getElementById('revealFour')

const wheel = document.getElementById('wheel')
const shuffleButton = document.getElementById('shuffleButton')

//sounds
const yeaCheer = document.getElementById('yea')
const wilhelmScreamCheer = document.getElementById('wilhelmScream')
const catNOCheer = document.getElementById('catNO')
const maleNOCheer = document.getElementById('maleNO')
const hohoCheer = document.getElementById('hoho')

let bgSound = document.getElementById('bgSound')
// bgSound.load()
// bgSound.addEventListener("error", function () {
//     console.log("bg error")
// })
// bgSound.addEventListener("canplay", function () {
//     bgSound.play()
// })


let shuffledRuffle = ruffle;
function shuffleDaRuffle() {

    bgSound.play()

    //list reset
    groupOneHtml.innerHTML = ""
    groupTwoHtml.innerHTML = ""
    groupThreeHtml.innerHTML = ""
    groupFourHtml.innerHTML = ""

    wheel.classList.add('spinny-anim')

    wheel.addEventListener('animationstart', onAnimStart, false)
    wheel.addEventListener('animationend', onAnimEnd, false)

    function onAnimStart() {
        shuffleButton.style.display = 'none'
    }

    function onAnimEnd() {
        wheel.classList.remove('spinny-anim')
        wheel.style.display = 'none'

        // let tadaAudio = new Audio('tada.mp3')
        // tadaAudio.play()
        document.getElementById('tada').play()

        prepareResults()
    }

}

function prepareResults() {

    revealOneButton.style.display = 'block'
    revealTwoButton.style.display = 'block'
    revealThreeButton.style.display = 'block'
    revealFourButton.style.display = 'block'

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

function revealOne() {
    groupOneHtml.style.display = "block"
    revealOneButton.style.display = "none"
    playRandomCheer()
}
function revealTwo() {
    groupTwoHtml.style.display = "block"
    revealTwoButton.style.display = "none"
    playRandomCheer()
}
function revealThree() {
    groupThreeHtml.style.display = "block"
    revealThreeButton.style.display = "none"
    playRandomCheer()
}
function revealFour() {
    groupFourHtml.style.display = "block"
    revealFourButton.style.display = "none"
    playRandomCheer()
}

function playRandomCheer() {
    let random = Math.floor(Math.random() * 5)
    console.log(random)

    switch (random) {
        case 0:
            wilhelmScreamCheer.play()
            break;
        case 1:
            catNOCheer.play()
            break;
        case 2:
            maleNOCheer.play()
            break;
        case 3:
            hohoCheer.play()
            break;
        case 4:
            yeaCheer.play()
            break;
    }
}


