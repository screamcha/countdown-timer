export default class Timer {
  constructor (name, date) {
    this.name = name
    this.date = new Date(date)
  }

  calculateDifference (date) {
    const dividers = {
      days: 24 * 60 * 60 * 1000,
      hours: 60 * 60 * 1000,
      minutes: 60 * 1000,
      seconds: 1000
    }

    const years = date.getFullYear() - this.date.getFullYear()
    const months = date.getMonth() - this.date.getMonth()

    const dateSameYear = new Date(date.setFullYear(date.getFullYear() - years))
    const dateSameMonth = new Date(dateSameYear.setMonth(date.getMonth() - months))

    let differenceInMs = this.date.getTime() - dateSameMonth.getTime()

    const restDifferences = Object.entries(dividers).reduce(
      (result, [divider, value]) => {
        const differenceForDivider = Math.floor(differenceInMs / value)
        result[divider] = differenceForDivider
        differenceInMs -= differenceForDivider * value
        return result
      }, {}
    )

    return {
      years,
      months,
      ...restDifferences
    }
  }
}
