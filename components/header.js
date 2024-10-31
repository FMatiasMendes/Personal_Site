document.querySelector('.js-header').innerHTML = `
	<nav>
		<div class="menu-icon">☰</div>
		<ul class="nav-links">
			<li><a href="#">Home</a></li>
			<li>
				<a href="#">Projects</a>
				<ul class="dropdown">
					<li><a href="project1.html">Project 1</a></li>
					<li><a href="project2.html">Project 2</a></li>
					<li><a href="project3.html">Project 3</a></li>
				</ul>
			</li>
			<li><a href="#">About</a></li> 
			<li><a href="#">Contact</a></li>
		</ul>
	</nav>
	`