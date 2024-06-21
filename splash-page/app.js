// DOMContentLoaded event gets executed once the basic HTML document is loaded and its parsing has taken place.
// This event doesn’t wait for the completion of the loading of add-ons such as stylesheets, sub-frames and images/pictures.

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("preloader").style.display = "none";
    setTimeout(function () {
      document.getElementById("splash").style.display = "none";
      document.getElementById("content").style.display = "block";
      addLiveAnimations();
    }, 3000);
  }, 1000);
});
