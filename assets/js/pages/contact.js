export function createContactPage() {
  return `
    <article class="contact" data-page="contact">
      <header>
        <h2 class="h2 article-title">Contact</h2>
      </header>

      <section class="mapbox" data-mapbox>
        <figure>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38954.69310754465!2d114.23803935701795!3d22.343521536832252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404046aa166ac65%3A0x6225ed82511af284!2sHong%20Kong%20University%20of%20Science%20and%20Technology%20Students&#39;%20Union!5e0!3m2!1sen!2s!4v1724752993251!5m2!1sen!2s" 
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </figure>
      </section>
    </article>
  `;
}

export function initContactForm() {
}