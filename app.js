////////////////////////
// APP STATE
////////////////////////

const state = {
    player1: 0,
    player2: 0,
    currentQuestion: {},
    which: true
}

let questions = []

////////////////////////
// Main DOM Element
////////////////////////

const $question = $("#question")
const $a = $("#a")
const $b = $("#b")
const $c = $("#c")
const $d = $("#d")
const $p1score = $("#player1 h4")
const $p2score = $("#player2 h4")



////////////////////////
// Functions
////////////////////////

const chooseAnswer = (event, question) => {
    console.log(event)
    if (event.target.innerText === question.answer) {
        if (state.which) {
            state.player1++
            state.which = !state.which
        } else {
            state.player2++
            state.which = !state.which
        }
        setBoard(questions)
    } else {
        setBoard(questions)
        state.which = !state.which
    }
    
    
    
}

const setBoard = (q) => {

    //Getting a random question
    const randomIndex = Math.floor(Math.random() * q.length)
    const randomQuestion = q[randomIndex]

    //Update the question
    $question.text(randomQuestion.question)
    $a.text(randomQuestion.a)
    $b.text(randomQuestion.b)
    $c.text(randomQuestion.c)
    $d.text(randomQuestion.d)

    //Update player scores
    $p1score.text(state.player1)
    $p2score.text(state.player2)

    $("li").off()
    $("li").on("click", () => {
        chooseAnswer(event, randomQuestion)
    })
   
}
const winCondition = () => {
    if ($("#player1").children.innerText == 1) {
        alert("player1 wins")
    }
}


$("#reset").on("click", () => {
    location.reload()
})

    


////////////////////////
// Main App logic
////////////////////////









const URL = "https://cdn.contentful.com/spaces/dxflx5vhx4mj/environments/master/entries?access_token=mTsWosf3z0QupRvdjuRaQ5i8iE55EoT_VH2HEgDT37w&content_type=triviaq"
$.ajax(URL)
    .then((data) => {
        questions = data.items.map((q) => q.fields)
        console.log(data)
        console.log(questions)

        setBoard(questions)
    })