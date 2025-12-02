export function createNavbar(){
    return `
    <ul class="navbar-list">
      <li class="navbar-item">
        <button class="navbar-link active" data-nav-link data-page="about">About</button>
      </li>
      <li class="navbar-item">
        <button class="navbar-link" data-nav-link data-page="resume">Resume</button>
      </li>
      <li class="navbar-item">
        <button class="navbar-link" data-nav-link data-page="publication">Publication</button>
      </li>
      <li class="navbar-item">
        <button class="navbar-link" data-nav-link data-page="contact">Contact</button>
      </li>
    </ul>
  `;
}

export function initNavbarNavigation(navigateToPage) {
    const navLinks = document.querySelectorAll("[data-nav-link]");

    navLinks.forEach(link => {
        link.addEventListener("click", function(){
            const page = this.getAttribute("data-page");

            navLinks.forEach(link => link.classList.remove("active"));

            this.classList.add("active");

            navigateToPage(page);
        });
    });
}