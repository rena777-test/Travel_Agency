window.onload = init;

/* let classMap = function (selector) {
    return document.getElementsByClassName(selector);
}

let $= function(id){
    return document.getElementById(id);
} */

function init(){
    document.addEventListener("click",function(event){
        let id = event.target.dataset.toggleId;
        if(!id)return;

        let elem = document.getElementById(id);
        elem.hidden = !elem.hidden;
    });
}

/* function init() {
    hideTheMap();

    $("btn-one").onclick = showTheMap;
    $("btn-two").onclick = showTheMap;
    $("btn-three").onclick = showTheMap;
    $("btn-four").onclick = showTheMap;
}

function hideTheMap() {

    let map = classMap("map");
    console.log(map);

    for (let i = 0; i < map.length; i++) {
        map[i].style.visibility = "hidden";
    }
}

function showTheMap(idEl){
    console.log(idEl.target.);
        idEl.target.style.visibility = "visible";
      /*   preventDefault();
        $("hotel-two-map").style.visibility = "visible";
        $("hotel-three-map").style.visibility = "visible";
        $("hotel-four-map").style.visibility = "visible"; */





















