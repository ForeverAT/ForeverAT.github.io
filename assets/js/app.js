import { loadAllData } from "./utils/dataLoader.js";
import { createSidebar, initSidebarToggle } from "./components/sidebar.js";
import { createNavbar, initNavbarNavigation } from "./components/navbar.js";
import { createAboutPage } from "./pages/about.js";
import { createResumePage } from "./pages/resume.js";
import { createPublicationPage } from "./pages/publication.js";
import { createContactPage, initContactForm } from "./pages/contact.js";

let appData = null;

async function initApp() {
  try {
    console.log('Loading data...');
    appData = await loadAllData();
    console.log('Data loaded:', appData);

    if (!appData || !appData.profile){
      console.error('Failed to load profile data', appData);
      return;
    }

    const sidebarContainer = document.getElementById('sidebar-container');
    if(sidebarContainer) {
      sidebarContainer.innerHTML = createSidebar(appData.profile);
      initSidebarToggle();
    }

    const navbarContainer = document.getElementById('navbar-container');
    if(navbarContainer) {
      navbarContainer.innerHTML = createNavbar();
      initNavbarNavigation(navigateToPage);
    }

    navigateToPage('about');
  } catch (error){
    console.error('Error initializing app:', error);
  }
}

function navigateToPage(pageName){
  console.log('Navigating to page:', pageName);
  console.log('Available data:', appData);
  
  const pageContainer = document.getElementById('page-container');
  if (!pageContainer) {
    console.error('Page container not found!');
    return;
  }

  let pageHTML = '';

  try {
    switch (pageName) {
      case 'about':
        console.log('Creating about page with skills:', appData.skills);
        pageHTML = createAboutPage(appData.skills);
        break;
      case 'resume':
        console.log('Creating resume page with skills:', appData.skills);
        pageHTML = createResumePage(appData.skills);
        break;
      case 'publication':
        console.log('Creating publication page with data:', appData.publications);
        pageHTML = createPublicationPage(appData.publications);
        break;
      case 'contact':
        console.log('Creating contact page');
        pageHTML = createContactPage();
        break;
      default:
        pageHTML = createAboutPage(appData.skills);
    }

    pageContainer.innerHTML = pageHTML;
    console.log('Page HTML set successfully');

    // Make sure the article is visible
    const article = pageContainer.querySelector('article');
    if (article) {
      article.classList.add('active');
      console.log('Article activated:', article);
    }

    if (pageName === 'contact') {
      initContactForm();
    }

    window.scrollTo(0, 0);
  } catch (error) {
    console.error('Error creating page:', error);
    pageContainer.innerHTML = `<div class="error">Error loading page: ${error.message}</div>`;
  }
}

document.addEventListener('DOMContentLoaded', initApp);