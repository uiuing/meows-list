import { defineStore } from 'pinia'

// eslint-disable-next-line import/prefer-default-export
export const useTodos = defineStore('todos', {
  state: () => ({
    // ...
  }),
  getters: {
    // ...
  },
  actions: {
    // ...
  },
  persist: {
    key: 'meows-list-todos',
    storage: window.localStorage
  }
})
