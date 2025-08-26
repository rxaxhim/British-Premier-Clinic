import { useEffect, useState } from "react";
import { getAllBlogPosts, type BlogPost } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import HeroBanner from "@/components/HeroBanner";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      const blogPosts = await getAllBlogPosts();
      setPosts(blogPosts);
      setLoading(false);
    };
    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <HeroBanner
        eyebrow="Resources"
        title="Blog & Resources"
        description="Stay informed with the latest insights, research, and resources in mental health care."
        badges={[
          `${posts.length} ${posts.length === 1 ? "post" : "posts"}`,
          `Updated ${new Date().toLocaleDateString()}`,
        ]}
      />

      {/* Grid */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No blog posts found. Add some .mdx files to get started!
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
