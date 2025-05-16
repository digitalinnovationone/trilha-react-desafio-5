Este é um projeto básico de blog construído com Next.js e integrado ao Supabase como backend para persistência de dados. Ele permite:

-Listar todos os posts existentes
-Visualizar detalhes de um post
-Criar novos posts
-Deletar posts existentes
O layout é responsivo, usando Tailwind CSS, e o Supabase é usado como banco de dados e API.

As tecnologias utilizadas foram as seguintes:
[Next.js] Framework React para renderização SSR/SSG
[Supabase] Backend-as-a-Service (banco de dados PostgreSQL + API REST)

[Tailwind CSS] Framework CSS utilitário

[React] Biblioteca para interfaces

Para rodar localmente:
Faça um clone do repositório,
yarn install

Configure as variáveis de ambiente:
Crie um arquivo .env.local com as seguintes chaves:
NEXT_PUBLIC_SUPABASE_URL=coloque_sua_url_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=coloque_sua_chave_anon_aqui

Inicie o servidor:
yarn dev
Acesse o app:
Abra http://localhost:3000/ no navegador.
