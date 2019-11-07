//--------------global variable
var startBtn = document.querySelector("#start");
var score = document.querySelector("#scorNum");
var counter = document.querySelector("#counter");
var highScore = 0;
var qI = 0

//--------------question is stored in a variable
var question = [
    {
        title: "How many programming languages are there?",
        options: ["698", "674", "482", "36"],
        answer: "698"
    },
    {
        title: "Who was the first computer programmer?",
        options: ["Dennis Ritchie", "Ada Lovelace", "Alan Turing", "Tim Berners-Lee"],
        answer: "Ada Lovelace"

    },
    {
        title: "What was the first high-level programming language",
        options: ["Plankalkul", "Java", "C", "Short Code"],
        answer: "Short Code"

    },
    {
        title: "What was the name of the first computer?",
        options: ["ENIAC", "Colossus", "Abacus", "Ada"],
        answer: "Colossus"

    },
    {
        title: "What was the name of the first automated computer compiler?",
        options: ["IBM", "ALGOL", "A-o", "Autocoder"],
        answer: "A-o"

    }

]

//------------------transfer the div question to the array question object

function displayQuestion() {

    //display your title (question[qI].title)
    document.getElementById("question").innerText = question[qI].title;
    var optionsArray = question[qI].options;
    var optionList = document.getElementById("choices");

    for (var i = 0; i < optionsArray.length; i++) {
        var button = document.createElement("button");
        button.textContent = optionsArray[i];
        console.log(button);
        optionList.append(button);
    }
}


//-------------running since it loads
hideEverything();
function hideEverything() {
    var q1 = document.querySelector("#box")
    q1.style.display = "none";
    var extra = document.querySelector("#last")
    extra.style.display = "none";
}


//-------------start game
startBtn.addEventListener("click", function () {
    //----------------time
    var secLeft = 65;
    setTime();
    function setTime() {
        var timerInterval = setInterval(timerDown, 1000);
        function timerDown() {
            secLeft--;
            counter.textContent = secLeft;

            if (secLeft === 0) {

                clearInterval(timerInterval);
                hide();
            }
        }
    }
    //-------functions
    hideStartshow1();
    displayQuestion();
    transferA();
})

document.getElementById("choices").addEventListener("click", function(e){
    if(e.target.matches("button")){
        var answer = 
        if (!"choices" = )




    }
})

//----------------hide start show q1
function hideStartshow1() {
    var hider = document.querySelector("#spage");
    hider.style.display = "none";
    var hidbtn = document.querySelector("#results-form");
    hidbtn.style.display = "none";
    var q1 = document.querySelector("#box");
    q1.style.display = "block";
}



function transferA() {
    question.options.forEach(function () {
    })
    var a = document.getElementById("a");
    a.textContent = option;


}


//--------function to check for each answer

// function checkAns () {

//     <element>.addEventListener("#choices").onclick 
// }


// function ans1() {
//     document.getElementById("#ansA").onclick = function () {
//         highScore++
//         hide();
//         Show2;
//     }
//     document.getElementById("#ansB").onclick = function () {
//         highScore--;
//         secLeft--;
//         hide();
//         Show2;
//     }
//     document.getElementById("#ansC").onclick = function () {
//         highScore--;
//         secLeft--;
//         hide();
//         Show2;
//     }
//     document.getElementById("#ansD").onclick = function () {
//         highScore--;
//         secLeft--;
//         hide();
//         Show2;
//     }
// }
// function ans2() {
//     document.getElementById("#ansA1").onclick = function () {
//         highScore++
//         secLeft--;
//         hide();
//         Show2;
//     }
//     document.getElementById("#ansB1").onclick = function () {
//         highScore--;
//         hide();
//         Show2;
//     }
//     document.getElementById("#ansC1").onclick = function () {
//         highScore--;
//         secLeft--;
//         hide();
//         Show2;
//     }
//     document.getElementById("#ansD1").onclick = function () {
//         highScore--;
//         secLeft--;
//         hide();
//         Show2;
//     }
// }
// function ans3() {
//     document.getElementById("#ansA2").onclick = function () {
//         highScore--;
//         secLeft--;
//         hide();
//         Show2;
//     }
//     document.getElementById("#ansB2").onclick = function () {
//         highScore--;
//         secLeft--;
//         hide();
//         Show2;
//     }
//     document.getElementById("#ansC2").onclick = function () {
//         highScore--;
//         secLeft--;
//         hide();
//         Show2;
//     }
//     document.getElementById("#ansD2").onclick = function () {
//         highScore++;
//         hide();
//         Show2;
//     }
// }
// function ans4() {
//     document.getElementById("#ansA3").onclick = function () {
//         highScore--;
//         secLeft--;
//         hide();
//         Show2;
//     }
//     document.getElementById("#ansB3").onclick = function () {
//         highScore++;
//         hide();
//         Show2;
//     }
//     document.getElementById("#ansC3").onclick = function () {
//         highScore--;
//         secLeft--;
//         hide();
//         Show2;
//     }
//     document.getElementById("#ansD3").onclick = function () {
//         highScore--;
//         secLeft--;
//         hide();
//         Show2;
//     }
// }
// function ans5() {
//     document.getElementById("#ansA4").onclick = function () {
//         highScore--;
//         secLeft--;
//         hide();
//         Show2;
//     }
//     document.getElementById("#ansB4").onclick = function () {
//         highScore--;
//         secLeft--;
//         hide();
//         Show2;
//     }
//     document.getElementById("#ansC4").onclick = function () {
//         highScore++;
//         hide();
//         Show2;
//     }
//     document.getElementById("#ansD4").onclick = function () {
//         highScore--;
//         secLeft--;
//         hide();
//         Show2;
//     }
// }
