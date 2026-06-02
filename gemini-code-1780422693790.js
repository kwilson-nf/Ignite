document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.article-section');
  const navLinks = document.querySelectorAll('.toc a');

  // Set up the intersection observer to watch when sections scroll into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        
        // Remove active styling from all sidebar links
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Add active styling to the link that matches the current section
        const id = entry.target.getAttribute('id');
        const activeLink = document.querySelector(`.toc a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }, { rootMargin: '-20% 0px -60% 0px' }); // Triggers when section hits the upper middle of the screen

  // Tell the observer to watch every article section
  sections.forEach(section => {
    observer.observe(section);
  });
});