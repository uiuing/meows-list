<script setup lang="ts">
import HeaderNavigate from '../../Header/HeaderNavigate.vue'
import { initScreen } from './index'

initScreen()
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <div class="nav-layout">
        <header-navigate />
      </div>
      <div class="content-layout">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import './style.module.css';
</style>
