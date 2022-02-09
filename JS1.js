const boutonMenu = document.querySelector('.menugrp')
const listeMenu1 = document.querySelector('.menu')
const liens1 = document.querySelector('.lienshide')
const closeBtn = document.querySelector('.closebouton')


// boutonMenu.addEventListener('click', function() {
//     if (listeMenu1.style.display == 'none') {
//         listeMenu1.style.display = "flex";
//     } else {
//         listeMenu1.style.display = 'none';
//     }
// });

boutonMenu.addEventListener('click', function() {
    if(listeMenu1.classList.contains('closedmenu'))
    {
        listeMenu1.classList.remove('closedmenu')
        listeMenu1.classList.add('openmenu');
        boutonMenu.style.color = "white";
        closeBtn.classList.remove('closeboutonhidden')
        setTimeout(function (){
  
            liens1.classList.add('liensmenuopen');
                      
          }, 300);
        
       
    } else { 
        listeMenu1.classList.add('closedmenu')
        listeMenu1.classList.remove('openmenu');
        liens1.classList.remove('liensmenuopen');
        closeBtn.classList.add('closeboutonhidden')
        boutonMenu.style.color = "black";

    }
})
