window.addEventListener("load", init)

function init() {
    gombok()
}

function gombok() {
    console.log("halo");
    document.getElementById("2").addEventListener("click", function () {
        palya(4)
    })
    document.getElementById("3").addEventListener("click", function () {
        palya(9)
    })
    document.getElementById("4").addEventListener("click", function () {
        palya(16)
    })
    document.getElementById("5").addEventListener("click", function () {
        palya(25)
    })

}

function palya(n) {
    let txt = ""
    for (let index = 0; index < n; index++) {
        txt += `<div class="lampa"></div>`

    }

    document.getElementById("fotarolo").innerHTML = txt
}

let sorHossz;
function valt(n) { // a kattintott elem indexe 0-n ig
    let y = floor(n / sorHossz);
    let x = n % sorHossz;

    if (x != 0) {
        bal(n);
    }
    if (x != sorHossz - 1) {
        jobb(n);
    }
    if (y != 0) {
        fent(n)
    }
    if (y != sorHossz) {
        lent(n);
    }
    kattintottElem(n);
}


function fent(n) {
    szinValt(n-sorHossz);
}

function lent(n) {
    szinValt(n+sorHossz);
}

function bal(n) {
    szinValt(n-1);
}

function jobb(n) {
    szinValt(n+1);
}


function szinValt(index){
    let elem = $("#fotarolo")[index];
    let alapSzin = elem.css("background-color");
    let szin = "red";
    if(alapSzin == "red"){
        szin = "green"
    }
    elem.css("background-color", szin);

}