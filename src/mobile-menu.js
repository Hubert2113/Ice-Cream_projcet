(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mobile-menu-open]'),
    modal: document.querySelector('[data-mobile-menu]'),
     modalClose: document.querySelector('[data-mobile-menu-close]')
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.modalClose.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

const modal = document.querySelector('[data-mobile-menu]')
const close0 = document.querySelector('[close0]');
const close1 = document.querySelector('[close1]');
const close2 = document.querySelector('[close2]');
const close3 = document.querySelector('[close3]');
const close4 = document.querySelector('[close4]');
close0.addEventListener('click', closeModal);
close1.addEventListener('click', closeModal);
close2.addEventListener('click', closeModal);
close3.addEventListener('click', closeModal);
close4.addEventListener('click', closeModal);

function closeModal() {
    modal.classList.toggle('is-hidden');
  }



