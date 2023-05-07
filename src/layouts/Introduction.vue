<template>
  <v-toolbar color="#1f7786">
    <v-toolbar-title>
      <v-btn variant="plain" :to="this.$RouteName.INTRODUCTION.path" class="font-weight-bold text-white">
        Bridge
      </v-btn>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn icon @click="toggleTheme">
      <v-icon class="text-white">nights_stay</v-icon>
    </v-btn>
  </v-toolbar>

  <v-container>
    <div class="overflow-auto content">
      <slot />
    </div>
  </v-container>
</template>
<script>
import { useTheme } from 'vuetify'
import { storage } from '../storage'

export default {
  setup() {
    const theme = useTheme()

    return {
      theme,
      toggleTheme() {
        theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
        storage.push(storage.key.DARK_MODE, theme.global.name.value)
      }
    }
  }
}
</script>
