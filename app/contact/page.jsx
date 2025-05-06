// app/contact/page.jsx
'use client';

import { useState } from 'react';
import { sendMessage } from '../(actions)/contact';

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(formData) {
    setStatus(null);
    try {
      await sendMessage(formData);
      setStatus({ type: 'success', message: 'Messaggio inviato con successo!' });
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    }
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <form
        action={handleSubmit}
        className="space-y-4 border p-4 rounded shadow"
      >
        <div>
          <label className="block text-sm font-medium">Nome</label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full border px-3 py-2 rounded text-slate-700"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full border px-3 py-2 rounded text-slate-700"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Messaggio</label>
          <textarea
            name="message"
            required
            className="mt-1 block w-full border px-3 py-2 rounded text-slate-700"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Invia
        </button>
      </form>

      {status && (
        <div
          className={`mt-4 p-2 rounded ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
        >
          {status.message}
        </div>
      )}
    </div>
  );
}