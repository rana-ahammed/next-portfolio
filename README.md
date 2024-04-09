![rana-ahammed](https://github.com/rana-ahammed/rana-ahammed/assets/14372275/dc7014cc-7d69-4008-beed-d4f759fcf723)

<h1 align="center">
  My Own Digital Home on the Internet
</h1>

<p align="center">
  This is my personal website built with <a href="https://nextjs.org/" target="_blank">Next.js</a>, <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>, and hosted on <a href="https://www.vercel.com/" target="_blank">Vercel</a>
</p>

<br/>
<div align="center">

<a href="https://rana-ahammed.vercel.app" target="_blank">![View Demo](https://img.shields.io/badge/View%20Demo-8865ff?style=for-the-badge)</a> <a href="https://github.com/rana-ahammed/rana-ahammed/issues/new?assignees=&labels=bug&template=bug_report.md&title=" target="_blank">![Report Bug](https://img.shields.io/badge/Report%20Bug-ff5432?style=for-the-badge)</a> <a href="https://github.com/rana-ahammed/rana-ahammed/issues/new?assignees=&labels=&template=feature_request.md&title=" target="_blank">![Request Feature](https://img.shields.io/badge/Request%20Feature-96d117?style=for-the-badge)</a> <a href="https://github.com/rana-ahammed/rana-ahammed/fork" target="_blank">![Forks](https://img.shields.io/github/forks/rana-ahammed/rana-ahammed?color=8865ff&style=for-the-badge)</a> <a href="https://github.com/rana-ahammed/rana-ahammed/stargazers" target="_blank">![Stars](https://img.shields.io/github/stars/rana-ahammed/rana-ahammed?color=8865ff&style=for-the-badge)</a>

</div>

## Features

- 🔥 [Next.js](https://nextjs.org/docs/app) with app router directory structure
- ⚛️ [React](https://react.dev/)
- ⚡️ [Typescript](https://www.typescriptlang.org/)
- 💅 [Tailwind CSS](https://tailwindcss.com/)
- 🧩 [Contentlayer](https://www.contentlayer.dev/) with MDX plugins
- ⚙️ SEO metadata
- 📏 [ESLint](https://eslint.org/) — Find and fix problems in your code
- 💖 [Prettier](https://prettier.io/) — Format your code consistently
- 🐶 [Husky](https://typicode.github.io/husky/#/) & [Lint Staged](https://github.com/okonet/lint-staged) — Run scripts on your staged files before they are committed
- 🤖 [Conventional Commit Lint](https://github.com/conventional-changelog/conventional-changelog)

## Running Locally

1. Clone this repository
   ```bash
   git clone https://github.com/rana-ahammed/rana-ahammed.git
   ```
2. Change directory
   ```bash
   cd rana-ahammed
   ```
3. Install dependencies
   ```bash
   yarn install
   ```
4. Create a `.env` file similar to [`.env.example`](https://github.com/rana-ahammed/rana-ahammed/blob/main/.env.example) and input environment variables

   ```txt
    # Client

    NEXT_PUBLIC_APP_URL=http://localhost:3000
    NEXT_PUBLIC_GOOGLE_ANALYTICS=
    NEXT_PUBLIC_AVAILABLE_FOR_HIRE=true

    # Server

    # database
    DATABASE_URL=

    # next-auth
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=


    # google
    GOOGLE_ID=
    GOOGLE_SECRET=

    # github
    GITHUB_ID=
    GITHUB_SECRET=
    GITHUB_READ_USER_TOKEN_PERSONAL=

   ```

5. Start hacking
   ```bash
   yarn dev
   ```

## Deployment

Deploy to Vercel, Netlify, etc

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/rana-ahammed/rana-ahammed) [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/rana-ahammed/rana-ahammed)

## Files to customize

- `config/site.ts` - update `site` with yours.
- `config/github.ts` - update `GITHUB_ACCOUNT` with yours.
- `constants/experiences.ts` - update with your cool experiences.
- `app/about/page.tsx` - update with yours.
- `app/resume/page.tsx` - (optional) update with your resume or you can remove it.
- `public/share/resume.pdf` - (optional) replace with your best resume.
- `public/media/*` - store assets such as images and favicons.
- `tailwind.config.js` - contains the tailwind styles, and modify as you like to change overall look and feel to the site.
- `content` - replace with your blog posts, projects, and notes.
- `next.config.js` - configuration related to Next.js. You need to adapt the Content Security Policy if you want to load scripts, images etc. from other domains.

## Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [PlanetScale](https://planetscale.com)
- **ORM**: [Prisma](https://prisma.io/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Content**: [MDX](https://github.com/mdx-js/mdx), [contentlayer](https://github.com/contentlayerdev/contentlayer)

## License

Licensed under the [MIT License](https://github.com/rana-ahammed/rana-ahammed/blob/master/LICENSE).
