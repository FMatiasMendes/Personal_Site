document.querySelector('.js-header').innerHTML = `
	<nav>
		<div class="menu-icon">☰</div>
		<ul class="nav-links">
			<li><a href="index.html">Home</a></li>
			<li>
				<a href="#">Projects</a>
				<ul class="dropdown">
					<li>
						<a href="project1.html">Construction Company Website</a>
					</li>
					<li>
						<a href="/projects/stock_management_Site/index.php" target="_blank">Stock Management</a>
					</li>
					<li>
						<a href="/projects/paper_rock_scissors/index.html" target="_blank">Paper, Rock, Scissors Game</a>
					</li>
					<li>
						<a href="/projects/temperature_converter/index.html" target="_blank">Temperature Converter</a>
					</li>
				</ul>
			</li>
			<li><a href="about.html">About</a></li> 
			<li><a href="contacts.html">Contacts</a></li>
		</ul>
	</nav>
`