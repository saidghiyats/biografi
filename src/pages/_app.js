import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { ContextProvider } from '../context/Context';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} defaultTheme="system" attribute="class">
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
