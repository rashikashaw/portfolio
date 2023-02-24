'use client';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { Shadows_Into_Light, Roboto } from '@next/font/google';
import { ThemeProvider } from 'next-themes';

const shadows_into_light = Shadows_Into_Light({
  variable: '--display-font',
  weight: '400',
  subsets: ['latin'],
});

const roboto = Roboto({
  variable: '--body-font',
  weight: ['100', '300', '400', '500', '700', '900'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${shadows_into_light.variable} ${roboto.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="px-[100px]">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};
