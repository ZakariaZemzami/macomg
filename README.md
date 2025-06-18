# macomg - E-commerce Website

A modern, responsive e-commerce website for technology products built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Functional search bar, clickable product cards, and category navigation
- **Product Showcase**: Featured categories and popular products sections
- **Smooth Animations**: Hover effects and loading animations for better user experience

## Structure

```
tech-store/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript for interactivity
└── README.md           # Project documentation
```

## Sections

1. **Header**
   - Logo
   - Search bar with functional search
   - User account and shopping cart icons
   - Navigation menu (Home, Shop, About, Contact)

2. **Hero Section**
   - Featured smartphone promotion
   - Call-to-action button
   - Placeholder image for product showcase

3. **Featured Categories**
   - Laptops
   - Headphones
   - Smartwatches
   - Cameras
   - Interactive category cards with hover effects

4. **Popular Products**
   - Product grid with 4 featured items
   - Product cards with images, names, and prices
   - Clickable product cards for interaction

5. **Footer**
   - Copyright information

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript**: Interactive functionality and event handling
- **Google Fonts**: Inter font family for typography
- **SVG Icons**: Scalable vector icons for UI elements

## Responsive Breakpoints

- **Desktop**: 1200px+ (4-column grid)
- **Tablet**: 768px - 1024px (2-column grid)
- **Mobile**: Below 768px (1-column grid, stacked layout)

## How to Run

1. Download or clone the project files
2. Open `index.html` in any modern web browser
3. The website will load with full functionality

## Interactive Features

- **Search**: Click the search button or press Enter to search for products
- **Product Cards**: Click on any product card to view product details
- **Category Cards**: Click on category cards to browse specific categories
- **Shop Now Button**: Click to navigate to the shop page
- **Responsive Navigation**: Mobile-friendly navigation menu

## Customization

The website uses CSS custom properties (variables) for easy theming:

```css
:root {
    --primary-color: #E67E22;    /* Orange accent color */
    --text-color: #333;          /* Main text color */
    --background-color: #FFF;    /* Background color */
    --gray-light: #F5F5F5;       /* Light gray for backgrounds */
    --gray: #666;                /* Medium gray for secondary text */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add shopping cart functionality
- Implement user authentication
- Add product detail pages
- Integrate with a backend API
- Add payment processing
- Implement product filtering and sorting
