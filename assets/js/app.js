// Amazon Android App JavaScript

// Product Data
const products = [
    {
        id: 1,
        name: "boAt Rockerz 450 Bluetooth Headphones with Mic",
        price: 1299,
        was: 2990,
        rating: 4.3,
        reviews: 89432,
        cat: "Electronics",
        prime: true,
        badge: "Deal",
        emoji: "&#127911;",
        img: "https://m.media-amazon.com/images/I/61Iqf3q2LXL._AC_UL320_.jpg",
        brand: "boAt",
        desc: "40mm drivers, 15h playback, padded earcups for all-day comfort.",
        stock: true
    },
    {
        id: 2,
        name: "Samsung Galaxy M34 5G (6GB, 128GB, Midnight Blue)",
        price: 18499,
        was: 24999,
        rating: 4.2,
        reviews: 24781,
        cat: "Electronics",
        prime: true,
        badge: "Best Seller",
        emoji: "&#128241;",
        img: "https://m.media-amazon.com/images/I/61J8s8q9WyL._AC_UL320_.jpg",
        brand: "Samsung",
        desc: "Exynos 1280, 6000mAh battery, 120Hz Super AMOLED display.",
        stock: true
    },
    {
        id: 3,
        name: "Apple MacBook Air M2, 13.6-inch (8GB, 256GB SSD)",
        price: 94900,
        was: 114900,
        rating: 4.7,
        reviews: 12340,
        cat: "Electronics",
        prime: true,
        badge: "",
        emoji: "&#128187;",
        img: "https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UL320_.jpg",
        brand: "Apple",
        desc: "M2 chip, 18h battery life, MagSafe charging.",
        stock: true
    },
    {
        id: 4,
        name: "Levi's Men's Slim Fit Jeans",
        price: 1799,
        was: 2999,
        rating: 4.1,
        reviews: 5621,
        cat: "Fashion",
        prime: true,
        badge: "40% off",
        emoji: "&#128084;",
        img: "https://m.media-amazon.com/images/I/81U5YJ1c9NL._AC_UL320_.jpg",
        brand: "Levi's",
        desc: "Classic slim fit denim jeans for everyday wear.",
        stock: true
    },
    {
        id: 5,
        name: "Prestige Iris 750W Mixer Grinder with 3 Jars",
        price: 2299,
        was: 4495,
        rating: 4.3,
        reviews: 18900,
        cat: "Home",
        prime: true,
        badge: "Best Seller",
        emoji: "&#129379;",
        img: "https://m.media-amazon.com/images/I/61t7G8s5Q9L._AC_UL320_.jpg",
        brand: "Prestige",
        desc: "750W motor, 3 SS jars, ideal for grinding and blending.",
        stock: true
    },
    {
        id: 6,
        name: "Atomic Habits - James Clear (Paperback)",
        price: 399,
        was: 799,
        rating: 4.7,
        reviews: 67890,
        cat: "Books",
        prime: true,
        badge: "",
        emoji: "&#128218;",
        img: "https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UL320_.jpg",
        brand: "James Clear",
        desc: "#1 NYT Bestseller. Transform your life with tiny changes.",
        stock: true
    },
    {
        id: 7,
        name: "Nivia Carbonite Web Basketball Size 7",
        price: 899,
        was: 1499,
        rating: 4.0,
        reviews: 3210,
        cat: "Sports",
        prime: true,
        badge: "",
        emoji: "&#9917;",
        img: "https://m.media-amazon.com/images/I/51rCBlHGnWL._AC_UL320_.jpg",
        brand: "Nivia",
        desc: "Official size & weight rubber basketball for indoor/outdoor.",
        stock: true
    },
    {
        id: 8,
        name: "LEGO Classic Large Creative Brick Box 10698",
        price: 3799,
        was: 5499,
        rating: 4.8,
        reviews: 9870,
        cat: "Toys",
        prime: true,
        badge: "Deal",
        emoji: "&#129510;",
        img: "https://m.media-amazon.com/images/I/81QZ0G-2qFL._AC_UL320_.jpg",
        brand: "LEGO",
        desc: "790 bricks in 33 colors with creative building ideas.",
        stock: true
    },
    {
        id: 9,
        name: "Maybelline Fit Me Matte+Poreless Foundation 120",
        price: 349,
        was: 599,
        rating: 4.3,
        reviews: 15430,
        cat: "Beauty",
        prime: true,
        badge: "",
        emoji: "&#128138;",
        img: "https://m.media-amazon.com/images/I/71cJSB+0CUL._AC_UL320_.jpg",
        brand: "Maybelline",
        desc: "Oil control, pore-minimizing, natural matte finish.",
        stock: true
    },
    {
        id: 10,
        name: "Logitech MX Master 3S Wireless Mouse 8K DPI",
        price: 8995,
        was: 10995,
        rating: 4.7,
        reviews: 7650,
        cat: "Electronics",
        prime: true,
        badge: "",
        emoji: "&#128432;",
        img: "https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_UL320_.jpg",
        brand: "Logitech",
        desc: "Ergonomic design, MagSpeed scroll, works on any surface.",
        stock: true
    },
    {
        id: 11,
        name: "Philips SmartSleep Wake-Up Light Alarm Clock",
        price: 6999,
        was: 9999,
        rating: 4.4,
        reviews: 2340,
        cat: "Home",
        prime: true,
        badge: "",
        emoji: "&#127774;",
        img: "https://m.media-amazon.com/images/I/61z0S+mXBnL._AC_UL320_.jpg",
        brand: "Philips",
        desc: "Sunrise simulation, 20 brightness settings, FM radio.",
        stock: true
    },
    {
        id: 12,
        name: "Nike Air Zoom Pegasus 40 Running Shoes Men",
        price: 9995,
        was: 12995,
        rating: 4.5,
        reviews: 4560,
        cat: "Sports",
        prime: true,
        badge: "Best Seller",
        emoji: "&#128249;",
        img: "https://m.media-amazon.com/images/I/71H+jd5DXBL._AC_UL320_.jpg",
        brand: "Nike",
        desc: "Zoom Air cushioning with breathable mesh for long runs.",
        stock: true
    },
    {
        id: 13,
        name: "The Psychology of Money - Morgan Housel",
        price: 299,
        was: 599,
        rating: 4.6,
        reviews: 32100,
        cat: "Books",
        prime: true,
        badge: "",
        emoji: "&#128218;",
        img: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UL320_.jpg",
        brand: "Morgan Housel",
        desc: "Timeless lessons on wealth, greed, and happiness.",
        stock: true
    },
    {
        id: 14,
        name: "boAt Airdopes 141 TWS Earbuds 42H Playback",
        price: 999,
        was: 2990,
        rating: 4.1,
        reviews: 45200,
        cat: "Electronics",
        prime: true,
        badge: "Deal",
        emoji: "&#127911;",
        img: "https://m.media-amazon.com/images/I/61SuAy0pViL._AC_UL320_.jpg",
        brand: "boAt",
        desc: "42h total playback, BEAST mode, quad mics for clear calls.",
        stock: true
    },
    {
        id: 15,
        name: "Milton Thermosteel Flip Lid Flask 1000ml Silver",
        price: 599,
        was: 999,
        rating: 4.4,
        reviews: 22340,
        cat: "Home",
        prime: true,
        badge: "",
        emoji: "&#9749;",
        img: "https://m.media-amazon.com/images/I/61d9g8h7-9L._AC_UL320_.jpg",
        brand: "Milton",
        desc: "Hot 24h / cold 12h, food-grade stainless steel inner.",
        stock: true
    },
    {
        id: 16,
        name: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
        price: 19990,
        was: 29990,
        rating: 4.6,
        reviews: 45678,
        cat: "Electronics",
        prime: true,
        badge: "Best Seller",
        emoji: "&#127911;",
        img: "https://m.media-amazon.com/images/I/61bL4n1QXoL._AC_UL320_.jpg",
        brand: "Sony",
        desc: "Industry-leading noise cancellation with 30-hour battery life.",
        stock: true
    },
    {
        id: 17,
        name: "Nike Air Max 270 Men's Running Shoes",
        price: 8995,
        was: 12995,
        rating: 4.3,
        reviews: 12450,
        cat: "Fashion",
        prime: true,
        badge: "Deal",
        emoji: "&#128084;",
        img: "https://m.media-amazon.com/images/I/71V7R9f9y9L._AC_UL320_.jpg",
        brand: "Nike",
        desc: "Max Air unit for soft, responsive cushioning and modern style.",
        stock: true
    },
    {
        id: 18,
        name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker 6L",
        price: 6999,
        was: 9999,
        rating: 4.7,
        reviews: 67890,
        cat: "Home",
        prime: true,
        badge: "Best Seller",
        emoji: "&#129379;",
        img: "https://m.media-amazon.com/images/I/61QJ8o8v9XL._AC_UL320_.jpg",
        brand: "Instant Pot",
        desc: "14 smart programs: pressure cooker, slow cooker, rice cooker, yogurt maker.",
        stock: true
    },
    {
        id: 19,
        name: "Rich Dad Poor Dad - Robert Kiyosaki (Paperback)",
        price: 299,
        was: 599,
        rating: 4.5,
        reviews: 89450,
        cat: "Books",
        prime: true,
        badge: "",
        emoji: "&#128218;",
        img: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UL320_.jpg",
        brand: "Robert Kiyosaki",
        desc: "What the rich teach their kids about money that the poor and middle class do not.",
        stock: true
    },
    {
        id: 20,
        name: "Wilson Evolution Basketball Official Size 7",
        price: 2499,
        was: 3499,
        rating: 4.8,
        reviews: 8765,
        cat: "Sports",
        prime: true,
        badge: "",
        emoji: "&#9917;",
        img: "https://m.media-amazon.com/images/I/71V8X9a8-9L._AC_UL320_.jpg",
        brand: "Wilson",
        desc: "Official size and weight basketball with superior grip and feel.",
        stock: true
    },
    {
        id: 21,
        name: "Barbie DreamHouse Playset with Accessories",
        price: 8999,
        was: 12999,
        rating: 4.6,
        reviews: 5432,
        cat: "Toys",
        prime: true,
        badge: "Deal",
        emoji: "&#129510;",
        img: "https://m.media-amazon.com/images/I/81d9g8h7-9L._AC_UL320_.jpg",
        brand: "Mattel",
        desc: "3-story dreamhouse with elevator, pool, and 70+ accessories.",
        stock: true
    },
    {
        id: 22,
        name: "Lakme Absolute Perfect Radiance Skin Brightening Serum",
        price: 599,
        was: 899,
        rating: 4.2,
        reviews: 18765,
        cat: "Beauty",
        prime: true,
        badge: "",
        emoji: "&#128138;",
        img: "https://m.media-amazon.com/images/I/61y9JfZ7N9L._AC_UL320_.jpg",
        brand: "Lakme",
        desc: "Vitamin C and Pomegranate extract for brighter, radiant skin.",
        stock: true
    },
    {
        id: 23,
        name: "Apple AirPods Pro (2nd Generation) with MagSafe Case",
        price: 19990,
        was: 24990,
        rating: 4.8,
        reviews: 34567,
        cat: "Electronics",
        prime: true,
        badge: "Best Seller",
        emoji: "&#127911;",
        img: "https://m.media-amazon.com/images/I/71V7R9f9y9L._AC_UL320_.jpg",
        brand: "Apple",
        desc: "Active Noise Cancellation, Adaptive Transparency, Spatial Audio.",
        stock: true
    },
    {
        id: 24,
        name: "Adidas Men's Essentials 3-Stripes Fleece Hoodie",
        price: 1999,
        was: 2999,
        rating: 4.4,
        reviews: 9876,
        cat: "Fashion",
        prime: true,
        badge: "40% off",
        emoji: "&#128084;",
        img: "https://m.media-amazon.com/images/I/81U5YJ1c9NL._AC_UL320_.jpg",
        brand: "Adidas",
        desc: "Comfortable fleece hoodie with iconic 3-stripes design.",
        stock: true
    },
    {
        id: 25,
        name: "Philips Air Fryer HD9650/90 4.1L 2000W",
        price: 8999,
        was: 12999,
        rating: 4.5,
        reviews: 23456,
        cat: "Home",
        prime: true,
        badge: "Deal",
        emoji: "&#129379;",
        img: "https://m.media-amazon.com/images/I/61QJ8o8v9XL._AC_UL320_.jpg",
        brand: "Philips",
        desc: "Rapid Air Technology for healthier frying with little to no oil.",
        stock: true
    },
    {
        id: 26,
        name: "The 7 Habits of Highly Effective People - Stephen Covey",
        price: 349,
        was: 699,
        rating: 4.6,
        reviews: 112345,
        cat: "Books",
        prime: true,
        badge: "Best Seller",
        emoji: "&#128218;",
        img: "https://m.media-amazon.com/images/I/81Wcr9os5IL._AC_UL320_.jpg",
        brand: "Stephen Covey",
        desc: "Powerful lessons in personal change and effectiveness.",
        stock: true
    },
    {
        id: 27,
        name: "Yonex Mavis 350 Nylon Shuttlecock (White, 6 Pack)",
        price: 599,
        was: 899,
        rating: 4.3,
        reviews: 6543,
        cat: "Sports",
        prime: true,
        badge: "",
        emoji: "&#9917;",
        img: "https://m.media-amazon.com/images/I/71V8X9a8-9L._AC_UL320_.jpg",
        brand: "Yonex",
        desc: "Nylon shuttlecock with accurate flight performance and durability.",
        stock: true
    },
    {
        id: 28,
        name: "Fisher-Price Laugh & Learn Smart Stages Puppy",
        price: 2499,
        was: 3499,
        rating: 4.7,
        reviews: 3210,
        cat: "Toys",
        prime: true,
        badge: "",
        emoji: "&#129510;",
        img: "https://m.media-amazon.com/images/I/81d9g8h7-9L._AC_UL320_.jpg",
        brand: "Fisher-Price",
        desc: "Interactive learning toy with lights, sounds and 75+ songs.",
        stock: true
    },
    {
        id: 29,
        name: "Neutrogena Hydro Boost Water Gel Moisturizer 50ml",
        price: 899,
        was: 1299,
        rating: 4.4,
        reviews: 19876,
        cat: "Beauty",
        prime: true,
        badge: "Deal",
        emoji: "&#128138;",
        img: "https://m.media-amazon.com/images/I/71V8X9a8-9L._AC_UL320_.jpg",
        brand: "Neutrogena",
        desc: "Hyaluronic acid gel formula for instant, long-lasting hydration.",
        stock: true
    },
    {
        id: 30,
        name: "Canon EOS R50 Mirrorless Camera with 18-45mm Lens",
        price: 54990,
        was: 69990,
        rating: 4.5,
        reviews: 5432,
        cat: "Electronics",
        prime: true,
        badge: "Best Seller",
        emoji: "&#128247;",
        img: "https://m.media-amazon.com/images/I/61J8s8q9WyL._AC_UL320_.jpg",
        brand: "Canon",
        desc: "24.2MP APS-C sensor, 4K video, compact and lightweight design.",
        stock: true
    }
];

// Banner Data
const banners = [
    { title: "Electronics Sale", sub: "Up to 40% off on gadgets", cat: "Electronics", icon: "fa-mobile-alt" },
    { title: "Fashion Week", sub: "Trending styles, unbeatable prices", cat: "Fashion", icon: "fa-tshirt" },
    { title: "Home Refresh", sub: "Deals on furniture & decor", cat: "Home", icon: "fa-home" },
    { title: "Books Festival", sub: "Bestsellers at lowest prices", cat: "Books", icon: "fa-book" }
];

// Global Variables
let cart = [];
let currentCat = 'All';
let currentSort = '';
let bIdx = 0;
let currentQty = 1;

// Utility Functions
function stars(r) {
    let s = '';
    for (let i = 1; i <= 5; i++) s += r >= i ? '&#9733;' : (r >= i - .5 ? '&#9734;' : '&#9734;');
    return s;
}

function pct(p, w) {
    return Math.round((w - p) / w * 100);
}

// Banner Functions
function rotateBanner() {
    bIdx = (bIdx + 1) % banners.length;
    const b = banners[bIdx];
    document.getElementById('bannerTitle').textContent = b.title;
    document.getElementById('bannerSub').textContent = b.sub;
    document.getElementById('bannerEmoji').innerHTML = `<i class="fas ${b.icon}"></i>`;
    document.getElementById('bannerBtn').onclick = () => filterCat(b.cat);
    for (let i = 0; i < 4; i++) {
        const d = document.getElementById('bd' + i);
        d.className = 'bdot' + (i === bIdx ? ' a' : '');
    }
}

function bannerClick() {
    filterCat(banners[bIdx].cat);
}

// Render Functions
function renderDeals(list) {
    const row = document.getElementById('dealsRow');
    row.innerHTML = list.slice(0, 8).map(p => `
        <div class="deal-card" onclick="openProduct(${p.id})" style="position:relative">
            ${p.badge ? `<div style="position:absolute;top:6px;left:6px;z-index:2"><div class="deal-badge">${p.badge}</div></div>` : ''}
            <img class="deal-img" src="${p.img}" onerror="this.src=''" alt="${p.name}" loading="lazy">
            <div class="deal-info">
                <div class="deal-name">${p.name}</div>
                <div class="deal-stars">${stars(p.rating)} <span style="color:#888;font-size:10px">(${p.reviews.toLocaleString()})</span></div>
                <div class="deal-price">&#8377;${p.price.toLocaleString()} <span class="deal-was">&#8377;${p.was.toLocaleString()}</span></div>
                <div class="deal-off">${pct(p.price, p.was)}% off</div>
                ${p.prime ? '<div class="deal-prime">&#10003; FREE Delivery</div>' : ''}
            </div>
        </div>
    `).join('');
}

function renderProducts(list) {
    const el = document.getElementById('prodList');
    if (!list.length) {
        el.innerHTML = '<div style="text-align:center;padding:40px;color:#888">No products found</div>';
        return;
    }
    el.innerHTML = list.map(p => `
        <div class="prod-item" onclick="openProduct(${p.id})">
            <img class="prod-thumb" src="${p.img}" onerror="this.style.background='#eee'" alt="${p.name}" loading="lazy">
            <div class="prod-body">
                <div class="prod-name">${p.name}</div>
                <div class="prod-stars">${stars(p.rating)} <span>(${p.reviews.toLocaleString()})</span></div>
                <div class="prod-price">&#8377;${p.price.toLocaleString()} <span class="prod-was">&#8377;${p.was.toLocaleString()}</span> <span class="prod-off">${pct(p.price, p.was)}% off</span></div>
                ${p.prime ? '<div class="prod-prime">&#10003; FREE Delivery by Amazon</div>' : ''}
                <button class="prod-cart-btn" onclick="event.stopPropagation();addToCart(${p.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Filter and Search Functions
function getFiltered() {
    let list = currentCat === 'All' ? products : products.filter(p => p.cat === currentCat);
    if (currentSort === 'priceLow') list = [...list].sort((a, b) => a.price - b.price);
    else if (currentSort === 'priceHigh') list = [...list].sort((a, b) => b.price - a.price);
    else if (currentSort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
}

function filterCat(cat) {
    currentCat = cat;
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.toggle('active', t.textContent === cat || (cat === 'All' && t.textContent === 'All')));
    document.getElementById('dealsTitle').textContent = cat === 'All' ? "Today's deals" : `${cat} deals`;
    document.getElementById('prodTitle').textContent = cat === 'All' ? 'Recommended for you' : `${cat}`;
    const list = getFiltered();
    renderDeals(list);
    renderProducts(list);
    goHome();
}

function setTab(el, cat) {
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    filterCat(cat);
}

function doSearch() {
    const q = document.getElementById('searchBox').value.trim().toLowerCase();
    if (!q) return;
    const list = products.filter(p => p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
    document.getElementById('prodTitle').textContent = `Results for "${document.getElementById('searchBox').value}"`;
    renderDeals(list);
    renderProducts(list);
}

function focusSearch() {
    document.getElementById('searchBox').focus();
}

// Product Detail Functions
function openProduct(id) {
    const p = products.find(x => x.id === id);
    currentQty = 1;
    const save = p.was - p.price;
    const off = pct(p.price, p.was);
    document.getElementById('pdContent').innerHTML = `
        <img class="pd-main-img" src="${p.img}" onerror="this.style.background='#eee'" alt="${p.name}">
        <div class="pd-img-dots">
            <div class="pd-img-dot a"></div><div class="pd-img-dot"></div><div class="pd-img-dot"></div>
        </div>
        <div class="pd-body">
            <div class="pd-brand-tag">&#9400; ${p.brand}</div>
            <div class="pd-title">${p.name}</div>
            <div class="pd-rating-row">
                <div class="pd-rating-pill">${p.rating} &#9733;</div>
                <span class="pd-rev-count">${p.reviews.toLocaleString()} ratings</span>
                <span style="color:#888;font-size:12px">| 500+ answered</span>
            </div>
            <div class="pd-price-block">
                <div style="font-size:12px;color:#888;margin-bottom:2px">Deal Price</div>
                <div class="pd-current-price">&#8377;${p.price.toLocaleString()}</div>
                <div class="pd-save-row">
                    <span class="pd-mrp">M.R.P: <s>&#8377;${p.was.toLocaleString()}</s></span>
                    <span class="pd-off-badge">${off}% OFF</span>
                </div>
                <div style="color:#CC0C39;font-size:12px;margin-top:2px">You save: &#8377;${save.toLocaleString()}</div>
                ${p.prime ? `<div class="pd-prime-row"><div class="pd-prime-badge">prime</div><div class="pd-delivery">FREE Delivery by Amazon</div></div>` : ''}
            </div>
            <div class="pd-section">
                <h5>Product details</h5>
                <div class="pd-row"><span class="lbl">Brand</span><span class="val">${p.brand}</span></div>
                <div class="pd-row"><span class="lbl">Category</span><span class="val">${p.cat}</span></div>
                <div class="pd-row"><span class="lbl">In Stock</span><span class="val" style="color:#388E3C">${p.stock ? 'Yes' : 'No'}</span></div>
                <div class="pd-row"><span class="lbl">Seller</span><span class="val">Amazon Retail India</span></div>
            </div>
            <div class="pd-section">
                <h5>About this item</h5>
                <p>${p.desc}</p>
            </div>
            <div class="pd-section">
                <div class="pd-stock">In Stock</div>
                <div style="font-size:13px;color:#555;margin-bottom:8px">Quantity:</div>
                <div class="qty-ctrl">
                    <button class="qty-btn-r" onclick="changeQtyR(-1)"><i class="fas fa-minus"></i></button>
                    <span class="qty-num-r" id="qtyNumR">1</span>
                    <button class="qty-btn-r" onclick="changeQtyR(1)"><i class="fas fa-plus"></i></button>
                </div>
                <button class="btn-addcart" onclick="addToCartFromDetail(${p.id})">Add to Cart</button>
                <button class="btn-buynow" onclick="buyNow(${p.id})">Buy Now</button>
                <div style="font-size:12px;color:#888;margin-top:12px;line-height:1.8">
                    <i class="fas fa-lock"></i> Secure transaction &nbsp; <i class="fas fa-truck"></i> Ships from Amazon.in
                </div>
            </div>
        </div>
    `;
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('cartPage').style.display = 'none';
    document.getElementById('detailPage').style.display = 'block';
    document.getElementById('appScroll').scrollTop = 0;
}

function changeQtyR(d) {
    currentQty = Math.max(1, Math.min(10, currentQty + d));
    const el = document.getElementById('qtyNumR');
    if (el) el.textContent = currentQty;
}

// Cart Functions
function addToCart(id) {
    const p = products.find(x => x.id === id);
    const ex = cart.find(c => c.id === id);
    if (ex) ex.qty++;
    else cart.push({ ...p, qty: 1 });
    updateCartBadge();
    toast('Added to cart!');
}

function addToCartFromDetail(id) {
    const p = products.find(x => x.id === id);
    const ex = cart.find(c => c.id === id);
    if (ex) ex.qty += currentQty;
    else cart.push({ ...p, qty: currentQty });
    updateCartBadge();
    toast(`${currentQty} item(s) added to cart`);
    showPage('cart');
}

function buyNow(id) {
    addToCart(id);
    showPage('cart');
}

function removeCart(id) {
    cart = cart.filter(c => c.id !== id);
    updateCartBadge();
    renderCart();
}

function updateCartQtyR(id, d) {
    const item = cart.find(c => c.id === id);
    if (item) {
        item.qty = Math.max(1, item.qty + d);
    }
    updateCartBadge();
    renderCart();
}

function updateCartBadge() {
    const total = cart.reduce((s, c) => s + c.qty, 0);
    document.getElementById('cartBadge').textContent = total;
    document.getElementById('cartCountH').textContent = total;
}

function renderCart() {
    const body = document.getElementById('cartBody');
    if (!cart.length) {
        body.innerHTML = `<div class="empty-cart-r"><div class="icon"><i class="fas fa-shopping-cart"></i></div><h3>Your cart is empty</h3><p>Add items to get started</p><br><button onclick="goHome()" style="background:#FF9900;border:none;border-radius:24px;padding:12px 24px;font-size:14px;font-weight:700;cursor:pointer">Continue Shopping</button></div>`;
        return;
    }
    const sub = cart.reduce((s, c) => s + c.price * c.qty, 0);
    const totalItems = cart.reduce((s, c) => s + c.qty, 0);
    body.innerHTML = cart.map(c => `
        <div class="cart-card">
            <div class="cart-item-row">
                <img class="cart-item-img" src="${c.img}" onerror="this.style.background='#eee'" alt="${c.name}">
                <div class="cart-item-det">
                    <div class="cart-item-name">${c.name}</div>
                    <div class="cart-item-price">&#8377;${(c.price * c.qty).toLocaleString()}</div>
                    ${c.prime ? '<div class="cart-item-prime">&#10003; FREE Delivery</div>' : ''}
                </div>
            </div>
            <div class="cart-controls">
                <button class="cart-qty-btn" onclick="updateCartQtyR(${c.id},-1)"><i class="fas fa-minus"></i></button>
                <span class="cart-qty-num">${c.qty}</span>
                <button class="cart-qty-btn" onclick="updateCartQtyR(${c.id},1)"><i class="fas fa-plus"></i></button>
                <button class="cart-del-btn" onclick="removeCart(${c.id})">Delete</button>
            </div>
        </div>
    `).join('') + `
        <div class="cart-summary">
            <h4>Price details</h4>
            <div class="cart-row"><span>Price (${totalItems} items)</span><span>&#8377;${sub.toLocaleString()}</span></div>
            <div class="cart-row"><span>Delivery Charges</span><span style="color:#388E3C">FREE</span></div>
            <div class="cart-row"><span>Secured Packaging</span><span>&#8377;49</span></div>
            <div class="cart-row total"><span>Total Amount</span><span>&#8377;${(sub + 49).toLocaleString()}</span></div>
            <div style="color:#388E3C;font-size:13px;margin-top:6px">You will save &#8377;${cart.reduce((s, c) => s + (c.was - c.price) * c.qty, 0).toLocaleString()} on this order</div>
        </div>
        <button class="btn-checkout-r" onclick="checkout()">Place Order</button>
        <div style="height:16px"></div>
    `;
}

function checkout() {
    if (cart.length === 0) {
        toast('Your cart is empty');
        return;
    }
    showCheckoutPage();
}

function showCheckoutPage() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('cartPage').style.display = 'none';
    document.getElementById('detailPage').style.display = 'none';
    document.getElementById('checkoutPage').style.display = 'block';
    
    // Populate checkout items
    renderCheckoutItems();
    updateCheckoutSummary();
    
    // Scroll to top
    document.getElementById('appScroll').scrollTop = 0;
}

function renderCheckoutItems() {
    const checkoutItems = document.getElementById('checkoutItems');
    if (!checkoutItems) return;
    
    checkoutItems.innerHTML = cart.map(c => `
        <div class="summary-item">
            <img class="summary-item-img" src="${c.img}" onerror="this.style.background='#eee'" alt="${c.name}">
            <div class="summary-item-details">
                <div class="summary-item-name">${c.name}</div>
                <div class="summary-item-qty">Qty: ${c.qty}</div>
            </div>
            <div class="summary-item-price">&#8377;${(c.price * c.qty).toLocaleString()}</div>
        </div>
    `).join('');
}

function updateCheckoutSummary() {
    const sub = cart.reduce((s, c) => s + c.price * c.qty, 0);
    const deliveryCharge = document.querySelector('input[name="delivery"]:checked')?.id === 'express' ? 99 : 0;
    const total = sub + deliveryCharge;
    
    const subtotalEl = document.getElementById('checkoutSubtotal');
    const totalEl = document.getElementById('checkoutTotal');
    
    if (subtotalEl) subtotalEl.textContent = `&#8377;${sub.toLocaleString()}`;
    if (totalEl) totalEl.textContent = `&#8377;${total.toLocaleString()}`;
}

function placeOrder() {
    // Validate cart
    if (cart.length === 0) {
        toast('Your cart is empty');
        return;
    }
    
    // Get selected options
    const selectedAddress = document.querySelector('input[name="address"]:checked');
    const selectedDelivery = document.querySelector('input[name="delivery"]:checked');
    const selectedPayment = document.querySelector('input[name="payment"]:checked');
    
    if (!selectedAddress || !selectedDelivery || !selectedPayment) {
        toast('Please complete all checkout steps');
        return;
    }
    
    // Simulate order processing
    toast('Processing order...');
    
    setTimeout(() => {
        // Clear cart
        cart = [];
        updateCartBadge();
        renderCart();
        
        // Show success message
        toast('Order placed successfully! (demo)');
        
        // Go to home
        setTimeout(() => {
            showPage('home');
        }, 2000);
    }, 1500);
}

// Add event listeners for delivery options
document.addEventListener('DOMContentLoaded', function() {
    // Add delivery option change listeners
    setTimeout(() => {
        const deliveryRadios = document.querySelectorAll('input[name="delivery"]');
        deliveryRadios.forEach(radio => {
            radio.addEventListener('change', updateCheckoutSummary);
        });
        
        // Add address option click listeners
        const addressCards = document.querySelectorAll('.address-card');
        addressCards.forEach(card => {
            card.addEventListener('click', function() {
                const radio = this.querySelector('input[type="radio"]');
                if (radio) radio.checked = true;
                
                // Update selected state
                document.querySelectorAll('.address-card').forEach(c => c.classList.remove('selected'));
                this.classList.add('selected');
            });
        });
        
        // Add delivery option click listeners
        const deliveryOptions = document.querySelectorAll('.delivery-option');
        deliveryOptions.forEach(option => {
            option.addEventListener('click', function() {
                const radio = this.querySelector('input[type="radio"]');
                if (radio) radio.checked = true;
                
                // Update selected state
                document.querySelectorAll('.delivery-option').forEach(o => o.classList.remove('selected'));
                this.classList.add('selected');
                
                updateCheckoutSummary();
            });
        });
        
        // Add payment option click listeners
        const paymentOptions = document.querySelectorAll('.payment-option');
        paymentOptions.forEach(option => {
            option.addEventListener('click', function() {
                const radio = this.querySelector('input[type="radio"]');
                if (radio) radio.checked = true;
                
                // Update selected state
                document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
                this.classList.add('selected');
            });
        });
    }, 100);
});

// Navigation Functions
function showPage(page) {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('detailPage').style.display = 'none';
    document.getElementById('cartPage').style.display = 'none';
    document.getElementById('checkoutPage').style.display = 'none';
    if (page === 'cart') {
        document.getElementById('cartPage').style.display = 'block';
        renderCart();
    }
    document.getElementById('appScroll').scrollTop = 0;
}

function goHome() {
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('detailPage').style.display = 'none';
    document.getElementById('cartPage').style.display = 'none';
    setNav('navHome');
    document.getElementById('appScroll').scrollTop = 0;
}

function setNav(id) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.id === id));
}

// Utility Functions
function toast(msg) {
    const t = document.getElementById('toastR');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2500);
}


// Image error handler function
function handleImageError(img) {
    if (!img.dataset.fallback) {
        img.dataset.fallback = 'true';
        const productName = img.alt || 'product';
        const keyword = productName.toLowerCase().replace(/\s+/g, ',').substring(0, 20);
        
        // Try Unsplash first, then fallback to placehold.co if that fails
        img.src = `https://source.unsplash.com/320x320/?${keyword}`;
        
        // If Unsplash fails, use a more reliable placeholder
        img.onerror = function() {
            if (!img.dataset.placeholder) {
                img.dataset.placeholder = 'true';
                img.src = `https://placehold.co/300x300/f5f5f5/333?text=${encodeURIComponent(productName.substring(0, 15))}`;
            }
        };
    }
}

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    // Start banner rotation
    setInterval(rotateBanner, 3500);
    document.getElementById('bannerBtn').onclick = () => filterCat('Electronics');
    
    // Initialize with all products
    filterCat('All');
    
    // Add error handling to all images after they load
    setTimeout(() => {
        document.querySelectorAll('img').forEach(img => {
            if (!img.onerror) {
                img.onerror = function() { handleImageError(this); };
            }
        });
    }, 1000);
});
