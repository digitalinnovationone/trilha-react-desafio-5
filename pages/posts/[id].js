import { getGlobalData } from '../../utils/global-data';
import {
  getPostBySlug,
} from '../../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import ArrowIcon from '../../components/ArrowIcon';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';


const components = {
  a: CustomLink,
  Head,
};

export default function PostPage({
  posts,
  globalData,
}) {
  return (
    <Layout >
      <SEO
        title={`${posts.title} - ${globalData.name}`}
        description={posts.description}
      />
      <Header name={globalData.name} />
      <div className="backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 rounded-2xl p-8 md:p-12 w-full shadow-2xl mb-8">         
        <article className="px-6 md:px-0">
          <header>
            <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-8">
              {posts?.title}
            </h1>
            {posts?.description && (
              <p className="text-xl mb-8 text-center italic opacity-70">{posts?.description}</p>
            )}
          </header>
          <main>
            <article className="prose dark:prose-dark mx-auto">
              {posts?.body}
            </article>
          </main>
        </article>
      </div>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
        />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
        />
      <Link href="/">
        <a className="text-lg font-semibold text-blue-500 hover:text-blue-700">
          ← Voltar
        </a>
      </Link>
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const globalData = getGlobalData();
  const posts = await getPostBySlug(params.id);
 

  return {
    props: {
      globalData,
      posts,
    },
  };
};
