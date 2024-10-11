

import styles from '@/app/styles.module.css';
import Logos from '@/app/launch-week/Logos';
import Marquee from '@/app/Marquee';

const Page = () => {
  return (
    <section
      className={`${styles.section} relative flex min-h-screen flex-col px-4 pb-32 pt-[2rem] lg:px-12`}>
      <Logos />
      <Marquee />
    </section>
  );
};

export default Page;
