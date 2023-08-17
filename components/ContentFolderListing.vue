<script setup lang="ts">
import type { PickedChildDoc } from '~/composables/contentFolder'
import { useContentFolderListing } from '~/composables/contentFolder'

const props = defineProps<{
  folderName: string
}>()

defineSlots<{
  default(props: { data: PickedChildDoc }): any
}>()

const listing = useContentFolderListing(props.folderName)
const { data } = await listing.getListing()
</script>

<template>
  <slot :data="data!" />
</template>
