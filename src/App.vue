<template>
  <Navbar />
  <div class="mt-10 flex justify-center">
    <router-view/>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
</script>

<style lang="scss" scoped></style>
