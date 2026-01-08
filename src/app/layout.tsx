import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/clientWrapper/ClientLayout';

const geistSans = Geist({
   variable: '--font-geist-sans',
   subsets: ['latin'],
});

const geistMono = Geist_Mono({
   variable: '--font-geist-mono',
   subsets: ['latin'],
});

export const metadata: Metadata = {
   title: 'Ebuka Francis | Frontend Developer',
   description:
      'Portfolio of Ebuka Francis, a passionate Frontend Developer specializing in React, Next.js, and modern web technologies.',
   verification: {
      google: '1FQbpEsqb6qeBvjQAOe6e4CH_Ga9bpLk0rQI4uXl2g4',
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         >
            <ClientLayout>{children}</ClientLayout>
         </body>
      </html>
   );
}
