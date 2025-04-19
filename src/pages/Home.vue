<script setup lang="ts">defineEmits()
import Socials from "../components/Socials.vue"
import About from "../components/About.vue"
import Experience from "../components/Experience.vue"
</script>
<template>
    <div>
        <div class="flex justify-center items-center">
            <div>
                <h1 class='inline-block overflow-hidden whitespace-nowrap animate-typing border-r-8 text-4xl'>
                    > Simon Walenkamp
                </h1>
            </div>
        </div>
        <About ref="about" />
        <Experience />
        <Socials />
    </div>
</template>
