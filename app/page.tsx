'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';
import styles from './styles.module.css';

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
import Logos from './Logos';

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
      className={`${styles.section} relative flex min-h-screen flex-col gap-y-[100px] px-4 pb-32 pt-[270px] sm:pt-[320px] lg:px-12`}>
      {/* logo */}
      <Logos />

      <div className='relative z-10 mx-auto h-[386px] w-[340px] text-[#3A2F2F] md:hidden'>
        {/* days */}
        <div className='absolute left-4 top-0 z-10 w-full max-w-[156px]'>
          <div className='absolute inset-0 z-30 flex h-full w-full items-center justify-center'>
            <div className='relative left-[-20px]'>
              <span
                className={`${helvetica.className} text-[92px] tracking-[-0.05em]`}>
                {days}
              </span>
              <span
                className={`${times.className} relative left-0 top-2 text-[30px]`}>
                d
              </span>
            </div>
          </div>
          <Image src={comp1M} alt='' priority className='relative z-20' />
          <Image
            src={star1}
            alt=''
            priority
            className={`absolute -left-10 -top-12 z-10 max-w-[140px] pt-1 ${styles.spin}`}
          />
        </div>
        {/* hours */}
        <div className='absolute right-0 top-6 z-20 w-full max-w-[190px]'>
          <div className='absolute inset-0 z-30 flex h-full w-full items-center justify-center'>
            <div className='relative bottom-5 left-[-20px]'>
              <span
                className={`${helvetica.className} text-[92px] tracking-[-0.05em]`}>
                {hours}
              </span>
              <span
                className={`${times.className} relative -top-2 left-0 text-[30px]`}>
                h
              </span>
            </div>
          </div>
          <Image src={comp2M} alt='' priority className='relative z-20' />
          <Image
            src={date}
            alt=''
            className='absolute -left-4 -top-6 z-40 -rotate-6'
          />
        </div>
        {/* days */}
        <div className='absolute bottom-4 left-0 z-40 w-full max-w-[186px]'>
          <div className='absolute inset-0 z-30 flex h-full w-full items-center justify-center'>
            <div className='relative left-[-20px]'>
              <span
                className={`${helvetica.className} text-[92px] tracking-[-0.05em]`}>
                {minutes}
              </span>
              <span
                className={`${times.className} relative -top-2 left-0 text-[30px]`}>
                m
              </span>
            </div>
          </div>
          <Image src={comp3M} alt='' priority className='relative z-20' />
          <Image src={word1} alt='' priority className='pt-1 lg:hidden' />
        </div>
        {/* hours */}
        <div className='absolute bottom-0 right-3 z-20 w-full max-w-[160px]'>
          <div className='absolute inset-0 z-30 flex h-full w-full items-center justify-center'>
            <div className='relative bottom-5 left-[10px]'>
              <span
                className={`${helvetica.className} text-[92px] tracking-[-0.05em]`}>
                {seconds}
              </span>
              <span
                className={`${times.className} relative -left-4 top-6 text-[30px]`}>
                s
              </span>
            </div>
          </div>
          <Image src={comp4M} alt='' priority className='relative z-20' />
          <div className='flex w-full justify-end pt-1 lg:hidden'>
            <Image src={word3} alt='' priority />
          </div>
        </div>
      </div>
      {/* button */}
      <div className='relative z-20 flex items-center justify-center'>
        <div className='relative'>
          {/* button */}
          <a
            className={`${styles.button} relative z-30 rounded-full text-lg font-bold lg:text-3xl`}
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
            className='absolute bottom-10 left-0 z-10 -rotate-12 sm:w-[260px] sm:max-w-none lg:hidden'
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
              <Image src={star2} alt='' />
            </div>
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
};

export default Page;
