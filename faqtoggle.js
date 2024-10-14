document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".faq_toggle");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", function () {
      // Close other accordions when opening a new one
      if (!this.classList.contains("open")) {
        document.querySelectorAll(".faq_toggle.open").forEach(openToggle => {
          openToggle.click();
        });
      }

      // Save the sibling of the toggle we clicked on
      const sibling = this.nextElementSibling; // Assuming the structure is <toggle> <content>
      const animationDuration = 400;

      if (this.classList.contains("open")) {
        // Close the content div if already open
        sibling.style.transition = `height ${animationDuration}ms`;
        sibling.style.height = "0px";
      } else {
        // Open the content div if already closed
        sibling.style.height = "auto";
        const autoHeight = sibling.offsetHeight; // Get the auto height
        sibling.style.height = "0px";
        
        // Use a timeout to trigger the transition after setting height to 0
        setTimeout(() => {
          sibling.style.transition = `height ${animationDuration}ms`;
          sibling.style.height = `${autoHeight}px`;
        }, 10); // Small timeout to ensure the height is set before animating

        // Reset height to auto after the animation ends
        sibling.addEventListener('transitionend', function() {
          sibling.style.height = "auto";
        }, { once: true }); // Use { once: true } to ensure it runs only once
      }

      // Open and close the toggle div
      this.classList.toggle("open");
    });
  });
});
