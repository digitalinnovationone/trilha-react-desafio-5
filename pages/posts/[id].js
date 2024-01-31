import { getGlobalData } from '../../utils/global-data';
import {
  getPostBySlug,
} from '../../utils/mdx-utils';

import Head from 'next/head';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';
import { useRouter } from 'next/router';
import { format } from 'date-fns';


const components = {
  a: CustomLink,
  Head,
};

export default function PostPage({ post, globalData }) {
  console.log('PostPage - Post:', post);
  const router = useRouter();

  if (router.isFallback) {
    // opcional: adicionar um indicador de carregamento enquanto os dados estão sendo buscados
    return <div>Carregando...</div>;

  }

  const { id, title, body, created_at, user_id } = post[0];

  // Supondo que `user` seja a variável que contém os dados do usuário
  const { id: userId, name, email } = post[0]?.user || {};

  // Agora você pode usar essas variáveis como precisar
  console.log("ID do post:", id);
  console.log("Título do post:", title);
  console.log("Corpo do post:", body);
  console.log("Data de criação:", created_at);
  console.log("ID do usuário associado ao post:", user_id);
  console.log("ID do usuário:", userId);
  console.log("Nome do usuário:", name);
  console.log("Email do usuário:", email);
  

  const dateFormatt = format(new Date(created_at), 'dd/MM/yyyy')

  return (
    <Layout>
      <SEO
        title={`${title} - ${globalData.name}`}
        description={body}
      />
      <Header name={globalData.name} />
      <article className="px-6 md:px-0">
        <header>
          <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-12">
            {title}
          </h1>
          {body && (
            <p className="text-xl mb-4">{body}</p>
          )}
        </header>
        <main>
          <article className="prose dark:prose-dark">
            {user_id}
          </article>
        </main>
        <footer>
          <article className="prose dark:prose-dark">
            {dateFormatt}
          </article>
        </footer>
      </article>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const globalData = getGlobalData();
  const post = await getPostBySlug(params.id);

  if (!post) {
    console.error('Post not found!');
    return {
      notFound: true,
    };
  }

  return { props: { post, globalData } };
};

