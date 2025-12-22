import Footer from '@/components/template/home-page/footer';
import Header from '@/components/template/home-page/header';

export default function ArticleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
