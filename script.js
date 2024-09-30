/**
 * Логика для header
 */

const headerSearchBtn = document.querySelector('.header__search-btn')
const headerSearchInput = document.querySelector('.header__input-search')
const headerSearchInputCloseButton = document.querySelector('.header__search-btn-close')

const toggleHeaderSearchInput = (isOpen) => {
    if (isOpen) {
        headerSearchInput.classList.remove('header__input-search_visible')
        headerSearchInputCloseButton.style.display = 'none'
        headerSearchInput.value = ''
    } else {
        headerSearchInput.classList.add('header__input-search_visible')
        headerSearchInputCloseButton.style.display = 'flex'
    }
}

headerSearchBtn.addEventListener('click', () => toggleHeaderSearchInput(false))
headerSearchInputCloseButton.addEventListener('click', ()=>toggleHeaderSearchInput(true))

