import Editor from '@/components/template/block-note/block-note';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Block } from '@blocknote/core';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Write an article',
        href: dashboard().url,
    },
];

export default function WriteArticle() {
    const [blocks, setBlocks] = useState<Block[]>([]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Write an Article" />
            <div className="flex h-screen flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <input
                    type="text"
                    placeholder="Article Title"
                    className="text-3xl font-bold outline-none"
                />
                <Editor editable={true} onSetBlocks={setBlocks} />
            </div>
        </AppLayout>
    );
}
