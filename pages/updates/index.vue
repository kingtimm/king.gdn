<template>
    <div class="">
        <div class="prose">
            <h1>updates</h1>
        </div>
        <div class="w-full">
            <ul class="ml-5 list-disc">
                <ContentFolderListing folderName="updates" v-slot="{ data }">
                    <li v-for="link of data" :key="link._path" class="w-full">
                        <NuxtLink :to="link._path">
                            <span class="font-bold">
                                {{ link.title }} -
                            </span>
                            <span class="font-normal">
                                <NuxtTime :datetime="link.publishedAt" day="numeric" month="long" year="numeric" />
                            </span>
                        </NuxtLink>
                    </li>
                </ContentFolderListing>
            </ul>
        </div>
    </div>
</template>