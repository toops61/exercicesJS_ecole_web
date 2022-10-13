document.querySelector('button').addEventListener('click',windowAppears);

function windowAppears() {
    const windowModal = document.querySelector('.modal-window');
    windowModal.classList.toggle('appears');
    document.querySelector('button h2').textContent = windowModal.className.includes('appears') ? 'close' : 'open window';
}