export const debounce = (fn, time) => {
  let timeoutId

  function wrapper (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      fn(...args)
      timeoutId = null
    }, time)
  }
  return wrapper
}