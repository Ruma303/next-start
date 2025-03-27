import Link from "next/link";

export default async function users() {
  const users = await fetch("http://localhost:8080/api/contatti/").then(res => res.json());

  return (
    <div className="flex flex-col flex-wrap items-center py-4 gap-4">
      <h1 className="text-4xl">Dati da Spring Boot</h1>
      <div className="flex flex-col gap-4">
        {users.map(user => (
          <Link href={`/contatti/${user.id}`} className="hover:scale-105 transition-all duration-300 min-w-52 max-w-[30em]" key={user.id}>
            <div key={user.id} className="border rounded-lg shadow-md p-4">
              <h2 className="text-2xl">{user.nome} {user.cognome}</h2>
              <p>Email: {user.email}</p>
              <p>Numero: {user.numero}</p>
              <p>Note: {user.note}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}