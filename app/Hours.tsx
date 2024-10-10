import { FC } from 'react';
import localFont from 'next/font/local';
import Image from 'next/image';

import comp2M from '@/app/assets/comp2-m.svg';
import date from '@/app/assets/date.svg';

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
  return (
    <div className='absolute right-0 top-6 z-20 w-full max-w-[190px] sm:top-16 sm:max-w-[338px]'>
      <div className='absolute inset-0 z-30 flex h-full w-full items-center justify-center'>
        <div className='relative bottom-5 left-[-20px] sm:bottom-12 sm:left-[-50px]'>
          <span
            className={`${helvetica.className} text-[92px] tracking-[-0.05em] sm:text-[160px]`}>
            {time}
          </span>
          <span
            className={`${times.className} relative -top-2 left-0 text-[30px] sm:text-[46px]`}>
            h
          </span>
        </div>
      </div>
      <Image src={comp2M} alt='' priority className='relative z-20' />
      <Image
        src={date}
        alt=''
        className='absolute -left-4 -top-6 z-40 -rotate-6 sm:-left-8 sm:-top-12 sm:w-[344px]'
      />
    </div>
  );
};

export default Hours;
