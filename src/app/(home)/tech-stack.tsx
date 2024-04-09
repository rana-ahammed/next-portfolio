'use client';

import { m } from 'framer-motion';

import {
  ExpressJs,
  JavaScript,
  MongoDB,
  NextJs,
  NodeJs,
  Prisma,
  ReactJs,
  ReduxJs,
  TailwindCss,
  TypeScript,
} from '@/components/icons';
import { Tooltip } from '@/components/ui';
import cn from '@/utils/cn';

interface Stack {
  title: string;
  colorClass: string;
  icon: JSX.Element;
}

const stacks: Stack[] = [
  {
    title: 'TypeScript',
    colorClass: 'hover:text-[#3178C6]',
    icon: <TypeScript className={cn('h-6 w-6')} />,
  },
  {
    title: 'Next.js',
    colorClass: 'hover:text-black dark:hover:text-white',
    icon: <NextJs className={cn('h-6 w-6')} />,
  },
  {
    title: 'React.js',
    colorClass: 'hover:text-[#61DAFB]',
    icon: <ReactJs className={cn('h-6 w-6')} />,
  },
  {
    title: 'Redux.js',
    colorClass: 'hover:text-[#61DAFB]',
    icon: <ReduxJs className={cn('h-6 w-6')} />,
  },
  {
    title: 'Javascript',
    colorClass: 'hover:text-[#F7DF1E]',
    icon: <JavaScript className={cn('h-6 w-6')} />,
  },
  {
    title: 'Node.js',
    colorClass: 'hover:text-[#69A064]',
    icon: <NodeJs className={cn('h-6 w-6')} />,
  },
  {
    title: 'Express.js',
    colorClass: 'hover:text-[#61DAFB]',
    icon: <ExpressJs className={cn('h-6 w-6')} />,
  },
  {
    title: 'Tailwind CSS',
    colorClass: 'hover:text-[#06B6D4]',
    icon: <TailwindCss className={cn('h-6 w-6')} />,
  },
  {
    title: 'MongoDB',
    colorClass: 'hover:text-[#69A064]',
    icon: <MongoDB className={cn('h-6 w-6')} />,
  },
  {
    title: 'Prisma',
    colorClass: 'hover:text-[#69A064]',
    icon: <Prisma className={cn('h-6 w-6')} />,
  },
];

const TechStack = () => {
  const animation = {
    hide: { x: -8, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  return (
    <div className={cn('mt-16', 'lg:mt-20')}>
      <m.p
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.4 }}
        className={cn('mb-2 text-sm text-secondary-foreground')}
      >
        Tech Stack and Tools
      </m.p>
      <m.div
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.5, staggerChildren: 0.015 }}
        className={cn('flex flex-wrap gap-2')}
      >
        {stacks.map(({ title, colorClass, icon }) => (
          <Tooltip key={title} title={title}>
            <m.div
              className={cn(
                'text-muted-foreground transition duration-200',
                colorClass,
              )}
              variants={animation}
            >
              {icon}
            </m.div>
          </Tooltip>
        ))}
      </m.div>
    </div>
  );
};

export default TechStack;
