const refs = {
  btnOpen: document.querySelector("[data-modal-open]"),
  btnClose: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
};

const toggleModal = () => {
  refs.modal.classList.toggle("is-hidden");
  document.body.classList.toggle("no-scrool");
};

refs.btnOpen.addEventListener("click", toggleModal);
refs.btnClose.addEventListener("click", toggleModal);
