import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import localFont from 'next/font/local';

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

type ModalLinkProps = { link: string; title: string; image: StaticImageData };

const ModalLink: FC<ModalLinkProps> = ({ link, title, image }) => {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className={`group flex flex-col items-center text-2xl font-bold ${times.className}`}>
      <Image
        src={image}
        alt=''
        className='transition duration-300 group-hover:scale-110'
        width={253}
        height={190}
      />
      <h3 className='transition duration-300 group-hover:italic group-hover:text-[#FF8B3E] group-hover:underline'>
        {title}
      </h3>
    </a>
  );
};

export default ModalLink;
