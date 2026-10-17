import { Html, Head, Main, NextScript } from 'next/document';
import Document, { DocumentContext } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    return Document.getInitialProps(context);
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head />
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
