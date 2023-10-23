
let elms = document.getElementsByClassName("navigation");

function show() {
    let width = window.innerWidth;
    Array.from(elms).forEach((x) => {
      if(width < 1000) {
        x.style.width = "100%"
      } else
      {
        x.style.width = "250px"
      }

})
}
function hide() {
  Array.from(elms).forEach((x) => {
            x.style.width = "0%"
})
}

/* Przeciaganie */
// const dragStart = (e) => {
//     isDragging = true;
//     carousel.classList.add("dragging");
//     startX = e.pageX;
//     startScrollLeft = carousel.scrollLeft;
// }

// const dragStop = () => {
//     isDragging = false;
//     carousel.classList.remove("dragging");
// }

// const dragging = (e) => {
//     if(!isDragging) return;
//     carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
// }
// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);

(function () {
    function scrollHorizontally(f) {

        f = window.event || f;
        var delta = Math.max(-1, Math.min(1, (f.wheelDelta || -f.detail)));
        document.getElementById('sponsorsSlider').scrollLeft -= (delta * 400); // Multiplied by 40
        f.preventDefault();
    }

    if (document.getElementById('sponsorsSlider').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('sponsorsSlider').addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.getElementById('sponsorsSlider').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('sponsorsSlider').attachEvent("onmousewheel", scrollHorizontally);
    }
})();