<template>
    <div class="">
        <div class="prose">
            <h1>projects</h1>
        </div>
        <p class="pb4">Below are some project pages that get updated as the efforts do. 📈</p>
        <div class="w-full grid grid-cols-2 auto-rows-fr gap-3 md:gap-6">
            <ContentFolderListing folderName="projects" v-slot="{ data }">
                <ProjectCard v-for="link of data" :key="link._path" :path="link._path" :title="link.title"
                    :published-at="link.publishedAt" :poster-image="link.posterImage">
                </ProjectCard>

            </ContentFolderListing>
        </div>
    </div>
</template>

<style scoped>
.card {
    /* @apply rounded-0 */
}
</style>