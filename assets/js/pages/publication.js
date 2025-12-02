export function createPublicationPage(publicationsData) {
  const publications = publicationsData?.publications || [];
  
  return `
    <article class="portfolio" data-page="publication">
      <header>
        <h2 class="h2 article-title">Publication</h2>
      </header>

      <section class="projects">
        <ul class="project-list">
          ${publications.map(pub => `
            <li class="project-item active">
              <h3 class="project-title">
                <a href="${pub.url}" style="font-weight: bold;">${pub.title}</a> <br>
                ${pub.authors}
              </h3>
              <p class="project-category">${pub.category}</p>
              <br>
            </li>
          `).join('')}
        </ul>
      </section>
    </article>
  `;
}

export function initPublicationFilters() {
  // No filters needed anymore
}