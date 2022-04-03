import { defineStore } from 'pinia'
import Answer from '../models/models'

export type RootState = {
  question: string,
  pool: Answer[]
};

export const useListPoolStore = defineStore({
  id: 'poolList',
  state: () => ({
    question: '',
    pool:[] 
  } as RootState),
  
  actions: {
    addItem(item:Answer) {
      this.$state.pool.push(item)
    },
    editQuestion(value:string) {
      this.$state.question = value
    },
    editItem(value:string, id:string) {
      this.$state.pool[this.$state.pool.findIndex(item => item.id === id)].name = value
    },
    removeItem(id:string) {
      this.$state.pool.splice(this.$state.pool.findIndex(item => item.id === id), 1)
    },
    addVote(id:string) {
      this.$state.pool[this.$state.pool.findIndex(item => item.id === id)].votes++
    },
    reset() {
      this.$state.question = ''
      while (this.$state.pool.length > 0) {
        this.$state.pool.pop();
      }
    },
  },
  persist: {
    enabled: true,
    strategies: [{
      storage: localStorage
    }],
  }
})
