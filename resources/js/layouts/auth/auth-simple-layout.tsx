import logo from '@/assets/images/logo/logo-f11.png';
import udinus from '@/assets/images/udinus.jpg';
import { AnimatedGridPattern } from '@/components/template/home-page/animated-grid-pattern';
import { cn } from '@/lib/utils';
import { type PropsWithChildren } from 'react';
interface AuthLayoutProps {
    name?: string;
    title?: string;
}

export default function AuthSimpleLayout({
    children,
    title,
}: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <AnimatedGridPattern
                numSquares={40}
                maxOpacity={0.25}
                duration={2.5}
                repeatDelay={1}
                className={cn(
                    '[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]',
                    'inset-x-0 inset-y-[-30%] h-[150svh] skew-y-12',

                    'md:[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]',
                    'md:h-[200svh]',

                    'pointer-events-none fixed -z-10',
                )}
            />
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <a href="#" className="flex items-center gap-2 font-medium">
                        <div className="flex items-center justify-center rounded-md text-primary-foreground">
                            <img src={logo} width={50} height={50} alt="logo" />
                        </div>
                        Biro Teknik Informatika
                    </a>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs space-y-5">
                        <h1 className="text-2xl font-extrabold">{title}</h1>
                        {children}
                    </div>
                </div>
            </div>
            <div className="relative hidden bg-muted lg:block">
                <img
                    src={udinus}
                    alt="Login Cover"
                    className="h-full object-cover"
                />
            </div>
        </div>
    );
}
