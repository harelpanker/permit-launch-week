import Image from 'next/image';
import styles from './styles.module.css';
import textLong from '@/app/assets/text-long.svg';

const Marquee = () => {
  return (
    <div
      className={`pointer-events-none absolute inset-0 flex h-full w-full justify-between overflow-hidden`}>
      <div className={`${styles.marquee} left-[2%] flex flex-col`}>
        {[...Array(2)].map((_, index) => (
          <div key={index} className='flex h-full flex-col'>
            <figure>
              <Image src={textLong} alt='' priority />
            </figure>
            <figure>
              <Image src={textLong} alt='' priority />
            </figure>
            <figure>
              <Image src={textLong} alt='' priority />
            </figure>
          </div>
        ))}
      </div>
      <div className={`${styles.marquee2} left-auto right-[2%] flex flex-col`}>
        {[...Array(2)].map((_, index) => (
          <div key={index} className='flex h-full flex-col'>
            <figure>
              <Image src={textLong} alt='' priority />
            </figure>
            <figure>
              <Image src={textLong} alt='' priority />
            </figure>
            <figure>
              <Image src={textLong} alt='' priority />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
