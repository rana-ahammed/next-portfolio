interface Author {
  name: string;
  url: string;
  avatar: string;
  email: string;
  linkedIn: string;
  twitter?: string;
}

interface Site {
  url: string;
  name: string;
  title: string;
  description: string;
  author: Author;
  keywords?: string[];
}

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://rana-ahammed.vercel.app'
    : 'http://localhost:3000';

const site: Site = {
  url: BASE_URL,
  name: "rana ahammed's portfolio",
  title: 'Rana Ahammed',
  description:
    'Passionate Full-stack engineer who focused on solving problems with digital products.',
  author: {
    name: 'Rana Ahammed',
    url: 'https://rana-ahammed.vercel.app',
    email: 'rana.ahammed.012@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/rana-ahammed-',
    avatar: '/media/rana-ahammed/rana-ahammed.png',
    twitter: '@rana_ahammed_',
  },
  keywords: [
    'rana ahammed',
    'Rana Ahammed',
    'developer',
    'portfolio',
    'developer portfolio website',
    'portfolio website',
    'full-stack',
    'back-end',
    'front-end',
  ],
};

export default site;
