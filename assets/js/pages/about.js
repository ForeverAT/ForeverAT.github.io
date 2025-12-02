export function createAboutPage(skillsData) {
  const projects = skillsData?.projects || [];
  
  const projectsHTML = projects.map(project => `
    <li class="project-item active" data-filter-item data-category="web development">
      <a href="${project.url}">
        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
          <img src="./assets/images/project-1.jpg" alt="${project.title}" loading="lazy">
        </figure>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-category">${project.description}</p>
      </a>
    </li>
  `).join('');

  return `
    <article class="about" data-page="about">
      <header>
        <h2 class="h2 article-title">About me</h2>
      </header>

      <section class="about-text">
        <p>
          I'm a Ph.D. student currently studying at the <a href="https://hkust.edu.hk/">Hong Kong University of Science and Technology (HKUST)</a>, 
          supervised by <a href="https://panhui.people.ust.hk/">Prof. Pan Hui</a>, 
          and working in his leading lab <a href="https://infh.hkust-gz.edu.cn/blog/2022/08/30/mc2-center-for-metaverse-and-computational-creativity/">mc2</a>
        </p>

        <p>
          I also received my Bachelor's Degree from the <a href="https://hkust.edu.hk/">Hong Kong University of Science and Technology (HKUST)</a>, with double major in Mathematics and Computer Science.
        </p>
      </section>

      <section class="service">
        <h3 class="h3 service-title">My Research Interests</h3>
        <ul class="service-list">
          ${(skillsData?.researchInterests || []).map(interest => `
            <li class="service-item">
              <div class="service-content-box">
                <h4 class="h4 service-item-title">${interest.title}</h4>
                <p class="service-item-text">${interest.description}</p>
              </div>
            </li>
          `).join('')}
        </ul>
      </section>

      <section class="Code">
        <h3 class="h3 skills-title">Code</h3>
        <ul class="skills-list content-card">
          ${projects.map(project => `
            <li class="skills-item">
              <div class="title-wrapper">
                <a href="${project.url}">
                  <h5 class="h5">${project.title}</h5>
                </a>
              </div>
              <p>${project.description}</p>
            </li>
          `).join('')}
        </ul>
      </section>
    </article>
  `;
}