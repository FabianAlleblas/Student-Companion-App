import { getAllDataJs, getDataJs } from './lib'

export default function setupJournalForm() {
  const form = getDataJs('form')

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    form.reset()
  })
}
