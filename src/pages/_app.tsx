// PNG icon for Android Chrome
// apple-touch-icon Apple Touch icon (for iPhone 6 Plus; other device will scale it down as needed).
import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Sur Mes Routes</title>
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
                <meta 
                    name="description" 
                    content="A project to show the places I've ever been in the world" 
                />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    )
  }

  export default App