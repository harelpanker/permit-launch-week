import styles from '@/app/styles.module.css';
import Logos from '@/app/launch-week/Logos';
import Marquee from '@/app/Marquee';
import Cards from './Cards';

const Page = () => {
  return (
    <section
      className={`${styles.section} relative flex min-h-screen flex-col gap-y-6 px-4 pb-32 pt-[2rem] lg:px-12 xl:gap-y-20`}>
      <Logos />
      <Cards />
      <Marquee />
    </section>
  );
};

export default Page;
