//* Sélection des éléments HTML */
const toggler = document.getElementById('navbar-toggle');
const icon = document.querySelector('#navbar-toggle i');

//la navigation afficher
const navmobile = document.getElementById('navbar-collapse');

function menumobil() {
    navmobile.classList.toggle('visible');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.add('fa-xmark');
        icon.classList.remove('fa-bars');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
}
// CODE PRINCIPAL
//

document.addEventListener("DOMContentLoaded", function() {
    toggler.addEventListener('click', menumobil);
});