"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function user() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`http://localhost:8080/api/contatti/${id}`);
        if (!response.ok) throw new Error("Failed to fetch user");
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex flex-col items-center gap-4 py-4">
      <h1 className="text-4xl">{user.nome} {user.cognome}</h1>
      <p>Email: {user.email}</p>
      <p>Numero: {user.numero}</p>
      <p>Note: {user.note}</p>
    </div>
  );
}