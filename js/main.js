"use strict"
 const barsIcon = document.querySelector('.bars i');
 const responsiveMenu = document.querySelector('.responsive-menu');

 barsIcon.addEventListener('click', () => {
     responsiveMenu.classList.toggle('active');
 });

 const closeIcon = document.querySelector('.x i');

 closeIcon.addEventListener('click', () => {
     responsiveMenu.classList.remove('active');
 });
 






