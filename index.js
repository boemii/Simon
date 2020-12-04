let buttonColour = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let level = 0;
let started = false


function nextSequence(){
userClickedPattern=[]
let randomNumber = Math.floor(Math.random() *4);
let randomChosenColour = buttonColour[randomNumber];
gamePattern.push(randomChosenColour);
$("#" + randomChosenColour).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
level ++;
$("h1").html("level "+level);


// let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
// audio.play();
}

$(".btn").click(function(){
    let userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length-1)
    playSound(userChosenColour)
    animatePress(userChosenColour)
});

function startOver(){
    started = false;
    level = 0;
    gamePattern = [];
}

function playSound(name){
    let audio = new Audio("sounds/"+ name + ".mp3")
    audio.play()
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed")
    },100)
}

$(document).keydown(function(){
    if (started === false){
        $("#level-title").html("Level "+ level)
        nextSequence()
        
        started = true;
    }
    
})

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log("succes")
        if (gamePattern.length === userClickedPattern.length){
            setTimeout(function(){
                nextSequence();
            },1000)
        }
    }
    else {
        playSound("wrong")
    $("body").addClass("game-over")
    setTimeout(function(){
        $("body").removeClass("game-over")
    },500)
    $("#level-title").html("Game Over, Press Any Key to Restart");
    startOver()
    }

}

function startOver(){
    started = false;
    level = 0;
    gamePattern = [];
}
    






