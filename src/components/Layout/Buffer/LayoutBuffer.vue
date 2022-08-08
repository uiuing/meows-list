<script setup lang="ts">
import { ref } from 'vue'

const show = ref(true)
const render = ref(true)

function closeBuffer() {
  setTimeout(() => {
    show.value = false
    setTimeout(() => {
      render.value = false
    }, 1300)
  }, 1200)
}

if (process.env.NODE_ENV === 'development') {
  closeBuffer()
} else {
  window.onload = () => {
    closeBuffer()
  }
}
</script>

<template>
  <transition name="el-fade-in-linear">
    <div v-show="show" v-if="render" class="buffer-wrapper">
      <div class="buffer-content">
        <img src="./meows-logo.svg" width="150" height="150" alt="Meows" />
        <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
@import './style.module.css';
</style>
