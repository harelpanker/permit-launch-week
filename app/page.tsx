'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';
import styles from './styles.module.css';

import logo from '@/app/assets/logo.svg';
import logoCenter from '@/app/assets/logo-center.svg';
import comp1 from '@/app/assets/comp1.svg';
import comp2 from '@/app/assets/comp2.svg';
import comp3 from '@/app/assets/comp3.svg';
import comp4 from '@/app/assets/comp4.svg';
import comp1M from '@/app/assets/comp1-m.svg';
import comp2M from '@/app/assets/comp2-m.svg';
import comp3M from '@/app/assets/comp3-m.svg';
import comp4M from '@/app/assets/comp4-m.svg';
import star1 from '@/app/assets/star1.svg';
import star2 from '@/app/assets/star2.svg';
import keyboardM from '@/app/assets/keyboardM.png';
import word1 from '@/app/assets/word1.svg';
import word2 from '@/app/assets/word1.svg';
import word3 from '@/app/assets/word3.svg';
import date from '@/app/assets/date.svg';
import Marquee from './Marquee';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

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
const Page = () => {
  const targetDate = '2024-10-28T00:00:00';
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const difference = +new Date(targetDate) - +new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    // Return all zeros if the target date is in the past
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <section
      className={`${styles.section} relative min-h-screen px-4 pb-32 pt-[270px] sm:pt-[320px] lg:px-12`}>
      {/* logo */}
      <Image
        priority
        src={logo}
        alt='logo'
        className='absolute left-1/2 top-14 -translate-x-1/2 lg:left-[10%] lg:top-[74px] lg:translate-x-0'
      />
      <Image
        priority
        src={logoCenter}
        alt='logo'
        className='absolute left-1/2 top-[120px] max-w-[70%] -translate-x-1/2 lg:top-[46px]'
      />

      <div className='container relative z-20 text-[#3A2F2F]'>
        <div className='content flex flex-col gap-y-12 sm:gap-y-32'>
          {/* counter */}
          <div className='relative z-10 mx-auto flex w-full max-w-[92%] flex-col sm:flex-row sm:items-center'>
            <div className='flex'>
              {/* days */}
              <div className='item relative z-10'>
                <div className='absolute z-20 flex h-full w-full items-center justify-center'>
                  <div className='relative -left-[26px] bottom-8 flex'>
                    <span
                      className={`${helvetica.className} relative -left-[10px] text-[110px] tracking-[-0.15em] lg:leading-none`}>
                      {days}
                    </span>
                    <span
                      className={`${times.className} relative -left-3 bottom-[32px] self-end text-[36px] leading-none lg:text-3xl`}>
                      d
                    </span>
                  </div>
                </div>

                <div className='relative z-10'>
                  <Image
                    src={comp1}
                    alt=''
                    priority
                    className='hidden lg:block'
                  />
                  <Image
                    src={comp1M}
                    alt=''
                    priority
                    className='relative z-20 max-w-[186px] lg:hidden'
                  />
                  <Image
                    src={star1}
                    alt=''
                    priority
                    className={`absolute -left-8 -top-12 max-w-[140px] pt-1 lg:hidden ${styles.spin}`}
                  />
                </div>
              </div>
              {/* hours */}
              <div className='item relative -left-[76px] top-[44px] z-20 sm:-left-7 sm:top-4'>
                <div className='absolute z-20 flex h-full w-full items-center justify-center'>
                  <div className='relative -left-[30px] bottom-[50px] flex'>
                    <span
                      className={`${helvetica.className} relative -left-[20px] text-[110px] tracking-[-0.15em] lg:leading-none`}>
                      {hours}
                    </span>
                    <span
                      className={`${times.className} relative bottom-[50px] self-end text-[36px] leading-none lg:text-3xl`}>
                      h
                    </span>
                  </div>
                </div>

                <div className='relative z-10'>
                  <Image
                    src={comp2}
                    alt=''
                    priority
                    className='hidden lg:block'
                  />
                  <Image
                    src={comp2M}
                    alt=''
                    priority
                    className='relative z-10 max-w-[230px] lg:hidden'
                  />
                  <Image
                    src={date}
                    alt=''
                    className='absolute -left-8 -top-10 z-20'
                  />
                </div>
              </div>
            </div>
            <div className='flex'>
              {/* minutes */}
              <div className='item relative -left-[15px] -top-[30px] z-40 sm:-left-32 sm:top-10'>
                <div className='absolute z-20 flex h-full w-full items-center justify-center'>
                  <div className='relative -left-[6px] flex'>
                    <span
                      className={`${helvetica.className} relative -left-[20px] bottom-10 text-[110px] tracking-[-0.05em] lg:leading-none`}>
                      {minutes}
                    </span>
                    <span
                      className={`${times.className} relative -left-3 bottom-24 self-end text-[36px] leading-none lg:text-3xl`}>
                      m
                    </span>
                  </div>
                </div>

                <Image
                  src={comp3}
                  alt=''
                  priority
                  className='hidden lg:block'
                />
                <div className='relative z-10'>
                  <Image
                    src={comp3M}
                    alt=''
                    priority
                    className='max-w-[224px] lg:hidden'
                  />
                  <Image
                    src={word1}
                    alt=''
                    priority
                    className='pt-1 lg:hidden'
                  />
                </div>
              </div>
              {/* seconds */}
              <div className='item relative -left-[94px] -top-[60px] z-30 sm:-left-[12rem] sm:top-2'>
                <div className='absolute z-20 flex h-full w-full items-center justify-center'>
                  <div className='relative -left-[40px] bottom-[40px] flex'>
                    <span
                      className={`${helvetica.className} relative left-[80px] text-[100px] tracking-[-0.05em] lg:leading-none`}>
                      {seconds}
                    </span>
                    <span
                      className={`${times.className} relative bottom-0 left-[70px] self-end text-[36px] leading-none lg:text-3xl`}>
                      s
                    </span>
                  </div>
                </div>

                <Image
                  src={comp4}
                  alt=''
                  priority
                  className='hidden lg:block'
                />
                <div className='relative z-10'>
                  <Image
                    src={comp4M}
                    alt=''
                    priority
                    className='max-w-[192px] lg:hidden'
                  />
                  <div className='flex w-full justify-end pt-1 lg:hidden'>
                    <Image src={word3} alt='' priority />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* button */}
          <div className='relative z-20 flex items-center justify-center'>
            <div className='relative'>
              {/* button */}
              <a
                className={`${styles.button} relative z-20 rounded-full text-lg font-bold lg:text-3xl`}
                target='_blank'
                rel='noopener noreferrer'
                href='https://app.permit.io'>
                Register with GitHub
              </a>

              {/* swag */}
              <div
                className={`${times.className} absolute -right-[15px] -top-[200px] z-20 flex size-[150px] items-center justify-center text-center text-[16px] italic`}>
                <div
                  style={{ lineHeight: 1.2 }}
                  className='absolute inset-0 z-20 flex items-center justify-center '>
                  A chance to
                  <br />
                  win a custom
                  <br />
                  keyboard!
                </div>
                <div className={`${styles.spin2}`}>
                  <Image src={star1} alt='' />
                </div>
              </div>

              {/* keyboard */}
              <Image
                src={keyboardM}
                alt=''
                className='absolute bottom-10 left-0 -rotate-12 '
              />

              {/* swag */}
              <div
                className={`${times.className} absolute -right-[75px] top-[10px] flex size-[170px] items-center justify-center text-center text-[16px] font-bold italic text-white`}>
                <div className='absolute inset-0 z-20 flex items-center justify-center '>
                  Cool SWAG
                  <br />
                  for EVERY
                  <br />
                  attendee
                </div>
                <div className={`${styles.spin}`}>
                  <Image className={``} src={star2} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
};

export default Page;
