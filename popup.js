document.addEventListener('DOMContentLoaded', function() {
    const BASE_URL = 'https://example.com'; // This will be replaced with the live URL

    const config = {
        navLinks: {
            'home-link': `${BASE_URL}#home`,
            'collections-link': `${BASE_URL}#collections`,
            'trends-link': `${BASE_URL}#trends`,
            'customer-service-link': `${BASE_URL}#customer-service`
        },
        socialLinks: {
            'whatsapp-link': 'https://wa.me/+2340000000000',
            'facebook-link': 'https://www.facebook.com/penzy.david',
            'instagram-link': 'https://www.instagram.com/easysoft'
        }
    };

    // Add click handlers for navigation buttons
    for (const [id, url] of Object.entries(config.navLinks)) {
        document.getElementById(id).addEventListener('click', () => {
            chrome.tabs.create({ url });
        });
    }

    // Add click handlers for social media links
    for (const [id, url] of Object.entries(config.socialLinks)) {
        document.getElementById(id).addEventListener('click', (e) => {
            e.preventDefault();
            window.open(url, '_blank');
        });
    }

    // Add smooth animations
    const quickLinks = document.querySelectorAll('.quick-link, .social-links a');
    quickLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.05)';
            link.style.transition = 'transform 0.2s ease-in-out';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)';
        });
    });
});
