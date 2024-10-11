import localFont from 'next/font/local';
import Image from 'next/image';
import styles from '@/app/styles.module.css';

import cImage from '@/app/launch-week/assets/c-purple.svg';
import cardImage from '@/app/launch-week/assets/card1.svg';
import star2 from '@/app/assets/star2.svg';

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

const Card2 = () => {
  return (
    <li className='relative flex flex-col items-center justify-center'>
      <div className='relative'>
        <Image src={cImage} alt='' priority />
        <div className='absolute left-1/2 top-1/2 w-[110%] -translate-x-1/2 -translate-y-1/2 -rotate-6'>
          <Image src={cardImage} alt='' priority className='' />
        </div>
      </div>
      <div className='relative'>
        <div className='relative z-20 -mt-[12%]'>
          <button type='button' className={`${styles.button}`}>
            Share your ticket
          </button>
        </div>
        {/* swag */}
        <div
          className={`${times.className} absolute -right-[5rem] top-2 flex size-[150px] items-center justify-center text-center text-sm font-bold italic text-white xl:size-[150px]`}>
          <div
            style={{ lineHeight: 1.2 }}
            className='absolute inset-0 z-20 flex items-center justify-center xl:-rotate-12'>
            for a chance
            <br />
            to get a
            <br />
            SWAG package!
          </div>
          <div className={`${styles.spin}`}>
            <Image src={star2} alt='' />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card2;
