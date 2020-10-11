import { getAllDataJs, getDataJs } from './lib'

export default function setupJournal() {
  const pages = getAllDataJs('page')
  const journalFormButton = getDataJs('journal-form-btn')
  const pageForm = document.querySelector('[data-name=journal-form]')

  journalFormButton.addEventListener('click', navigateToForm)

  function navigateToForm() {
    pages.forEach((page) => {
      page.classList.toggle(
        'hidden',
        page.dataset.name !== pageForm.dataset.name
      )
    })
  }
}
