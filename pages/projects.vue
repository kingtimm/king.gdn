<template>
    <div class="">
        <div class="prose">
            <h1>projects</h1>
        </div>
        <div class="w-full flex gap-4">
            <ContentNavigation v-slot="{ navigation }" :query="projectsQuery">
                <div v-for="link of navigation[0].children" :key="link._path" class="w-full">
                    <!-- <NuxtLink :to="link._path">{{ link.title }}</NuxtLink> -->
                    <ProjectCard :path="link._path" :title="link.title" :published-at="link.publishedAt"
                        :poster-image="link.posterImage">

                    </ProjectCard>
                </div>
            </ContentNavigation>
            <!-- {{ navigation }} -->

        </div>
    </div>
</template>

<script setup lang="ts">
const projectsQuery = queryContent('/project/')
/*
// If you'd prefer to pass along raw `QueryBuilderParams`:
}
*/
// const projectsQuery = {
//     where:
//     {
//         _path: /^\/project/
//     },
// }

// const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(projectsQuery))

</script>
  