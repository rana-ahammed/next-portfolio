import type { ShareType } from '@prisma/client'

import useRequest from './use-request'

const useShares = (slug: string) => {
  const { data, mutate, loading } = useRequest<{ total: number }>(
    `/api/shares/${slug}`,
  )

  const addShare = (type: ShareType) => {
    // optimistic update
    mutate(
      {
        ...data,
        total: (data?.total ?? 0) + 1,
      },
      false,
    )
    fetch(`/api/shares/${slug}`, {
      method: 'POST',
      body: JSON.stringify({ type }),
    })
  }

  return { shares: data, addShare, loading }
}

export default useShares
