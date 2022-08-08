<script setup lang="ts">
import { locationHash, modules, openOption, openRouter } from './index'
</script>

<template>
  <div class="nav-wrapper">
    <img
      class="nav-option svg-logo"
      src="../../Layout/Buffer/meows-logo.svg"
      alt="logo"
    />
    <div class="nav-content">
      <div v-for="module of modules" :key="typeof module" class="nav-item">
        <el-tooltip
          v-for="item of module"
          :key="item.className"
          effect="dark"
          :content="item.description"
          placement="right"
          :show-arrow="false"
          :hide-after="100"
        >
          <div
            @click="
              item.routerName
                ? openRouter(item.routerName)
                : openOption(item.className)
            "
          >
            <component
              :is="item.component"
              :class="[
                'nav-option',
                item.className,
                item.routerName === locationHash.name ? 'nav-option-active' : ''
              ]"
            />
          </div>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import 'style.module.css';
</style>
