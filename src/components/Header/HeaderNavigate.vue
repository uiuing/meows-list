<script setup lang="ts">
import { isMobile } from '../../hooks/location'
import DesktopNavigate from './Desktop/DesktopNavigate.vue'
import MobileNavigate from './Mobile/MobileNavigate.vue'
</script>

<template>
  <desktop-navigate v-if="isMobile()" />
  <mobile-navigate v-else />
</template>
