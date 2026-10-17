import type { Post } from '../types/post';

export const samplePosts: Post[] = [
  {
    id: 'interfaces-que-acolhem',
    title: 'Interfaces que acolhem: acessibilidade desde o primeiro componente',
    description:
      'Pequenas decisões de design e código podem tornar um produto digital mais claro, inclusivo e confortável para todos.',
    body:
      'Acessibilidade não é uma etapa final de acabamento. Ela começa quando escolhemos uma estrutura semântica, definimos a ordem de navegação e pensamos em como cada informação será percebida por pessoas diferentes. Um botão com nome claro, por exemplo, ajuda tanto quem usa leitor de tela quanto quem está com pressa.\n\nNo dia a dia, vale priorizar contraste adequado, foco visível, textos objetivos e controles que funcionem pelo teclado. São melhorias simples de validar e que reduzem barreiras sem comprometer a identidade visual do produto.\n\nIncluir essas verificações no fluxo de desenvolvimento torna a acessibilidade parte da qualidade do software. O resultado é uma experiência mais consistente para toda a comunidade, não apenas para um grupo específico.',
    created_at: '2026-09-24T12:00:00.000Z',
    author: 'Marina Costa',
    category: 'Acessibilidade',
    readingTime: 3,
  },
  {
    id: 'componentes-react-reutilizaveis',
    title: 'Componentes React reutilizáveis sem perder clareza',
    description:
      'Como encontrar o equilíbrio entre reaproveitamento, composição e simplicidade na arquitetura de uma interface.',
    body:
      'Reutilizar código é útil quando elimina repetição e deixa a intenção mais fácil de entender. Em React, componentes pequenos e focados ajudam a dividir uma interface em partes que podem evoluir sem exigir mudanças em todo o projeto.\n\nIsso não significa transformar cada elemento visual em uma abstração. Antes de generalizar, procure padrões que realmente se repetem e modele apenas as variações necessárias com propriedades bem nomeadas. A composição costuma ser mais flexível do que acumular opções condicionais em um único componente.\n\nUma boa abstração reduz o esforço para fazer a próxima mudança. Se ela exige mais explicações do que a implementação original, simplificar também é uma escolha de arquitetura.',
    created_at: '2026-09-17T12:00:00.000Z',
    author: 'Rafael Almeida',
    category: 'React',
    readingTime: 3,
  },
  {
    id: 'rotina-de-estudos-dev',
    title: 'Uma rotina de estudos sustentável para quem está começando',
    description:
      'Um plano realista para aprender tecnologia com consistência, prática e espaço para a vida fora da tela.',
    body:
      'Aprender desenvolvimento é uma jornada contínua, e uma rotina sustentável costuma ser mais eficaz do que longas sessões esporádicas. Reserve períodos curtos para estudar um conceito e, logo depois, experimente aplicá-lo em um pequeno projeto próprio.\n\nAnotar dúvidas e registrar o que funcionou ajuda a enxergar o progresso, mesmo quando o conteúdo parece desafiador. Também é válido alternar leitura, prática e revisão: cada formato reforça o aprendizado de um jeito diferente.\n\nPor fim, faça pausas e mantenha metas que caibam na sua semana. A constância nasce de um plano possível de repetir, e não da obrigação de aprender tudo de uma vez.',
    created_at: '2026-09-10T12:00:00.000Z',
    author: 'João Martins',
    category: 'Carreira',
    readingTime: 2,
  },
];
