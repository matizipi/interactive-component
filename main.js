var boton1 = document.getElementById("r1");
var boton2 = document.getElementById("r2");
var boton3 = document.getElementById("r3");
var boton4 = document.getElementById("r4");
var boton5 = document.getElementById("r5");

var botonSent = document.getElementById("submit");

var headerWindow = document.getElementById("header");
var cheersWindow = document.getElementById("cheers");

var numArray = [];

botonSent.addEventListener("click", function(){
    if(numArray.length === 0){
        alert("You must select one number from the list");
    }else{
        cheersWindow.style.display = "flex";
        headerWindow.style.display = "none";
        const text = document.createTextNode(numArray.pop());
        document.getElementById("num-selection").appendChild(text);
    }
    
});



boton1.addEventListener("click", function(){
    boton1.style.backgroundColor = "hsl(217, 12%, 63%)";
    boton1.style.color = "white";
    numArray.push(1);
});

boton2.addEventListener("click", function(){
    boton2.style.backgroundColor = "hsl(217, 12%, 63%)";
    boton2.style.color = "white";
    numArray.push(2);
});

boton3.addEventListener("click", function(){
    boton3.style.backgroundColor = "hsl(217, 12%, 63%)";
    boton3.style.color = "white";
    numArray.push(3);
});

boton4.addEventListener("click", function(){
    boton4.style.backgroundColor = "hsl(217, 12%, 63%)";
    boton4.style.color = "white";
    numArray.push(4);
});

boton5.addEventListener("click", function(){
    boton5.style.backgroundColor = "hsl(217, 12%, 63%)";
    boton5.style.color = "white";
    numArray.push(5);
});

function setColorInit(b1, b2, b3, b4){
    b1.style.backgroundColor = "hsl(214, 19%, 25%)";
    b1.style.color = "hsl(217, 12%, 63%)";

    b2.style.backgroundColor = "hsl(214, 19%, 25%)";
    b2.style.color = "hsl(217, 12%, 63%)";

    b3.style.backgroundColor = "hsl(214, 19%, 25%)";
    b3.style.color = "hsl(217, 12%, 63%)";

    b4.style.backgroundColor = "hsl(214, 19%, 25%)";
    b4.style.color = "hsl(217, 12%, 63%)";
}

