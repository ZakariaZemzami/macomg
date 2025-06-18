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
    
    // Navigation handling
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const linkText = this.textContent.toLowerCase();
            
            // Only prevent default and redirect to WhatsApp for contact link
            if (linkText === 'contact') {
                e.preventDefault();
                const message = `Hi! I'd like to know more about macomg team and services.`;
                redirectToWhatsApp(message);
            }
            // Other links will work normally through href
        });
    });
    
    // Contact buttons with data-nav attribute
    const contactButtons = document.querySelectorAll('[data-nav="contact"]');
    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const message = `Hi! I'd like to get in touch with your team. Can you help me?`;
            redirectToWhatsApp(message);
        });
    });
    
    // WhatsApp float button
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const message = `Hi! I'm interested in your products and services.`;
            redirectToWhatsApp(message);
        });
    }
    
    // Header icons (user and cart)
    const headerIcons = document.querySelectorAll('.header-icons .icon');
    headerIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const message = `Hi! I need assistance with my account/order.`;
            redirectToWhatsApp(message);
        });
    });
});
