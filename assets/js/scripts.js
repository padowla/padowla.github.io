document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Samuele Padula's website!");

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Toggle dark mode if needed
    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
    };

    // Example: Add event listener to a hypothetical dark mode button
    const darkModeButton = document.getElementById("dark-mode-toggle");
    if (darkModeButton) {
        darkModeButton.addEventListener("click", toggleDarkMode);
    }
});
