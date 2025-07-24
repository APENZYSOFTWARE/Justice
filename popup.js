document.addEventListener('DOMContentLoaded', function() {
    // Initialize social media links
    const socialLinks = {
        whatsapp: 'https://wa.me/your_phone_number',
        facebook: 'https://www.facebook.com/penzy.david',
        instagram: 'https://www.instagram.com/easysoft'
    };

    // Set up navigation links
    const navLinks = {
        home: 'index.html#home',
        collections: 'index.html#collections',
        trends: 'index.html#trends',
        customerService: 'index.html#customer-service'
    };

    // Add click handlers for navigation buttons
    document.getElementById('home-link').addEventListener('click', () => {
        chrome.tabs.create({ url: navLinks.home });
    });

    document.getElementById('collections-link').addEventListener('click', () => {
        chrome.tabs.create({ url: navLinks.collections });
    });

    document.getElementById('trends-link').addEventListener('click', () => {
        chrome.tabs.create({ url: navLinks.trends });
    });

    document.getElementById('customer-service-link').addEventListener('click', () => {
        chrome.tabs.create({ url: navLinks.customerService });
    });

    // Add click handlers for social media links
    document.getElementById('whatsapp-link').addEventListener('click', () => {
        window.open(socialLinks.whatsapp, '_blank');
    });

    document.getElementById('facebook-link').addEventListener('click', () => {
        window.open(socialLinks.facebook, '_blank');
    });

    document.getElementById('instagram-link').addEventListener('click', () => {
        window.open(socialLinks.instagram, '_blank');
    });

    // Add smooth animations
    const quickLinks = document.querySelectorAll('.quick-link');
    quickLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.05)';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)';
        });
    });
});
