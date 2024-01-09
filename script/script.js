function toggleDescription(descriptionId) {
    const description = document.getElementById(descriptionId);

    // Close all other coffee descriptions 
    // To_fix 
    const allDescriptions = document.querySelectorAll('.coffee-description');
    allDescriptions.forEach((item) => {
        if (item.id !== descriptionId && item.style.display !== 'none') {
            item.style.display = 'none';
        }
    });

    // Toggle the display property of the clicked coffee description
    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'block';
    } else {
        description.style.display = 'none';
    }


}

function changeLanguage() {
    const languageSelector = document.getElementById('language');
    const selectedLanguage = languageSelector.value;

    // Language-specific content changes
    //Need to add coffee descriptions, and page header
    if (selectedLanguage === 'fr') {
        document.getElementById('about').innerHTML = "<h2>À propos de nous</h2><p>Bienvenue chez Coffee Haven, où nous nous consacrons à offrir un espace chaleureux et accueillant aux amateurs de café. Nos boissons soigneusement préparées et notre ambiance confortable font de nous l'endroit idéal pour une expérience café délicieuse.</p>";
        document.getElementById('contact').innerHTML = "<h2>Contactez-nous</h2><p>Visitez-nous à :</p><p>123, rue Principale, Ville</p><p>Email : info@coffeehaven.com</p><p>Téléphone : (555) 123-4567</p>";
        document.querySelector('footer span').innerText = "© 2024 Coffee Haven. Tous droits réservés.";
    } else {
        // Reset to English content or add more languages as needed
        document.getElementById('about').innerHTML = "<h2>About Us</h2><p>Welcome to Coffee Haven, where we are dedicated to providing a warm and inviting space for coffee enthusiasts. Our carefully crafted beverages and cozy ambiance make us your go-to spot for a delightful coffee experience.</p>";
        document.getElementById('contact').innerHTML = "<h2>Contact Us</h2><p>Visit us at:</p><p>123 Main Street, Cityville</p><p>Email: info@coffeehaven.com</p><p>Phone: (555) 123-4567</p>";
        document.querySelector('footer span').innerText = "© 2024 Coffee Haven. All rights reserved.";
    }
}