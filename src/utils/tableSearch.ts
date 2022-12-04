export function tableSearch(tableRef: HTMLInputElement) {
  const val = tableRef.value.toUpperCase().trim(),
    tr = document.querySelectorAll('tbody tr')

  if (val != '') {
    tr.forEach(function (elem) {
      if (elem.innerHTML.toUpperCase().search(val) == -1) {
        elem.classList.add('hide')
      } else {
        elem.classList.remove('hide')
      }
    })
  } else {
    tr.forEach(function (elem) {
      elem.classList.remove('hide')
    })
  }
}
