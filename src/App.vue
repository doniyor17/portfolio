<template>
  <div class="bg-main">
    <router-view/>
  </div>
  <div class="cursorr"/>
</template>

<script setup lang="ts">
const doc = document.documentElement;
doc.addEventListener('mousemove', e => {
  doc.style.setProperty('--x', e.clientX + 'px')
  doc.style.setProperty('--y', e.clientY + 'px')
});
</script>

<style>
* {
  font-family: 'Fredoka', sans-serif;
}
html {
  scroll-behavior: smooth;
}
.cursorr {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: radial-gradient(circle at var(--x) var(--y), transparent 10%, #1e366bce);
}
</style>