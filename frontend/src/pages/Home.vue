<template>
 <template>
  <div class="bg-white min-h-screen">
    <section class="banner h-64 bg-pink-100 flex items-center justify-center text-3xl font-bold text-pink-700">
      Promoções especiais para você!
    </section>

    <section class="py-10 px-4">
      <h2 class="text-2xl font-semibold mb-6 text-center text-gray-800">Categorias</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="category-card">Cabelos</div>
        <div class="category-card">Pele</div>
        <div class="category-card">Batom</div>
        <div class="category-card">Rosto</div>
      </div>
    </section>

    <section class="py-10 px-4">
      <h2 class="text-2xl font-semibold mb-6 text-center text-gray-800">Destaques</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div class="product-card">Produto 1</div>
        <div class="product-card">Produto 2</div>
        <div class="product-card">Produto 3</div>
        <div class="product-card">Produto 4</div>
      </div>
    </section>
  </div>
</template>



<script setup>
import { ref, onMounted } from 'vue'

const bannerImages = [
  '/img/banner1.jpg',
  '/img/banner2.jpg',
  '/img/banner3.jpg'
]

const currentSlide = ref(0)

onMounted(() => {
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % bannerImages.length
  }, 4000)
})

const produtos = [
  { nome: 'Shampoo Hidratante', preco: 'R$ 29,90', imagem: '/img/produto1.jpg' },
  { nome: 'Creme Facial', preco: 'R$ 35,00', imagem: '/img/produto2.jpg' },
  { nome: 'Batom Rosa', preco: 'R$ 19,90', imagem: '/img/produto3.jpg' },
  { nome: 'Máscara Capilar', preco: 'R$ 42,50', imagem: '/img/produto4.jpg' }
]
</script>

<style scoped>
.carousel-track {
  width: 300%;
}
</style>

<style scoped>
.category-card {
  @apply bg-pink-100 text-pink-700 p-6 rounded-lg shadow hover:bg-pink-200 transition;
}

.product-card {
  @apply bg-white border border-gray-200 p-4 rounded shadow hover:shadow-lg transition;
}
</style>