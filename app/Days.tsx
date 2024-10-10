import { FC } from 'react';
import localFont from 'next/font/local';
import Image from 'next/image';
import styles from './styles.module.css';

import comp1M from '@/app/assets/comp1-m.svg';
import star1 from '@/app/assets/star1.svg';

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

type DaysProps = { time: number };

const Days: FC<DaysProps> = ({ time }) => {
  return (
    <div className='absolute left-4 top-0 z-10 w-full max-w-[156px] sm:max-w-[272px]'>
      <div className='absolute inset-0 z-30 flex h-full w-full items-center justify-center'>
        <div className='relative left-[-20px] top-[-10%] sm:left-[-40px]'>
          <span
            className={`${helvetica.className} text-[92px] tracking-[-0.05em] sm:text-[160px]`}>
            {time}
          </span>
          <span
            className={`${times.className} relative left-0 top-2 text-[30px] sm:text-[46px]`}>
            d
          </span>
        </div>
      </div>
      <Image src={comp1M} alt='' priority className='relative z-20' />
      <Image
        src={star1}
        alt=''
        priority
        className={`absolute -left-10 -top-12 z-10 max-w-[140px] pt-1 sm:-left-20 sm:-top-20 sm:max-w-[200px] ${styles.spin}`}
      />
    </div>
  );
};

export default Days;
