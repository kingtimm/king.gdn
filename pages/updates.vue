<template>
    <div class="">
        <div class="prose">
            <h1>updates</h1>
        </div>
        <div class="w-full">
            <ul class="ml-5 list-disc">
                <ContentNavigation v-slot="{ navigation }" :query="projectsQuery">
                    <li>
                        <div v-for="link of navigation[0].children" :key="link._path" class="w-full">
                            <NuxtLink :to="link._path">
                                <span class="font-bold">
                                    {{ link.title }} -
                                </span>
                                <span class="font-normal">
                                    <NuxtTime :datetime="link.publishedAt" day="numeric" month="long" year="numeric" />
                                </span>
                            </NuxtLink>
                        </div>
                    </li>
                </ContentNavigation>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const projectsQuery = queryContent('/updates/')
</script>