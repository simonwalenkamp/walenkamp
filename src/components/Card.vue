<script setup lang="ts">
</script>

<template>
  <div class="bg-stone-900 rounded-md p-5">
    <div class="flex flex-col sm:flex-row justify-between sm:items-center border-b">
      <h3 class="text-xl lg:text-3xl font-semibold">
        <slot name="title"></slot>
      </h3>
      <span class="text-base lg:text-lg">
        <slot name="date"></slot>
      </span>
    </div>
    <p class="mt-2 text-lg lg:text-2xl border-b py-4">
      <slot name="description"></slot>
    </p>
    <p class="text-base lg:text-lg mt-1 italic">
      <slot name="stack"></slot>
    </p>
  </div>
</template>
