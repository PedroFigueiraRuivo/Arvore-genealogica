import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = localFont({
  src: [
    {
      path: './fonts/Inter/Inter18pt-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Inter/Inter18pt-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Inter/Inter18pt-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Inter/Inter18pt-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Inter/Inter18pt-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Inter/Inter18pt-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Inter/Inter18pt-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/Inter/Inter18pt-Black.woff',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
});

const metadata_description = 'Um local de recordações';

export const metadata: Metadata = {
  title: `Árvore Ganealógica - ${metadata_description}`,
  description: metadata_description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}`}
        style={{ backgroundColor: 'var(--color-bg-alt)' }}
      >
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
