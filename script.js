let sorHossz;
let osztalyJelenleg;
let felKapcsolva = "green";
let leKapcsolva = "yellow";

$(function () {
    gombok()
})

function gombok() {
    let lampakSzama;
    let gombok = $(".gomb")
    for (let i = 0; i < gombok.length; i++) {
        gombok[i].addEventListener("click", function () {
            lampakSzama = parseInt(gombok[i].id) * parseInt(gombok[i].id)
            osztalyJelenleg = `x${gombok[i].id}`
            palya(lampakSzama, osztalyJelenleg)
            sorHossz = parseInt(gombok[i].id);
        })
    }
}

function palya(n, osztaly) {
    let txt = ""
    let zoldek = 0
    for (let index = 0; index < n; index++) {
        let random = Math.random()
        if (random <= 0.5 && zoldek < n / 2) {
            txt += `<div class="lampa ${index}" style="background-color: ${felKapcsolva};"></div>`
            zoldek += 1
        } else {
            txt += `<div class="lampa ${index}" style="background-color: ${leKapcsolva};"></div>`
        }
    }
    $("#jatek").html(`<div id="fotarolo" class="${osztaly}"></div>`)
    $("#fotarolo").html(txt)
    gombKatt()
}
function gombKatt() {
    let lampak = $(".lampa")
    for (let i = 0; i < lampak.length; i++) {

        lampak[i].on("click", hanyadikElem)
    }
}

function hanyadikElem() {
    let index = 0
    while ($(".lampa")[index] != event.target) {
        index++
    }
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
}

function lent(n) {
    szinValt(n + sorHossz);
}

function bal(n) {
    szinValt(n - 1);
}

function jobb(n) {
    szinValt(n + 1);
}


function szinValt(index) {
    let elem = $(".lampa")[index];
    let alapSzin = elem.style.backgroundColor;
    let szin = leKapcsolva;
    
    if (alapSzin == leKapcsolva) {
        szin = felKapcsolva
    }
    elem.style.backgroundColor = szin

}

function ellenorzes() {
    let n = 0;
    let elemek = $(".lampa");
    while (n < elemek.length && (elemek[n].style.backgroundColor == felKapcsolva)) {
        n++;
    }
    if (!(n < elemek.length)) {
        alert("Győztél");
        palya(sorHossz * sorHossz, osztalyJelenleg);
    }
}