'use client';

import { useState } from 'react';
import localFont from 'next/font/local';
import Image from 'next/image';
import styles from '@/app/styles.module.css';
import Modal from '@/app/launch-week/cards/Modal';

import cImage from '@/app/launch-week/assets/c-pink.svg';
import cardImage from '@/app/launch-week/assets/keyboard.png';
import star1 from '@/app/assets/star1.svg';

const times = localFont({
  src: [
    {
      path: '../../assets/times-new-roman.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/times-new-roman-bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

const Card3 = () => {
  let [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <li className='relative flex flex-col items-center justify-center'>
      <div className='relative'>
        <Image src={cImage} alt='' priority />
        <div className='absolute left-1/2 top-1/2 z-10 w-[115%] -translate-x-1/2 -translate-y-1/2 -rotate-6'>
          <Image src={cardImage} alt='' priority className='relative z-10' />
        </div>

        <div
          className={`${times.className} absolute right-[-5%] top-[-5%] z-20 flex size-[60%] items-center justify-center text-center text-lg italic lg:text-base xl:size-[64%] xl:text-xl`}>
          <div
            style={{ lineHeight: 1.2 }}
            className='absolute inset-0 z-20 flex items-center justify-center xl:-rotate-6'>
            Upgrade
            <br />
            for a chance
            <br />
            to win
            <br />a keyboard!
          </div>
          <div className={`${styles.spin2}`}>
            <Image src={star1} alt='' />
          </div>
        </div>
      </div>
      <div className='relative'>
        <div className='relative z-20 -mt-[12%]'>
          <button
            type='button'
            onClick={handleOpen}
            className={`${styles.button}`}>
            Join the Livestreams
          </button>
        </div>
      </div>

      <Modal open={open} handleClose={handleClose} />
    </li>
  );
};

export default Card3;
