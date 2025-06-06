"use client";

import Link from "next/link";
import { useState } from "react";

export default async function Posts() {
  const [result, setResult] = useState([]);
  const posts = await fetch("/api/posts").then(res => res.json());

  return (
    <div className="flex flex-col items-center py-4 gap-4">
      <h1 className="text-4xl">All posts from json-server</h1>
      <div className="flex flex-col gap-4">
        {posts.map(post => (
          <Link href={`/posts/${post.id}`} className="hover:scale-105 transition-all duration-300 min-w-52 max-w-[30em]" key={post.id}>
            <div key={post.id} className="border rounded-lg shadow-md p-4">
              <h2 className="text-2xl">{post.title}</h2>
              <p>Category: {post.category}</p>
              <p>{post.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
