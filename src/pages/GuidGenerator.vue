<script setup lang="ts">
import { ref } from 'vue';
    const guid = ref(crypto.randomUUID());
</script>

<template>
    <h1>{{ guid }}</h1>
</template>