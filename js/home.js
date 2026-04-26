// ========================================
// HOME PAGE - JavaScript
// ========================================

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  loadProducts();
  updateCartUI();
  updateUserUI();
  initChatbot();
});

// ========================================
// PRODUCTS
// ========================================

let currentCategory = null;

function loadProducts(category = null) {
  const grid = document.getElementById('productsGrid');
  let products = store.getProducts();
  
  if (category) {
    products = products.filter(p => p.category === category);
    currentCategory = category;
  } else {
    currentCategory = null;
  }
  
  grid.innerHTML = products.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
  const isWishlisted = store.isInWishlist(product.id);
  
  return `
    <div class="product-card" onclick="viewProduct(${product.id})">
      <div class="product-image">
        <img src="${product.images[0]}" alt="${product.name}">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        <button class="product-wishlist ${isWishlisted ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist(${product.id})">
          <svg viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
      <div class="product-info">
        <div class="product-brand">${product.brand}</div>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-category">${product.category} - ${product.size}</div>
        <div class="product-price">
          <span class="current">${formatPrice(product.price)}</span>
          ${product.oldPrice ? `<span class="old">${formatPrice(product.oldPrice)}</span>` : ''}
        </div>
      </div>
    </div>
  `;
}

function viewProduct(id) {
  window.location.href = `product.html?id=${id}`;
}

function filterByCategory(category) {
  loadProducts(category);
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  showToast(`عرض عطور ${category}`);
}

function showAllProducts() {
  loadProducts();
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function toggleWishlist(productId) {
  store.toggleWishlist(productId);
  loadProducts(currentCategory);
  
  const isWishlisted = store.isInWishlist(productId);
  showToast(isWishlisted ? 'تمت الإضافة للمفضلة' : 'تمت الإزالة من المفضلة');
}

// ========================================
// CART
// ========================================

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
  
  if (sidebar.classList.contains('active')) {
    renderCartItems();
  }
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const cart = store.cart;
  
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <h3>السلة فارغة</h3>
        <p>لم تضف أي منتجات بعد</p>
      </div>
    `;
  } else {
    container.innerHTML = cart.map(item => {
      const product = store.getProductById(item.productId);
      if (!product) return '';
      
      return `
        <div class="cart-item">
          <div class="cart-item-image">
            <img src="${product.images[0]}" alt="${product.name}">
          </div>
          <div class="cart-item-info">
            <h4>${product.name}</h4>
            <p>${product.brand} - ${product.size}</p>
            <div class="price">${formatPrice(product.price * item.quantity)}</div>
            <div style="display: flex; align-items: center; gap: 8px; margin-top: 8px;">
              <button onclick="updateQuantity(${item.productId}, ${item.quantity - 1})" style="width: 28px; height: 28px; border: 1px solid var(--gray-light); background: none; border-radius: 4px; cursor: pointer;">-</button>
              <span>${item.quantity}</span>
              <button onclick="updateQuantity(${item.productId}, ${item.quantity + 1})" style="width: 28px; height: 28px; border: 1px solid var(--gray-light); background: none; border-radius: 4px; cursor: pointer;">+</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${item.productId})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </div>
      `;
    }).join('');
  }
  
  updateCartUI();
}

function addToCart(productId) {
  store.addToCart(productId, 1);
  updateCartUI();
  showToast('تمت الإضافة للسلة');
}

function removeFromCart(productId) {
  store.removeFromCart(productId);
  renderCartItems();
  showToast('تمت الإزالة من السلة');
}

function updateQuantity(productId, quantity) {
  if (quantity < 1) {
    removeFromCart(productId);
  } else {
    store.updateCartQuantity(productId, quantity);
    renderCartItems();
  }
}

function updateCartUI() {
  const countEl = document.getElementById('cartCount');
  const totalEl = document.getElementById('cartTotal');
  
  const itemCount = store.cart.reduce((sum, item) => sum + item.quantity, 0);
  countEl.textContent = itemCount;
  
  if (totalEl) {
    totalEl.textContent = formatPrice(store.getCartTotal());
  }
}

function checkout() {
  if (!store.currentUser) {
    showToast('يرجى تسجيل الدخول أولاً');
    window.location.href = 'login.html';
    return;
  }
  
  if (store.cart.length === 0) {
    showToast('السلة فارغة');
    return;
  }
  
  const address = prompt('أدخل عنوان التوصيل:');
  if (address) {
    const order = store.createOrder(address);
    toggleCart();
    showToast(`تم إنشاء الطلب ${order.id} بنجاح!`);
  }
}

// ========================================
// USER
// ========================================

function updateUserUI() {
  const dropdown = document.getElementById('userDropdown');
  const user = store.currentUser;
  
  if (user) {
    dropdown.innerHTML = `
      <a href="${user.role === 'admin' ? 'admin.html' : 'dashboard.html'}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>
        لوحة التحكم
      </a>
      <a href="#" onclick="logout()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        تسجيل خروج
      </a>
    `;
  } else {
    dropdown.innerHTML = `
      <a href="login.html">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
        تسجيل الدخول
      </a>
    `;
  }
}

function logout() {
  store.logout();
  updateUserUI();
  showToast('تم تسجيل الخروج');
}

// ========================================
// CONTACT FORM
// ========================================

function submitContactForm(event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);
  
  const message = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message')
  };
  
  store.addMessage(message);
  form.reset();
  showToast('تم إرسال رسالتك بنجاح!');
}

// ========================================
// CHATBOT
// ========================================

let chatState = {
  step: 0,
  preferences: {}
};

const chatFlow = [
  {
    message: 'مرحباً! أنا مساعدك الشخصي لاختيار العطر المثالي. هل أنت مستعد لنبدأ؟',
    options: ['نعم، هيا نبدأ!', 'أريد تصفح العطور بنفسي']
  },
  {
    message: 'رائع! هل العطر لك أم لشخص آخر؟',
    options: ['لي شخصياً', 'هدية لشخص آخر']
  },
  {
    message: 'ما هو الجنس المستهدف للعطر؟',
    options: ['رجالي', 'نسائي', 'للجنسين']
  },
  {
    message: 'ما نوع الروائح التي تفضلها؟',
    options: ['العود والمسك', 'الأزهار والورود', 'الحمضيات المنعشة', 'التوابل الدافئة']
  },
  {
    message: 'ما هي ميزانيتك التقريبية؟',
    options: ['أقل من 300 ش.ج', '300 - 500 ش.ج', 'أكثر من 500 ش.ج']
  }
];

function initChatbot() {
  const messagesContainer = document.getElementById('chatMessages');
  messagesContainer.innerHTML = '';
  chatState = { step: 0, preferences: {} };
  addBotMessage(chatFlow[0].message, chatFlow[0].options);
}

function toggleChatbot() {
  const chatWindow = document.getElementById('chatbotWindow');
  chatWindow.classList.toggle('active');
}

function openChatbot() {
  const chatWindow = document.getElementById('chatbotWindow');
  chatWindow.classList.add('active');
}

function addBotMessage(text, options = null) {
  const messagesContainer = document.getElementById('chatMessages');
  
  const messageDiv = document.createElement('div');
  messageDiv.className = 'chat-message bot';
  messageDiv.innerHTML = `
    <div class="message-avatar">
      <svg viewBox="0 0 24 24" fill="var(--gold-dark)" width="20" height="20"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5 2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5z"/></svg>
    </div>
    <div class="message-content">
      ${text}
      ${options ? `<div class="chat-options">${options.map(opt => `<button class="chat-option" onclick="selectChatOption('${opt}')">${opt}</button>`).join('')}</div>` : ''}
    </div>
  `;
  
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addUserMessage(text) {
  const messagesContainer = document.getElementById('chatMessages');
  
  const messageDiv = document.createElement('div');
  messageDiv.className = 'chat-message user';
  messageDiv.innerHTML = `
    <div class="message-avatar">
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--gray)" stroke-width="2" width="20" height="20"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    </div>
    <div class="message-content">${text}</div>
  `;
  
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function selectChatOption(option) {
  addUserMessage(option);
  
  // Remove previous options
  document.querySelectorAll('.chat-options').forEach(el => el.remove());
  
  // Handle special cases
  if (option === 'أريد تصفح العطور بنفسي') {
    toggleChatbot();
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    return;
  }
  
  // Save preference
  chatState.preferences[`step${chatState.step}`] = option;
  chatState.step++;
  
  if (chatState.step < chatFlow.length) {
    setTimeout(() => {
      addBotMessage(chatFlow[chatState.step].message, chatFlow[chatState.step].options);
    }, 500);
  } else {
    // Generate recommendation
    setTimeout(() => {
      generateRecommendation();
    }, 500);
  }
}

function generateRecommendation() {
  const prefs = chatState.preferences;
  let products = store.getProducts();
  
  // Filter by gender
  const gender = prefs.step2;
  if (gender && gender !== 'للجنسين') {
    products = products.filter(p => p.category === gender || p.category === 'للجنسين');
  }
  
  // Filter by budget
  const budget = prefs.step4;
  if (budget === 'أقل من 300 ش.ج') {
    products = products.filter(p => p.price < 300);
  } else if (budget === '300 - 500 ش.ج') {
    products = products.filter(p => p.price >= 300 && p.price <= 500);
  } else if (budget === 'أكثر من 500 ش.ج') {
    products = products.filter(p => p.price > 500);
  }
  
  // Filter by scent preference
  const scent = prefs.step3;
  if (scent === 'العود والمسك') {
    products = products.filter(p => 
      p.description.includes('عود') || 
      p.description.includes('مسك') ||
      p.name.includes('عود') ||
      p.name.includes('مسك')
    );
  } else if (scent === 'الأزهار والورود') {
    products = products.filter(p => 
      p.description.includes('ورد') || 
      p.description.includes('زهر') ||
      p.description.includes('ياسمين')
    );
  }
  
  // Get best match or random
  const recommended = products.length > 0 
    ? products.sort((a, b) => b.rating - a.rating)[0]
    : store.getProducts()[Math.floor(Math.random() * store.getProducts().length)];
  
  addBotMessage('بناءً على تفضيلاتك، أنصحك بهذا العطر الرائع:');
  
  setTimeout(() => {
    showProductRecommendation(recommended);
  }, 300);
}

function showProductRecommendation(product) {
  const messagesContainer = document.getElementById('chatMessages');
  
  const cardDiv = document.createElement('div');
  cardDiv.className = 'chat-message bot';
  cardDiv.innerHTML = `
    <div class="message-avatar">
      <svg viewBox="0 0 24 24" fill="var(--gold-dark)" width="20" height="20"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5 2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5z"/></svg>
    </div>
    <div class="message-content">
      <div class="chat-product-card">
        <div class="image">
          <img src="${product.images[0]}" alt="${product.name}">
        </div>
        <div class="info">
          <div class="brand">${product.brand}</div>
          <div class="name">${product.name}</div>
          <div class="price">${formatPrice(product.price)}</div>
          <a href="product.html?id=${product.id}" class="view-btn">عرض التفاصيل</a>
        </div>
      </div>
    </div>
  `;
  
  messagesContainer.appendChild(cardDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
  
  setTimeout(() => {
    addBotMessage('هل تريد اقتراحاً آخر أو لديك أي استفسار؟', ['اقتراح آخر', 'أريد هذا العطر', 'شكراً، كفاية']);
  }, 500);
}

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const message = input.value.trim();
  
  if (message) {
    addUserMessage(message);
    input.value = '';
    
    // Simple response
    setTimeout(() => {
      addBotMessage('شكراً على رسالتك! يمكنني مساعدتك في اختيار العطر المناسب. هل تريد أن نبدأ من جديد؟', ['نعم، ابدأ من جديد', 'لا، شكراً']);
    }, 500);
  }
}

function handleChatKeypress(event) {
  if (event.key === 'Enter') {
    sendChatMessage();
  }
}

// Handle special chat options
const originalSelectChatOption = selectChatOption;
window.selectChatOption = function(option) {
  if (option === 'اقتراح آخر') {
    addUserMessage(option);
    document.querySelectorAll('.chat-options').forEach(el => el.remove());
    setTimeout(() => {
      const products = store.getProducts();
      const random = products[Math.floor(Math.random() * products.length)];
      addBotMessage('إليك اقتراح آخر:');
      setTimeout(() => showProductRecommendation(random), 300);
    }, 500);
    return;
  }
  
  if (option === 'أريد هذا العطر') {
    addUserMessage(option);
    document.querySelectorAll('.chat-options').forEach(el => el.remove());
    addBotMessage('ممتاز! يمكنك النقر على "عرض التفاصيل" لمشاهدة المزيد وإضافته للسلة.');
    return;
  }
  
  if (option === 'شكراً، كفاية' || option === 'لا، شكراً') {
    addUserMessage(option);
    document.querySelectorAll('.chat-options').forEach(el => el.remove());
    addBotMessage('سعدت بخدمتك! إذا احتجت أي مساعدة، أنا هنا دائماً.');
    return;
  }
  
  if (option === 'نعم، ابدأ من جديد') {
    addUserMessage(option);
    document.querySelectorAll('.chat-options').forEach(el => el.remove());
    chatState = { step: 0, preferences: {} };
    setTimeout(() => {
      addBotMessage(chatFlow[0].message, chatFlow[0].options);
    }, 500);
    return;
  }
  
  originalSelectChatOption(option);
};

// ========================================
// UTILITY FUNCTIONS
// ========================================

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  
  toastMessage.textContent = message;
  toast.style.transform = 'translateY(0)';
  toast.style.opacity = '1';
  
  setTimeout(() => {
    toast.style.transform = 'translateY(100px)';
    toast.style.opacity = '0';
  }, 3000);
}

function toggleMobileMenu() {
  // Simple mobile menu toggle - can be expanded
  const navLinks = document.querySelector('.nav-links');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}
