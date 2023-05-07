<template>
  <div
    class="shadow"
    :style="{
      top: mousePosition.y - 250 + 'px',
      left: mousePosition.x - 250 + 'px'
    }"
  />
</template>
<script>
export default {
  data() {
    return {
      mousePosition: {
        x: 0,
        y: 0
      }
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.handleMouseMove)
  },
  beforeUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove)
  },
  methods: {
    handleMouseMove(event) {
      this.mousePosition.x = event.clientX
      this.mousePosition.y = event.clientY
    }
  }
}
</script>

<style>
.shadow {
  z-index: 0;
  position: fixed;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(16, 174, 179, 0.199) 0%, rgba(0, 0, 0, 0) 60%);
}
</style>
