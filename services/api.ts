const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

export class SupabaseRequestError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly code?: string
  ) {
    super(message);
    this.name = 'SupabaseRequestError';
  }
}

export function hasSupabaseConfig() {
  const hasUrl = Boolean(supabaseUrl);
  const hasKey = Boolean(supabaseKey);

  if (hasUrl !== hasKey) {
    throw new Error(
      'Incomplete Supabase configuration. Set both SUPABASE_URL and SUPABASE_ANON_KEY.'
    );
  }

  return hasUrl;
}

export async function fetchPosts(path = ''): Promise<unknown> {
  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      'Supabase is not configured. Set SUPABASE_URL and SUPABASE_ANON_KEY.'
    );
  }

  const projectUrl = supabaseUrl
    .replace(/\/rest\/v1\/?$/i, '')
    .replace(/\/+$/, '');
  const baseUrl = `${projectUrl}/rest/v1/posts`;
  const response = await fetch(`${baseUrl}${path}`, {
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
    },
  });

  if (!response.ok) {
    const contentType = response.headers.get('content-type');
    const errorBody = contentType?.includes('application/json')
      ? ((await response.json()) as { code?: unknown })
      : undefined;
    const code =
      errorBody && typeof errorBody.code === 'string'
        ? errorBody.code
        : undefined;

    throw new SupabaseRequestError(
      `Supabase request failed with status ${response.status}: ${response.statusText}`,
      response.status,
      code
    );
  }

  return response.json();
}
