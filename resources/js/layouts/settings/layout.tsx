import Heading from '@/components/heading';
import ProfileHeader from '@/components/template/profile/profile-header';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn, isSameUrl, resolveUrl } from '@/lib/utils';
import { edit as editAppearance } from '@/routes/appearance';
import { edit } from '@/routes/profile';
import { edit as editPassword } from '@/routes/user-password';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

const sidebarNavItems: NavItem[] = [
    {
        title: 'Profile',
        href: edit(),
        icon: null,
    },
    {
        title: 'Password',
        href: editPassword(),
        icon: null,
    },
    {
        title: 'Appearance',
        href: editAppearance(),
        icon: null,
    },
];

export default function SettingsLayout({ children }: PropsWithChildren) {
    // When server-side rendering, we only render the layout on the client...
    if (typeof window === 'undefined') {
        return null;
    }

    const currentPath = window.location.pathname;

    return (
        <div className="px-4 py-6">
            <div className="mx-auto mt-6 flex max-w-4xl flex-col md:space-y-10 lg:space-x-12">
                <Heading
                    title="Settings"
                    description="Manage your profile and account settings"
                />

                <ProfileHeader />
                <Separator className="my-6 lg:hidden" />
                <div className="mx-auto w-full md:max-w-4xl">
                    <nav className="flex space-y-1 space-x-0 md:gap-10">
                        {sidebarNavItems.map((item, index) => (
                            <Button
                                key={`${resolveUrl(item.href)}-${index}`}
                                size="sm"
                                variant="ghost"
                                asChild
                                className={cn('w-full justify-center', {
                                    'bg-muted': isSameUrl(
                                        currentPath,
                                        item.href,
                                    ),
                                })}
                            >
                                <Link href={item.href}>
                                    {item.icon && (
                                        <item.icon className="h-4 w-4 text-center" />
                                    )}
                                    {item.title}
                                </Link>
                            </Button>
                        ))}
                    </nav>
                </div>

                <Separator className="my-6 lg:hidden" />
                <div className="mx-auto flex-1 md:w-3/4">
                    <section className="space-y-12">{children}</section>
                </div>
            </div>
        </div>
    );
}
