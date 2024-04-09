import type { MutatorCallback, SWRConfiguration } from 'swr'
import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

interface SwrData<T = unknown> {
  data?: T
  loading: boolean
  error?: string | Error | null
  mutate: (
    data?: T | Promise<T> | MutatorCallback<T> | any,
    shouldRevalidate?: boolean,
  ) => Promise<T | undefined>
}

const useRequest = <T>(url: string, options?: SWRConfiguration): SwrData<T> => {
  const { data, error, mutate } = useSWR<T>(url, fetcher, options)

  return {
    data,
    error,
    mutate,
    loading: !data && !error,
  }
}

export default useRequest
