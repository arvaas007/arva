import React from 'react';
import Navbar from '@/components/NavbarNeraca';
import Footer from '@/components/Footer';
import { Send, UploadCloud } from 'lucide-react';
export default function KirimDataPage() {
    return (
        <main className="min-h-screen bg-paper flex flex-col">
            <Navbar />
            <section className="flex-grow py-20 px-4">
                <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200">
                    <div className="text-center mb-10">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                            Partisipasi Publik
                        </span>
                        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">Kirim Data Ekonomi Umat</h1>
                        <p className="text-gray-500">
                            Punya data riset, laporan lapangan, atau statistik yang relevan? 
                            Kirimkan kepada kami untuk dikurasi dan dipublikasikan. Kirim dalam bentuk link drive Anda.
                        </p>
                    </div>
                    <form 
                        action="https://formspree.io/f/mbddjvlg" 
                        method="POST" 
                        encType="multipart/form-data"
                        className="space-y-6"
                    >
                        
                        {/* Nama */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Nama Lengkap</label>
                            <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300" />
                        </div>
                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Email</label>
                            <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300" />
                        </div>
                        {/* Pesan */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Pesan / Data</label>
                            <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300"></textarea>
                        </div>
                        {/* Tombol Kirim */}
                        <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800">
                            Kirim Data Sekarang
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </main>
    );
}

