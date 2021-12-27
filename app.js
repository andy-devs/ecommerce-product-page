// Header Burger Switch

const headerSwitch = document.querySelector('.header__icon');
const headerNav = document.querySelector('.header__nav');
const headerOpen = document.querySelector('.header__icon-image');
const headerClose = document.querySelector('.header__icon-image--close');
let headerState = false;

headerSwitch.addEventListener('click', (e) => {
	if (!headerState) {
		headerNav.style.width = '250px';
		headerClose.style.display = 'inline';
		headerOpen.style.display = 'none';
		headerState = true;
	} else {
		headerNav.style.width = '0px';
		headerOpen.style.display = 'inline';
		headerClose.style.display = 'none';
		headerState = false;
	}
});

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
const minusImage = document.querySelector('.item__info-count__minus-image');
const plus = document.querySelector('.item__info-count__plus');
const plusImage = document.querySelector('.item__info-count__plus-image');
const result = document.querySelector('.item__info-count__result');

const cartCount = document.querySelector('.header__cart-count');
let countValue = 0;
let cartValue = 0;

minus.addEventListener('click', (event) => {
	minusImage.style.transform = 'scale(0.8)';
	setTimeout(() => {
		minusImage.style.transform = 'scale(1)';
	}, 200);
	if (countValue > 0) {
		countValue -= 1;
		result.textContent = countValue;
	}
});
plus.addEventListener('click', (event) => {
	plusImage.style.transform = 'scale(0.8)';
	setTimeout(() => {
		plusImage.style.transform = 'scale(1)';
	}, 200);
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

// Splide

const elms = document.getElementsByClassName('splide');

for (var i = 0; i < elms.length; i++) {
	new Splide(elms[i], {
		pagination: false,
	}).mount();
}
