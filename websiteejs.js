const carousel = document.querySelector(".image-carousel")
let scrollAmount = 0
const speed = 1 // Adjust scroll speed

function autoScroll() {
  scrollAmount += speed
  carousel.scrollLeft = scrollAmount

  // Check if we've reached the end, then smoothly reset
  if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
    scrollAmount = 0
  }

  requestAnimationFrame(autoScroll)
}

// Start the scrolling loop
autoScroll()
