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
        bal();
    }
    if (x != sorHossz - 1) {
        jobb();
    }
    if (y != 0) {
        fent()
    }
    if (y != sorHossz) {
        lent();
    }
    kattintottElem(n);
}


function fent() {

}

function lent() {

}

function bal() {

}

function jobb() {

}

function kattintottElem(index) {


}