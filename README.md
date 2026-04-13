# Amazon Android App

A responsive, mobile-first e-commerce application that mimics the Amazon shopping experience on Android devices. This project demonstrates modern web development practices with a clean, maintainable code structure.

---

## Features

### Core Functionality

* **Product Catalog**: Browse products across multiple categories (Electronics, Fashion, Home, Books, Sports, Toys, Beauty)
* **Product Search**: Real-time search across product names, categories, and brands
* **Product Details**: Detailed views with specifications, ratings, and reviews
* **Shopping Cart**: Add/remove items, manage quantities, and calculate pricing
* **Category Filtering**: Filter products with dedicated category icons
* **Deal Banners**: Rotating promotional banners with category-specific deals
* **Responsive Design**: Optimized for mobile with an Android-style frame

### User Experience

* **Smooth Navigation**: Bottom navigation bar with active states
* **Toast Notifications**: Feedback for user actions
* **Loading States**: Image loading with fallback handling
* **Interactive Elements**: Hover states, transitions, and animations
* **Real-time Clock**: Dynamic status bar display

---

## Project Structure

```
amazon-android-app/
├── assets/
│   ├── css/
│   │   └── styles.css          # Application styles
│   ├── js/
│   │   └── app.js              # Application logic
│   └── images/                 # Static assets (optional)
├── pages/                      # Additional pages (optional)
├── index.html                  # Entry point
├── README.md                   # Documentation
└── package.json                # Metadata
```

---

## Technology Stack

* **HTML5**: Semantic markup
* **CSS3**: Flexbox, Grid, animations
* **JavaScript (ES6+)**: Modern vanilla JS
* **Google Fonts**: Roboto font family

---

## Key Components

### CSS Architecture

* Modular structure (status bar, navigation, product cards)
* Mobile-first design
* Responsive units (px, rem, viewport)
* Optional CSS variables for theming

### JavaScript Architecture

* Modular functions (rendering, navigation, state)
* Data-driven (products and banners arrays)
* Event delegation
* Lightweight state management (cart + UI state)

---

## Data Structure

### Product Object

```javascript
{
  id: Number,
  name: String,
  price: Number,
  was: Number,
  rating: Number,
  reviews: Number,
  cat: String,
  prime: Boolean,
  badge: String,
  emoji: String,
  img: String,
  brand: String,
  desc: String,
  stock: Boolean
}
```

### Banner Object

```javascript
{
  title: String,
  sub: String,
  cat: String,
  emoji: String
}
```

---

## Getting Started

### Prerequisites

* Modern browser (Chrome, Firefox, Safari, Edge)
* Optional: Local development server

### Installation

1. Clone or download the repository
2. Navigate to the project folder
3. Open `index.html` in your browser

---

## Development Server (Optional)

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

---

## Usage

### Navigation

* **Home**: Featured products and deals
* **Search**: Find products instantly
* **Categories**: Filter by category
* **Cart**: Manage selected items
* **Product Details**: View full product info

### Shopping Flow

1. Browse products
2. Open product details
3. Add items to cart
4. Review cart
5. Checkout (demo mode)

---

## Customization

### Adding New Products

```javascript
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
  emoji: "💎",
  img: "image-url.jpg",
  brand: "Brand Name",
  desc: "Product description",
  stock: true
}
```

### Modifying Categories

1. Update category tabs in HTML
2. Add category icons
3. Update product data
4. Adjust CSS if needed

### Styling

* Modify colors in CSS
* Update typography
* Adjust layout (flex/grid)
* Customize animations

---

## Browser Compatibility

* Chrome ✅
* Firefox ✅
* Safari ✅
* Edge ✅
* Mobile Browsers ✅

---

## Performance Considerations

* Lazy loading for images
* Minimal CSS footprint
* No external JS dependencies
* Browser caching support

---

## Future Enhancements

* Wishlist feature
* User authentication
* Payment integration
* Product reviews
* Advanced filtering & sorting
* Offline support (Service Worker)
* Progressive Web App (PWA)

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Test thoroughly
5. Submit a pull request

---

## License

This project is for educational purposes. Ensure compliance with Amazon’s terms if adapting designs.

---

## Acknowledgments

* Amazon (design inspiration)
* Google Fonts (Roboto)
* Web development community

---

**Note**: This is a frontend demo project. All product data and images are placeholders.

---
