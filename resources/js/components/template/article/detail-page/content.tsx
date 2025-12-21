interface BlogContentProps {
    content: string[];
    coverImage?: string;
}

export const Content = ({ content, coverImage }: BlogContentProps) => {
    return (
        <article className="space-y-8">
            {coverImage && (
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted">
                    <img
                        src={coverImage}
                        alt="Cover Image"
                        className="h-full w-full object-cover"
                        width={800}
                        height={450}
                    />
                </div>
            )}

            <div className="prose prose-lg max-w-none">
                {content.map((paragraph, index) => (
                    <p
                        key={index}
                        className="text-blog-content mb-6 leading-relaxed"
                    >
                        {paragraph}
                    </p>
                ))}
            </div>
        </article>
    );
};
