window.addEventListener("load", init)

function init() {
    gombok()
}


function gombok() {
    console.log("szia :)");
    document.getElementById("2").addEventListener("click", function () {
        palya(4, "x2")
    })
    document.getElementById("3").addEventListener("click", function () {
        palya(9, "x3")
    })
    document.getElementById("4").addEventListener("click", function () {
        palya(16, "x4")
    })
    document.getElementById("5").addEventListener("click", function () {
        palya(25, "x5")
    })

}

function palya(n, osztaly) {
    let txt = ""
    let zoldek = 0
    for (let index = 0; index < n; index++) {
        let random = Math.random()
        if (random <= 0.5 && zoldek < n / 2) {
            txt += `<div class="lampa" style="background-color: green;"></div>`
            zoldek += 1
        } else {
            txt += `<div class="lampa" style="background-color: red;"></div>`

        }

    }

    document.getElementById("jatek").innerHTML = `<div id="fotarolo" class="${osztaly}"></div>`
    document.getElementById("fotarolo").innerHTML = txt
    randomFel(n)
}

function randomFel(n) {

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
    szinValt(n);
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