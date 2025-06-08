import { contactSchema } from '../../lib/schema/contact';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Layout Docs',
  description: 'This is a simple layout documentation page',
  openGraph: {
    title: 'Layout Docs',
    description: 'This is a simple layout documentation page',
    url: 'http://nostro-dominio.com/docs/layout',
    siteName: 'Next App'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center py-4 w-screen">
      <h1 className="text-2xl text-white bg-blue-600 w-screen text-center py-2">
        Layout Docs
      </h1>
      {children}

      <div className="w-full max-w-2xl p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Contact Schema</h2>
        <pre className="bg-gray-200 p-4 rounded">
          <code>{JSON.stringify(contactSchema, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
}