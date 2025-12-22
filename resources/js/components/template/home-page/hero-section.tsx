import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { ArrowRight, Award, Play, Target, Users } from 'lucide-react';
import heroImage from '../../../assets/images/hero-image.webp';

export default function HeroSection() {
    return (
        <main className="overflow-hidden">
            <section className="relative">
                <div className="relative py-20 lg:py-32">
                    <div className="mx-auto max-w-6xl px-6">
                        {/* Badge */}
                        <div className="mb-6 text-center">
                            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                                <Award className="size-4" />
                                Terakreditasi Baik Sekali BAN-PT
                            </div>
                        </div>

                        {/* Main content */}
                        <div className="mx-auto max-w-4xl text-center">
                            <h1 className="font-heading bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-4xl leading-tight font-bold text-balance text-transparent md:text-6xl lg:text-7xl">
                                Biro Teknik Informatika
                            </h1>

                            <h2 className="font-heading mt-4 text-xl font-medium text-balance text-muted-foreground md:text-3xl lg:text-4xl">
                                Universitas Dian Nuswantoro Kota Kediri
                            </h2>

                            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
                                Menjembatani manusia dan teknologi dengan solusi
                                TI inovatif, memberikan layanan efisien yang
                                berkembang sesuai kebutuhan masa depan.
                            </p>

                            {/* CTA Buttons */}
                            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Button
                                    asChild
                                    size="lg"
                                    className="gap-2 rounded-xl px-8 py-4 text-base shadow-lg transition-all hover:shadow-xl"
                                >
                                    <Link href="/tentang-kami">
                                        Telusuri Lebih Lanjut
                                        <ArrowRight className="size-5" />
                                    </Link>
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="gap-2 rounded-xl border-2 px-8 py-4 text-base hover:bg-primary/5"
                                >
                                    <Link href="/program-studi">
                                        <Play className="size-5" />
                                        Lihat Program Studi
                                    </Link>
                                </Button>
                            </div>

                            {/* Stats */}
                            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-3">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary">
                                        500+
                                    </div>
                                    <div className="mt-1 text-sm text-muted-foreground">
                                        Mahasiswa Aktif
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary">
                                        20+
                                    </div>
                                    <div className="mt-1 text-sm text-muted-foreground">
                                        Dosen Berpengalaman
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary">
                                        95%
                                    </div>
                                    <div className="mt-1 text-sm text-muted-foreground">
                                        Tingkat Kelulusan
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative mt-16 overflow-hidden px-4 lg:mt-24">
                        <div className="relative mx-auto max-w-6xl">
                            {/* Decorative elements */}
                            <div className="relative rounded-2xl p-1">
                                <img
                                    src={heroImage}
                                    alt="Biro Teknik Informatika - Fasilitas Modern"
                                    className="relative aspect-video w-full rounded-xl shadow-2xl ring-1 ring-border/10"
                                    style={{
                                        maskImage:
                                            'linear-gradient(to bottom, black 85%, transparent 100%)',
                                        WebkitMaskImage:
                                            'linear-gradient(to bottom, black 85%, transparent 100%)',
                                    }}
                                />
                            </div>

                            {/* Floating cards */}
                            <div className="absolute top-8 -left-2 hidden max-w-48 rounded-xl border bg-background/80 p-4 shadow-lg backdrop-blur-sm sm:left-4 lg:block">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                        <Users className="size-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold">
                                            Komunitas Aktif
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            Student Community
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -right-2 bottom-8 hidden max-w-48 rounded-xl border bg-background/80 p-4 shadow-lg backdrop-blur-sm sm:right-4 lg:block">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                                        <Target className="size-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold">
                                            Kurikulum Terkini
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            Industry Standard
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
