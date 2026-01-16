'use strict';

document.addEventListener('DOMContentLoaded', function ()
{
	const a = document.getElementById('link-conversion');

	a.setAttribute('href', a.getAttribute('href')
		.replace('-', 'ob@')
		.replaceAll('-', '.')
		.replace('/', 'samuelepadula.it')
		.replace('to', 'mailto:j')
	);
});
