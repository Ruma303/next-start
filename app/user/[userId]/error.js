'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={() => reset()}>
                Try again
            </button>
        </div>
    )
}