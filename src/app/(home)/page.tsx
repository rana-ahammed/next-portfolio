import type { Metadata } from 'next';

import { Container } from '@/components/ui';
import { seo } from '@/lib/meta';
import cn from '@/utils/cn';

import Hero from './hero';
import HighlightedProjects from './highlighted-projects';
import LatestPosts from './latest-posts';
import TechStack from './tech-stack';

export const metadata: Metadata = seo({
  title: 'Portfolio',
  url: '/',
});

const HomePage = () => {
  return (
    <div className={cn('flex flex-col gap-12')}>
      <Hero />
      <Container className={cn('gap-12')}>
        <HighlightedProjects />
        <LatestPosts />
      </Container>
    </div>
  );
};

export default HomePage;
