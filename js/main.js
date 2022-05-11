const navbar = document.getElementById('animationLeft')

// OnScroll event handler
const onScroll = () => {

  // Get scroll value
  const scroll = document.documentElement.scrollTop

  // If scroll value is more than 0 - add class
  if (scroll > 100) {
    navbar.classList.add("animate__fadeInUp");
  } else {
    navbar.classList.remove("animate__fadeInUp")
  }
}

// Use the function
window.addEventListener('scroll', onScroll)