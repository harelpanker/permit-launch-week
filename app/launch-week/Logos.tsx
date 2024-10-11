'use client';

import Image from 'next/image';
import logo from '@/app/assets/logo.svg';
import { useCountdown } from '@/app/hooks/useCountdown';

const Logos = () => {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <div className='relative z-20'>
      <Image
        priority
        src={logo}
        alt='logo'
        className='absolute left-[4rem] top-0 w-[86px] -translate-x-1/2'
      />
    </div>
  );
};

export default Logos;
