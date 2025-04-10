<template>
    <div class="min-h-screen flex flex-col">
      <Navbar />
      <main class="flex-grow">
        <router-view />
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'
  
  export default {
    components: { Navbar, Footer }
  }
  </script>
  