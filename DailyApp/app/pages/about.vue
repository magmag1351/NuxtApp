<template>
  <h1>About</h1>
  {{ counter }}
</template>

<script lang="ts" setup>
  const counter = useState("count", () => 0);
</script>