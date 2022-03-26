const dark = document.querySelector('#bdark');

dark.addEventListener('click', () => {
    document.body.classList.toggle('bdark');
    dark.classList.toggle('active');

    //guardar en local
    if (document.body.classList.contains('bdark')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});
//obtenemos el modo actual

if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('bdark');
} else {
    document.body.classList.remove('bdark');
}

//modal

const openModal = document.querySelector('#open');
const modal = document.querySelector('#modal_container');
const closeModal = document.querySelector('#close');

openModal.addEventListener('click', ()=> {
    modal.classList.add('show');
});
closeModal.addEventListener('click', ()=>{
    modal.classList.remove('show');
});