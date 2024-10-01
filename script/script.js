const menuIcon=document.getElementById('menu-icon');
const menuSamping=document.getElementById('menu-samping');

menuIcon.addEventListener('click', () => {
    menuSamping.classList.toggle('show');
});