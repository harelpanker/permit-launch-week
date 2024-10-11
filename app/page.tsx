'use client';

import { useState, useEffect } from 'react';
import localFont from 'next/font/local';
import styles from './styles.module.css';

import Marquee from './Marquee';
import Logos from './Logos';
import Days from './Days';
import Hours from './Hours';
import Minutes from './Minutes';
import Seconds from './Seconds';
import ButtonWrapper from './ButtonWrapper';

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
      className={`${styles.section} relative flex min-h-screen flex-col gap-y-[100px] px-4 pb-32 pt-[270px] sm:gap-y-[170px] sm:pt-[320px] lg:px-12 xl:gap-y-14`}>
      {/* logo */}
      <Logos />

      {/* content */}
      <div className='relative z-10 mx-auto h-[386px] w-[340px] text-[#3A2F2F] sm:h-[676px] sm:w-[572px] xl:h-[366px] xl:w-[890px]'>
        <Days time={days} />
        <Hours time={hours} />
        <Minutes time={minutes} />
        <Seconds time={seconds} />
      </div>
      {/* button */}
      <ButtonWrapper />

      <Marquee />
    </section>
  );
};

export default Page;
