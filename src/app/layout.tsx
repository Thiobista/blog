import './globals.css';

export const metadata = {
  title: 'My Blog',
  description: 'A demo Next.js blog',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <nav className="bg-blue-600 text-white px-4 py-3 flex gap-6">
          <a href="/" className="font-bold">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <main className="max-w-2xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}