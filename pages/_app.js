import '@/styles/globals.css'
import { PageTransition } from 'next-page-transitions';
export default function App({ Component, pageProps }) {
  return (
    <PageTransition timeout={300} classNames="page-transition">
      <Component {...pageProps} key={Component} />
    </PageTransition>
  );
}
