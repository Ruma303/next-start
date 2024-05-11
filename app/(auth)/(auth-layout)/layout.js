import Link from 'next/link'
export default function layout({ children }) {
    return (
        <div className="flex flex-col gap-2 items-center py-4 w-screen bg-slate-500 h-48">
            <h1 className="text-2xl bg-emerald-400 w-screen text-center py-2">
                Layout Auth</h1>
            <nav>
                <Link href="/dashboard" className='text-md text-sky-400 underline underline-offset-2'>
                    Dashboard </Link>
                <Link href="/profile" className='text-md text-sky-400 underline underline-offset-2'>
                    Profile </Link>
            </nav>
            {children}
        </div >
    )
}
