export function getAllDataJs(name) {
  return document.querySelectorAll(`[data-js=${name}]`)
}

export function getDataJs(name) {
  return document.querySelector(`[data-js=${name}]`)
}
