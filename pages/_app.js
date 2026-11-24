import { Inter, Sora } from 'next/font/google';
import '@/styles/globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      {/* next/font define las variables en el árbol que renderiza _app.
          Las llevamos a :root para que las resuelvan los tokens de Tailwind. */}
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
          --font-sora: ${sora.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
