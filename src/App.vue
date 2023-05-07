<script setup>
import { RouterView } from 'vue-router'
import { storage } from './storage'
import { onMounted } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

onMounted(() => {
  theme.global.name.value = storage.pull(storage.key.DARK_MODE)
})
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <component :is="$route.meta.layout">
      <v-fade-transition mode="out-in">
        <div :key="route.name">
          <component :is="Component" />
        </div>
      </v-fade-transition>
    </component>
  </router-view>
</template>
