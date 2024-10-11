import localFont from 'next/font/local';
import Image from 'next/image';
import styles from '@/app/styles.module.css';

import cImage from '@/app/launch-week/assets/c-black.svg';
import cardImage from '@/app/launch-week/assets/card2.svg';
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
      <div className='relative z-20'>
        <Image src={cImage} alt='' priority />
        <div className='absolute left-1/2 top-[40%] w-[110%] -translate-x-1/2 -translate-y-1/2 -rotate-6'>
          <Image src={cardImage} alt='' priority className='' />
        </div>
      </div>
      <div className='relative z-30'>
        <div className='relative z-20 -mt-[12%]'>
          <button type='button' className={`${styles.button}`}>
            Claim your stickers
          </button>
        </div>
        {/* swag */}
        <div
          className={`${times.className} pointer-events-none absolute -left-[4rem] -top-2 z-10 flex size-[120px] items-center justify-center text-center text-xl font-bold italic text-white xl:hidden xl:size-[200px]`}>
          <div
            style={{ lineHeight: 1.2 }}
            className='absolute inset-0 z-20 flex items-center justify-center xl:-rotate-12'>
            Limited!
          </div>
          <div className={`${styles.spin}`}>
            <Image src={star2} alt='' />
          </div>
        </div>
      </div>
      {/* swag desktop */}
      <div
        className={`${times.className} pointer-events-none absolute left-[72%] top-[48%] z-10  hidden size-[120px] items-center justify-center text-center text-xl font-bold italic text-white xl:flex xl:size-[200px]`}>
        <div
          style={{ lineHeight: 1.2 }}
          className='absolute inset-0 z-20 flex -rotate-6 items-center justify-center'>
          Limited!
        </div>
        <div className={`${styles.spin}`}>
          <Image src={star2} alt='' />
        </div>
      </div>
    </li>
  );
};

export default Card2;
