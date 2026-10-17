# Caderno Digital

Blog responsivo construído com React, TypeScript, Next.js 12 e Tailwind CSS. A página inicial apresenta os artigos publicados; cada artigo tem sua própria página com autoria, categoria, data e tempo estimado de leitura.

## Requisitos

- Node.js 18 ou superior
- npm

## Instalação e execução

```bash
npm install
npm run dev
```

Abra <http://localhost:3000>. Sem credenciais do Supabase, o blog usa os três artigos de demonstração em [`content/posts.ts`](./content/posts.ts), incluindo as respectivas páginas de leitura.

## Usar o Supabase

Crie `.env.local` na raiz do projeto:

```dotenv
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua-chave-publica
```

Reinicie o servidor após alterar as variáveis. A aplicação consulta a tabela `posts` apenas no servidor Next.js. Configure a política RLS para permitir leitura pública dos artigos publicados. Use somente a chave `anon`/publishable; nunca coloque uma chave `service_role` no cliente ou no repositório.

A tabela deve conter:

| Coluna | Obrigatória | Uso |
| --- | --- | --- |
| `id` (ou `slug`) | Sim | Identificador usado na URL |
| `title` | Sim | Título do artigo |
| `description` | Sim | Resumo e metadados |
| `body` (ou `content`) | Sim | Conteúdo do artigo em texto |
| `created_at` | Recomendado | Data de publicação |
| `author` | Não | Autor; assume “Redação” quando ausente |
| `category` | Não | Categoria; assume “Geral” quando ausente |

Configure as duas variáveis para usar o Supabase. Se ambas estiverem ausentes, a aplicação usa os artigos de demonstração; se apenas uma estiver definida, a configuração incompleta gera um erro explícito.

O nome do blog, seu título e o texto do rodapé podem ser personalizados com `BLOG_NAME`, `BLOG_TITLE` e `BLOG_FOOTER_TEXT`.

## Comandos e testes

```bash
npm run typecheck
npm run lint
npm run build
npm run start
npm run test:e2e
```

O Cypress testa a listagem e a navegação para um artigo, tanto com os dados de demonstração quanto com artigos acessíveis no Supabase. Para validar o Supabase localmente, configure `.env.local`, construa e inicie a aplicação e execute `npm run test:e2e`.
