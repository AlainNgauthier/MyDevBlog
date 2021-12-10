// PNG icon for Android Chrome
// apple-touch-icon Apple Touch icon (for iPhone 6 Plus; other device will scale it down as needed).
import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';

import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png"/>
                <link rel="manifest" href="/img/site.webmanifest" />
                <link 
                    rel="stylesheet" 
                    href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                    crossOrigin=""
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&display=swap" rel="stylesheet" />
            </Head>
            <DefaultSeo {...SEO} />
            <GlobalStyles />
            <NextNprogress
                color="#0AA438"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <Component {...pageProps} />
        </>
    )
  }

  export default App;