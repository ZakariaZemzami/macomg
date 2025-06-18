// Simple JavaScript for interactivity
document.addEventListener('DOMContentLoaded', function() {
    const whatsappNumber = '+212699289568';
    
    function redirectToWhatsApp(message) {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    }
    
    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            const message = `Hi! I'm interested in searching for: ${searchTerm}`;
            redirectToWhatsApp(message);
        } else {
            const message = `Hi! I'm interested in your products. Can you help me find what I'm looking for?`;
            redirectToWhatsApp(message);
        }
    }
    
    searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        performSearch();
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });
    
    // Product card clicks
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productName = this.querySelector('h3').textContent;
            const productPrice = this.querySelector('.price').textContent;
            const message = `Hi! I'm interested in the ${productName} (${productPrice}). Can you provide more details?`;
            redirectToWhatsApp(message);
        });
    });
    
    // Category card clicks
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const categoryName = this.querySelector('span').textContent;
            const message = `Hi! I'm interested in browsing your ${categoryName} category. What products do you have available?`;
            redirectToWhatsApp(message);
        });
    });
    
    // Shop Now button
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function() {
        const message = `Hi! I'm interested in your latest smartphones. Can you show me what's available?`;
        redirectToWhatsApp(message);
    });
    
    // Navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = this.textContent;
            let message = '';
            
            switch(linkText.toLowerCase()) {
                case 'home':
                    message = `Hi! I visited your website and I'm interested in your products.`;
                    break;
                case 'shop':
                    message = `Hi! I'd like to browse your shop. What products do you have available?`;
                    break;
                case 'about':
                    message = `Hi! I'd like to know more about your company and services.`;
                    break;
                case 'contact':
                    message = `Hi! I'd like to get in touch with you.`;
                    break;
                default:
                    message = `Hi! I'm interested in your products and services.`;
            }
            
            redirectToWhatsApp(message);
        });
    });
    
    // Header icons (user and cart)
    const headerIcons = document.querySelectorAll('.header-icons .icon');
    headerIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const message = `Hi! I'm interested in your products. Can you help me with my order?`;
            redirectToWhatsApp(message);
        });
    });
});
