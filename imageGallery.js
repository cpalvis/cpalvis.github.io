const gallery = document.getElementById('autoGallery');
const scrollSpeed = 5000; // Time per slide in milliseconds (3 seconds)
let scrollInterval;

function startAutoScroll() {
  scrollInterval = setInterval(() => {
    const slideWidth = gallery.clientWidth;
    const maxScrollLeft = gallery.scrollWidth - slideWidth;

    // If we're at the end of the gallery, loop back to the first image
    if (gallery.scrollLeft >= maxScrollLeft - 5) { // -5 handles minor browser rounding errors
      gallery.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      // Otherwise, advance by exactly one slide width
      gallery.scrollBy({ left: slideWidth, behavior: 'smooth' });
    }
  }, scrollSpeed);
}

function stopAutoScroll() {
  clearInterval(scrollInterval);
}

// Start the timer on page load
startAutoScroll();

// Smart UX Feature: Pause scrolling if a mobile user touches/swipes manually
gallery.addEventListener('touchstart', stopAutoScroll);
gallery.addEventListener('touchend', startAutoScroll);