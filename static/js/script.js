/*jslint browser */
/*ES6*/
const navigate = document.querySelector('.navigation');
const bars = document.querySelector('.btn-icon-bars');
const links = document.querySelectorAll('.nav-link');


const toggleNavigation = () => {
    if(navigate.style.display === "flex") {
        navigate.style.display = "none";
    } else {
        navigate.style.display="flex";
    }
}


bars.addEventListener('click', (e) => {
    'use strict';
    // navigate.classList.toggle('hidden'); 
    toggleNavigation();
});

links.forEach(link => {
    link.addEventListener('click', (e) => {
       toggleNavigation();
    })
})