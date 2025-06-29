import { posts } from '../../../data/posts';
import Link from 'next/link';

export async function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }));
}

export default function BlogPost({ params }) {
  const post = posts.find(p => p.slug === params.slug);
  if (!post) return <div>Post not found.</div>;

  return (
    <article>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <span className="text-xs text-gray-400">{post.date}</span>
      <div className="mt-4 mb-8">{post.content}</div>
      <Link href="/" className="text-blue-600 hover:underline">&larr; Back to home</Link>
    </article>
  );
}