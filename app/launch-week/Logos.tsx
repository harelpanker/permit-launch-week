'use client';

import Image from 'next/image';
import { useCountdown } from '@/app/hooks/useCountdown';
import localFont from 'next/font/local';

import logo from '@/app/assets/logo.svg';
import dateCards from '@/app/launch-week/assets/date-cards.svg';
import date from '@/app/launch-week/assets/date.svg';
import logoCenter from '@/app/assets/logo-center.svg';

const helvetica = localFont({
  src: [
    {
      path: '../assets/Helvetica.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/Helvetica-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

const Logos = () => {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <div
      className={`${helvetica.className} relative z-20 pt-[6rem] font-bold text-[#3A2F2F] sm:pt-[10rem] sm:text-4xl xl:pt-[5rem] xl:text-6xl`}>
      <Image
        priority
        src={logo}
        alt='logo'
        className='absolute left-[1rem] top-2 w-[120px] sm:left-[2rem] sm:w-[146px] xl:left-[5%]'
      />
      {/*  */}
      <div className='absolute -top-2 right-4 w-[120px] sm:w-[250px] xl:right-[2%] xl:w-[400px]'>
        <div className='absolute left-[5%] top-[25%] sm:left-[4%]'>{days}</div>
        <div className='absolute left-[30%] top-[22%] sm:left-[28%] xl:left-[29%]'>
          {hours}
        </div>
        <div className='absolute left-[55%] top-[23%] sm:left-[53%]'>
          {minutes}
        </div>
        <div className='absolute left-[78%] top-[20%] min-w-6'>{seconds}</div>
        <Image src={dateCards} alt='' priority className='w-full' />
        <Image
          src={date}
          alt=''
          priority
          className='relative bottom-3 w-full rotate-2 xl:bottom-10'
        />
      </div>
      {/*  */}
      <Image
        priority
        src={logoCenter}
        alt='logo'
        className='mx-auto max-w-[220px] sm:max-w-[400px] xl:ml-[5%]'
      />
    </div>
  );
};

export default Logos;
