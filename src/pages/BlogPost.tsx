import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogPost, type BlogPost as BlogPostType } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { MDXProvider } from "@mdx-js/react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    
    const loadPost = async () => {
      const blogPost = await getBlogPost(slug);
      console.log('BlogPost component - loaded post:', blogPost);
      setPost(blogPost);
      setLoading(false);
    };
    
    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const mdxComponents = {
    h1: (props: any) => <h1 className="text-4xl font-bold mb-6 text-foreground" {...props} />,
    h2: (props: any) => <h2 className="text-2xl font-semibold mb-4 mt-8 text-foreground" {...props} />,
    h3: (props: any) => <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground" {...props} />,
    p: (props: any) => <p className="mb-4 leading-relaxed text-foreground" {...props} />,
    ul: (props: any) => <ul className="mb-4 list-disc pl-6" {...props} />,
    ol: (props: any) => <ol className="mb-4 list-decimal pl-6" {...props} />,
    li: (props: any) => <li className="mb-1" {...props} />,
    code: (props: any) => <code className="bg-muted px-1 py-0.5 rounded text-sm" {...props} />,
    pre: (props: any) => <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4" {...props} />,
    blockquote: (props: any) => <blockquote className="border-l-4 border-primary pl-4 italic mb-4" {...props} />,
    strong: (props: any) => <strong className="font-semibold" {...props} />,
  };

  const src = import.meta.env.BASE_URL + post.image;

  console.log('BlogPost render - post:', post, 'loading:', loading);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
        
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="aspect-video mb-8 rounded-lg overflow-hidden">
              <img 
                src={src} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-sm text-muted-foreground mb-4">
              {formatDate(post.date)}
            </div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            {post.excerpt && (
              <p className="text-xl text-muted-foreground">{post.excerpt}</p>
            )}
          </header>
          
          <div className="prose prose-lg max-w-none">
            <MDXProvider components={mdxComponents}>
              {post.component && <post.component />}
            </MDXProvider>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;