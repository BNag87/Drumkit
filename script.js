let keyPressA = document.getElementById("keyA");
let keyPressS = document.getElementById("keyS");
let keyPressD = document.getElementById("keyD");
let keyPressF = document.getElementById("keyF");
let keyPressG = document.getElementById("keyG");
let keyPressH = document.getElementById("keyH");
let keyPressJ = document.getElementById("keyJ");
let keyPressK = document.getElementById("keyK");
let keyPressL = document.getElementById("keyL");

const keys = [keyPressA,keyPressS,keyPressD,keyPressF,keyPressG,keyPressH,keyPressJ,keyPressK,keyPressL];

let iconA = document.getElementById("aKey");
let iconS = document.getElementById("sKey");
let iconD = document.getElementById("dKey");
let iconF = document.getElementById("fKey");
let iconG = document.getElementById("gKey");
let iconH = document.getElementById("hKey");
let iconJ = document.getElementById("jKey");
let iconK = document.getElementById("kKey");
let iconL = document.getElementById("lKey");

const icons = [iconA,iconS,iconD,iconF,iconG,iconH,iconJ,iconK,iconL];

let wav_boom = new Audio('sounds/boom.wav');
let wav_clap = new Audio('sounds/clap.wav');
let wav_hihat = new Audio('sounds/hihat.wav');
let wav_kick = new Audio('sounds/kick.wav');
let wav_openhat = new Audio('sounds/openhat.wav');
let wav_ride = new Audio('sounds/ride.wav');
let wav_snare = new Audio('sounds/snare.wav');
let wav_tink = new Audio('sounds/tink.wav');
let wav_tom = new Audio('sounds/openhat.wav');

const wavs = [wav_boom, wav_clap, wav_hihat, wav_kick, wav_openhat, wav_ride, wav_snare, wav_tink, wav_tom];

for(let i = 0; i < ((keys.length)); i++)
{
    
    // console.log("i before anything is: "+i);
    // console.log("keys array, before anything, is: "+keys+". \n\tits length, from 0, is: "+(keys.length-1));
    // console.log("icons array, before anything, is: "+icons);
    // console.log("wavs array, before anything, is: "+wavs);
    
    keys[i].addEventListener('mousedown', () =>{
        console.log("inside the function of the loop!");
        console.log("index i: "+i);
        // wavs[i].loop=false;
        wavs[i].play();
        keys[i].style.background = "rgb(100,20,20)";
        keys[i].style.boxShadow = "0px 0px rgb(100,20,20)";
        icons[i].style.background = "rgb(17,49,49)";
    })
}

for(let i = 0; i < keys.length; i++){
    keys[i].addEventListener('mouseup', () =>{
        wavs[i].pause();
        wavs[i].currentTime = 0;
        keys[i].style.backgroundColor = "rgb(128,0,0)";
        keys[i].style.boxShadow = "3px 3px rgba(255,255,255,0.7)";
        icons[i].style.background = "rgb(47,79,79)";
    })
}

// Function to listen for keyboard presses
document.addEventListener('keydown', (event) =>{

    let keyPressA = document.getElementById("keyA")
    let keyPressS = document.getElementById("keyS")
    let keyPressD = document.getElementById("keyD")
    let keyPressF = document.getElementById("keyF")
    let keyPressG = document.getElementById("keyG")
    let keyPressH = document.getElementById("keyH")
    let keyPressJ = document.getElementById("keyJ")
    let keyPressK = document.getElementById("keyK")
    let keyPressL = document.getElementById("keyL")

    let iconA = document.getElementById("aKey")
    let iconS = document.getElementById("sKey")
    let iconD = document.getElementById("dKey")
    let iconF = document.getElementById("fKey")
    let iconG = document.getElementById("gKey")
    let iconH = document.getElementById("hKey")
    let iconJ = document.getElementById("jKey")
    let iconK = document.getElementById("kKey")
    let iconL = document.getElementById("lKey")

    // console.log("Key pressed was: "+event.key)

    switch(event.key){
    case "a":
        // console.log("The A key was pressed! Play something");
        wav_boom.loop = false;
        wav_boom.play();
        keyPressA.style.background = "rgb(100,20,20)";
        iconA.style.background = "rgb(17,49,49)";

        break;
    case "s":
        // console.log("The S key was pressed! Play something");
        wav_clap.loop = false;
        wav_clap.play();
        keyPressS.style.background = "rgb(100,20,20)";
        iconS.style.background = "rgb(17,49,49)";
        break;
    case "d":
        // console.log("The D key was pressed! Play something");
        wav_hihat.loop = false;
        wav_hihat.play();
        keyPressD.style.background = "rgb(100,20,20)";
        iconD.style.background = "rgb(17,49,49)";
        break;
    case "f":
        // console.log("The F key was pressed! Play something");
        keyPressF.style.background = "rgb(100,20,20)";
        iconF.style.background = "rgb(17,49,49)";
        wav_kick.loop = false;
        wav_kick.play();
        break;
    case "g":
        // console.log("The G key was pressed! Play something");
        wav_openhat.loop = false;
        wav_openhat.play();
        keyPressG.style.background = "rgb(100,20,20)";
        iconG.style.background = "rgb(17,49,49)";
        break;
    case "h":
        // console.log("The H key was pressed! Play something")
        wav_ride.loop = false;
        wav_ride.play();
        keyPressH.style.background = "rgb(100,20,20)";
        iconH.style.background = "rgb(17,49,49)";
        break;
    case "j":
        // console.log("The J key was pressed! Play something")
        wav_snare.loop = false;
        wav_snare.play();
        keyPressJ.style.background = "rgb(100,20,20)";
        iconJ.style.background = "rgb(17,49,49)";
        break;
    case "k":
        // console.log("The K key was pressed! Play something")
        wav_tink.loop = false;
        wav_tink.play();
        keyPressK.style.background = "rgb(100,20,20)";
        iconK.style.background = "rgb(17,49,49)";
        break;
    case "l":
        // console.log("The L key was pressed! Play something")
        wav_tom.loop = false;
        wav_tom.play();
        keyPressL.style.backgroundColor = "rgb(100,20,20)";
        iconL.style.background = "rgb(17,49,49)";
        break;
    default:
        console.log("Abandon hope. Something unrelated was pressed.")
    }

})

// function to stop audio when key is released and set it to 0. stops audio bleeding
document.addEventListener('keyup', (event) =>{
    let keyPressA = document.getElementById("keyA")
let keyPressS = document.getElementById("keyS")
let keyPressD = document.getElementById("keyD")
let keyPressF = document.getElementById("keyF")
let keyPressG = document.getElementById("keyG")
let keyPressH = document.getElementById("keyH")
let keyPressJ = document.getElementById("keyJ")
let keyPressK = document.getElementById("keyK")
let keyPressL = document.getElementById("keyL")

let iconA = document.getElementById("aKey")
let iconS = document.getElementById("sKey")
let iconD = document.getElementById("dKey")
let iconF = document.getElementById("fKey")
let iconG = document.getElementById("gKey")
let iconH = document.getElementById("hKey")
let iconJ = document.getElementById("jKey")
let iconK = document.getElementById("kKey")
let iconL = document.getElementById("lKey")

    switch(event.key){
        
    case "a":
        // console.log("The A key was released! Stop playing something");
        wav_boom.pause();
        wav_boom.currentTime = 0;
        keyPressA.style.backgroundColor = "rgb(128,0,0)";
        iconA.style.background = "rgb(47,79,79)";
        break;
    case "s":
        // console.log("The S key was released! Stop playing something");
        wav_clap.pause();
        wav_clap.currentTime = 0;
        keyPressS.style.backgroundColor = "rgb(128,0,0)";
        iconS.style.background = "rgb(47,79,79)";
        break;
    case "d":
        // console.log("The D key was released! Stop playing something");
        wav_hihat.pause();
        wav_hihat.currentTime = 0;
        keyPressD.style.backgroundColor = "rgb(128,0,0)";
        iconD.style.background = "rgb(47,79,79)";
        break;
    case "f":
        // console.log("The F key was released! Stop playing something");
        wav_kick.pause();
        wav_kick.currentTime = 0;
        keyPressF.style.backgroundColor = "rgb(128,0,0)";
        iconF.style.background = "rgb(47,79,79)";
        break;
    case "g":
        // console.log("The G key was released! Stop playing something");
        wav_openhat.pause();
        wav_openhat.currentTime = 0;
        keyPressG.style.backgroundColor = "rgb(128,0,0)";
        iconG.style.background = "rgb(47,79,79)";
        break;
    case "h":
        // console.log("The H key was released! Stop playing something")
        wav_ride.pause;
        wav_ride.currentTime = 0;
        keyPressH.style.backgroundColor = "rgb(128,0,0)";
        iconH.style.background = "rgb(47,79,79)";
        break;
    case "j":
        // console.log("The J key was released! Stop playing something")
        wav_snare.pause();
        wav_snare.currentTime=0;
        keyPressJ.style.backgroundColor = "rgb(128,0,0)";
        iconJ.style.background = "rgb(47,79,79)";
        break;
    case "k":
        // console.log("The K key was released! Stop playing something")
        wav_tink.pause();
        wav_tink.currentTime=0;
        keyPressK.style.backgroundColor = "rgb(128,0,0)";
        iconK.style.background = "rgb(47,79,79)";
        break;
    case "l":
        // console.log("The L key was released! Stop playing something")
        wav_tom.pause();
        wav_tom.currentTime = 0;
        keyPressL.style.backgroundColor = "rgb(128,0,0)";
        iconL.style.background = "rgb(47,79,79)";
        break;
    default:
        console.log("Abandon hope. Something unrelated was pressed.")
    }

})