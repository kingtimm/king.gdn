<template>
    <slot :data="data!" />
</template>

<script setup lang="ts">
import { ParsedContent, QueryBuilder, QueryBuilderParams } from '@nuxt/content/dist/runtime/types';

interface ChildDoc extends ParsedContent {
    publishedAt: string
    posterImage: string
}

const pickedKeys = ['_path', 'title', 'publishedAt', 'posterImage']

const union = [...pickedKeys] as const
type PickKeys = typeof union[number]
type PickedChildDoc = Pick<ChildDoc, PickKeys>[]

const slots = defineSlots<{
    default(props: { data: PickedChildDoc }): any
}>()

const props = defineProps<{
    folderName: string
}>()


const { data } = await useAsyncData(
    props.folderName,
    () => {

        const queryParams: QueryBuilderParams = {
            where: {
                _path: { $contains: `${props.folderName}/` }
            },
            sort: {
                publishedAt: -1
            },
            only: pickedKeys
        }

        // const response = queryContent<ChildDoc[]>(props.folderName).only(pickedKeys).sort({ publishedAt: -1 }).find()
        const response = queryContent<ChildDoc[]>(queryParams).find()

        return response
    }
)

</script>