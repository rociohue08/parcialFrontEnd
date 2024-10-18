<template>
  <div>
    <h1>CONTADOR</h1>
    <p>Count: {{ CarroState.count }}</p>
    <!-- llamo al estado y a su accion  -->
    <button @click="CarroState.agregar">incremnt</button>
    <button @click="CarroState.eliminar">decrement</button>
    <p>Total{{ CarroState }}</p>
  </div>
</template>

<script setup lang="ts">
import { useCarroState } from '@/stores/CarritoStore'
const CarroState = useCarroState()
</script>

