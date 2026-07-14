export interface BlogPost {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  date: string;
  component: React.ComponentType;
}

// MDX files are eagerly bundled, so the data is available synchronously.
// This lets pages render full content during SSG (search engines see everything).
function moduleToPost(path: string, module: any): BlogPost {
  const slug = path.replace("/src/content/blog/", "").replace(".mdx", "");
  const frontmatter = module.frontmatter || {};
  return {
    slug,
    title: frontmatter.title || "Untitled",
    image: frontmatter.image || "/placeholder.svg",
    excerpt: frontmatter.excerpt || "",
    date: frontmatter.date || new Date().toISOString(),
    component: module.default,
  };
}

export function getAllBlogPostsSync(): BlogPost[] {
  const modules = import.meta.glob("/src/content/blog/*.mdx", { eager: true });
  return Object.entries(modules)
    .map(([path, module]) => moduleToPost(path, module))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostSync(slug: string): BlogPost | null {
  const modules = import.meta.glob("/src/content/blog/*.mdx", { eager: true });
  const module = modules[`/src/content/blog/${slug}.mdx`];
  return module ? moduleToPost(`/src/content/blog/${slug}.mdx`, module) : null;
}

// Async wrappers kept for backwards compatibility.
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return getAllBlogPostsSync();
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  return getBlogPostSync(slug);
}
