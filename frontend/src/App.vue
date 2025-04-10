<template>
  <div>
    <header class="bg-pink-600 text-white py-4 shadow-md">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <h1 class="text-xl font-bold">ND Cosméticos</h1>
        <nav class="space-x-4">
          <router-link to="/" class="hover:underline">Home</router-link>
          <router-link to="/rastreio" class="hover:underline">Rastreio</router-link>
          <router-link to="/pagamento" class="hover:underline">Pagamento</router-link>
        </nav>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {}
</script>
