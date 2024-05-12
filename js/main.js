
function changePage(page) {
    console.log(page);
    circle = document.createElement("img");
    circle.id = "circle"; circle.src = "img/loadcircle.png";
    document.body.insertBefore(circle,document.body.childNodes[0]);
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
    circle = document.getElementById("circle");
    active.classList.add("active");
    circle.classList.add('animate');
    $("#circle").css({
        left:`${xPercent}px`,
        top:`100%`,
    });
    window.setTimeout( stopAnimate, 2000 );
}

function toTitleCase(word) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
 }

 function stopAnimate() {
    if(document.getElementById("circle") != null){
        var element = document.getElementById("circle");
        var scaleX = element.getBoundingClientRect().width / element.offsetWidth;
        if(scaleX > 70) {
            element.parentNode.removeChild(element);
        }
        ani = document.getElementsByClassName("animate");
    }
    while (true){
        stopAnimate();
    }
    // while(ani[0]){
    //     var element = document.getElementById("circle");
    //     var scaleX = element.getBoundingClientRect().width / element.offsetWidth;
    //     console.log(scaleX);
    //     if(scaleX > 1500) {
    //         ani[0].parentNode.removeChild(ani[0]);
    //     }
    // }
 }

 $(document).mousemove(function(e) {
    xPercent = e.pageX;
  });