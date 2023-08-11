<script setup lang="ts">
import type { ParsedContent, QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

interface ChildDoc extends ParsedContent {
  publishedAt: string
  posterImage: string
}

const props = defineProps<{
  folderName: string
}>()

defineSlots<{
  default(props: { data: PickedChildDoc }): any
}>()

const pickedKeys = ['_path', 'title', 'publishedAt', 'posterImage']

const union = [...pickedKeys] as const
type PickKeys = typeof union[number]
type PickedChildDoc = Pick<ChildDoc, PickKeys>[]

const { data } = await useAsyncData(
  props.folderName,
  () => {
    const queryParams = {
      where: {
        _path: { $contains: `${props.folderName}/` },
      },
      sort: {
        publishedAt: -1,
      },
      only: pickedKeys,
    } as unknown as QueryBuilderParams

    // const response = queryContent<ChildDoc[]>(props.folderName).only(pickedKeys).sort({ publishedAt: -1 }).find()
    const response = queryContent<ChildDoc[]>(queryParams).find()

    return response
  },
)
</script>

<template>
  <slot :data="data!" />
</template>
