import { FC } from 'react';
import localFont from 'next/font/local';
import Image from 'next/image';
import styles from './styles.module.css';

import star1 from '@/app/assets/star1.svg';
import star2 from '@/app/assets/star2.svg';
import keyboardD from '@/app/assets/keyboardD.png';
import keyboardM from '@/app/assets/keyboard-m.png';

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
type ButtonWrapperProps = {};

const ButtonWrapper: FC<ButtonWrapperProps> = ({}) => {
  return (
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
          className={`${times.className} absolute -right-[15px] -top-[200px] z-20 flex size-[150px] items-center justify-center text-center text-[16px] italic sm:-right-[55px] sm:-top-[350px] sm:size-[220px] xl:bottom-auto xl:left-auto xl:right-[-8rem] xl:top-[-10rem] xl:size-[160px] 2xl:right-[-12rem] 2xl:top-[-12rem] 2xl:size-[200px]`}>
          <div
            style={{ lineHeight: 1.2 }}
            className='absolute inset-0 z-20 flex items-center justify-center sm:text-2xl xl:-rotate-12 xl:text-[18px] 2xl:text-[22px]'>
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

        <Image
          src={keyboardD}
          alt=''
          priority
          className='absolute right-[-22rem] top-[-8rem] z-10 hidden w-[316px] max-w-none -rotate-12 xl:block 2xl:right-[-31rem] 2xl:top-[-9rem] 2xl:w-[412px]'
        />

        <Image
          src={star1}
          alt=''
          priority
          className={`absolute right-[-24rem] top-[-6rem] hidden max-w-[150px] xl:block 2xl:right-[-34rem] 2xl:top-[-6rem] 2xl:max-w-[184px] ${styles.spin}`}
        />

        {/* keyboard */}
        <Image
          quality={100}
          priority
          src={keyboardM}
          alt=''
          className='absolute bottom-10 left-0 z-10 w-[284px] -rotate-12 sm:left-[-120px] sm:w-[512px] sm:max-w-none xl:hidden'
        />

        {/* swag */}
        <div
          className={`${times.className} absolute -right-[75px] top-[10px] flex size-[170px] items-center justify-center text-center text-[16px] font-bold italic text-white xl:left-[-7.5rem] xl:top-[-3rem] xl:size-[150px]`}>
          <div
            style={{ lineHeight: 1.2 }}
            className='absolute inset-0 z-20 flex items-center justify-center xl:-rotate-12'>
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
  );
};

export default ButtonWrapper;
