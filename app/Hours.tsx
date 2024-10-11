import { FC } from 'react';
import { useViewportSize } from '@mantine/hooks';
import localFont from 'next/font/local';
import Image from 'next/image';

import comp2M from '@/app/assets/comp2-m.svg';
import comp2D from '@/app/assets/comp2.svg';
import date from '@/app/assets/date.svg';
import word from '@/app/assets/d-word3.svg';

const times = localFont({
  src: [
    {
      path: './assets/times-new-roman.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/times-new-roman-bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});
const helvetica = localFont({
  src: [
    {
      path: './assets/Helvetica.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/Helvetica-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});
type HoursProps = { time: number };

const Hours: FC<HoursProps> = ({ time }) => {
  const desktopSize = 1280;
  const { width } = useViewportSize();

  return (
    <div className='absolute right-0 top-6 z-20 w-full max-w-[190px] sm:top-16 sm:max-w-[338px] xl:bottom-0 xl:left-[222px] xl:top-auto xl:z-40 xl:max-w-[226px] 2xl:left-[268px] 2xl:max-w-[272px]'>
      <div className='absolute inset-0 z-30 flex h-full w-full items-center justify-center'>
        <div className='relative bottom-5 left-[-20px] sm:bottom-12 sm:left-[-50px] xl:bottom-14 xl:left-2'>
          <span
            className={`${helvetica.className} text-[92px] tracking-[-0.05em] sm:text-[160px] xl:text-[140px] 2xl:text-[170px]`}>
            {time}
          </span>
          <span
            className={`${times.className} relative -top-2 left-0 text-[30px] sm:text-[46px] xl:-top-5 xl:text-[42px] 2xl:text-[52px]`}>
            h
          </span>
        </div>
      </div>
      <Image
        src={width < desktopSize ? comp2M : comp2D}
        alt=''
        priority
        className='relative z-20'
      />
      <Image
        src={date}
        alt=''
        priority
        className='absolute -left-4 -top-6 z-40 -rotate-6 sm:-left-8 sm:-top-12 sm:w-[344px] xl:-left-[11rem] xl:top-[-52px] xl:w-[330px] xl:max-w-none 2xl:-left-[13rem] 2xl:top-[-42px] 2xl:w-[396px]'
      />
      <Image
        src={word}
        alt=''
        priority
        className='absolute left-auto right-2 top-[-2rem] hidden xl:block'
      />
    </div>
  );
};

export default Hours;
