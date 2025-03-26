"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function Post() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await fetch(`http://localhost:4000/posts/${postId}`);
                if (!response.ok) throw new Error("Failed to fetch post");
                const data = await response.json();
                setPost(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchPost();
    }, [postId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="flex flex-col items-center gap-4 py-4">
            <h1 className="text-4xl">{post.title}</h1>
            <small className="text-md">Category: {post.category}</small>
            <p className="text-lg">{post.body}</p>
        </div>
    );
}
