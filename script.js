document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for fixed header if any
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple alert when "Explore Now" button is clicked
    const exploreButton = document.getElementById('exploreButton');
    if (exploreButton) {
        exploreButton.addEventListener('click', () => {
            alert('Bem-vindo ao mundo mágico da Disney!');
            // You could also scroll to a section, e.g.,
            // document.getElementById('movies').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Example of a simple hover effect for movie cards (can be done with CSS too)
    document.querySelectorAll('.movie-card').forEach(card => {
        card.addEventListener('mouseover', () => {
            console.log('Mouse over movie card!');
            // You could add a class here to trigger a CSS animation
            // card.classList.add('hover-effect');
        });
        card.addEventListener('mouseout', () => {
            console.log('Mouse out of movie card!');
            // card.classList.remove('hover-effect');
        });
    });
});