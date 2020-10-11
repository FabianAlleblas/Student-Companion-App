import { getAllDataJs, getDataJs } from './lib'

export default function setupNavigation() {
  const pages = getAllDataJs('page')
  const navLinks = getAllDataJs('nav')
  const heading = getDataJs('heading')
  const subHeading = getDataJs('subheading')
  const header = getDataJs('header')

  navLinks.forEach(addNavLogic)

  function addNavLogic(navLink) {
    navLink.addEventListener('click', changePages)
  }

  function changePages(event) {
    const clickedLink = event.currentTarget
    const targetPageName = clickedLink.dataset.name
    toggleHeader(targetPageName)

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

  function toggleHeader(targetPageName) {
    header.classList.toggle(
      'header-80',
      targetPageName === 'buddy' || targetPageName === 'teams'
    )

    heading.textContent =
      targetPageName === 'buddy' ? 'Code Buddys' : targetPageName

    subHeading.textContent =
      targetPageName === 'buddy'
        ? 'on Monday - 18.07.2020'
        : targetPageName === 'teams'
        ? 'for Exercise 1'
        : ''

    /* subHeading.classList.toggle(
      'hidden',
      targetPageName !== 'buddy' && targetPageName !== 'teams'
    ) */
  }
}
