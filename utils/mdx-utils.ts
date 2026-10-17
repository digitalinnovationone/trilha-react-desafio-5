import { samplePosts } from '../content/posts';
import type { Post } from '../types/post';
import {
  fetchPosts,
  hasSupabaseConfig,
  SupabaseRequestError,
} from '../services/api';

function normalizePost(value: unknown): Post {
  if (!value || typeof value !== 'object') {
    throw new Error('The posts service returned an invalid post.');
  }

  const record = value as Record<string, unknown>;
  const id = record.id ?? record.slug;
  const title = record.title;
  const description = record.description;
  const body = record.body ?? record.content;

  if (
    (typeof id !== 'string' && typeof id !== 'number') ||
    typeof title !== 'string' ||
    typeof description !== 'string' ||
    typeof body !== 'string'
  ) {
    throw new Error('A post is missing a valid id, title, description, or body.');
  }

  const createdAt =
    typeof record.created_at === 'string' ? record.created_at : '';
  const wordCount = body.trim().split(/\s+/).filter(Boolean).length;

  return {
    id: String(id),
    title,
    description,
    body,
    created_at: createdAt,
    author: typeof record.author === 'string' ? record.author : 'Redação',
    category: typeof record.category === 'string' ? record.category : 'Geral',
    readingTime: Math.max(1, Math.ceil(wordCount / 200)),
  };
}

export async function getPosts(): Promise<Post[]> {
  if (!hasSupabaseConfig()) {
    return samplePosts;
  }

  const response = await fetchPosts('?select=*&order=created_at.desc');
  if (!Array.isArray(response)) {
    throw new Error('The posts service returned an invalid list of posts.');
  }

  return response.map(normalizePost);
}

export async function getPostBySlug(id: string): Promise<Post | null> {
  if (!hasSupabaseConfig()) {
    return samplePosts.find((post) => post.id === id) ?? null;
  }

  const query = new URLSearchParams({ id: `eq.${id}`, select: '*' });
  try {
    const response = await fetchPosts(`?${query.toString()}`);
    if (!Array.isArray(response)) {
      throw new Error('The posts service returned an invalid post response.');
    }

    return response.length ? normalizePost(response[0]) : null;
  } catch (error) {
    if (error instanceof SupabaseRequestError && error.code === '22P02') {
      return null;
    }

    throw error;
  }
}
