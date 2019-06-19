//console.log("Hello " + firstName);
console.log("javascript linked up");

// run a function of load 
// then after the content is loaded, do something.
window.addEventListener("load", () => {
    //select all the sound divs
    const sounds = document.querySelectorAll(".sound");
    // now select all the div in the pads
    const pads = document.querySelectorAll(".pads, div");
    const visual = document.querySelector('.visual');
    const colors = [
        " #60d394;",
        " #d36060;",
        " #c060d3;",
        " #d3d160;",
        " #606bd3;",
        " #60c2d3;",
    ];


// let's get going with all the sound!!!
pads.forEach((pad, index) => {
    pad.addEventListener("click", function(){
        // currentTime resets the sound after each click
        sounds[index].currentTime = 0;
        // Play the sound when press event happens
        sounds[index].play();
        createBubbles(index);
        });
    });
    // create a function that makes the bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        // add all the bubbles in here
        // attach the bubble function to the div 
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';

    }
});

