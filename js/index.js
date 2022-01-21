
// ADDING ONCLICK EVENT LSITENER IN DRUM IMAGE:
var numberOfDrum = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfDrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var noOfButtons = this.innerHTML;
        makeSound(noOfButtons);
        buttonAnimation(noOfButtons);
    });

}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// ADDING KEYPRESS BUTTON EVENT LISTENERS IN DRUM IMAGE:
function makeSound(key) {
    switch (key) {
        case "w":
            var song1 = new Audio("sounds/tom-1.mp3");
            song1.play();
            break;

        case "a":
            var song2 = new Audio("sounds/tom-2.mp3");
            song2.play();
            break;

        case "s":
            var song3 = new Audio("sounds/tom-3.mp3");
            song3.play();
            break;

        case "d":
            var song4 = new Audio("sounds/tom-4.mp3");
            song4.play();
            break;

        case "j":
            var song5 = new Audio("sounds/kick-bass.mp3");
            song5.play();
            break;

        case "k":
            var song6 = new Audio("sounds/snare.mp3");
            song6.play();
            break;


        case "l":
            var song7 = new Audio("sounds/crash.mp3");
            song7.play();
            break;


        default: console.log(noOfButtons);


    }


}

// ADDING AND REMEOVING CLASSES IN DRUM IMAGE:
function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}


// DYNAMMIC YEAR USING JS:
const currentYear = document.getElementById("currentyear");
const year = new Date().getFullYear();
currentYear.innerText = year;