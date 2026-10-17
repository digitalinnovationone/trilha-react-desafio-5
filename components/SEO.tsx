import Head from 'next/head';

type SEOProps = {
  title: string;
  description: string;
  type?: 'article' | 'website';
};

export default function SEO({
  title,
  description,
  type = 'website',
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
