import actions from './actions'
import getters from './getters'
import state from './state'

import { defineStore, acceptHMRUpdate } from 'pinia'

const useCounterStore = defineStore({
  id: 'counter',
  state,
  actions,
  getters
})

export default useCounterStore

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
