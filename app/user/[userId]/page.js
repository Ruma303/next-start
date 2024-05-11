import { notFound } from "next/navigation"
export default function UserId({ params }) {
    if (params.userId == 3) {
        return notFound();
    }
    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-4xl">User {params.userId}</h1>
            <p>This is the user page for user {params.userId}</p>
        </div>
    )
}