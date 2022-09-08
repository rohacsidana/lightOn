window.addEventListener("load", init)
let sorHossz;
let osztalyJelenleg;
function init() {
    gombok()

}


function gombok() {
    
    document.getElementById("2").addEventListener("click", function () {
        palya(4, "x2")
        osztalyJelenleg = "x2";
        sorHossz = 2;
    })
    document.getElementById("3").addEventListener("click", function () {
        palya(9, "x3")
        osztalyJelenleg = "x3";
        sorHossz = 3;
    })
    document.getElementById("4").addEventListener("click", function () {
        palya(16, "x4")
        osztalyJelenleg = "x4";
        sorHossz = 4;
    })
    document.getElementById("5").addEventListener("click", function () {
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
    if (y+1 != sorHossz) {
    
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
    let elemek =  $(".lampa");
    while(n < elemek.length && (elemek[n].style.backgroundColor == "green")){
        n++;
    }
    if(!(n < elemek.length)){
        alert("Győztél");
        palya(sorHossz*sorHossz , osztalyJelenleg);
    }
}