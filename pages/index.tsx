import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import ArrowIcon from '../components/ArrowIcon';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import type { Post } from '../types/post';
import { getGlobalData } from '../utils/global-data';
import { getPosts } from '../utils/mdx-utils';

type HomePageProps = {
  posts: Post[];
  globalData: ReturnType<typeof getGlobalData>;
};

export default function HomePage({
  posts,
  globalData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <SEO
        description={globalData.blogTitle}
        title={`${globalData.name} | ${globalData.blogTitle}`}
      />
      <Header name={globalData.name} />
      <main className="py-14 sm:py-20">
        <section className="mb-12 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Leituras para inspirar
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            {globalData.blogTitle}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Ideias, práticas e histórias sobre tecnologia, desenvolvimento e
            criatividade.
          </p>
        </section>

        <section aria-labelledby="posts-heading">
          <div className="mb-5 flex items-end justify-between">
            <h2
              className="text-xl font-semibold text-slate-900 dark:text-white"
              id="posts-heading"
            >
              Artigos recentes
            </h2>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              {posts.length} {posts.length === 1 ? 'artigo' : 'artigos'}
            </span>
          </div>
          {posts.length ? (
            <ul className="space-y-4">
              {posts.map((post) => (
                <li key={post.id}>
                  <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 sm:p-8">
                    <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
                      <time dateTime={post.created_at}>
                        {formatDate(post.created_at)}
                      </time>
                      <span aria-hidden="true">·</span>
                      <span>{post.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readingTime} min de leitura</span>
                    </div>
                    <h3 className="text-2xl font-semibold leading-snug text-slate-900 dark:text-white">
                      <Link
                        href={`/posts/${encodeURIComponent(post.id)}`}
                        legacyBehavior
                      >
                        <a className="transition group-hover:text-primary">
                          {post.title}
                        </a>
                      </Link>
                    </h3>
                    <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">
                      {post.description}
                    </p>
                    <Link
                      href={`/posts/${encodeURIComponent(post.id)}`}
                      legacyBehavior
                    >
                      <a
                        aria-label={`Mais informações: ${post.title}`}
                        className="mt-5 inline-flex items-center gap-2 font-semibold text-primary"
                      >
                        Continuar lendo
                        <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          ) : (
            <p className="rounded-2xl border border-slate-200 bg-white p-8 text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              Ainda não há artigos publicados. Volte em breve para conferir as
              novidades.
            </p>
          )}
        </section>
      </main>
      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? 'Data não informada'
    : new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(date);
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const posts = await getPosts();
  const globalData = getGlobalData();

  return {
    props: { posts, globalData },
    revalidate: 60,
  };
};
