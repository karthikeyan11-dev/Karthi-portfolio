"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import works from '@/data/works';

export default function WorkDetailClient({ id }: { id: string }) {
    const work = works.find((w) => w.id === id);

    if (!work) {
        return null;
    }

    return (
        <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-100 selection:text-white">
            <div className="max-w-4xl mx-auto px-4 py-12 md:py-24">
                <Link
                    href="/#works"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Experience
                </Link>

                <div className="space-y-8">
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-200 shadow-sm">
                        <Image
                            src={work.image}
                            alt={work.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="px-3 py-1 bg-zinc-100 text-zinc-900 text-xs font-bold rounded-full uppercase tracking-wider">
                                {work.type}
                            </span>
                            <span className="px-3 py-1 bg-zinc-100/50 text-zinc-500 text-xs font-medium rounded-full">
                                {work.duration}
                            </span>
                            {work.current && (
                                <span className="px-3 py-1 bg-brand/10 text-brand text-xs font-bold rounded-full uppercase tracking-wider">
                                    Current
                                </span>
                            )}
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                                {work.title}
                            </h1>
                            {work.role && (
                                <p className="text-xl md:text-2xl font-bold uppercase tracking-widest">
                                    <span className="text-zinc-900">Role : </span>
                                    <span className="text-brand">{work.role}</span>
                                </p>
                            )}
                            {work.subtitle && (
                                <p className="text-xl md:text-2xl text-zinc-500 font-thin">
                                    {work.subtitle}
                                </p>
                            )}
                            <p className="text-lg font-medium text-zinc-700">
                                {work.company}
                            </p>
                        </div>
                    </div>

                    {work.techStack && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-zinc-200">
                            <div className="space-y-4">
                                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold">
                                    Frontend Stack
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {work.techStack.frontend.map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs rounded-full font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold">
                                    Backend Stack
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {work.techStack.backend.map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs rounded-full font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="prose prose-zinc max-w-none">
                        <div className="work-detail-content">
                            {work.content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
