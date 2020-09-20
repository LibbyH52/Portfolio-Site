/*jslint browser */
/*ES6*/

const navigate = document.querySelector('ul');
const bars = document.querySelector('#icon-bars');
const links = document.querySelectorAll('.nav-link');

bars.addEventListener('click', (e) => {
    'use strict';
    navigate.classList.toggle('hidden');
});

links.forEach(link => {
    link.addEventListener('click', (e) => {
        navigate.classList.add('hidden');
    })
})