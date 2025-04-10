<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
    <div class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
      <h1 class="text-3xl font-bold text-pink-600 text-center mb-6">Rastrear Pedido</h1>
      <input
        v-model="codigo"
        type="text"
        placeholder="Digite o código de rastreio"
        class="w-full px-4 py-3 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-4"
      />
      <button
        @click="rastrear"
        class="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg transition duration-300"
      >
        Consultar
      </button>

      <div v-if="resultado" class="mt-6 text-center bg-gray-50 p-4 rounded-lg border border-gray-200">
        <p class="text-gray-700"><strong>Status:</strong> {{ resultado.status }}</p>
        <p class="text-sm text-gray-500">Atualizado em: {{ resultado.atualizado_em }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      codigo: '',
      resultado: null
    }
  },
  methods: {
    async rastrear() {
      if (!this.codigo) return
      try {
        const response = await axios.get(`http://localhost:3000/pedidos/${this.codigo}`)
        this.resultado = response.data
      } catch (error) {
        this.resultado = { status: 'Pedido não encontrado', atualizado_em: '' }
      }
    }
  }
}
</script>
