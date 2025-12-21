import Header from '@/components/template/home-page/header';
import Footer from '@/components/template/home-page/footer';

export default function ArticleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
      <>
      <Header/>
      {children}
      <Footer/>
      </>
    );
}
