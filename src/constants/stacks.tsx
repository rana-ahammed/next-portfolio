import {
  Bootstrap,
  CSS3,
  ExpressJs,
  Git,
  HTML5,
  JavaScript,
  Jest,
  Markdown,
  MaterialUI,
  MongoDB,
  NextJs,
  NodeJs,
  Prisma,
  ReactJs,
  ReduxJs,
  TailwindCss,
  TypeScript,
} from '@/components/icons';
import cn from '@/utils/cn';

interface StackProps {
  [key: string]: JSX.Element;
}

export const STACKS: StackProps = {
  TypeScript: <TypeScript className={cn('fill-[#3178C6]')} />,
  JavaScript: <JavaScript className={cn('fill-[#F7DF1E]')} />,
  'Next.js': <NextJs className={cn('fill-black dark:fill-white')} />,
  'React.js': <ReactJs className={cn('fill-[#61DAFB]')} />,
  TailwindCSS: <TailwindCss className={cn('fill-[#06B6D4]')} />,
  Bootstrap: <Bootstrap className={cn('fill-[#7952B3]')} />,
  Markdown: <Markdown className={cn('fill-black dark:fill-white')} />,
  Prisma: <Prisma className={cn('fill-[#2D3748] dark:fill-white')} />,
  Jest: <Jest className={cn('fill-[#C21325]')} />,
  Git: <Git className={cn('fill-[#F05032]')} />,
  HTML5: <HTML5 className={cn('fill-[#E34F26]')} />,
  CSS3: <CSS3 className={cn('fill-[#1572B6]')} />,
  MongoDB: <MongoDB className={cn('fill-[#1572B6]')} />,
  ReduxJs: <ReduxJs className={cn('fill-[#1572B6]')} />,
  NodeJs: <NodeJs className={cn('fill-[#1572B6]')} />,
  ExpressJs: <ExpressJs className={cn('fill-[#1572B6]')} />,
  MaterialUI: <MaterialUI className={cn('fill-[#1572B6]')} />,
};
