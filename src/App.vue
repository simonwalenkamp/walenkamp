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
  <div class="w-full min-h-screen flex flex-col bg-stone-900">
    <header class="p-4">
      <div class="container max-w-screen-lg mx-auto flex justify-between items-center">
        <nav>
          <ul class="flex space-x-4">
            <li>
              <a class="relative hover:text-indigo-500 font-bold cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full"
                @click="scrollTo(about)">About</a>

            </li>
            <li>
              <a class="relative hover:text-yellow-500 font-bold cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-500 after:transition-all hover:after:w-full"
                @click="scrollTo(experience)">Experience</a>
            </li>
            <li>
              <a class="relative hover:text-indigo-500 font-bold cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full"
                @click="scrollTo(socials)">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="flex-grow container max-w-screen-lg mx-auto px-4 lg:px-10 py-10 bg-stone-800 rounded-lg">
      <div>
        <div class="flex justify-center items-center border-b py-10 pt-0">
          <div>
            <h1 class='inline-block overflow-hidden whitespace-nowrap animate-typing border-r-8 text-xl lg:text-4xl'>
              <span class="text-yellow-500">user@desktop</span>:<span class="text-indigo-500">~</span>$ Simon Walenkamp
            </h1>
          </div>
        </div>
        <section ref="aboutRef" class="border-b py-10">
          <About />
        </section>
        <section ref="experienceRef" class="border-b py-10">
          <Experience />
        </section>
        <section ref="socialsRef" class="pt-10">
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
