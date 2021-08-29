<template>
  <div class="timer">
    <div class="timer__name">{{ timer.name }}</div>
    <div class="timer__countdown">{{ countdownString }}</div>
  </div>
</template>

<script>
import Timer from '../models/Timer'
import { getQuantityWithLabel } from '../utils/presentation'

export default {
  name: 'Timer',
  props: {
    timer: Timer
  },
  data () {
    return {
      now: new Date()
    }
  },
  computed: {
    countdownString () {
      const { years, months, days, hours, minutes, seconds } = this.timer.calculateDifference(this.now)

      return `${getQuantityWithLabel('year', years)} ${getQuantityWithLabel('month', months)} ${getQuantityWithLabel('day', days)} ${getQuantityWithLabel('hour', hours)} ${getQuantityWithLabel('minute', minutes)} ${getQuantityWithLabel('second', seconds)}`
    }
  },
  mounted () {
    setInterval(() => {
      this.now = new Date()
    }, 1000)
  }
}
</script>

<style>

</style>
