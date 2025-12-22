'use client';
import logo from '@/assets/images/logo/logo-f11.png';
import { useAppearance } from '@/hooks/use-appearance';
import { cn } from '@/lib/utils';
import { dashboard, login } from '@/routes';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { LayoutGrid, Menu, Moon, Sun, User, X } from 'lucide-react';
import React from 'react';

const menuItems = [
    { name: 'Profile', href: '/profile' },
    { name: 'Event', href: '/event' },
    { name: 'Blog', href: '/article' },
];

export default function Header() {
    const { appearance, updateAppearance } = useAppearance();
    const { auth } = usePage<SharedData>().props;

    const [menuState, setMenuState] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2"
            >
                <div
                    className={cn(
                        'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
                        isScrolled &&
                            'max-w-4xl rounded-xl border bg-background/50 backdrop-blur-md lg:px-5',
                    )}
                >
                    <div className="relative flex flex-wrap items-center justify-between gap-4 py-2 lg:gap-0 lg:py-3">
                        <div className="flex w-full justify-between lg:w-full">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2"
                            >
                                <img
                                    src={logo}
                                    alt="logo"
                                    width={40}
                                    height={23}
                                />
                                <span className="font-heading text-xl">
                                    Biro TI
                                </span>
                            </Link>
                            <div className="flex items-center gap-3">
                                <nav>
                                    <button
                                        className='className="inline-block dark:hover:bg-[#3E3E3A]/50" rounded-sm p-1.5 text-[#1b1b18] hover:bg-[#19140010] dark:text-[#EDEDEC]'
                                        onClick={() =>
                                            updateAppearance(
                                                appearance === 'light'
                                                    ? 'dark'
                                                    : 'light',
                                            )
                                        }
                                    >
                                        {appearance === 'light' ? (
                                            <Sun />
                                        ) : (
                                            <Moon />
                                        )}
                                    </button>
                                </nav>
                                <nav className="flex items-center gap-4">
                                    {auth.user ? (
                                        <Link
                                            href={dashboard()}
                                            className="inline-block rounded-sm p-1.5 text-[#1b1b18] hover:bg-[#19140010] dark:text-[#EDEDEC] dark:hover:bg-[#3E3E3A]/50"
                                            title="Dashboard"
                                        >
                                            <LayoutGrid className="size-5" />
                                        </Link>
                                    ) : (
                                        <Link
                                            href={login()}
                                            className="inline-block rounded-sm p-1.5 text-[#1b1b18] hover:bg-[#19140010] dark:text-[#EDEDEC] dark:hover:bg-[#3E3E3A]/50"
                                            title="Log in"
                                        >
                                            <User className="size-5" />
                                        </Link>
                                    )}
                                </nav>
                                <div className="flex space-x-3 lg:hidden">
                                    <button
                                        onClick={() => setMenuState(!menuState)}
                                        aria-label={
                                            menuState == true
                                                ? 'Close Menu'
                                                : 'Open Menu'
                                        }
                                        className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5"
                                    >
                                        <Menu className="m-auto size-6 duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
                                        <X className="absolute inset-0 m-auto size-6 scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="block font-sans text-sm hover:underline"
                                        >
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-4 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-xl border bg-background p-3 shadow-2xl shadow-zinc-300/20 in-data-[state=active]:block md:flex-nowrap md:p-4 lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:in-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent">
                            <ul className="mb-0 divide-y divide-slate-200/20 text-base lg:hidden">
                                {menuItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className="px-2 py-3 hover:bg-slate-100"
                                    >
                                        <Link
                                            href={item.href}
                                            className="block duration-150 hover:underline"
                                        >
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="hidden lg:block"></div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
