import '@/styles/global.css';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';

import Analytics from '@/components/analytics';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Providers from '@/components/providers';
import { DEFAULT_METADATA, seo } from '@/lib/meta';
import cn from '@/utils/cn';

import WidgetButton from './guestbook/widget-button';

export const metadata: Metadata = seo({
  ...DEFAULT_METADATA,
});

export const viewport: Viewport = {
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  width: 'device-width',
};

const fontCal = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-cal',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        fontCal.variable,
        'scroll-smooth',
      )}
    >
      <body>
        <Providers>
          <div id="__app">
            <Header />
            <main>{children}</main>
            <Footer />
            <WidgetButton />
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
