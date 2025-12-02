export function createResumePage(skillsData) {
  return `
    <article class="resume" data-page="resume">
      <header>
        <h2 class="h2 article-title">Resume</h2>
      </header>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 class="h3">Education</h3>
        </div>

        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Hong Kong University of Science and Technology</h4>
            <span>2023 — now</span>
            <p class="timeline-text">
              Pursuing PhD's Degree with HKPFS
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Hong Kong University of Science and Technology</h4>
            <span>2019 — 2023</span>
            <p class="timeline-text">
              Received Bachelor's Degree of Mathematics and Computer Science.
            </p>
          </li>
        </ol>
      </section>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 class="h3">Project Experience</h3>
        </div>

        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Co-Speech gesture generation related research project</h4>
            <span>2024 — now</span>
            <p class="timeline-text">
              Researcher and Developer
            </p>
          </li>
          
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">VR Gaming network and encoding protocol design</h4>
            <span>2023 — now</span>
            <p class="timeline-text">
              Researcher and Developer
            </p>
          </li>
        </ol>
      </section>
    </article>
  `;
}