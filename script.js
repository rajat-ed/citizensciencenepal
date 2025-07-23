document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Get the height of the fixed navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                // Calculate the position to scroll to, accounting for the navbar
                const scrollPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: scrollPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle contact form submission (non-functional backend)
    const contactForm = document.getElementById('contact-form');
    const formMessages = document.getElementById('form-messages');

    if (contactForm && formMessages) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent actual form submission

            // Simulate form submission success
            formMessages.textContent = 'Thank you for your message! We will get back to you soon.';
            formMessages.classList.add('success');
            formMessages.style.display = 'block';

            // Optionally, clear the form fields after a short delay
            setTimeout(() => {
                contactForm.reset();
                formMessages.style.display = 'none';
                formMessages.classList.remove('success');
            }, 3000); // Message disappears after 3 seconds
        });
    }
});
