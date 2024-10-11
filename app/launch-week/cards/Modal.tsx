import { FC } from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from '@headlessui/react';

import bgMobile from '@/app/launch-week/assets/modal/modal-bg-mobile.svg';
import bgDesktop from '@/app/launch-week/assets/modal/modal-bg-desktop.svg';
import image1 from '@/app/launch-week/assets/modal/1.png';
import image2 from '@/app/launch-week/assets/modal/2.png';
import image3 from '@/app/launch-week/assets/modal/3.png';
import image4 from '@/app/launch-week/assets/modal/4.png';
import image5 from '@/app/launch-week/assets/modal/5.png';
import ModalLink from './ModalLink';
import { title } from 'process';

const helvetica = localFont({
  src: [
    {
      path: '../../assets/Helvetica.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/Helvetica-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});
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

type DialogProps = { open: boolean; handleClose: () => void };

const Modal: FC<DialogProps> = ({ open, handleClose }) => {
  const linkDay1 = 'https://www.panker.dev/';
  const linkDay2 = 'https://www.panker.dev/';
  const linkDay3 = 'https://www.panker.dev/';
  const linkDay4 = 'https://www.panker.dev/';
  const linkDay5 = 'https://www.panker.dev/';

  const data1 = [
    { title: 'Day 1 - All Welcome', link: linkDay1, image: image1 },
    { title: 'Day 2 - Backend & Data', link: linkDay2, image: image2 },
  ];
  const data2 = [
    { title: 'Day 3 - Platform & Cloud-Native', link: linkDay3, image: image3 },
    { title: 'Day 4 - LLM & AI', link: linkDay4, image: image4 },
    { title: 'Day 5 - IAM', link: linkDay5, image: image5 },
  ];

  return (
    <Dialog
      open={open}
      transition
      onClose={handleClose}
      className='fixed z-50 w-full transition duration-500 data-[closed]:opacity-0'>
      <DialogBackdrop
        onClick={handleClose}
        className='fixed inset-0 bg-white/10 backdrop-blur-xl'
      />
      <div className='fixed inset-0 flex h-full w-screen items-start justify-center overflow-y-auto text-center'>
        <DialogPanel className='mx-auto flex w-full max-w-[90%] flex-col gap-y-10 py-10 text-white'>
          <div className='sticky top-[5vh] z-10'>
            <div className='absolute inset-0 flex flex-col gap-y-10 py-12 pl-5 pr-8 sm:py-20'>
              <button
                onClick={handleClose}
                role='close button'
                type='button'
                className='absolute right-0 top-0 size-8'>
                <span className='sr-only'>Close modal</span>
              </button>
              <DialogTitle
                as={'h2'}
                className={`${helvetica.className} text-lg font-bold`}>
                Register and tune in to any of our Launch Week daily livestreams
                for your chance to win an exclusive custom keyboard!
              </DialogTitle>
              <div className='flex flex-col gap-y-6'>
                {data1.map(({ image, link, title }) => (
                  <ModalLink
                    key={title}
                    link={link}
                    title={title}
                    image={image}
                  />
                ))}
              </div>
            </div>
            <Image src={bgMobile} alt='' className='' />
          </div>
          <div className='relative z-20'>
            <div className='absolute inset-0 flex flex-col gap-y-10 py-12 pl-5 pr-8 sm:py-20'>
              <button
                onClick={handleClose}
                role='close button'
                type='button'
                className='absolute right-0 top-0 size-8'>
                <span className='sr-only'>Close modal</span>
              </button>
              <div className='flex flex-col gap-y-6'>
                {data2.map(({ image, link, title }) => (
                  <ModalLink
                    key={title}
                    link={link}
                    title={title}
                    image={image}
                  />
                ))}
              </div>
            </div>
            <Image src={bgMobile} alt='' className='' />
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modal;
