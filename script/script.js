const bar=document.querySelector('.barr');
const menuSamping=document.querySelector('.menu-samping');

//membuat even saat bar di click menu samping akan muncul di atas layar

bar.addEventListener('click', () => {
  menuSamping.classList.toggle('show')
});

//membuat even saat menu samping di click menu samping akan dimatikan