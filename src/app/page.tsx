import Link from 'next/link';
import { posts } from '../data/posts';

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul className="space-y-6">
        {posts.map(post => (
          <li key={post.slug} className="border-b pb-4">
            <Link
              href={`/blog/${post.slug}`}
              className="text-2xl font-semibold text-blue-700 hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-gray-600">{post.excerpt}</p>
            <span className="text-xs text-gray-400">{post.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}