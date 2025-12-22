import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import data from '@/data.json';
import { Link } from '@inertiajs/react';
import { Calendar, ChevronRight, User } from 'lucide-react';
import type { ReactNode } from 'react';

type Article = (typeof data.articles)[number];

export default function ArticleSection() {
    const articles: Article[] = data.articles;

    return (
        <section>
            <div className="py-14 md:py-20">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold text-balance md:text-4xl">
                            Artikel Terbaru
                        </h2>
                        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
                            Baca artikel menarik dan informatif seputar berbagai
                            topik terkini. Dapatkan wawasan baru dan pengetahuan
                            yang bermanfaat.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {articles.map((article) => (
                            <ArticleCard
                                key={article.id}
                                title={article.title}
                                description={article.description}
                                author={article.author}
                                publishDate={article.publishDate}
                                category={article.category}
                                link={`/article/${article.slug}`}
                            >
                                <img
                                    src={article.thumbnail}
                                    alt={`Thumbnail ${article.title}`}
                                    className="h-48 w-full object-cover"
                                />
                            </ArticleCard>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <Button asChild variant="outline" className="gap-2">
                            <Link href="/article/">
                                Lihat Semua Artikel
                                <ChevronRight className="!size-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

const ArticleCard = ({
    title,
    description,
    author,
    publishDate,
    category,
    children,
    link,
}: {
    title: string;
    description: string;
    author: string;
    publishDate: string;
    category: string;
    children: ReactNode;
    link: string;
}) => {
    return (
        <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="relative">
                <div className="overflow-hidden">{children}</div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                        {category}
                    </span>
                </div>
            </div>

            <div className="p-6">
                <div className="space-y-3">
                    <h3 className="line-clamp-2 text-xl font-semibold transition-colors group-hover:text-primary">
                        {title}
                    </h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {description}
                    </p>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4 border-t border-border/50 pt-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <User className="size-3" />
                        <span>{author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar className="size-3" />
                        <span>{publishDate}</span>
                    </div>
                </div>

                <div className="mt-4">
                    <Button
                        asChild
                        size="sm"
                        variant="ghost"
                        className="h-auto gap-1 p-0 font-medium text-primary hover:text-primary/80"
                    >
                        <Link href={link}>
                            Baca Selengkapnya
                            <ChevronRight className="!size-3.5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </Card>
    );
};
