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
