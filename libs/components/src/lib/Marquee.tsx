import { RootState, incrementImage } from '@coba/redux-store';

import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const images = [
  'marketing1.jpg',
  'marketing2.jpg',
  'marketing3.jpg',
  'marketing4.jpg',
  'marketing5.jpg',
  'marketing6.jpg',
];

const getRandomInteger = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function Marquee() {
  // const dispatch = useDispatch();
  // const { currentImage } = useSelector((state: RootState) => state.addsSlice);

  // const index = useMemo(() => {
  //   return currentImage % images.length;

  const index = getRandomInteger(0, images.length - 1);

  // }, [currentImage]);

  const backgroundImage = `/images/marketing/${images[index]}`;
  // console.log({ index, backgroundImage });

  return (
    <div
      className={`h-[250px] md:h-[300px] lg:h-[300px] xl:h-[400px] w-full bg-cover`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
}
