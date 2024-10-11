import { FC } from 'react';
import { useViewportSize } from '@mantine/hooks';
import localFont from 'next/font/local';
import Image from 'next/image';
import styles from './styles.module.css';

import comp1M from '@/app/assets/comp1-m.svg';
import comp1D from '@/app/assets/comp1.svg';
import star1 from '@/app/assets/star1.svg';
import keyboardD from '@/app/assets/keyboardD.png';
import word1 from '@/app/assets/d-word1.svg';
import word2 from '@/app/assets/d-word2.svg';

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
  const desktopSize = 1280;
  const { width } = useViewportSize();

  return (
    <div className='absolute left-4 top-0 z-10 w-full max-w-[156px] sm:max-w-[272px] xl:top-[85px] xl:z-50 xl:max-w-[247px] 2xl:top-[110px] 2xl:max-w-[296px]'>
      <div className='absolute inset-0 z-30 flex h-full w-full items-center justify-center'>
        <div className='relative left-[-20px] top-[-10%] sm:left-[-40px] xl:left-[-20px] xl:top-0'>
          <span
            className={`${helvetica.className} text-[92px] tracking-[-0.05em] sm:text-[160px] xl:text-[140px] 2xl:text-[170px]`}>
            {time}
          </span>
          <span
            className={`${times.className} relative left-0 top-2 text-[30px] sm:text-[46px] xl:text-[42px] 2xl:-top-8 2xl:left-2 2xl:text-[52px]`}>
            d
          </span>
        </div>
      </div>
      <Image
        src={width < desktopSize ? comp1M : comp1D}
        alt=''
        priority
        className='relative z-20'
      />
      <Image
        src={star1}
        alt=''
        priority
        className={`absolute -left-10 -top-12 z-10 max-w-[140px] pt-1 sm:-left-20 sm:-top-20 sm:max-w-[200px] xl:-left-[60%] xl:top-[8rem] xl:max-w-[150px] 2xl:top-[10rem] 2xl:max-w-[182px] ${styles.spin}`}
      />
      <Image
        src={keyboardD}
        alt=''
        priority
        className='absolute -bottom-[120px] -left-[130px] z-10 hidden w-[316px] max-w-none rotate-12 xl:block 2xl:-bottom-[162px] 2xl:-left-[166px] 2xl:w-[412px]'
      />
      <Image
        src={word1}
        alt=''
        priority
        className='absolute -left-8 -top-8 hidden xl:block'
      />
      <Image
        src={word2}
        alt=''
        priority
        className='absolute -top-20 left-4 hidden xl:block'
      />
    </div>
  );
};

export default Days;
