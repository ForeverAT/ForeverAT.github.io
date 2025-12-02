export function createSidebar(profileData) {
    if (!profileData) return '';

    return`
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="${profileData.avatar}" alt="${profileData.name}" width="80">
      </figure>

      <div class="info-content">
        <p class="name" title="${profileData.name}">${profileData.name}</p>
        <p class="title">${profileData.title}</p>
      </div>

      <button class="info_more-btn" data-sidebar-btn>
        <span>Show Contacts</span>
        <ion-icon name="chevron-down"></ion-icon>
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator"></div>

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="mail-outline"></ion-icon>
          </div>
          <div class="contact-info">
            <p class="contact-title">Email</p>
            <a href="mailto:${profileData.email}" class="contact-link">${profileData.email}</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-github"></ion-icon>
          </div>
          <div class="contact-info">
            <p class="contact-title">Github</p>
            <a href="${profileData.github}" class="contact-link">ForeverAT</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline"></ion-icon>
          </div>
          <div class="contact-info">
            <p class="contact-title">Location</p>
            <address>${profileData.location}</address>
          </div>
        </li>
      </ul>

      <div class="separator"></div>

      <ul class="social-list">
        <li class="social-item">
          <a href="${profileData.socialLinks.googleScholar}" class="social-link">
            <ion-icon name="logo-google"></ion-icon>
          </a>
        </li>
        <li class="social-item">
          <a href="${profileData.socialLinks.linkedin}" class="social-link">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
      </ul>
    </div>`;
}

export function initSidebarToggle() {
    const sidebar = document.querySelector("[data-sidebar]");
    const sidebarBtn = document.querySelector("[data-sidebar-btn]");

    if(sidebarBtn){
        sidebarBtn.addEventListener("click", function (){
            sidebar?.classList.toggle("active");
        });
    }
}