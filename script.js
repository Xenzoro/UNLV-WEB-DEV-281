/* ========================================
   CARD INTERACTION SCRIPT

   Desktop: CSS hover reveals details (no JS needed)
   Mobile: Tap to toggle 'is-open' class
           Only one card open at a time
           Tap outside closes any open card
   ======================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

  // Select all timeline cards
  const cards = document.querySelectorAll('.timeline-card');
  const timelineContainer = document.querySelector('.timeline-container');
  const progressBar = document.getElementById('timelineProgress');

  /* ========================================
     SCROLL PROGRESS INDICATOR
     Updates progress bar based on horizontal scroll
     ======================================== */

  function updateProgressBar() {
    // Only update on desktop (>768px) where horizontal scroll exists
    if (window.innerWidth > 768 && timelineContainer && progressBar) {
      // Get scroll position and dimensions
      const scrollLeft = timelineContainer.scrollLeft;
      const scrollWidth = timelineContainer.scrollWidth;
      const clientWidth = timelineContainer.clientWidth;

      // Calculate max scrollable distance
      const maxScroll = scrollWidth - clientWidth;

      // Calculate progress percentage (0-100)
      const scrollPercentage = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;

      // Update progress bar width
      progressBar.style.width = scrollPercentage + '%';
    }
  }

  // Update progress on scroll
  if (timelineContainer) {
    timelineContainer.addEventListener('scroll', updateProgressBar);
  }

  // Update progress on window resize
  window.addEventListener('resize', function() {
    updateProgressBar();
  });

  // Initialize progress bar on load
  updateProgressBar();

  /* ========================================
     MOBILE CARD TOGGLE INTERACTION
     ======================================== */

  // Add click/tap event listener to each card
  cards.forEach(card => {
    card.addEventListener('click', function(event) {

      // Only activate toggle behavior on mobile (width <= 768px)
      if (window.innerWidth <= 768) {
        // Prevent event from bubbling to document
        event.stopPropagation();

        // Check if this card is already open
        const isCurrentlyOpen = this.classList.contains('is-open');

        // Close all other cards first (only one open at a time)
        cards.forEach(otherCard => {
          otherCard.classList.remove('is-open');
        });

        // Toggle current card (if it was closed, open it; if open, close it)
        if (!isCurrentlyOpen) {
          this.classList.add('is-open');
        }
      }
    });
  });

  // Click/tap outside cards to close any open card (mobile only)
  document.addEventListener('click', function(event) {

    // Only on mobile devices
    if (window.innerWidth <= 768) {

      // Check if click is outside all cards
      const clickedInsideCard = event.target.closest('.timeline-card');

      if (!clickedInsideCard) {
        // Close all cards when clicking outside
        cards.forEach(card => {
          card.classList.remove('is-open');
        });
      }
    }
  });

  // Handle window resize - clean up open states when switching to desktop
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {

      // Remove all open states if viewport becomes desktop size
      // Desktop uses CSS hover only
      if (window.innerWidth > 768) {
        cards.forEach(card => {
          card.classList.remove('is-open');
        });
      }

    }, 250); // Debounce resize events
  });

});

/* ========================================
   KEYBOARD NAVIGATION (Optional)

   Arrow keys for horizontal scrolling on desktop
   ======================================== */
document.addEventListener('keydown', function(e) {

  // Only on desktop viewport
  if (window.innerWidth > 768) {
    const container = document.querySelector('.timeline-container');
    const scrollAmount = 340; // Card width + gap

    // Right arrow key - scroll right
    if (e.key === 'ArrowRight') {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }

    // Left arrow key - scroll left
    if (e.key === 'ArrowLeft') {
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  }
});
