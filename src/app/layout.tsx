import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Immortallis | I am what I wanted and I want what I am',
  description: 'I am what I wanted and I want what I am. Meister Eckhart',
  icons: {
    icon: 'https://res.cloudinary.com/stegault/image/upload/c_scale,h_30,w_30,f_auto,q_auto:eco/v1561378466/brandicon_xzpby6.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
        />
        
        {/* AIFX Runtime - for bokeh dust drift effect */}
        <Script src="https://cdn.aidesigner.ai/effects/runtime/v1.js" strategy="afterInteractive" />
        
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* Netlify Forms honeypot */}
        {/* @ts-ignore */}
        <form name="contact" netlify hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="text" name="subject" />
          <textarea name="message"></textarea>
        </form>
        
        {children}
      </body>
    </html>
  );
}
