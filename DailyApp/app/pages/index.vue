<template>
  <h1 class="text-4xl font-black">Hello World</h1>
  <NuxtLink to="/about">About</NuxtLink>
  {{ counter }}
  <button @click="counter++">Crick</button>
  <p v-if="pending">loading...</p>
  <ul v-else class="lsit-disc list-inside p-4">
    <li v-for="fruit in data?.database">
      {{ fruit }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { database } from '~~/server/api/hello'

const counter = useState<number>("count", () => 0)
counter.value

const {data, pending, error} = await useFetch("/api/hello", {server: false});

useHead({
  title: 'App',
})
</script>