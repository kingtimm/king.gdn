<template>
    <div class="">
        <div class="prose">
            <h1>projects</h1>
        </div>
        <p>Below are some project pages that get updated as the efforts do. 📈</p>
        <div class="w-full grid grid-cols-2 gap-6 my-6">
            <ContentNavigation v-slot="{ navigation }" :query="projectsQuery">
                <div v-for="link of navigation[0].children" :key="link._path" class="w-full">
                    <ProjectCard :path="link._path" :title="link.title" :published-at="link.publishedAt"
                        :poster-image="link.posterImage">
                    </ProjectCard>
                </div>
            </ContentNavigation>
        </div>
    </div>
</template>

<script setup lang="ts">
const projectsQuery = queryContent('/projects/')
</script>

<style scoped>
.card {
    /* @apply rounded-0 */
}
</style>