'use strict';

document.addEventListener('DOMContentLoaded', function () {
	const a = document.getElementById('link-conversion');

	a.setAttribute(
		'href',
		a.getAttribute('href')
			.replace('to-', 'mailto:jo')
			.replace('jbba', 'b@')
			.replace('-it/', 'samuelepadula.it')
	);
});
