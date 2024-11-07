let lastScrollTop = 0;
const depthMetre = document.getElementById("depth-meter")
let depth = 0;


$(document.body).on('touchmove', onScroll); // for mobile
$(window).on('scroll', onScroll); 

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
function onScroll() {
  // works for height 637 and width 708 (tested height)
  height = $(window).height()
  scaleFactor = height / 637
  // get the scale factor and then multiply by that scale factor
  depth = Math.min(Math.max(parseInt(((window.scrollY / 7) - 5)  / scaleFactor ),0),2140)
  if (depthMetre !== null) {
    depthMetre.innerHTML = `${depth} metres`
  }
}

const dialog = document.querySelector('.dialog-scrolling');
const openButton = dialog.nextElementSibling;
const closeButton = dialog.querySelector('sl-button[slot="footer"]');

openButton.addEventListener('click', () => dialog.show());
closeButton.addEventListener('click', () => dialog.hide());

// Todo - detect mobile

// window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
//   //  let st = document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//   depth = Math.max(parseInt((window.scrollY / 15)),0)
//   //  if (st > 0 && st < 100) {
//   //   depth = 0
//   //  }
//   //  console.log(window.scrollY)
//   //  if (st > lastScrollTop) {
//   //       // downscroll code
//   //       depth += 2;
//   //  } else if (st < lastScrollTop) {
//   //       // upscroll code
//   //       if (depth > 0) {
//   //         depth -= 2;
//   //       }
//   //  } // else was horizontal scroll
//     //  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
//    if (depthMetre !== null) {
//      depthMetre.innerHTML = `${depth} metres`
//    }
// });
