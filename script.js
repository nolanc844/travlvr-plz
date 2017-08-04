function changeToBeach1() {
    var beachChange = document.getElementById("background");
    beachChange.setAttribute("color", "");
    beachChange.setAttribute("src", "#isla");
    var homeToPlace = document.getElementById("homePage")
    homeToPlace.setAttribute("visible", "false")
    var beachCommands1 = document.getElementById("beach1")
    beachCommands1.setAttribute("visible", "true")
}

function nextBeach1() {
    var changebeach1 = document.getElementById("background");
     changebeach1.setAttribute("color", "");
    changebeach1.setAttribute("src", "#hanola")
   

    var beachCommands2 = document.getElementById("beach2")
    beachCommands2.setAttribute("visible", "true")
    var beachCommands1 = document.getElementById("beach1")
    beachCommands1.setAttribute("visible", "false")
}

function nextBeach2() {
    var changebeach2 = document.getElementById("background");
        changebeach2.setAttribute("color", "");
    changebeach2.setAttribute("src", "#rockaway")


    var beachCommands3 = document.getElementById("beach3")
    beachCommands3.setAttribute("visible", "true")
    var beachCommands2 = document.getElementById("beach2")
    beachCommands2.setAttribute("visible", "false")
}

function nextBeach3() {
    var changeBeach3 = document.getElementById("background")
        changeBeach3.setAttribute("color", "");
    changeBeach3.setAttribute("src", "#miami")


    var beachCommands4 = document.getElementById("beach4")
    beachCommands4.setAttribute("visible", "true")
    var beachCommands3 = document.getElementById("beach3")
    beachCommands3.setAttribute("visible", "false")
}

function nextBeach4() {
    var changeBeach4 = document.getElementById("background")
        changeBeach4.setAttribute("color", "");
    changeBeach4.setAttribute("src", "#isla")


    var beachCommands5 = document.getElementById("beach5")
    beachCommands5.setAttribute("visible", "true")
    var beachCommands4 = document.getElementById("beach4")
    beachCommands4.setAttribute("visible", "false")
}

function changeToMonuments() {
    var monumentChange = document.getElementById("background");
    monumentChange.setAttribute("src", "#petra");
    monumentChange.setAttribute("color", "");
    var homeToPlace = document.getElementById("homePage")
    homeToPlace.setAttribute("visible", "false")
    var monumentCommands1 = document.getElementById("monument1")
    monumentCommands1.setAttribute("visible", "true")
}

function nextMonument1() {
    var changeMonument1 = document.getElementById("background");
    changeMonument1.setAttribute("src", "#911");
    changeMonument1.setAttribute("color", "")
    var monumentCommands2= document.getElementById("monument2")
    monumentCommands2.setAttribute("visible", "true")
    var monumentCommands1 = document.getElementById("monument1")
    monumentCommands1.setAttribute("visible", "false")
    // monumentCommands1.setAttribute("position", "0 0 5")
   console.log("why does this not work")
}

÷

function placeToHome(){
    var backgroundChange = document.getElementById("background");
    backgroundChange.setAttribute("src", "");
    backgroundChange.setAttribute("color", "black")
    var placeChange = document.getElementById("changeToBeach2");
    placeChange.setAttribute("visible", "false");
    var backToHome = document.getElementById("backToHome");
    backToHome.setAttribute("visible", "false");
    var homeToPlace = document.getElementById("homePage")
    homeToPlace.setAttribute("visible", "true")
}