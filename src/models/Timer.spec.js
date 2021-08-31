import Timer from './Timer'

describe('Timer model', () => {
  let timer

  describe('calculateDifference', () => {
    it('should calculate correct difference with date in same month', () => {
      timer = new Timer('test timer', '2021-09-10')
      const currentDate = new Date('2021-09-07T12:00:00+00:00')

      const expected = {
        years: 0,
        months: 0,
        days: 2,
        hours: 12,
        minutes: 0,
        seconds: 0
      }

      const actual = timer.calculateDifference(currentDate)
      expect(actual).toEqual(expected)
    })

    it('should calculate correct difference with date in next month', () => {
      timer = new Timer('test timer', '2021-09-01')
      const currentDate = new Date('2021-08-20T12:00:00+00:00')

      const expected = {
        years: 0,
        months: 0,
        days: 11,
        hours: 12,
        minutes: 0,
        seconds: 0
      }

      const actual = timer.calculateDifference(currentDate)
      expect(actual).toEqual(expected)
    })
  })
})
