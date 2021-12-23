// Image Switch and Link Lightbox fix

const additionalImages = document.querySelectorAll(
	'.item__preview-additional__item'
);
const mainImage = document.querySelector('.item__preview-main__image');
const lightboxImage = document.querySelector('.item__preview-main__lightbox');

for (let image of additionalImages) {
	image.addEventListener('click', (event) => {
		if (!event.target.classList.contains('_active')) {
			event.preventDefault();
			for (let im of additionalImages) {
				im.classList.remove('_active');
			}
			image.classList.add('_active');
			mainImage.src = event.target.src;
			lightboxImage.href = event.target.src;
		}
	});
}

// Counter
const minus = document.querySelector('.item__info-count__minus');
const plus = document.querySelector('.item__info-count__plus');
const result = document.querySelector('.item__info-count__result');

const cartCount = document.querySelector('.header__cart-count');
let countValue = 0;
let cartValue = 0;

minus.addEventListener('click', (event) => {
	if (countValue > 0) {
		countValue -= 1;
		result.textContent = countValue;
	}
});
plus.addEventListener('click', (event) => {
	countValue += 1;
	result.textContent = countValue;
});

// Cart dropdown

const cart = document.querySelector('.header__cart');
const cartDropdown = document.querySelector('.header__cart-dropdown');

window.addEventListener('click', (event) => {
	if (!cartDropdown.contains(event.target) && event.target !== cart) {
		cartDropdown.classList.remove('_active');
	}
});
cart.addEventListener('click', (event) => {
	cartDropdown.classList.toggle('_active');
});

// Add Item to Cart

const addButton = document.querySelector('.item__info-cart');

window.onload = () => {
	renderCartItems();
};

addButton.addEventListener('click', (event) => {
	addToCart();
	renderCartItems();
});

function addToCart() {
	if (countValue > 0) {
		cartCount.classList.add('_active');
		cartValue += countValue;
		cartCount.textContent = cartValue;
		result.textContent = '0';
		countValue = 0;
	}
}

// Cart Items View

const block = document.querySelector('.header__cart-dropdown__block');

function renderCartItems() {
	if (cartValue > 0) {
		block.innerHTML = '';
		block.insertAdjacentHTML(
			'afterbegin',
			`<div class="header__cart-dropdown__item">
				<div class="header__cart-dropdown__item-image__wrapper">
					<img
						src="./images/image-product-1.jpg"
						alt=""
						class="header__cart-dropdown__item-image"
					/>
				</div>
				<div class="header__cart-dropdown__item-text">
					<p class=" header__cart-dropdown__item-text__head">
						Fall Limited Edition Sneakers
					</p>
					<p class="header__cart-dropdown__item-text__price">
						$125.00 x ${cartValue}
						<span class="price-label">$${125 * cartValue}.00</span>
					</p>
				</div>
				<img
					src="./images/icon-delete.svg"
					class="header__cart-dropdown__item-delete"
					onclick="removeCartItem(event)"
				/>
				</div>
				<button class="header__cart-dropdown__button">
					Checkout
				</button>
			</div>`
		);
	} else {
		block.innerHTML = '';
		block.insertAdjacentHTML(
			'afterbegin',
			`<p class="header__card-dropdown__block-empty">
				Your cart is empty
			</p>`
		);
	}
}

// Remove Item from Cart

function removeCartItem(event) {
	event.target.parentElement.nextElementSibling.remove();
	event.target.parentNode.remove();
	block.insertAdjacentHTML(
		'afterbegin',
		`<p class="header__card-dropdown__block-empty">
			Your cart is empty
		</p>`
	);
	cartValue = 0;
	cartCount.textContent = cartValue;
	cartCount.classList.remove('_active');
}

// Lightbox

// lightbox.option({
// 	resizeDuration: 200,
// 	wrapAround: true,
// });
