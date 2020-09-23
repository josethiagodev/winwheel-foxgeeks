/* Modal Register */
function modalRegister(modalID) {
    const openModalRegister = document.getElementById(modalID);
    openModalRegister.classList.add('showModalRegister');
}

/* BTN ABRIR > Modal Register */
const btnModalRegister = document.getElementById('btnModalRegister');
btnModalRegister.addEventListener('click', () => {
    modalRegister('openModalRegister');
});

/* BTN FECHAR > Modal Register */
const closeModalRegister = document.getElementById('closeModalRegister');
closeModalRegister.addEventListener('click', () => {
    openModalRegister.classList.remove('showModalRegister');
});

/* FECHAR AO CLICK > Modal Register */
const closeOverlayModalRegister = document.getElementById('closeOverlayModalRegister');
closeOverlayModalRegister.addEventListener('click', () => {
    openModalRegister.classList.remove('showModalRegister');
});

/* ABRINDO AUTOMÁTICO > Modal Register */
window.addEventListener('load', () => {
    openModalRegister.classList.add('showModalRegister');
});