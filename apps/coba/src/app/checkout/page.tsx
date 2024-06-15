'use client';
import { SeccionCheckout } from '@coba/components';

import { Banner } from '@coba/desde-algolia';
import BannerImage from './marketing6.jpg';

const props = {
  size: 'xl',
  title: 'New<br />Collection',
  subtitle: 'Spring/summer 2021',
  image: {
    src: '/_next/static/media/banner.40bcb8c6.jpg',
    height: 1280,
    width: 1920,
    blurDataURL:
      '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.40bcb8c6.jpg&w=8&q=70',
  },
  imageAlt: 'New Collection - Spring/Summer 2021',
  fullWidth: true,
  overlay: true,
  classNameTitle:
    'text-3xl font-normal tracking-wider leading-tight laptop:text-7xl',
};
export default function Index() {
  return (
    <div>
      <SeccionCheckout />
    </div>
  );
}
