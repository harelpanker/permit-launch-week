'use client';

import { FC, useRef, useState, useEffect } from 'react';
import NextImage from 'next/image';
import localFont from 'next/font/local';
import styles from '@/app/styles.module.css';
import html2canvas from 'html2canvas';

import cImage from '@/app/launch-week/assets/c-purple.svg';
import cardImage from '@/app/launch-week/assets/card1.svg';
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

interface ShareNameImageProps {
  defaultName?: string;
  backgroundImageUrl: string;
  xPosition?: number;
  yPosition?: number;
}

const Card1: FC<ShareNameImageProps> = ({
  defaultName = 'John Doe',
  backgroundImageUrl = 'https://media.graphassets.com/UszeNnrUTCMKWhAXw5we',
  xPosition = 0.5,
  yPosition = 0.5,
}) => {
  const compositeRef = useRef<HTMLDivElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsImageLoaded(true);
    img.src = backgroundImageUrl;
  }, [backgroundImageUrl]);

  const generateImage = async (): Promise<string> => {
    if (!compositeRef.current) return '';

    const canvas = await html2canvas(compositeRef.current, {
      useCORS: true,
      scale: 2, // Increase resolution
    });

    return canvas.toDataURL('image/png');
  };

  const shareImage = async () => {
    if (!isImageLoaded) {
      alert('Please wait for the image to load');
      return;
    }

    try {
      const imageUrl = await generateImage();

      // Convert dataURL to Blob
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const file = new File([blob], 'my-name-image.png', { type: 'image/png' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: 'My Name Image',
          text: 'Check out this image with my name!',
          files: [file], // Share the image as a file
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'my-name-image.png';
        link.click();
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <li className='relative flex flex-col items-center justify-center'>
      <div className='relative'>
        <NextImage src={cImage} alt='' priority />
        <div className='absolute left-1/2 top-1/2 w-[105%] -translate-x-1/2 -translate-y-1/2 -rotate-6'>
          <NextImage src={cardImage} alt='' priority className='w-full' />
        </div>
      </div>
      <div className='relative'>
        <div className='relative z-20 -mt-[12%]'>
          <button
            type='button'
            onClick={shareImage}
            className={`${styles.button}`}>
            Share your ticket
          </button>

          {/* share image */}
          <div ref={compositeRef} className='relative hidden'>
            <NextImage
              src={backgroundImageUrl}
              alt=''
              width={420}
              height={218}
              className='w-[420px] max-w-none'
            />
            <div
              className={`${times.className} absolute inset-0 flex max-w-[96px] items-center justify-center text-2xl font-bold text-white`}
              style={{
                left: `${xPosition * 100}%`,
                top: `${yPosition * 100}%`,
                transform: 'translate(50%, -50%)',
                lineHeight: 1,
              }}>
              {defaultName}
            </div>
          </div>
        </div>
        {/* swag */}
        <div
          className={`${times.className} pointer-events-none absolute -right-[6rem] -top-4 z-10 flex size-[150px] items-center justify-center text-center text-sm font-bold italic text-white xl:-top-8 xl:size-[200px] xl:text-xl`}>
          <div
            style={{ lineHeight: 1.2 }}
            className='absolute inset-0 z-20 flex items-center justify-center xl:-rotate-6'>
            for a chance
            <br />
            to get a
            <br />
            SWAG package!
          </div>
          <div className={`${styles.spin}`}>
            <NextImage src={star2} alt='' />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card1;
