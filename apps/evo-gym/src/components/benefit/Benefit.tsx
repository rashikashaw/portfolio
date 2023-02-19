import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import React from 'react';

type BenefitProps = {
  icon: JSX.Element;
  description: string;
  title: string;
  setSelectedPage: (value: SelectedPage) => void;
};

export const Benefit = (props: BenefitProps) => {
  const { icon, description, title, setSelectedPage } = props;
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="bg-primary-100 rounded-full border-2 border-gray-100 p-4">{icon}</div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-primary-500 hover:text-secondary-500 text-sm font-bold underline"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};
