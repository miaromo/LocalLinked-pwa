function changePage(page) {
    var browserZoomLevel = Math.round(window.devicePixelRatio);

    console.log(page);
    animateCircle();
    
    var title = document.getElementById("title");

    var newtitle = page.slice(0,-5);
    newtitle = toTitleCase(newtitle);
    title.innerHTML = newtitle;
    newtitle = "LocalLinked - " + newtitle;
    document.title = newtitle;
    
    var elements = document.querySelectorAll('.page');
    elements = [...elements];
    elements.forEach( div => {
        if(div.classList.contains("active") == true){
            div.classList.remove("active");
        }
    })
    
    console.log(elements);
    
    var active = document.getElementById(page);
    active.classList.add("active");
}

function toTitleCase(word) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}

function animateCircle(){
    circle = document.createElement("img");
    circle.id = "circle"; circle.src = "img/loadcircle.png";
    document.body.insertBefore(circle,document.body.childNodes[0]);
    circle = document.getElementById("circle");
    circle.classList.add('animate');
    $("#circle").css({
        left:`${xPercent}px`,
        top:`100%`,
    });
    setTimeout(findAnims, 2000);
}

function findAnims(){
    r.style.setProperty('--browser-scale', window.devicePixelRatio);

    var elements = document.getElementsByClassName("animate");
    elearray = Array.from(elements)
    elearray.forEach(stopCircle);
}

function stopCircle(){
    element = document.getElementById("circle");
    if(element != null){
        var scaleX = element.getBoundingClientRect().width / element.offsetWidth;
        console.log(scaleX);
        if(scaleX > 70){
            element.parentNode.removeChild(element);
        }
    }
}

$(document).mousemove(function(e) {
    xPercent = e.pageX;
});

setInterval(findAnims, 100);

var r = document.querySelector(':root');
r.style.setProperty('--browser-scale', window.devicePixelRatio);