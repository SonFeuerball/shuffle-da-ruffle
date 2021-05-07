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
const whimperCheer = document.getElementById('whimper')
const femaleSADCheer = document.getElementById('femaleSAD')

const drumRoll = document.getElementById('drum')

let bgSound = document.getElementById('bgSound')
// bgSound.load()
// bgSound.addEventListener("error", function () {
//     console.log("bg error")
// })
bgSound.addEventListener("ended", function () {
    bgSound.play()
})

//dance-man
let head = document.getElementById('head')
let leftHand = document.getElementById('leftHand')
let rightHand = document.getElementById('rightHand')

let enrageCounter = 0;

head.addEventListener('click', function () {
    enrageCounter++
    console.log(enrageCounter)
    if (enrageCounter >= 10) {
        enrageStageTwo()
    } else if (enrageCounter >= 5) {
        enrageStageOne()
    }
})

function enrageStageOne() {
    head.innerHTML = "😠"
    leftHand.innerHTML = "👎"
    rightHand.innerHTML = "👎"
}
function enrageStageTwo() {
    head.innerHTML = "🤬"
    leftHand.innerHTML = "🖕"
    rightHand.innerHTML = "🖕"
    enrageCounter = 0
}

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

    handleDanceMan()

}

function prepareResults() {

    revealOneButton.style.display = 'block'
    revealTwoButton.style.display = 'block'
    revealThreeButton.style.display = 'block'
    revealFourButton.style.display = 'block'

    revealOneButton.addEventListener('mouseenter', function () {
        drumRoll.play()
    })
    revealTwoButton.addEventListener('mouseenter', function () {
        drumRoll.play()
    })
    revealThreeButton.addEventListener('mouseenter', function () {
        drumRoll.play()
    })
    revealFourButton.addEventListener('mouseenter', function () {
        drumRoll.play()
    })

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
    drumRoll.pause()
    drumRoll.load()
    groupOneHtml.style.display = "block"
    revealOneButton.style.display = "none"
    playRandomCheer()
}
function revealTwo() {
    drumRoll.pause()
    drumRoll.load()
    groupTwoHtml.style.display = "block"
    revealTwoButton.style.display = "none"
    playRandomCheer()
}
function revealThree() {
    drumRoll.pause()
    drumRoll.load()
    groupThreeHtml.style.display = "block"
    revealThreeButton.style.display = "none"
    playRandomCheer()
}
function revealFour() {
    drumRoll.pause()
    drumRoll.load()
    groupFourHtml.style.display = "block"
    revealFourButton.style.display = "none"
    playRandomCheer()
}

function playRandomCheer() {
    let random = Math.floor(Math.random() * 7)
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
        case 5:
            whimper.play()
            break;
        case 6:
            femaleSADCheer.play()
            break;
    }
}

function handleDanceMan() {
    head.innerHTML = "😮"
    leftHand.innerHTML = "✋"
    rightHand.innerHTML = "✋"
    head.classList.remove('startIdleHead')
    leftHand.classList.remove('startIdleLeftHand')
    rightHand.classList.remove('startIdleRightHand')
    head.classList.add('spinny-anim')
    leftHand.classList.add('shakyHands')
    rightHand.classList.add('shakyHands')

    head.addEventListener('animationend', function () {
        head.innerHTML = "🤢"
        head.classList.remove('spinny-anim')
        leftHand.classList.remove('shakyHands')
        rightHand.classList.remove('shakyHands')

        head.classList.add('startIdleHead')

        setInterval(letsDance, 3000)
    })
}

function letsDance() {
    head.classList.remove('startIdleHead')
    head.innerHTML = "😄"
    leftHand.innerHTML = "✊"
    rightHand.innerHTML = "✊"
    head.classList.add('danceOneHead')
    leftHand.classList.add('danceOneHands')
    rightHand.classList.add('danceOneHands')
}





