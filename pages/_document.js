import Document, { Html, Head, Main, NextScript } from 'next/document';

// Se ejecuta antes del primer paint para evitar el destello de tema claro.
const themeScript = `(function(){try{var stored=localStorage.getItem('theme');var isDark=stored==='dark'||(stored!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);var root=document.documentElement;if(isDark){root.classList.add('dark');}root.style.colorScheme=isDark?'dark':'light';}catch(e){}})();`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx.locale };
  }

  render() {
    return (
      <Html lang={this.props.locale || 'en'} suppressHydrationWarning>
        <Head>
          <link rel="icon" type="image/png" sizes="64x64" href="/favicon.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
          <meta name="theme-color" content="#020617" media="(prefers-color-scheme: dark)" />
          <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
