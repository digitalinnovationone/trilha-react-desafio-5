import type { GetServerSideProps } from 'next';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import type { Post } from '../../types/post';
import { getGlobalData } from '../../utils/global-data';
import { getPostBySlug } from '../../utils/mdx-utils';

type PostPageProps = {
  post: Post;
  globalData: ReturnType<typeof getGlobalData>;
};

export default function PostPage({ post, globalData }: PostPageProps) {
  const paragraphs = post.body
    .split(/\r?\n\s*\r?\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <Layout>
      <SEO
        description={post.description}
        title={`${post.title} | ${globalData.name}`}
        type="article"
      />
      <Header name={globalData.name} />
      <main className="py-10 sm:py-16">
        <Link href="/" legacyBehavior>
          <a className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3">
            <span aria-hidden="true">←</span>
            Voltar para todos os artigos
          </a>
        </Link>
        <article>
          <header className="border-b border-slate-200 pb-8 dark:border-slate-800">
            <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
              <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">
                {post.category}
              </span>
              <time dateTime={post.created_at}>
                {formatDate(post.created_at)}
              </time>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime} min de leitura</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-xl leading-relaxed text-slate-600 dark:text-slate-300">
              {post.description}
            </p>
            <p className="mt-6 text-sm font-medium text-slate-500 dark:text-slate-400">
              Por {post.author}
            </p>
          </header>
          <div className="prose prose-lg mt-9 max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-primary dark:prose-invert">
            {paragraphs.map((paragraph, index) => (
              <p key={`${index}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
            ))}
          </div>
        </article>
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

export const getServerSideProps: GetServerSideProps<
  PostPageProps,
  { id: string }
> = async ({ params }) => {
  const id = params?.id;
  if (!id) {
    return { notFound: true };
  }

  const post = await getPostBySlug(id);
  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
      globalData: getGlobalData(),
    },
  };
};
