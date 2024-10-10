<script setup lang="ts">
import { ref } from 'vue';
const guid = ref(crypto.randomUUID());

function copyToClipboard() {
    navigator.clipboard.writeText(guid.value.toString())
}
</script>

<template>
<div class="flex gap-2">
    <h1>{{ guid }}</h1>
    <button @click="copyToClipboard">Copy</button>
</div>    
</template>