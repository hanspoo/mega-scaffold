import Head from 'next/head';
import Image from 'next/image';

import Profile from '../components/profile';
import Link from 'next/link';
import { Easybank } from '../components/easybank';

export default function Home() {
  return Easybank();
}
