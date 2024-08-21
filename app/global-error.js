'use client';
export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Global Error</h2>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={() => reset()}>
                        Try again
                    </button>
                </div>
            </body>
        </html>
    )
}

