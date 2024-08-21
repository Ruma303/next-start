'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const navLink = [
    { href: '/', label: 'Home', scroll: true, prefetch: true },
    { href: '/users', label: 'Users' },
    { href: '/posts', label: 'Posts' },
    { href: '/docs', label: 'Docs', prefetch: true },
    { href: '/register', label: 'Register' },
    { href: '/login', label: 'Login', scroll: true },
];

export default function Navbar() {
    const path = usePathname();
    const router = useRouter();
    return (
        <div className="flex flex-col items-center py-4 space-x-4">
            <nav className='flex gap-3'>
                {/* <button type="button" onClick={() => router.push('/dashboard')}>
                    Dashboard
                </button> */}
                {navLink.map(({ href, label }) => {
                    const isActive = path === href || path.startsWith(href + '/');
                    return (
                        <Link key={href} href={href} scroll={false}
                            className={`text-xl hover:text-amber-400 underline underline-offset-2 ${isActive ? 'text-amber-400' : 'text-blue-400'}`}>
                            {label}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}