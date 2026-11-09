// Smooth scrolling for navigation links

document.querySelectorAll('.nav-links a, .btn').forEach(link => {

    link.addEventListener('click', function(event) {

        const targetId = this.getAttribute('href');

        if (targetId && targetId.startsWith('#')) {
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }

    });

});

// Display the current year in the footer

document.getElementById("year").textContent =
    new Date().getFullYear();