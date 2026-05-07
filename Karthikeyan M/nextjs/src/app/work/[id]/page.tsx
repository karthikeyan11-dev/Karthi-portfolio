import React from 'react';
import { notFound } from 'next/navigation';
import works from '@/data/works';
import WorkDetailClient from './work-detail-client';

export function generateStaticParams() {
    return works.map((work) => ({
        id: work.id,
    }));
}

export default async function WorkPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const work = works.find((w) => w.id === id);

    if (!work) {
        notFound();
    }

    return <WorkDetailClient id={id} />;
}
