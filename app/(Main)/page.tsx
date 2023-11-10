'use client'
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Route/Hero';
import Image from 'next/image';

type Props = {}

const Page = (props: Props) => {
  return (
    <div>
        <Header activeItem={0}/>
        <Hero />
        <Image
          src={"https://pixner.net/aikeu/assets/images/footer/shape-two.png"}
          width={120}
          height={120}
          alt=""
          className="absolute right-[-30px]"
        />
    </div>
  )
}

export default Page