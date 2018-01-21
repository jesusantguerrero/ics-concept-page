// Jesus Guerrero
// 19 ene 2018
console.log($);
$(function(){
  (() => {
     //  get the parent and the py buttons
     const parent = $('body, html');
     const btnSections = document.querySelectorAll('.btn-spy');

     //  get the href of the section to scroll and their offsets
     btnSections.forEach((btn) => {
       const id = btn.href.slice(1);
       const offset = document.getElementById(href).offsetTop;
       const speed = btn.dataset.speed || 500
       // ready to scroll on click
       btn.addEventListener('click', (e) => {
         e.preventDefault();
         parent.animate({ scrollTop: offset
         }, speed)
       })
     })
   })()
 })
