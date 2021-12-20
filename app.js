// Image Switch

const additionalImages = document.querySelectorAll(
	'.item__preview-additional__item'
);
const mainImage = document.querySelector('.item__preview-main__image');

for (let image of additionalImages) {
	image.addEventListener('click', (event) => {
		if (!event.target.classList.contains('_active')) {
			for (let im of additionalImages) {
				im.classList.remove('_active');
			}
			image.classList.add('_active');
			mainImage.src = event.target.src;
		}
	});
}

// Counter
const minus = document.querySelector('.item__info-count__minus');
const plus = document.querySelector('.item__info-count__plus');
const result = document.querySelector('.item__info-count__result');

const cartCount = document.querySelector('.header__cart-count');
let countValue = 0;

function changeCount() {
	if (result !== 0) {
		cartCount.classList.add('_active');
		cartCount.textContent = countValue;
	}
}

minus.addEventListener('click', (event) => {
	if (parseInt(countValue) > 0) {
		result.textContent = --countValue;
	}
});
plus.addEventListener('click', (event) => {
	result.textContent = ++countValue;
});

// Cart dropdown

const cart = document.querySelector('.header__cart');
const cartDropdown = document.querySelector('.header__cart-dropdown');

window.addEventListener('click', (event) => {
	if (
		!event.target.classList.contains('header__cart-dropdown') &&
		!event.target.classList.contains('header__cart-dropdown__head') &&
		!event.target.classList.contains('header__cart-dropdown__block') &&
		!event.target.classList.contains(
			'header__card-dropdown__block-empty'
		) &&
		!event.target.classList.contains('header__cart')
	) {
		console.log(event.target.classList);
		cartDropdown.classList.remove('_active');
	}
});
cart.addEventListener('click', (event) => {
	cartDropdown.classList.toggle('_active');
});
