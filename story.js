let text = document.getElementById('text');
let kiri = document.getElementById('kiri.png');
let kanan = document.getElementById('kanan.png');
window.addEventListener('scroll',() => {
    let value = window.scrollY;

text.style.marginTop = value * 2.5 + 'px'; 
kiri.style.left = value * -.9 + 'px'; 
kanan.style.left = value * .9 + 'px'; 
});