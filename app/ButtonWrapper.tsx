import { FC } from 'react';
import localFont from 'next/font/local';
import Image from 'next/image';
import styles from './styles.module.css';

import star1 from '@/app/assets/star1.svg';
import star2 from '@/app/assets/star2.svg';
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
          className={`${times.className} absolute -right-[15px] -top-[200px] z-20 flex size-[150px] items-center justify-center text-center text-[16px] italic sm:-right-[55px] sm:-top-[350px] sm:size-[220px]`}>
          <div
            style={{ lineHeight: 1.2 }}
            className='absolute inset-0 z-20 flex items-center justify-center sm:text-2xl'>
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
          quality={100}
          priority
          src={keyboardM}
          alt=''
          className='absolute bottom-10 left-0 z-10 w-[284px] -rotate-12 sm:left-[-120px] sm:w-[512px] sm:max-w-none xl:hidden'
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
  );
};

export default ButtonWrapper;
