// script.js

const products = document.querySelectorAll('.product');
const cartItemsContainer = document.querySelector('.cart-items');
const totalPriceElement = document.getElementById('total-price');

let cart = {};

// Add event listeners to all "Add to Cart" buttons
products.forEach((product) => {
  const addToCartButton = product.querySelector('.add-to-cart');
  addToCartButton.addEventListener('click', () => {
    const name = product.dataset.name;
    const price = parseInt(product.dataset.price, 10);

    if (!cart[name]) {
      cart[name] = { price, quantity: 1 };
    } else {
      cart[name].quantity++;
    }

    updateCart();
  });
});

// Update the cart display and total price
function updateCart() {
  cartItemsContainer.innerHTML = '';

  let total = 0;

  Object.keys(cart).forEach((itemName) => {
    const item = cart[itemName];
    total += item.price * item.quantity;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    cartItem.innerHTML = `
      <h4>${itemName}</h4>
      <div>
        <button class="decrease-quantity">-</button>
        <span class="quantity">${item.quantity}</span>
        <button class="increase-quantity">+</button>
      </div>
      <p>₹${item.price * item.quantity}</p>
    `;

    // Handle quantity changes
    cartItem.querySelector('.increase-quantity').addEventListener('click', () => {
      item.quantity++;
      updateCart();
    });

    cartItem.querySelector('.decrease-quantity').addEventListener('click', () => {
      item.quantity--;
      if (item.quantity === 0) {
        delete cart[itemName];
      }
      updateCart();
    });

    cartItemsContainer.appendChild(cartItem);
  });

  if (total === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty!</p>';
  }

  totalPriceElement.textContent = total;
}
