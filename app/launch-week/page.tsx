import { FC } from 'react';
import styles from '@/app/styles.module.css';
import Marquee from '../Marquee';

type PageProps = {};

const Page: FC<PageProps> = ({}) => {
  return (
    <section
      className={`${styles.section} relative flex min-h-screen flex-col gap-y-[100px] px-4 pb-32 pt-[270px] sm:gap-y-[170px] sm:pt-[320px] lg:px-12 xl:gap-y-14`}>
      <Marquee />
    </section>
  );
};

export default Page;
