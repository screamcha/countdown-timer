<template>
  <Timer v-for='timer in timers' :key='timer.id' :timer='timer' :now='now' @finishTimer='handleFinishTimer' />
  <TimerForm v-if='showTimerForm' @submit='createTimer' />
  <Button :type='BUTTON_TYPES.INFO' v-if='timers.length && !showTimerForm' @click='handleAddMoreClick'>Add More</Button>
</template>

<script>
import { ref } from 'vue'
import TimerForm from './components/TimerForm.vue'
import Timer from './components/Timer.vue'
import Button, { BUTTON_TYPES } from './components/Button.vue'
import TimerModel from './models/Timer'
import { provideStorageService } from './composables/storageService'
import './assets/styles/normalize.css'
import './assets/styles/global.css'

export default {
  name: 'App',
  data () {
    return {
      showTimerForm: !this.timers.length,
      now: new Date(),
      interval: null
    }
  },
  components: {
    TimerForm,
    Timer,
    Button
  },
  setup () {
    const storageService = provideStorageService()
    const timersRaw = storageService.getItem(storageService.keys.TIMERS) || []
    const now = new Date()

    const timers = ref(
      timersRaw
        .map(raw => new TimerModel(raw.name, raw.date, raw.id))
        .filter(timer => {
          const differenceValues = Object.values(timer.calculateDifference(now))
          const passed = differenceValues.some(value => value < 0) || differenceValues.every(value => value === 0)
          return !passed
        })
    )

    return {
      timers,
      storageService
    }
  },
  methods: {
    createTimer (name, date) {
      this.timers.push(new TimerModel(name, date))
      this.storageService.setItem(this.storageService.keys.TIMERS, this.timers)
      this.showTimerForm = false
    },
    handleAddMoreClick () {
      this.showTimerForm = true
    },
    handleFinishTimer (finishedTimer) {
      const updatedTimers = this.timers.filter(timer => timer.id !== finishedTimer)
      this.storageService.setItem(this.storageService.keys.TIMERS, updatedTimers)
    }
  },
  created () {
    this.BUTTON_TYPES = BUTTON_TYPES
  },
  mounted () {
    this.interval = setInterval(() => {
      this.now = new Date()
    }, 1000)
  }
}
</script>

<style>
#app {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16pt;
  color: #2c3e50;
  max-width: 1400px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

@media (max-width: 1400px) {
  #app {
    margin: 0 10px;
  }
}
</style>
