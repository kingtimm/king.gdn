import type { ParsedContent, QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

interface ChildDoc extends ParsedContent {
  publishedAt: string
  posterImage: string
}

const pickedKeys = ['_path', 'title', 'publishedAt', 'posterImage', 'excerpt']

const union = [...pickedKeys] as const
type PickKeys = typeof union[number]

export type PickedChildDoc = Pick<ChildDoc, PickKeys>[]

async function getListing(folderName: string) {
  return await useAsyncData(
    folderName,
    () => {
      const queryParams = {
        where: {
          _path: { $contains: `${folderName}/` },
        },
        sort: {
          publishedAt: -1,
        },
        only: pickedKeys,
      } as unknown as QueryBuilderParams

      const response = queryContent<ChildDoc[]>(queryParams).find()

      return response
    },
  )
}

export function useContentFolderListing(folderName: string) {
  return {
    folderName,
    getListing: async () => getListing(folderName),
  }
}
