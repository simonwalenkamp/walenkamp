<script setup lang="ts">
import Socials from "../src/components/Socials.vue"
import About from "../src/components/About.vue"
import Experience from "../src/components/Experience.vue"
import { useTemplateRef } from "vue";

const about = useTemplateRef("aboutRef")
const experience = useTemplateRef("experienceRef")
const socials = useTemplateRef("socialsRef")

function scrollTo(element: HTMLElement | null) {
  element?.scrollIntoView({ behavior: "smooth" })

}
</script>

<template>
  <div class="w-full min-h-screen flex flex-col">
    <header class="p-4">
      <div class="container max-w-screen-lg mx-auto flex justify-between items-center">
        <nav>
          <ul class="flex space-x-4">
            <li><a class="hover:underline" @click="scrollTo(about)">About</a></li>
            <li><a class="hover:underline" @click="scrollTo(experience)">Experience</a></li>
            <li><a class="hover:underline" @click="scrollTo(socials)">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="flex-grow container max-w-screen-lg mx-auto px-4 py-8">
      <div>
        <div class="flex justify-center items-center">
          <div>
            <h1 class='inline-block overflow-hidden whitespace-nowrap animate-typing border-r-8 text-4xl'>
              > Simon Walenkamp
            </h1>
          </div>
        </div>
        <section ref="aboutRef">
          <About />
        </section>
        <section ref="experienceRef">
          <Experience />
        </section>
        <section ref="socialsRef">
          <Socials />
        </section>
      </div>
    </main>
    <footer class="py-4">
      <div class="container max-w-screen-lg mx-auto text-center">
        <p>Made by Simon Walenkamp 2025 &copy;</p>
      </div>
    </footer>
  </div>
</template>
