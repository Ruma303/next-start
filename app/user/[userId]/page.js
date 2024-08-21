import { notFound } from "next/navigation"

export const generateMetadata = ({ params }) =>  {
    return {
        title: `User ${params.userId}`,
        description: `This is the user page for user ${params.userId}`,
    };
};

export default function UserId({ params }) {
    if (params.userId == 3) {
        throw new Error("User not found");
        return notFound();
    }
    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-4xl">User {params.userId}</h1>
            <p>This is the user page for user {params.userId}</p>
        </div>
    )
}

