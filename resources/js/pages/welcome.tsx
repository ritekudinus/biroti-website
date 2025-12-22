import { AnimatedGridPattern } from '@/components/template/home-page/animated-grid-pattern';
import ArticleSection from '@/components/template/home-page/article-section';
import EventSection from '@/components/template/home-page/event-section';
import FooterSection from '@/components/template/home-page/footer';
import Header from '@/components/template/home-page/header';
import HeroSection from '@/components/template/home-page/hero-section';
import { cn } from '@/lib/utils';

export default function Welcome() {
    return (
        <div>
            <Header />
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
            <HeroSection />
            <EventSection />
            <ArticleSection />
            <FooterSection />
        </div>
    );
}
