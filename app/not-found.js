import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center gap-2 py-4 w-screen">
            <h1 className="text-2xl text-black font-semibold bg-amber-500
                w-screen text-center py-2">Generic Not found!</h1>
            <Link href="/" className='text-md text-blue-400 underline underline-offset-2'>
                Return Home</Link>
        </div>
    )
}