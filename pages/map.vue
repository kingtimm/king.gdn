<script setup>

</script>   

<template>
    <ContentFolderListing folderName="updates" v-slot="{ data }">
        <pre>
            {{ data }}
        </pre>
    </ContentFolderListing>
</template>
