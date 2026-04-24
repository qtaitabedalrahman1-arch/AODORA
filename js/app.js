// ========================================
// PERFUME STORE - Main Application
// ========================================

// Sample Perfume Data
const samplePerfumes = [
  {
    id: 1,
    name: "عود ملكي",
    brand: "Arabian Oud",
    category: "رجالي",
    price: 450,
    oldPrice: 550,
    description: "عطر عود ملكي فاخر بمزيج من العود الكمبودي والعنبر الدافئ مع لمسات من الورد الطائفي. رائحة ثابتة وجذابة تدوم طويلاً.",
    notes: {
      top: "الزعفران، الهيل",
      middle: "العود الكمبودي، الورد الطائفي",
      base: "العنبر، المسك الأبيض"
    },
    size: "100ml",
    concentration: "Eau de Parfum",
    rating: 4.8,
    reviews: 124,
    stock: 15,
    badge: "الأكثر مبيعاً",
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400"
    ]
  },
  {
    id: 2,
    name: "مسك الليل",
    brand: "Ajmal",
    category: "نسائي",
    price: 320,
    oldPrice: null,
    description: "عطر مسك الليل الساحر بتركيبة فريدة من المسك الأبيض الناعم مع الياسمين والفانيليا. مثالي للمناسبات الخاصة.",
    notes: {
      top: "البرغموت، الياسمين",
      middle: "المسك الأبيض، زهرة اللوتس",
      base: "الفانيليا، خشب الصندل"
    },
    size: "75ml",
    concentration: "Eau de Parfum",
    rating: 4.6,
    reviews: 89,
    stock: 22,
    badge: "جديد",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
      "https://images.unsplash.com/photo-1595425964071-2c1ecff1f688?w=400",
      "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?w=400"
    ]
  },
  {
    id: 3,
    name: "بخور السلطان",
    brand: "Rasasi",
    category: "رجالي",
    price: 580,
    oldPrice: 700,
    description: "عطر فاخر مستوحى من البخور العربي الأصيل. يجمع بين قوة العود وأناقة التوابل الشرقية.",
    notes: {
      top: "الزنجبيل، الفلفل الوردي",
      middle: "العود، الحبهان",
      base: "الراتنج، خشب الأرز"
    },
    size: "100ml",
    concentration: "Parfum",
    rating: 4.9,
    reviews: 156,
    stock: 8,
    badge: "حصري",
    images: [
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400",
      "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=400",
      "https://images.unsplash.com/photo-1608528577891-eb055944f2e7?w=400"
    ]
  },
  {
    id: 4,
    name: "زهرة دمشق",
    brand: "Swiss Arabian",
    category: "نسائي",
    price: 280,
    oldPrice: null,
    description: "عطر رومانسي يحتفي بجمال الورد الدمشقي الأصيل. رائحة ناعمة ومؤنثة تفوح بالأناقة.",
    notes: {
      top: "الورد الدمشقي، الخوخ",
      middle: "الفاوانيا، زنبق الوادي",
      base: "المسك، العنبر الأبيض"
    },
    size: "80ml",
    concentration: "Eau de Parfum",
    rating: 4.7,
    reviews: 67,
    stock: 30,
    badge: null,
    images: [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400",
      "https://images.unsplash.com/photo-1595425964071-2c1ecff1f688?w=400",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400"
    ]
  },
  {
    id: 5,
    name: "عنبر ذهبي",
    brand: "Abdul Samad Al Qurashi",
    category: "للجنسين",
    price: 650,
    oldPrice: 800,
    description: "تحفة عطرية من العنبر الذهبي النادر مع العود الهندي. عطر فاخر للمناسبات الخاصة والأوقات المميزة.",
    notes: {
      top: "العنبر، الزعفران",
      middle: "العود الهندي، خشب الصندل",
      base: "المسك الذهبي، الفانيليا"
    },
    size: "100ml",
    concentration: "Parfum",
    rating: 4.9,
    reviews: 201,
    stock: 5,
    badge: "نادر",
    images: [
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400"
    ]
  },
  {
    id: 6,
    name: "ليلة عربية",
    brand: "Lattafa",
    category: "نسائي",
    price: 180,
    oldPrice: 220,
    description: "عطر شرقي ساحر يأخذك في رحلة إلى ليالي الشرق الدافئة. مزيج مثالي من الزهور والتوابل.",
    notes: {
      top: "الزهور البيضاء، البرغموت",
      middle: "القرنفل، الورد",
      base: "الباتشولي، الفانيليا"
    },
    size: "100ml",
    concentration: "Eau de Parfum",
    rating: 4.4,
    reviews: 312,
    stock: 45,
    badge: "الأفضل قيمة",
    images: [
      "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?w=400",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
      "https://images.unsplash.com/photo-1595425964071-2c1ecff1f688?w=400"
    ]
  },
  {
    id: 7,
    name: "صحراء العود",
    brand: "Arabian Oud",
    category: "رجالي",
    price: 520,
    oldPrice: null,
    description: "استوحي من رمال الصحراء الذهبية وليالي البادية. عطر قوي وجريء يعكس روح الرجل الشرقي.",
    notes: {
      top: "الكمون، الزعفران",
      middle: "العود، التبغ",
      base: "الجلد، خشب الأرز"
    },
    size: "100ml",
    concentration: "Eau de Parfum",
    rating: 4.7,
    reviews: 98,
    stock: 18,
    badge: null,
    images: [
      "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=400",
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400",
      "https://images.unsplash.com/photo-1608528577891-eb055944f2e7?w=400"
    ]
  },
  {
    id: 8,
    name: "لؤلؤة الخليج",
    brand: "Ajmal",
    category: "نسائي",
    price: 350,
    oldPrice: 420,
    description: "عطر مستوحى من جمال لآلئ الخليج العربي. إشراقة من الأزهار البيضاء مع نفحات بحرية منعشة.",
    notes: {
      top: "نسيم البحر، الليمون",
      middle: "الغاردينيا، زهر البرتقال",
      base: "المسك البحري، خشب الصندل"
    },
    size: "75ml",
    concentration: "Eau de Parfum",
    rating: 4.5,
    reviews: 145,
    stock: 25,
    badge: "مميز",
    images: [
      "https://images.unsplash.com/photo-1595425964071-2c1ecff1f688?w=400",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400",
      "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?w=400"
    ]
  },
  {
    id: 9,
    name: "توباكو فانيلا",
    brand: "Rasasi",
    category: "للجنسين",
    price: 290,
    oldPrice: null,
    description: "مزيج دافئ وجذاب من أوراق التبغ الفاخرة والفانيليا الكريمية. عطر مثالي للأجواء الشتوية.",
    notes: {
      top: "التوابل، أوراق التبغ",
      middle: "حبوب التونكا، الكاكاو",
      base: "الفانيليا، العنبر"
    },
    size: "100ml",
    concentration: "Eau de Parfum",
    rating: 4.6,
    reviews: 178,
    stock: 32,
    badge: null,
    images: [
      "https://images.unsplash.com/photo-1608528577891-eb055944f2e7?w=400",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400",
      "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=400"
    ]
  },
  {
    id: 10,
    name: "سحر الياسمين",
    brand: "Swiss Arabian",
    category: "نسائي",
    price: 240,
    oldPrice: 290,
    description: "احتفاء بجمال الياسمين العربي الأصيل. عطر ناعم وأنثوي يفيض بالرومانسية والأناقة.",
    notes: {
      top: "الياسمين، زهر البرتقال",
      middle: "التوبيروز، الورد",
      base: "المسك الأبيض، خشب الصندل"
    },
    size: "80ml",
    concentration: "Eau de Parfum",
    rating: 4.8,
    reviews: 234,
    stock: 28,
    badge: "رائج",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400",
      "https://images.unsplash.com/photo-1595425964071-2c1ecff1f688?w=400"
    ]
  }
];

// Sample Users Data
const sampleUsers = [
  {
    id: 1,
    name: "أحمد محمد",
    email: "admin@perfume.com",
    password: "admin123",
    role: "admin",
    avatar: "أم"
  },
  {
    id: 2,
    name: "سارة أحمد",
    email: "user@perfume.com",
    password: "user123",
    role: "user",
    avatar: "سأ"
  }
];

// Sample Orders Data
const sampleOrders = [
  {
    id: "ORD-001",
    userId: 2,
    userName: "سارة أحمد",
    items: [
      { productId: 1, name: "عود ملكي", quantity: 1, price: 450 },
      { productId: 4, name: "زهرة دمشق", quantity: 2, price: 280 }
    ],
    total: 1010,
    status: "delivered",
    date: "2024-01-15",
    address: "الرياض، حي الملقا"
  },
  {
    id: "ORD-002",
    userId: 2,
    userName: "سارة أحمد",
    items: [
      { productId: 2, name: "مسك الليل", quantity: 1, price: 320 }
    ],
    total: 320,
    status: "shipped",
    date: "2024-01-18",
    address: "الرياض، حي الملقا"
  },
  {
    id: "ORD-003",
    userId: 2,
    userName: "محمد علي",
    items: [
      { productId: 5, name: "عنبر ذهبي", quantity: 1, price: 650 }
    ],
    total: 650,
    status: "processing",
    date: "2024-01-20",
    address: "جدة، حي الروضة"
  },
  {
    id: "ORD-004",
    userId: 2,
    userName: "نورة سعد",
    items: [
      { productId: 6, name: "ليلة عربية", quantity: 3, price: 180 }
    ],
    total: 540,
    status: "pending",
    date: "2024-01-21",
    address: "الدمام، حي الفيصلية"
  }
];

// Sample Messages
const sampleMessages = [
  {
    id: 1,
    name: "خالد العتيبي",
    email: "khaled@email.com",
    subject: "استفسار عن التوصيل",
    message: "السلام عليكم، أريد الاستفسار عن مدة التوصيل إلى منطقة القصيم وهل هناك رسوم إضافية؟",
    date: "2024-01-21",
    read: false
  },
  {
    id: 2,
    name: "فاطمة الزهراني",
    email: "fatima@email.com",
    subject: "طلب عطر خاص",
    message: "مرحباً، هل يمكنكم توفير عطر مخصوص بتركيبة معينة؟ أريد مزيج من العود والورد بتركيز عالي.",
    date: "2024-01-20",
    read: true
  },
  {
    id: 3,
    name: "عبدالله القحطاني",
    email: "abdullah@email.com",
    subject: "شكر وتقدير",
    message: "أشكركم على جودة العطور الممتازة، طلبت عطر عود ملكي ووصلني بحالة ممتازة. سأكون زبوناً دائماً.",
    date: "2024-01-19",
    read: true
  }
];

// ========================================
// Store Class - Central State Management
// ========================================
class Store {
  constructor() {
    this.loadFromStorage();
  }

  loadFromStorage() {
    this.products = JSON.parse(localStorage.getItem('products')) || [...samplePerfumes];
    this.users = JSON.parse(localStorage.getItem('users')) || [...sampleUsers];
    this.orders = JSON.parse(localStorage.getItem('orders')) || [...sampleOrders];
    this.messages = JSON.parse(localStorage.getItem('messages')) || [...sampleMessages];
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    this.wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
  }

  saveToStorage() {
    localStorage.setItem('products', JSON.stringify(this.products));
    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.setItem('orders', JSON.stringify(this.orders));
    localStorage.setItem('messages', JSON.stringify(this.messages));
    localStorage.setItem('cart', JSON.stringify(this.cart));
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }

  // Products
  getProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.find(p => p.id === parseInt(id));
  }

  addProduct(product) {
    product.id = Date.now();
    this.products.push(product);
    this.saveToStorage();
  }

  updateProduct(id, updatedProduct) {
    const index = this.products.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedProduct };
      this.saveToStorage();
    }
  }

  deleteProduct(id) {
    this.products = this.products.filter(p => p.id !== parseInt(id));
    this.saveToStorage();
  }

  // Cart
  addToCart(productId, quantity = 1) {
    const existingItem = this.cart.find(item => item.productId === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({ productId, quantity });
    }
    this.saveToStorage();
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.productId !== productId);
    this.saveToStorage();
  }

  updateCartQuantity(productId, quantity) {
    const item = this.cart.find(item => item.productId === productId);
    if (item) {
      item.quantity = quantity;
      this.saveToStorage();
    }
  }

  clearCart() {
    this.cart = [];
    this.saveToStorage();
  }

  getCartTotal() {
    return this.cart.reduce((total, item) => {
      const product = this.getProductById(item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  }

  // Wishlist
  toggleWishlist(productId) {
    const index = this.wishlist.indexOf(productId);
    if (index === -1) {
      this.wishlist.push(productId);
    } else {
      this.wishlist.splice(index, 1);
    }
    this.saveToStorage();
  }

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  }

  // Authentication
  login(email, password) {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.currentUser = { ...user, password: undefined };
      this.saveToStorage();
      return true;
    }
    return false;
  }

  register(name, email, password) {
    if (this.users.find(u => u.email === email)) {
      return false;
    }
    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      role: 'user',
      avatar: name.split(' ').map(n => n[0]).join('').substring(0, 2)
    };
    this.users.push(newUser);
    this.currentUser = { ...newUser, password: undefined };
    this.saveToStorage();
    return true;
  }

  logout() {
    this.currentUser = null;
    this.saveToStorage();
  }

  // Orders
  getOrders() {
    return this.orders;
  }

  getUserOrders(userId) {
    return this.orders.filter(o => o.userId === userId);
  }

  createOrder(address) {
    const order = {
      id: `ORD-${String(this.orders.length + 1).padStart(3, '0')}`,
      userId: this.currentUser.id,
      userName: this.currentUser.name,
      items: this.cart.map(item => {
        const product = this.getProductById(item.productId);
        return {
          productId: item.productId,
          name: product.name,
          quantity: item.quantity,
          price: product.price
        };
      }),
      total: this.getCartTotal(),
      status: 'pending',
      date: new Date().toISOString().split('T')[0],
      address
    };
    this.orders.push(order);
    this.clearCart();
    this.saveToStorage();
    return order;
  }

  updateOrderStatus(orderId, status) {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.status = status;
      this.saveToStorage();
    }
  }

  // Messages
  getMessages() {
    return this.messages;
  }

  addMessage(message) {
    message.id = Date.now();
    message.date = new Date().toISOString().split('T')[0];
    message.read = false;
    this.messages.unshift(message);
    this.saveToStorage();
  }

  markMessageAsRead(id) {
    const message = this.messages.find(m => m.id === id);
    if (message) {
      message.read = true;
      this.saveToStorage();
    }
  }

  deleteMessage(id) {
    this.messages = this.messages.filter(m => m.id !== id);
    this.saveToStorage();
  }
}

// Initialize Store
const store = new Store();

// ========================================
// UI Helper Functions
// ========================================

// Create SVG Icons
const icons = {
  logo: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>`,
  
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  
  chat: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>`,
  
  send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  
  package: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16.5 9.4 7.55 4.24"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  
  dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>`,
  
  orders: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  
  products: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  
  messages: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  
  gift: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
  
  headphones: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`,
  
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  
  minus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
  
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  
  bot: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5 2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5z"/></svg>`,
  
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  
  twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>`,
  
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`
};

// Format Price
function formatPrice(price) {
  return `${price} ر.س`;
}

// Get Status Label
function getStatusLabel(status) {
  const labels = {
    pending: 'قيد الانتظار',
    processing: 'قيد التجهيز',
    shipped: 'تم الشحن',
    delivered: 'تم التوصيل'
  };
  return labels[status] || status;
}

// Generate Stars
function generateStars(rating) {
  return Array(5).fill(0).map((_, i) => 
    `<svg viewBox="0 0 24 24" fill="${i < Math.floor(rating) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
  ).join('');
}

// ========================================
// Export for use in other files
// ========================================
window.store = store;
window.icons = icons;
window.formatPrice = formatPrice;
window.getStatusLabel = getStatusLabel;
window.generateStars = generateStars;
