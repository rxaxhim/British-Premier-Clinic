export interface BlogPost {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  date: string;
  component: React.ComponentType;
}

// This function dynamically imports all MDX files from the blog directory
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const modules = import.meta.glob('/src/content/blog/*.mdx', { eager: true });
  console.log('Found MDX modules:', modules);
  
  const posts: BlogPost[] = [];
  
  for (const [path, module] of Object.entries(modules)) {
    const mdxModule = module as any;
    const slug = path.replace('/src/content/blog/', '').replace('.mdx', '');
    console.log('Processing module:', { path, slug, module: mdxModule });
    
    // The frontmatter is available as a frontmatter object
    const frontmatter = mdxModule.frontmatter || {};
    console.log('Extracted frontmatter:', frontmatter);
    
    posts.push({
      slug,
      title: frontmatter.title || 'Untitled',
      image: frontmatter.image || '/placeholder.svg',
      excerpt: frontmatter.excerpt || '',
      date: frontmatter.date || new Date().toISOString(),
      component: mdxModule.default,
    });
  }
  
  console.log('Final posts array:', posts);
  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    console.log('Attempting to load blog post:', slug);
    
    // Use the same glob pattern approach as getAllBlogPosts
    const modules = import.meta.glob('/src/content/blog/*.mdx', { eager: true });
    const targetPath = `/src/content/blog/${slug}.mdx`;
    
    const module = modules[targetPath];
    if (!module) {
      console.log('Module not found for slug:', slug);
      return null;
    }
    
    console.log('Module loaded successfully:', module);
    
    const mdxModule = module as any;
    // The frontmatter is available as a frontmatter object
    const frontmatter = mdxModule.frontmatter || {};
    console.log('Frontmatter extracted:', frontmatter);
    
    return {
      slug,
      title: frontmatter.title || 'Untitled',
      image: frontmatter.image || '/placeholder.svg',
      excerpt: frontmatter.excerpt || '',
      date: frontmatter.date || new Date().toISOString(),
      component: mdxModule.default,
    };
  } catch (error) {
    console.error('Error loading blog post:', error);
    return null;
  }
}