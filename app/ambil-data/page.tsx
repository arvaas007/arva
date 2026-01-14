import React from 'react';
import Navbar from '@/components/NavbarNeraca';
import Footer from '@/components/Footer';
import { Globe, Building2, Landmark, FileBarChart, Database } from 'lucide-react';
import Link from 'next/link';

export default function AmbilDataPage() {
    const dataSources = [
        {
            name: 'Refinitiv Islamic Finance',
            description: 'Database global terkemuka untuk data, berita, dan wawasan pasar keuangan Islam.',
            url: 'https://www.lseg.com/en/data-analytics/financial-data/islamic-finance',
            icon: <Globe className="w-6 h-6" />,
            color: 'bg-blue-600'
        },
        {
            name: 'Islamic Development Bank (IsDB)',
            description: 'Data pembangunan dan statistik dari negara-negara anggota IsDB.',
            url: 'https://www.isdb.org/',
            icon: <Building2 className="w-6 h-6" />,
            color: 'bg-green-600'
        },
        {
            name: 'World Bank Islamic Finance',
            description: 'Laporan, riset, dan data terkait keuangan syariah global dari Bank Dunia.',
            url: 'https://www.worldbank.org/en/topic/financialsector/brief/islamic-finance',
            icon: <Globe className="w-6 h-6" />,
            color: 'bg-sky-600'
        },
        {
            name: 'Bank Indonesia Syariah',
            description: 'Statistik ekonomi dan keuangan syariah Indonesia (SEKI/SSKI).',
            url: 'https://www.bi.go.id/id/statistik/ekonomi-keuangan/syariah/default.aspx',
            icon: <Landmark className="w-6 h-6" />,
            color: 'bg-amber-600'
        },
        {
            name: 'OJK Statistik Syariah',
            description: 'Data dan statistik perbankan, pasar modal, dan IKNB Syariah dari OJK.',
            url: 'https://data.ojk.go.id/SJKPublic',
            icon: <FileBarChart className="w-6 h-6" />,
            color: 'bg-red-600'
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar />
            <section className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="inline-block py-1 px-3 rounded-full bg-slate-900/5 text-slate-900 text-xs font-bold uppercase tracking-wider mb-4">
                            Database
                        </span>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                            Data Islamic Finance
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Akses data dan statistik ekonomi syariah terpercaya dari berbagai lembaga nasional dan internasional.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {dataSources.map((source, index) => (
                            <Link
                                key={index}
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all duration-200 flex items-start gap-4"
                            >
                                <div className={`p-3 rounded-xl ${source.color} text-white shrink-0`}>
                                    {source.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-1">
                                        {source.name}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {source.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
