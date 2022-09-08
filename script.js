window.addEventListener("load", init)

function init() {
    gombok()
}

function gombok() {
    console.log("halo");
    document.getElementById("2").addEventListener("click", function() {
        palya(4)
    })
    document.getElementById("3").addEventListener("click", function() {
        palya(9)
    })
    document.getElementById("4").addEventListener("click", function() {
        palya(16)
    })
    document.getElementById("5").addEventListener("click", function() {
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