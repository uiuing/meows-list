<script setup lang="ts">
import HeaderNavigate from '../components/Header/HeaderNavigate.vue'
</script>

<template>
  <header-navigate />
  <div class="content-layout">
    <router-view />
  </div>
</template>

<style scoped>
@import './style.module.css';
</style>
