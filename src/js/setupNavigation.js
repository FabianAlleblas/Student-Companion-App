import { getAllDataJs, getDataJs } from './lib'

export default function setupNavigation() {
  const pages = getAllDataJs('page')
  const navLinks = getAllDataJs('nav')
  const heading = getDataJs('heading')

  navLinks.forEach(addNavLogic)

  function addNavLogic(navLink) {
    navLink.addEventListener('click', changePages)
  }

  function changePages(event) {
    const clickedLink = event.currentTarget
    const targetPageName = clickedLink.dataset.name

    heading.textContent =
      targetPageName === 'buddy' ? 'Code Buddys' : targetPageName

    pages.forEach((page) => {
      const pageName = page.dataset.name
      page.classList.toggle('hidden', pageName !== targetPageName)
    })

    navLinks.forEach((navLink) => {
      const navButton = navLink.dataset.name
      navLink.classList.toggle(
        'navigation__link--active',
        navButton === targetPageName
      )
    })
  }
}
