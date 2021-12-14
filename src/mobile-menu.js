(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mobile-menu-open]'),
    closeModalBtn: document.querySelectorAll('[data-mobile-menu-close]'),
    modal: document.querySelector('[data-mobile-menu]'),
  };

  const modalClose = document.querySelectorAll('[data-mobile-menu-close]');
  modalClose.forEach(addEventListener('click', toggleModal));

  refs.openModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();


