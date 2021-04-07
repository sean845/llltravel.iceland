'use strict';
{
   const menuIcon = document.getElementById('humbuger');
   const humbugerMenu = document.getElementById('humbuger-menu');
   const line = document.getElementById('line');
   menuIcon.addEventListener('click', () => {
       humbugerMenu.classList.toggle('humbuger-show')
       line.classList.toggle('spin');
   });
}
