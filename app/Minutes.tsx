import { FC } from 'react';
import localFont from 'next/font/local';
import Image from 'next/image';

import comp3M from '@/app/assets/comp3-m.svg';
import word1 from '@/app/assets/word1.svg';

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

type MinutesProps = { time: number };

const Minutes: FC<MinutesProps> = ({ time }) => {
  return (
    <div className='absolute bottom-2 left-0 z-40 w-full max-w-[186px] sm:bottom-4 sm:max-w-[334px]'>
      <div className='absolute inset-0 z-30 flex h-full w-full items-center justify-center'>
        <div className='relative left-[-20px]'>
          <span
            className={`${helvetica.className} text-[92px] tracking-[-0.05em] sm:text-[160px]`}>
            {time}
          </span>
          <span
            className={`${times.className} relative -top-2 left-0 text-[30px] sm:text-[46px]`}>
            m
          </span>
        </div>
      </div>
      <Image src={comp3M} alt='' priority className='relative z-20' />
      <Image src={word1} alt='' priority className='pt-1 lg:hidden' />
    </div>
  );
};

export default Minutes;
