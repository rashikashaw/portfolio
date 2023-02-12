import React from 'react';
import Image from 'next/image';
import { Button } from './Button';
import { motion } from 'framer-motion';

export const Landing = () => {
  return (
    <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
      <motion.div
        className="md:-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}>
        <div className="space-y-8">
          <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
            <span className="block bg-gradient-to-r from-pink-400 via-purple-700 to-indigo-800 bg-clip-text text-transparent">Powered</span>
            <span className="block">By Intellect</span>
            <span className="block">Driven By Values</span>
          </h1>
          <div className="space-x-8">
            <Button label="Buy Now" onClick={() => {}} clasName=""/>
            <a className="link">Learn More</a>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="md:-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}>
        <div className="relative hidden h-[450px] w-[450px] transition-all md:flex lg:h-[650px] lg:w-[600px]">
          <Image src="/iphone.png" fill style={{ objectFit: 'contain' }} alt="" />
        </div>
      </motion.div>
    </section>
  );
};
