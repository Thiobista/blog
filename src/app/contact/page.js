'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = 'Name is required';
    if (!form.email) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Email is invalid';
    if (!form.message) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      {sent && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4">
          Message sent! Thanks for reaching out.
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block">Name:</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
          />
          {errors.name && <div className="text-red-500 text-xs">{errors.name}</div>}
        </div>
        <div>
          <label className="block">Email:</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
          />
          {errors.email && <div className="text-red-500 text-xs">{errors.email}</div>}
        </div>
        <div>
          <label className="block">Message:</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
          />
          {errors.message && <div className="text-red-500 text-xs">{errors.message}</div>}
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </section>
  );
}