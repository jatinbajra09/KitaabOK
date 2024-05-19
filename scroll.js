// Function to scroll to the top of the page with smooth animation
function scrollToTop() {
  // Get the current scroll position
  var currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;

  // Calculate the scroll step
  var scrollStep = Math.floor(-currentScroll / 20);

  // Function to perform scrolling
  function scroll() {
    var currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(scroll);
      window.scrollTo(0, currentScroll + scrollStep);
    }
  }

  // Start scrolling
  scroll();
}

// Show or hide the scroll up button based on scroll position
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var scrollButton = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
    scrollButton.classList.add("animate"); // Add animation class
  } else {
    scrollButton.style.display = "none";
    scrollButton.classList.remove("animate"); // Remove animation class
  }
}
