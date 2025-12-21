import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import data from '@/data.json';
import { Link } from '@inertiajs/react';
import { Calendar, ChevronRight, Clock, MapPin } from 'lucide-react';
import type { ReactNode } from 'react';

type Event = (typeof data.events)[number];

export default function EventSection() {
    const events: Event[] = data.events;

    return (
        <section>
            <div className="py-14 md:py-20">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold text-balance md:text-4xl">
                            Event Terbaru
                        </h2>
                        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
                            Informasi kegiatan dan acara terbaru. Temukan agenda
                            menarik yang dapat menambah wawasan dan mempererat
                            kebersamaan.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {events.map((event) => (
                            <EventCard
                                key={event.id}
                                title={event.title}
                                description={event.description}
                                date={event.date}
                                location={event.location}
                                duration={event.duration}
                                link={`/event/${event.id}`}
                            >
                                <img
                                    src={event.thumbnail}
                                    alt={`Event ${event.title}`}
                                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </EventCard>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="gap-2 px-8"
                        >
                            <Link href="/event">
                                Lihat Semua Event
                                <ChevronRight className="!size-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

const EventCard = ({
    title,
    description,
    date,
    location,
    duration,
    children,
    link,
}: {
    title: string;
    description: string;
    date: string;
    location: string;
    duration: string;
    children: ReactNode;
    link: string;
}) => {
    return (
        <Card className="group overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-xl">
            <div className="relative overflow-hidden">
                {children}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Date badge */}
                <div className="absolute top-4 right-4 rounded-lg bg-white/90 px-3 py-2 shadow-lg backdrop-blur-sm">
                    <div className="text-xs font-medium text-gray-600">
                        {new Date(date).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'short',
                        })}
                    </div>
                </div>
            </div>

            <div className="p-6">
                <div className="space-y-3">
                    <h3 className="line-clamp-2 text-xl font-bold transition-colors group-hover:text-primary">
                        {title}
                    </h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {description}
                    </p>
                </div>

                <div className="mt-4 space-y-2 border-t pt-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="size-4 text-primary" />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="size-4 text-primary" />
                        <span className="line-clamp-1">{location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="size-4 text-primary" />
                        <span>{duration}</span>
                    </div>
                </div>

                <div className="mt-6">
                    <Button
                        asChild
                        className="w-full gap-2 rounded-lg font-medium"
                    >
                        <Link href={link}>
                            Daftar Sekarang
                            <ChevronRight className="!size-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </Card>
    );
};
