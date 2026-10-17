export type Post = {
  id: string;
  title: string;
  description: string;
  body: string;
  created_at: string;
  author: string;
  category: string;
  readingTime: number;
};

export type GlobalData = {
  name: string;
  blogTitle: string;
  footerText: string;
};
