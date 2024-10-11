import { FC } from 'react';
import { useViewportSize } from '@mantine/hooks';
import localFont from 'next/font/local';
import Image from 'next/image';

import comp3M from '@/app/assets/comp3-m.svg';
import comp3D from '@/app/assets/comp3.svg';
import word1 from '@/app/assets/word1.svg';
import word2 from '@/app/assets/d-word4.svg';
import word3 from '@/app/assets/d-word5.svg';
import word4 from '@/app/assets/d-word6.svg';

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
  const desktopSize = 1280;
  const { width } = useViewportSize();

  return (
    <div className='absolute bottom-2 left-0 z-40 w-full max-w-[186px] sm:bottom-4 sm:max-w-[334px] xl:bottom-[54px] xl:left-[424px] xl:top-auto xl:z-20 xl:max-w-[270px]'>
      <div className='absolute inset-0 z-30 flex h-full w-full items-center justify-center'>
        <div className='relative left-[-20px]'>
          <span
            className={`${helvetica.className} text-[92px] tracking-[-0.05em] sm:text-[160px] xl:text-[140px]`}>
            {time}
          </span>
          <span
            className={`${times.className} relative -top-2 left-0 text-[30px] sm:text-[46px] xl:text-[42px]`}>
            m
          </span>
        </div>
      </div>
      <Image
        src={width < desktopSize ? comp3M : comp3D}
        alt=''
        priority
        className='relative z-20'
      />
      <Image src={word1} alt='' priority className='pt-1 lg:hidden' />
      <Image
        src={word2}
        alt=''
        priority
        className='absolute left-[2.5rem] top-[-1.5rem] hidden xl:block'
      />
      <Image
        src={word3}
        alt=''
        priority
        className='absolute left-[8rem] top-[-3rem] hidden xl:block'
      />
      <Image
        src={word4}
        alt=''
        priority
        className='absolute left-auto right-10 top-[-1.2rem] hidden xl:block'
      />
    </div>
  );
};

export default Minutes;
