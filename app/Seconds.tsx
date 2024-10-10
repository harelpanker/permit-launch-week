import { FC } from 'react';
import localFont from 'next/font/local';
import Image from 'next/image';

import comp4M from '@/app/assets/comp4-m.svg';
import word3 from '@/app/assets/word3.svg';

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

type SecondsProps = { time: number };

const Seconds: FC<SecondsProps> = ({ time }) => {
  return (
    <div className='absolute bottom-0 right-3 z-20 w-full max-w-[160px] sm:max-w-[288px]'>
      <div className='absolute inset-0 z-30 flex h-full w-full items-center justify-center'>
        <div className='relative bottom-12 left-[10px] sm:bottom-20'>
          <span
            className={`${helvetica.className} text-[92px] tracking-[-0.05em] sm:text-[160px]`}>
            {time}
          </span>
          <span
            className={`${times.className} relative -left-4 top-6 text-[30px] sm:text-[46px]`}>
            s
          </span>
        </div>
      </div>
      <Image src={comp4M} alt='' priority className='relative z-20' />
      <div className='flex w-full justify-end pt-1 lg:hidden'>
        <Image src={word3} alt='' priority />
      </div>
    </div>
  );
};

export default Seconds;
