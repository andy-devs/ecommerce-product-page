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

minus.addEventListener('click', (event) => {
	if (parseInt(result.textContent) > 0) {
		result.textContent = parseInt(result.textContent) - 1;
	}
});
plus.addEventListener('click', (event) => {
	result.textContent = parseInt(result.textContent) + 1;
});
