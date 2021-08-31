import { nanoid } from 'nanoid'
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInMonths, differenceInSeconds, differenceInYears, subDays, subHours, subMinutes, subMonths, subSeconds, subYears } from 'date-fns'

export default class Timer {
  constructor (name, date) {
    this.id = nanoid()
    this.name = name
    this.date = new Date(date)
  }

  calculateDifference (date) {
    const functions = {
      years: [differenceInYears, subYears],
      months: [differenceInMonths, subMonths],
      days: [differenceInDays, subDays],
      hours: [differenceInHours, subHours],
      minutes: [differenceInMinutes, subMinutes],
      seconds: [differenceInSeconds, subSeconds]
    }

    let substractableDate = new Date(this.date)

    return Object.entries(functions).reduce(
      (result, [key, [differenceFunc, substractFunc]]) => {
        const difference = differenceFunc(substractableDate, date)
        substractableDate = substractFunc(substractableDate, difference)
        return {
          ...result,
          [key]: difference
        }
      }, {}
    )
  }
}
