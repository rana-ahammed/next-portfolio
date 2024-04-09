'use client'

import { useRef } from 'react'
import type { IReadTimeResults } from 'reading-time'

import { Clock, Eye } from '@/components/icons'
import PageHeader from '@/components/page-header'
import StickyTitle from '@/components/sticky-title'
import { BackButton, Container } from '@/components/ui'
import useView from '@/hooks/use-view'
import cn from '@/utils/cn'

interface HeaderProps {
  title: string
  date: string
  readingTime: IReadTimeResults
  slug: string
  description?: string
}

const Header = ({
  title,
  date,
  readingTime,
  slug,
  description,
}: HeaderProps) => {
  const { views } = useView({ slug, trackView: true })
  const pageHeaderRef = useRef<HTMLDivElement | null>(null)

  return (
    <>
      <BackButton />
      <PageHeader title={title} description={description} ref={pageHeaderRef} />
      <StickyTitle title={title} elementRef={pageHeaderRef} />
      <Container>
        <div
          className={cn(
            'flex flex-col justify-between gap-2 text-sm font-medium text-muted-foreground',
            'sm:flex-row',
          )}
        >
          <div>
            Published on
            <time dateTime={date} className={cn('px-1')}>
              {date}
            </time>
          </div>
          <div className={cn('flex items-center gap-4')}>
            <div className={cn('flex items-center gap-1')}>
              <Clock className={cn('h-5 w-5')} />
              <span title="Estimated read time">{readingTime?.text}</span>
            </div>
            <div className={cn('flex items-center gap-1')}>
              <Eye className={cn('h-5 w-5')} />
              <span title="Number of view(s)">{views?.total ?? '-'} views</span>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Header
