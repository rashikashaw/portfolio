import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const HText = ({ children }: Props) => {
  return <h1 className="font-montserrat basis-3/5 text-3xl font-bold">{children}</h1>;
};
