import Link from 'next/link'
export default function Navbar() {
    return (
        <div className="flex flex-col items-center py-4">
            <nav>
                <Link href="/" className='text-md text-blue-400 underline underline-offset-2'>
                    Home </Link>
                <Link href="/user" className='text-md text-blue-400 underline underline-offset-2'>
                    Users </Link>
                <Link href="/docs" className='text-md text-blue-400 underline underline-offset-2'>
                    Docs </Link>
                <Link href="/register" className='text-md text-violet-400 underline underline-offset-2'>
                    Register </Link>
                <Link href="/login" className='text-md text-violet-400 underline underline-offset-2'>
                    Login </Link>
            </nav>
        </div>
    )
}