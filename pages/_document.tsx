import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://api.fontshare.com/v2/css?f[]=author@400,500,300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-Author">
          <Main />
          <div id="modal-root"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
