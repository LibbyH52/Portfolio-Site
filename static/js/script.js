/*jslint browser */
/*ES6*/
const navigate = document.querySelector('.navigation');
const bars = document.querySelector('.btn-icon-bars');
const links = document.querySelectorAll('.nav-link');


const toggleNavigation = () => {
    if(navigate.style.display === "none") {
        navigate.style.display = "flex";
    } else {
        navigate.style.display="none";
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