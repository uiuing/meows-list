<script setup lang="ts">
import { ref } from 'vue'

import { useMobile } from '../../hooks'
import LayoutBuffer from './Buffer/LayoutBuffer.vue'
import DesktopComponent from './Desktop/DesktopLayout.vue'
import MobileComponent from './Mobile/MobileLayout.vue'

const isMobile = useMobile()

const show = ref(false)
setTimeout(() => {
  show.value = true
}, 1000)
</script>

<template>
  <layout-buffer />
  <div v-show="show">
    <mobile-component v-if="isMobile" />
    <desktop-component v-else />
  </div>
</template>
