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
    // Need to add coffee descriptions, and page header
    if (selectedLanguage === 'fr') {
        document.getElementById('coffee1-description').innerHTML = "<h2>Expresso</h2><p>Un café fort et concentré préparé en forçant de l'eau chaude à travers des grains de café finement moulus.</p>";
        document.getElementById('coffee1-title').innerHTML = "Expresso";
        document.getElementById('coffee2-description').innerHTML = "<h2>Cappuccino</h2><p>Un café composée d'espresso, de lait chauffé à la vapeur et d'une couche de mousse de lait.</p>";
        document.getElementById('coffee3-title').innerHTML = "Café Magique";
        document.getElementById('coffee3-description').innerHTML = "<h2>Café Magique</h2><p>Un café créé dans un autre univers qui reste chaud grâce au pouvoir de l'amitiée.</p>";
        document.getElementById('about-label').innerHTML = "Nous contacter";
        document.getElementById('about').innerHTML = "<p>Bienvenue chez Coffee Haven, où nous nous consacrons à offrir un espace chaleureux et accueillant aux amateurs de café. Nos boissons soigneusement préparées et notre ambiance confortable font de nous l'endroit idéal pour une expérience café délicieuse.</p>";
        document.getElementById('contact').innerHTML = "<h2>Contactez-nous</h2><p>Rendez-nous visite à :</p><p>123, rue Principale, Castelnau-le-Lez</p><p>Email: mickael.gresse@gmail.com</p><p>Téléphone : 06-41-54-05-99</p>";
        document.querySelector('footer span').innerText = "© 2024 Coffee Haven. Aucuns droits réservés.";
    } else {
        // Reset to English
        document.getElementById('coffee1-description').innerHTML = "<h2>Expresso</h2><p>A strong and concentrated coffee brewed by forcing hot water through finely-ground coffee beans.</p>";
        document.getElementById('coffee1-title').innerHTML = "Espresso";
        document.getElementById('coffee2-description').innerHTML = "<h2>Cappuccino</h2><p>A coffee drink that is composed of espresso, steamed milk, and a layer of frothed milk.</p>";
        document.getElementById('coffee3-title').innerHTML = "Magic Coffee";
        document.getElementById('coffee3-description').innerHTML = "<h2>Magic Coffee</h2><p>A coffee made in another universe that always stay warm thanks to the power of friendship.</p>";
        document.getElementById('about').innerHTML = "<p>Welcome to Coffee Haven, where we are dedicated to providing a warm and inviting space for coffee enthusiasts. Our carefully crafted beverages and cozy ambiance make us your go-to spot for a delightful coffee experience.</p>";
        document.getElementById('about-label').innerHTML = "Contact us";
        document.getElementById('contact').innerHTML = "<h2>Contact Us</h2><p>Visit us at:</p><p>123 Main Street, Castelnau-le-Lez</p><p>Email: mickael.gresse@gmail.com</p><p>Phone:+336-41-54-05-99</p>";
        document.querySelector('footer span').innerText = "© 2024 Coffee Haven. No rights reserved.";
    }
}