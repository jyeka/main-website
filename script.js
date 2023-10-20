
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

