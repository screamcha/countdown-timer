<template>
  <div class="timer">
    <div class="timer__name">{{ timer.name }}</div>
    <div class="timer__countdown">
      <span v-if='!finished'>Time left: {{ countdownString }}</span>
      <span v-else>Time is up!</span>
      </div>
  </div>
</template>

<script>
import Timer from '../models/Timer'
import { getQuantityWithLabel } from '../utils/presentation'

export default {
  name: 'Timer',
  props: {
    timer: Timer,
    now: Date
  },
  data () {
    return {
      interval: null,
      finished: false
    }
  },
  methods: {
    finishTimer () {
      clearInterval(this.interval)
      this.finished = true
    }
  },
  computed: {
    countdownString () {
      const differences = this.timer.calculateDifference(this.now)
      const allZeros = Object.values(differences).every(item => item === 0)

      if (allZeros) {
        this.finishTimer()
        return ''
      }

      const { years, months, days, hours, minutes, seconds } = differences
      return `${getQuantityWithLabel('year', years)} ${getQuantityWithLabel('month', months)} ${getQuantityWithLabel('day', days)} ${getQuantityWithLabel('hour', hours)} ${getQuantityWithLabel('minute', minutes)} ${getQuantityWithLabel('second', seconds)}`
    }
  }
}
</script>

<style>
.timer {
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 3px 0 grey;
  border-radius: 3px;
}
</style>
