const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('#menu');
function closeMenu(){menu.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');}
menuButton.addEventListener('click',()=>{const opened=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!opened));menu.classList.toggle('is-open',!opened);});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
const dialog=document.querySelector('#gallery-dialog');
const image=document.querySelector('#gallery-image');
const caption=document.querySelector('#gallery-caption');
let galleryOpener=null;
document.querySelectorAll('[data-gallery]').forEach(button=>button.addEventListener('click',()=>{galleryOpener=button;image.src=button.dataset.gallery;image.alt=button.dataset.caption;caption.textContent=button.dataset.caption;dialog.classList.toggle('feedback-dialog',button.classList.contains('feedback-open'));dialog.showModal();}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{galleryOpener?.focus();image.removeAttribute('src');});

const storyPlayers=[...document.querySelectorAll('.story-player')];
storyPlayers.forEach(player=>player.addEventListener('play',()=>{
  storyPlayers.forEach(other=>{if(other!==player)other.pause();});
}));
