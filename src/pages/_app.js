import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Layout from '../layouts/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      enableSystem={true}
      defaultTheme="system"
      attribute="class"
      disableTransitionOnChange>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
