
const createStoreBtn = document.querySelector('.create-store-btn')
const modal = document.querySelector('.modal-wrap')
const closeModalBtn = document.querySelector('.close-modal-btn')

createStoreBtn.addEventListener('click', () => {
  modal.classList.toggle('d-flex')
})

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('d-flex')
})

const mobMenuBurger = document.querySelector('.burger-icon')
const closeMobMenuBtn = document.querySelector('.close-mob-menu-btn')
const mobMenu = document.querySelector('.sidebar-wrap')

mobMenuBurger.addEventListener('click', () => {
  mobMenu.classList.add('active')
})

closeMobMenuBtn.addEventListener('click', () => {
  mobMenu.classList.remove('active')
})