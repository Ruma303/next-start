export default async function Posts({ params }) {
    const posts = await fetch('http://localhost:3000/posts').then(res => res.json());

    return (
        <div className="flex flex-col items-center py-4 gap-4">
            <h1 className="text-4xl">All posts from json-server</h1>
            <div className="flex flex-wrap gap-4">
                {posts.map(post => (
                    <div key={post.id} className="border rounded-lg shadow-md p-4">
                        <h2 className="text-2xl">{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}