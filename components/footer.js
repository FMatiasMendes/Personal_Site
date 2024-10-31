let currentDate = new Date();
let currentYear = currentDate.getFullYear();


document.querySelector('.js-footer').innerHTML = `
	<p>&copy; ${currentYear} Filipe Mendes. All rights reserved.</p>
`
