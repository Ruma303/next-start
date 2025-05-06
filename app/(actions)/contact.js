// app/(actions)/contact.js
'use server';

import { revalidatePath } from 'next/cache';

export async function sendMessage(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string' ||
    !email.includes('@')
  ) {
    throw new Error('Dati non validi. Controlla i campi.');
  }

  // Simulazione invio email
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Revalidazione opzionale
  revalidatePath('/contact');
}