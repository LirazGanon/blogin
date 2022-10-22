'use strict'

function oninit() {
    let elCurrLink = document.querySelector('.li-nav-link')
    const elNavLink = document.querySelectorAll('.li-nav-link')
    elNavLink.forEach(link => link.addEventListener('click',(e)=>{
        elCurrLink.classList.remove('current-page-bottom')
        elCurrLink.firstChild.classList.remove('current-page-color')
        elCurrLink = (e.target.tagName === 'A')? e.target.parentElement: e.target 
        elCurrLink.classList.add('current-page-bottom')
        elCurrLink.firstChild.classList.add('current-page-color')
    }
    ))
}

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}

function toggleModal() {
    document.body.classList.toggle('modal-open')
}