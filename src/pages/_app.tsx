import type { AppProps } from 'next/app';
import { ThemeProvider, Container, merge } from 'theme-ui';
import { theme } from '@bjerk/brand';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';

const policyTheme = merge(theme, {
  styles: {
    root: {
      backgroundColor: 'white',
    },
    h1: {
      fontSize: 3,
      mb: 5,
    },
    h2: {
      fontSize: 2,
      fontWeight: 'bold',
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  const [dataProps, setDataProps] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (router.query.data) {
      const dataFromBase64 = Buffer.from(
        router.query.data.toString(),
        'base64',
      ).toString('utf-8');

      const data = JSON.parse(dataFromBase64);

      setDataProps({
        ...data,
        date: data.date ? new Date(data.date) : new Date(),
      });
    }
  }, [setDataProps, router.query]);

  return (
    <ThemeProvider theme={policyTheme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container sx={{ width: 'readable', p: 4 }}>
        <Component {...pageProps} {...dataProps} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
