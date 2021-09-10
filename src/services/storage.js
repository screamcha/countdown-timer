export default class StorageService {
  keys = {
    TIMERS: 'timers'
  }

  setItem (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  getItem (key) {
    const item = localStorage.getItem(key)
    if (item) {
      return JSON.parse(item)
    }
  }

  deleteItem (key) {
    localStorage.removeItem(key)
  }
}
