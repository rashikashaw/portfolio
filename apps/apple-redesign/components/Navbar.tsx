import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import { addToCart, selectCartItems } from '../redux/cartSlice';
import { Cart } from './Cart';
import { signIn, signOut, useSession } from 'next-auth/react';

export const Navbar = () => {
  const items = useSelector(selectCartItems);
  const { data: session } = useSession();
  return <header className="sticky z-50 top-0 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
    <div className="flex items-center justify-center cursor-pointer md:w-1/5">
      <Link href="/">
        <div className="relative h-10 w-5 opacity-75 transition hover:opacity-100">
          <Image alt="" src="https://rb.gy/vsvv2o" fill style={{ objectFit: 'contain' }} />
        </div>
      </Link>
    </div>
    <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
      <a href="headerLink">Product</a>
      <a href="headerLink">Explore</a>
      <a href="headerLink">Support</a>
      <a href="headerLink">Business</a>
    </div>
    <div className="flex items-center justify-center gap-x-4 md:w-1/5">
      <MagnifyingGlassIcon className="headerIcon" />
      <div className="relative cursor-pointer">
        <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4
          items-center justify-center
          rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[10px] text-white" >
          {items.length}
        </span>
        <ShoppingBagIcon className="headerIcon" />
      </div>
      {
        session ? (
          <Image src={ session.user?.image || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'}
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            onClick={() => signOut()}
          />
        ) : (
          <UserIcon className="headerIcon" onClick={() => signIn()}/>
        )
      }
    </div>
  </header>;
};
