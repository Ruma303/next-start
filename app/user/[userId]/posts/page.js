export default function PostList({ params }) {
    return (
        <div className="flex flex-col items-center py-4">
            <h1 className="text-4xl">Posts of the user {params.userId}</h1>
        </div>
    )
}