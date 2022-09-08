let sorHossz = 3;
function valt(n){ // a kattintott elem indexe 0-n ig
    let y= floor(n/sorHossz);
    let x= n % sorHossz;

    if(x != 0){
        bal();
    }
    if(x != sorHossz-1){
        jobb();
    }
    if(y != 0){
        fent()
    }
    if(y != sorHossz){
        lent();
    }
    kattintottElem(n);
}


function fent(){

}

function lent(){

}

function bal(){

}

function jobb(){

}

function kattintottElem(index){

}