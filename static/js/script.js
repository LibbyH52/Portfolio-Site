const navLink = document.querySelector('.navbar-collapse');
const links = navLink.querySelectorAll('li a');
const  close = document.querySelector('.navbar-collapse');

links.forEach(link => {
    link.addEventListener("click", (e) => {
        close.classList.toggle("show")
    });
});
