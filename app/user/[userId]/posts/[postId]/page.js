
export const generateMetadata = async ({ params }) => {
    const title = await new Promise
        ((resolve) => setTimeout(() => resolve(`User ${params.userId} | Post ${params.postId}`), 1000));
    const description = await new Promise
        ((resolve) => setTimeout(() => resolve(`This is the post ${params.postId} of the user ${params.userId}`), 1000));
    return { title, description };
};

export default function Post({ params }) {
    return (
        <div className="flex flex-col items-center py-4">
            <h1 className="text-4xl">Post {params.postId} of user {params.userId}</h1>
        </div>
    )
}