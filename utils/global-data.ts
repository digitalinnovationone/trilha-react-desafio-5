import type { GlobalData } from '../types/post';

function decodeEnvironmentValue(value: string | undefined, fallback: string) {
  return value ? decodeURIComponent(value) : fallback;
}

export function getGlobalData(): GlobalData {
  return {
    name: decodeEnvironmentValue(process.env.BLOG_NAME, 'Caderno Digital'),
    blogTitle: decodeEnvironmentValue(
      process.env.BLOG_TITLE,
      'Ideias que conectam tecnologia e pessoas'
    ),
    footerText: decodeEnvironmentValue(
      process.env.BLOG_FOOTER_TEXT,
      'Feito com curiosidade e vontade de compartilhar.'
    ),
  };
}
