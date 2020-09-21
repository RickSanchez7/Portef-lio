const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const modal = document.querySelector('.work-modal');
const modalItem = document.querySelector('.work-modal-item');
const containerProjects = document.querySelector('.container-projects');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

const eventListeners = (() => {
  class UI {
    // show modal
    showModal(event) {
      event.preventDefault();
      if (event.target.parentElement.classList.contains('portfolio__item')) {
        let id = event.target.parentElement.dataset.id;
        let title = event.target.previousElementSibling.innerHTML;
        let tech = event.target.nextElementSibling.innerHTML;
        let containerProjects = event.target.parentElement.lastElementChild;

        modal.classList.add('show-modal');
        //modalItem.style.backgroundImage = `url(./Images/img-${id}.png)`;
        modal.innerHTML = `
        <div class="work-modal-item">
          <div class="project__left">
            <img src="./Images/img-${id}.png" alt="portfolio__img"  />
            <div class="container-projects">
            ${containerProjects.innerHTML}
            </div>
          </div>
          <div class='project__about'>
          <div class="work-modal-close">
          <i class="fas fa-times"></i>
      </div>
          <h3>${title}</h3>
          ${tech}
          </div>
          
          </div>
          `;
        // hide modal
        const closeBtn = document.querySelector('.work-modal-close');
        closeBtn.addEventListener('click', function (event) {
          ui.closeModal(event);
        });
      }
    }

    //hide modal
    closeModal(event) {
      event.preventDefault();
      modal.classList.remove('show-modal');
    }
  }

  const ui = new UI();

  //display modal
  const icons = document.querySelectorAll('.image');
  icons.forEach(item => {
    item.addEventListener('click', function (event) {
      ui.showModal(event);
    });
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      ui.closeModal(event);
    }
  });
})();
