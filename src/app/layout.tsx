
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import { Inter, Space_Grotesk } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";
import './globals.css';

const inter = Inter({ subsets: ['latin'] })
const space_Grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spaceGrotesk",
});

export const metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://devshouse.tech'),
  title: 'DevsHouse',
  description: 'A community of developers'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en" className={`${space_Grotesk.variable} overflow-x-hidden`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="ELEVATE 2.0" />
        <title>ELEVATE 2.0</title>
        <meta property="og:description" content="Dil sa Elevate" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="../../public/Ignite your potential unleash your success.png" />
        <meta property="og:url" content="https://www.devshouse.tech" />

        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>{children}<Toaster /></MantineProvider>
      </body>
    </html>
  );
}
