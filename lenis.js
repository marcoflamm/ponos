document.addEventListener("DOMContentLoaded", function () {
  let lenis;
  if (Webflow.env("editor") === undefined) {
    lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 0.7,
      gestureOrientation: "vertical",
      normalizeWheel: false,
      smoothTouch: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // Start button
  document.querySelectorAll("[data-lenis-start]").forEach(button => {
    button.addEventListener("click", function () {
      lenis.start();
    });
  });

  // Stop button
  document.querySelectorAll("[data-lenis-stop]").forEach(button => {
    button.addEventListener("click", function () {
      lenis.stop();
    });
  });

  // Toggle button
  document.querySelectorAll("[data-lenis-toggle]").forEach(button => {
    button.addEventListener("click", function () {
      this.classList.toggle("stop-scroll");
      if (this.classList.contains("stop-scroll")) {
        lenis.stop();
      } else {
        lenis.start();
      }
    });
  });
});
