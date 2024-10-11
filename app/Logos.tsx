import Image from 'next/image';
import logo from '@/app/assets/logo.svg';
import logoCenter from '@/app/assets/logo-center.svg';

const Logos = () => {
  return (
    <>
      <Image
        priority
        src={logo}
        alt='logo'
        className='absolute left-1/2 top-14 -translate-x-1/2 lg:left-[10%] lg:top-[74px] lg:translate-x-0'
      />
      <Image
        priority
        src={logoCenter}
        alt='logo'
        className='absolute left-1/2 top-[120px] max-w-[220px] -translate-x-1/2 lg:top-[46px] xl:max-w-max'
      />
    </>
  );
};

export default Logos;
