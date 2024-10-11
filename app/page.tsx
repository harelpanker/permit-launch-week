'use client';

import styles from './styles.module.css';
import Marquee from './Marquee';
import Logos from './Logos';
import Days from './Days';
import Hours from './Hours';
import Minutes from './Minutes';
import Seconds from './Seconds';
import ButtonWrapper from './ButtonWrapper';
import { useCountdown } from './hooks/useCountdown';

const Page = () => {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <section
      className={`${styles.section} relative flex min-h-screen flex-col gap-y-[100px] px-4 pb-32 pt-[270px] sm:gap-y-[170px] sm:pt-[320px] lg:px-12 xl:gap-y-14`}>
      {/* logo */}
      <Logos />

      {/* content */}
      <div className='relative z-10 mx-auto h-[386px] w-[340px] text-[#3A2F2F] sm:h-[676px] sm:w-[572px] xl:h-[366px] xl:w-[890px] 2xl:h-[436px] 2xl:w-[1066px]'>
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
