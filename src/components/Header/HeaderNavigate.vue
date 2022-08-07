<script setup lang="ts">
import { useMobile } from '../../hooks'
import DesktopComponent from './Desktop/DesktopNavigate.vue'
import MobileComponent from './Mobile/MobileNavigate.vue'

const isMobile = useMobile()
</script>

<template>
  <mobile-component v-if="isMobile" />
  <desktop-component v-else />
</template>
