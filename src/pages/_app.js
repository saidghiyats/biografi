import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { ContextProvider } from '../context/Context';
import Layout from '../layouts/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
