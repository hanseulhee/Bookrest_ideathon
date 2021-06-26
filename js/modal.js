const modalOpenBtn = document.querySelector(".js-modalBtn");

const modal = document.querySelector(".js-modal");

const MODAL_CN = "modal__hidden";

const modalCloseBtn = document.querySelector(".js-modalCloseBtn");

const handleOpenModal = () => {
    modal.classList.remove(MODAL_CN);
};

const handleCloseModal = () => {
    modal.classList.add(MODAL_CN);

};

function init (){
    modalOpenBtn.addEventListener("click", handleOpenModal);
    modalCloseBtn.addEventListener("click", handleCloseModal);
}

init();