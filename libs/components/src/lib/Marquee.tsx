import { RootState, incrementImage } from '@coba/redux-store';

import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from './hooks/useMediaQuery';

const images = [
  {
    desktop: 'banner-1-desktop.png',
    mobile: 'banner-1-mobile.png',
  },
];

const getRandomInteger = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function Marquee() {
  const isBreakpoint = useMediaQuery(1024);
  // const dispatch = useDispatch();
  // const { currentImage } = useSelector((state: RootState) => state.addsSlice);

  // const index = useMemo(() => {
  //   return currentImage % images.length;

  const index = getRandomInteger(0, images.length - 1);

  // }, [currentImage]);

  const backgroundImageDesktop = `/images/marketing/${images[index].desktop}`;
  const backgroundImageMobile = `/images/marketing/${images[index].mobile}`;
  // console.log({ index, backgroundImage });

  return (
    <div>
      {isBreakpoint ? (
        <div
          className={`h-[250px] md:h-[300px] lg:h-[300px] xl:h-[400px] w-full bg-cover lg:hidden`}
          style={{
            backgroundImage: `url(${backgroundImageMobile})`,
          }}
        ></div>
      ) : (
        <div
          className={`h-[250px] md:h-[300px] lg:h-[300px] xl:h-[400px] w-full bg-cover hidden lg:block`}
          style={{ backgroundImage: `url(${backgroundImageDesktop})` }}
        ></div>
      )}
    </div>
  );
}
