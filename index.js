// ====== QUANTITY COUNTER ======
let quantity = 1;

// Select quantity display and buttons
const qty = document.querySelector('.flex.border div.flex-1');
const minus = document.querySelectorAll('.flex.border div:first-child')[0];
const plus = document.querySelectorAll('.flex.border div:last-child')[0];

// Event listeners for quantity buttons
minus.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    qty.textContent = quantity;
  }
});

plus.addEventListener('click', () => {
  quantity++;
  qty.textContent = quantity;
});

// ====== THUMBNAIL IMAGE CLICK ======
const mainImage = document.getElementById('mainProductImage');
const thumbnails = document.querySelectorAll('.order-2 img'); // all thumbnails

thumbnails.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    mainImage.src = thumb.src;

    // Optional: highlight active thumbnail
    thumbnails.forEach(t => t.classList.remove('border-black'));
    thumb.classList.add('border-black');
  });
});


// ====== TABS FUNCTIONALITY ======
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-tab');

    // Remove active styles from all buttons
    tabButtons.forEach(b => {
      b.classList.remove('text-black', 'border-black', 'font-semibold');
      b.classList.add('text-gray-600', 'border-transparent');
    });

    // Add active styles to clicked button
    btn.classList.add('text-black', 'border-black', 'font-semibold');
    btn.classList.remove('text-gray-600', 'border-transparent');

    // Hide all tab contents
    tabContents.forEach(content => content.classList.add('hidden'));

    // Show target tab content
    const activeTab = document.getElementById(target);
    if (activeTab) {
      activeTab.classList.remove('hidden');
    }
  });
});
