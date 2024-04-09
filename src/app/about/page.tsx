import type { Metadata } from 'next';
import Image from 'next/image';

import { Document, GitHub, LinkedIn, Mail } from '@/components/icons';
import PageHeader from '@/components/page-header';
import { Button, Container, Link } from '@/components/ui';
import { GITHUB_ACCOUNT } from '@/config/github';
import { ROUTES } from '@/config/links';
import site from '@/config/site';
import { env } from '@/lib/env';
import { seo } from '@/lib/meta';
import cn from '@/utils/cn';

import AvailableForHire from './available-for-hire';
import TechStack from './tech-stack';

export const metadata: Metadata = seo({
  title: 'About',
  description: 'Discover insights about me, my career journey, and more.',
  keywords: ['bio', 'biography', 'information', 'about'],
  url: ROUTES.about,
});

const AboutPage = () => {
  const isAvailableForHire = env.NEXT_PUBLIC_AVAILABLE_FOR_HIRE;

  return (
    <>
      <PageHeader title="About" description="A short story of me." />
      <Container>
        <div
          className={cn(
            'items-start space-y-2',
            'xl:grid xl:grid-cols-4 xl:gap-x-6 xl:space-y-0',
          )}
        >
          <div
            className={cn('flex flex-col items-center', 'xl:sticky xl:top-24')}
          >
            <Image
              src={site.author.avatar}
              alt={site.author.name}
              width={256}
              height={256}
              placeholder="blur"
              blurDataURL="/media/rana-ahammed/rana-ahammed-small.png"
              className={cn('rounded-full object-cover', 'xl:rounded-xl')}
              quality={100}
            />
            <div className={cn('flex flex-col items-center py-2')}>
              <h3 className={cn('font-cal text-xl')}>{site.author.name}</h3>
              <h4 className={cn('font-cal text-muted-foreground')}>
                Full-stack Engineer
              </h4>
            </div>
            <AvailableForHire isAvailable={isAvailableForHire} />
          </div>

          <div
            className={cn(
              'prose max-w-none',
              'dark:prose-dark',
              'xl:col-span-3',
            )}
          >
            <h2 className={cn('font-cal text-2xl', 'lg:text-3xl')}>About Me</h2>
            <p>
              Hi there! Thanks for visiting my digital home on the internet.
            </p>
            <p>I am mostly experienced in ReactJs, NodeJs and MongoDB. </p>
            <Link
              href="https://drive.google.com/file/d/1Zg7pSxgjO38vk-0jpU1lngcao7ULXKyI/view?usp=sharing"
              className={cn('text-inherit')}
            >
              <Button variant="shadow" className={cn('gap-x-1')}>
                <Document className={cn('h-5 w-5')} /> My Resume
              </Button>
            </Link>

            <h2 className={cn('font-cal text-2xl', 'lg:text-3xl')}>
              Tech Stack
            </h2>
            <TechStack />

            <h2 className={cn('font-cal text-2xl', 'lg:text-3xl')}>
              Let's Connect
            </h2>
            <p>
              Questions or collaborations? Reach out to me at{' '}
              <Link
                href={`mailto:${site.author.email}?subject=Hi Bona!`}
                className={cn('underline')}
              >
                {site.author.email}
              </Link>{' '}
              or connect through social media. Let's build something amazing
              together!
            </p>
            <div className={cn('my-2 flex items-center gap-4')}>
              <Link
                href={GITHUB_ACCOUNT.url}
                className={cn(
                  'text-muted-foreground transition-colors duration-200',
                  'hover:text-foreground',
                )}
              >
                <GitHub className={cn('h-5 w-5')} />
              </Link>
              <Link
                href={site.author.linkedIn}
                className={cn(
                  'text-muted-foreground transition-colors duration-200',
                  'hover:text-foreground',
                )}
              >
                <LinkedIn className={cn('h-5 w-5')} />
              </Link>
              <Link
                href={`mailto:${site.author.email}?subject=Hi Bona!`}
                className={cn(
                  'text-muted-foreground transition-colors duration-200',
                  'hover:text-foreground',
                )}
              >
                <Mail className={cn('h-5 w-5')} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutPage;
