# Amazon Android App

A responsive, mobile-first e-commerce application that mimics the Amazon shopping experience on Android devices. This project demonstrates modern web development practices with clean, maintainable code structure.

## Features

### Core Functionality
- **Product Catalog**: Browse products across multiple categories (Electronics, Fashion, Home, Books, Sports, Toys, Beauty)
- **Product Search**: Real-time search functionality across product names, categories, and brands
- **Product Details**: Detailed product views with specifications, ratings, and reviews
- **Shopping Cart**: Add/remove items, quantity management, and price calculation
- **Category Filtering**: Filter products by category with dedicated category icons
- **Deal Banners**: Rotating promotional banners with category-specific deals
- **Responsive Design**: Optimized for mobile viewing with Android device frame

### User Experience
- **Smooth Navigation**: Bottom navigation bar with active state indicators
- **Toast Notifications**: User-friendly feedback for actions
- **Loading States**: Proper image loading with fallback handling
- **Interactive Elements**: Hover states, active states, and smooth transitions
- **Real-time Clock**: Dynamic status bar with current time

## Project Structure

```
amazon-android-app/
|-- assets/
|   |-- css/
|   |   `-- styles.css          # All application styles
|   |-- js/
|   |   `-- app.js              # All application logic
|   `-- images/                 # Static images (if needed)
|-- pages/                      # Additional pages (if needed)
|-- index.html                  # Main application entry point
|-- README.md                   # Project documentation
`-- package.json                # Project metadata
```

## Technology Stack

- **HTML5**: Semantic markup with proper structure
- **CSS3**: Modern styling with flexbox, grid, and animations
- **JavaScript (ES6+)**: Vanilla JavaScript with modern features
- **Google Fonts**: Roboto font family for consistent typography

## Key Components

### CSS Architecture
- **Modular Design**: Organized into logical sections (status bar, navigation, product cards, etc.)
- **Responsive Units**: Mix of px, rem, and viewport units for optimal scaling
- **CSS Variables**: (Can be added for theme consistency)
- **Mobile-First**: Designed specifically for mobile viewport

### JavaScript Architecture
- **Modular Functions**: Separated concerns for rendering, navigation, and state management
- **Data Layer**: Product and banner data arrays
- **Event Handling**: Proper event delegation and management
- **State Management**: Cart state and application state

### Data Structure

#### Product Object
```javascript
{
  id: Number,
  name: String,
  price: Number,
  was: Number,          // Original price
  rating: Number,
  reviews: Number,
  cat: String,          // Category
  prime: Boolean,
  badge: String,        // Deal badge text
  emoji: String,        // Category emoji
  img: String,          // Product image URL
  brand: String,
  desc: String,         // Product description
  stock: Boolean
}
```

#### Banner Object
```javascript
{
  title: String,
  sub: String,          // Subtitle
  cat: String,          // Target category
  emoji: String
}
```

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Navigate to the project directory
3. Open `index.html` in your browser

### Development Server (Optional)
```bash
# Using Python
python -m http.server 8000

# Using Node.js (if installed)
npx serve .

# Using PHP (if installed)
php -S localhost:8000
```

## Usage

### Navigation
- **Home**: Browse featured products and deals
- **Search**: Use the search bar to find specific products
- **Categories**: Click category tabs or icons to filter products
- **Cart**: View and manage shopping cart items
- **Product Details**: Click any product to view detailed information

### Shopping Flow
1. Browse products on the home page
2. Click on a product to view details
3. Select quantity and add to cart
4. Navigate to cart to review items
5. Proceed to checkout (demo mode)

## Customization

### Adding New Products
```javascript
// Add to the products array in assets/js/app.js
{
  id: 16,
  name: "Product Name",
  price: 999,
  was: 1999,
  rating: 4.5,
  reviews: 1234,
  cat: "Category",
  prime: true,
  badge: "New",
  emoji: "&#128142;",
  img: "image-url.jpg",
  brand: "Brand Name",
  desc: "Product description",
  stock: true
}
```

### Modifying Categories
1. Update category tabs in HTML
2. Add category icons in the category section
3. Update product data with new categories
4. Modify CSS if needed for new category colors

### Styling Customization
- **Colors**: Modify color variables in CSS
- **Typography**: Update font families and sizes
- **Layout**: Adjust flexbox and grid properties
- **Animations**: Modify transition durations and effects

## Browser Compatibility

- **Chrome**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support
- **Mobile Browsers**: Optimized for mobile viewing

## Performance Considerations

- **Image Optimization**: Uses lazy loading for product images
- **CSS Optimization**: Minimal CSS with efficient selectors
- **JavaScript**: No external dependencies, fast execution
- **Caching**: Static assets can be cached by browsers

## Future Enhancements

- **Product Wishlist**: Save favorite products
- **User Accounts**: Login and personalization
- **Payment Integration**: Real payment processing
- **Product Reviews**: User-generated reviews
- **Advanced Search**: Filters and sorting options
- **Offline Support**: Service worker for offline functionality
- **PWA Features**: Installable app experience

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes. Please ensure compliance with Amazon's terms of service when using similar designs or functionality.

## Acknowledgments

- Amazon for the design inspiration
- Google Fonts for the Roboto font family
- The web development community for best practices

---

**Note**: This is a demonstration project showcasing frontend development skills. All product data and images are for demonstration purposes only.
