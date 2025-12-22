import { NavMain } from '@/components/template/sidebar/nav-main';
import { NavUser } from '@/components/template/sidebar/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import {
    Calendar,
    LayoutGrid,
    Newspaper,
    Pencil,
    SquarePen,
} from 'lucide-react';
import AppLogo from '../../app-logo';
import { NavArticle } from './nav-article';

const mainNavItems: NavItem[] = [
    {
        title: 'Events',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Attendance',
        href: dashboard(),
        icon: Calendar,
    },
];

const articleNavItems: NavItem[] = [
    {
        title: 'Write Article',
        href: dashboard(),
        icon: Pencil,
    },
    {
        title: 'All Articles',
        href: dashboard(),
        icon: Newspaper,
    },
    {
        title: 'Drafts',
        href: dashboard(),
        icon: SquarePen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
                <NavArticle items={articleNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
