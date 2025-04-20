<script setup lang="ts">
import Card from "./Card.vue"
import Arrow from "./Arrow.vue"
</script>

<template>
  <div class="grid grid-cols-6">
    <Card class="lg:col-span-4 col-span-6">
      <template v-slot:title>
        Relewise
      </template>
      <template v-slot:date>
      </template>
      <template v-slot:description>
        Deliver product recommendations and a personalized search experience for e-commerce stores.
        Mostly by building SDKs and integrations but also by developing a platform to visualize individual performance
        in a back office tool.
      </template>
      <template v-slot:stack>
        C# .NET, Vue.js, MySQL, JavaScript/TypeScript (SDK), Java (SDK)
      </template>
    </Card>

    <div class="lg:col-span-2"></div>

    <div class="col-span-3 flex justify-center items-center">
      <Arrow class="fill-indigo-500 scale-x-[-1]" />
    </div>
    <div class="col-span-3"></div>

    <div class="lg:col-span-2"></div>
    <Card class="lg:col-span-4 col-span-6">
      <template v-slot:title>
        KvalitetsIT
      </template>
      <template v-slot:date>
        2022/10 - 2023/08
      </template>
      <template v-slot:description>
        DevOps Engineer — Developed, maintained, and hosted internal solutions for the Danish medical sector,
        primarily on a project called “Aftale Portalen”.
      </template>
      <template v-slot:stack>
        Kubernetes, Argo, Docker, Java, React.js, MariaDB
      </template>
    </Card>

    <div class="col-span-3"></div>
    <div class="lg:col-span-3 flex justify-center items-center">
      <Arrow class="fill-yellow-500" />
    </div>

    <Card class="lg:col-span-4 col-span-6">
      <template v-slot:title>
        JP Medier
      </template>
      <template v-slot:date>
        2019/01 - 2022/10
      </template>
      <template v-slot:description>
        Built and maintained news sites for Watch Medier with a focus on supporting multiple sites and their unique
        configurations
        from shared code bases.
      </template>
      <template v-slot:stack>
        Scala, Next.js, PostgreSQL, AWS (ECS), Docker
      </template>
    </Card>

    <div class="lg:col-span-2"></div>

    <div class="col-span-3 flex justify-center items-center">
      <Arrow class=" fill-indigo-500 scale-x-[-1]" />
    </div>
    <div class="col-span-3"></div>

    <div class="lg:col-span-2"></div>
    <Card class="lg:col-span-4 col-span-6">
      <template v-slot:title>
        JP/Politikens Hus
      </template>
      <template v-slot:date>
        2019/01 - 2022/10
      </template>
      <template v-slot:description>
        Built the foundation for their subscription platform with a focus on the administration API and an internal
        site used by their customer service.
      </template>
      <template v-slot:stack>
        C# .NET, React.js, PostgreSQL, AWS (ECS), Docker
      </template>
    </Card>


    <div class="col-span-3"></div>
    <div class="col-span-3 flex justify-center items-center">
      <Arrow class="fill-yellow-500" />
    </div>

    <Card class="lg:col-span-4 col-span-6">
      <template v-slot:title>
        JP Medier
      </template>
      <template v-slot:date>
        2018/08 - 2018/12
      </template>
      <template v-slot:description>
        Native App Team — Intern. Developed and maintained news apps for Android and iOS.
      </template>
      <template v-slot:stack>
        Swift, Objective-C (iOS), Kotlin, Java (Android) </template>
    </Card>

    <div class="lg:col-span-2"></div>
  </div>
</template>
