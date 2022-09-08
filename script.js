/*window.addEventListener("load", init)*/

/*function init() {
    gombok()

}*/

let sorHossz;
let osztalyJelenleg;

$(function(){
    gombok()
})

function gombok() {

    $("#2").on("click", function () {
        palya(4, "x2")
        osztalyJelenleg = "x2";
        sorHossz = 2;
    })
    $("#3").on("click", function () {
        palya(9, "x3")
        osztalyJelenleg = "x3";
        sorHossz = 3;
    })
    $("#4").on("click", function () {
        palya(16, "x4")
        osztalyJelenleg = "x4";
        sorHossz = 4;
    })
    $("#5").on("click", function () {
        palya(25, "x5")
        osztalyJelenleg = "x5";
        sorHossz = 5;
    })

}

function palya(n, osztaly) {
    let txt = ""
    let zoldek = 0
    for (let index = 0; index < n; index++) {
        let random = Math.random()
        if (random <= 0.5 && zoldek < n / 2) {

            txt += `<div class="lampa ${index}" style="background-color: green;"></div>`
            zoldek += 1
        } else {
            txt += `<div class="lampa ${index}" style="background-color: red;"></div>`


        }

    }

    document.getElementById("jatek").innerHTML = `<div id="fotarolo" class="${osztaly}"></div>`
    document.getElementById("fotarolo").innerHTML = txt
    gombKatt()
}
//eseménykezelő a kattintásra, ellenőrzés h nyertünk-e 

function gombKatt() {

    let lampak = document.querySelectorAll(".lampa")

    for (let i = 0; i < lampak.length; i++) {

        lampak[i].addEventListener("click", hanyadikElem)
    }
}

function hanyadikElem() {
    let index = 0

    while (document.querySelectorAll(".lampa")[index] != event.target) {
        index++

    }
    let hanyadik = index

    valt(index)

}


function valt(n) { // a kattintott elem indexe 0-n ig

    let y = Math.floor(n / sorHossz);
    let x = n % sorHossz;
    szinValt(n);
    if (x != 0) {
        bal(n);


    }
    if (x != sorHossz - 1) {
        jobb(n);

    }
    if (y != 0) {
        fent(n)

    }
    if (y + 1 != sorHossz) {

        lent(n);

    }
    ellenorzes();

}


function fent(n) {
    szinValt(n - sorHossz);
    console.log("fent");
}

function lent(n) {
    szinValt(n + sorHossz);
    console.log("lent");
}

function bal(n) {
    szinValt(n - 1);
    console.log("bal");
}

function jobb(n) {
    szinValt(n + 1);
    console.log("jobb");
}


function szinValt(index) {

    let elem = $(".lampa")[index];
    console.log(elem);

    //let alapSzin = elem.css("background-color");
    let alapSzin = elem.style.backgroundColor;
    let szin = "red";
    if (alapSzin == "red") {

        szin = "green"
    }
    //elem.css("background-color", szin);
    elem.style.backgroundColor = szin

}

function ellenorzes() {
    let n = 0;
    let elemek = $(".lampa");
    while (n < elemek.length && (elemek[n].style.backgroundColor == "green")) {
        n++;
    }
    if (!(n < elemek.length)) {
        alert("Győztél");
        palya(sorHossz * sorHossz, osztalyJelenleg);
    }
}