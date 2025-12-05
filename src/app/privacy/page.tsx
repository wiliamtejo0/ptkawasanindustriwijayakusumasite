'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MapPin, ChevronRight, ArrowRight, Shield, Lock, Eye, Database } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Privacy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/80 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="PT KAWASAN INDUSTRI WIJAYAKUSUMA Logo" width={48} height={48} className="rounded-xl" />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  KAWASAN INDUSTRI
                </h1>
                <p className="text-xs text-gray-600 font-semibold">WIJAYAKUSUMA</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">Beranda</Link>
              <Link href="/about" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">Tentang</Link>
              <Link href="/services" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">Layanan</Link>
              <Link href="/privacy" className="text-blue-600 font-medium">Privasi</Link>
              <Link href="/terms" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">Syarat & Ketentuan</Link>
              <button className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                Hubungi Kami
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-900 hover:text-blue-600 font-medium">Beranda</Link>
              <Link href="/about" className="block px-3 py-2 text-gray-900 hover:text-blue-600 font-medium">Tentang</Link>
              <Link href="/services" className="block px-3 py-2 text-gray-900 hover:text-blue-600 font-medium">Layanan</Link>
              <Link href="/privacy" className="block px-3 py-2 text-blue-600 font-medium">Privasi</Link>
              <Link href="/terms" className="block px-3 py-2 text-gray-900 hover:text-blue-600 font-medium">Syarat & Ketentuan</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-orange-50/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Kebijakan <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Privasi</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Komitmen <strong>PT KAWASAN INDUSTRI WIJAYAKUSUMA</strong> dalam melindungi data dan privasi Anda
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <p className="text-gray-600 leading-relaxed">
                  Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Lock className="w-6 h-6 text-blue-600 mr-3" />
                    1. Informasi yang Kami Kumpulkan
                  </h2>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      PT KAWASAN INDUSTRI WIJAYAKUSUMA ("KIW") menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kami dapat mengumpulkan jenis informasi berikut:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Informasi Identifikasi Pribadi:</strong> Nama, alamat email, nomor telepon, alamat perusahaan</li>
                      <li><strong>Informasi Bisnis:</strong> Nama perusahaan, jabatan, industri, ukuran perusahaan</li>
                      <li><strong>Informasi Penggunaan:</strong> Data tentang bagaimana Anda menggunakan website dan layanan kami</li>
                      <li><strong>Informasi Teknis:</strong> Alamat IP, browser, device ID, cookie data</li>
                      <li><strong>Informasi Komunikasi:</strong> Konten dari email, panggilan telepon, dan formulir kontak</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Eye className="w-6 h-6 text-blue-600 mr-3" />
                    2. Cara Kami Menggunakan Informasi Anda
                  </h2>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      Kami menggunakan informasi yang dikumpulkan untuk tujuan berikut:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Menyediakan dan meningkatkan layanan periklanan kami</li>
                      <li>Memproses permintaan dan inquiries dari pelanggan potensial</li>
                      <li>Mengirimkan informasi tentang layanan dan promosi kami</li>
                      <li>Melakukan analisis pasar dan penelitian untuk meningkatkan layanan</li>
                      <li>Memastikan keamanan dan mencegah aktivitas penipuan</li>
                      <li>Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Database className="w-6 h-6 text-blue-600 mr-3" />
                    3. Berbagi dan Pengungkapan Data
                  </h2>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      Kami tidak menjual, menukar, atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami hanya dapat berbagi informasi Anda dalam keadaan berikut:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Dengan Persetujuan Anda:</strong> Ketika Anda memberikan persetujuan eksplisit</li>
                      <li><strong>Penyedia Layanan:</strong> Dengan mitra tepercaya yang membantu operasional kami</li>
                      <li><strong>Kewajiban Hukum:</strong> Ketika diwajibkan oleh hukum atau peraturan</li>
                      <li><strong>Transfer Bisnis:</strong> Dalam kasus merger, akuisisi, atau penjualan aset</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Keamanan Data</h2>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      KIW menerapkan langkah-langkah keamanan yang wajar dan sesuai untuk melindungi informasi pribadi Anda dari akses tidak sah, perubahan, pengungkapan, atau penghancuran. Langkah-langkah ini termasuk:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Enkripsi data selama transmisi dan penyimpanan</li>
                      <li>Akses terbatas ke informasi pribadi hanya untuk staf yang berwenang</li>
                      <li>Audit keamanan reguler dan penilaian risiko</li>
                      <li>Protokol respons insiden untuk menangani pelanggaran data</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Hak Anda</h2>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      Sebagai subjek data, Anda memiliki hak-hak berikut sesuai dengan peraturan perlindungan data yang berlaku:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Hak Akses:</strong> Meminta salinan data pribadi yang kami simpan</li>
                      <li><strong>Hak Koreksi:</strong> Memperbaiki data pribadi yang tidak akurat</li>
                      <li><strong>Hak Penghapusan:</strong> Meminta penghapusan data pribadi dalam keadaan tertentu</li>
                      <li><strong>Hak Pembatasan:</strong> Membatasi pemrosesan data pribadi Anda</li>
                      <li><strong>Hak Portabilitas:</strong> Menerima data pribadi dalam format yang terstruktur</li>
                      <li><strong>Hak Menolak:</strong> Menolak pemrosesan data pribadi untuk tujuan pemasaran</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookie dan Tracking</h2>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      Website kami menggunakan cookie dan teknologi tracking serupa untuk meningkatkan pengalaman pengguna dan menganalisis traffic. Cookie adalah file teks kecil yang disimpan di browser Anda. Anda dapat mengatur browser untuk menolak cookie, tetapi ini dapat mempengaruhi fungsionalitas website.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Penyimpanan Data</h2>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      Informasi pribadi Anda akan disimpan selama diperlukan untuk tujuan yang dikumpulkan, kecuali periode penyimpanan yang lebih lama diwajibkan atau diizinkan oleh hukum. Kriteria yang kami gunakan untuk menentukan periode penyimpanan meliputi:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Durasi hubungan bisnis dengan Anda</li>
                      <li>Kewajiban hukum untuk menyimpan data</li>
                      <li>Persyaratan peraturan atau kontraktual</li>
                      <li>Statute of limitations untuk potential klaim hukum</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Perubahan Kebijakan Privasi</h2>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami atau peraturan yang berlaku. Perubahan akan diposting di halaman ini dengan tanggal "Terakhir diperbarui" yang direvisi.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Kontak Kami</h2>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan terkait kebijakan privasi ini atau praktik data kami, silakan hubungi kami:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p><strong>PT KAWASAN INDUSTRI WIJAYAKUSUMA</strong></p>
                      <p>Email: privacy@kiw.co.id</p>
                      <p>Telepon: 082382466266</p>
                      <p>Alamat: Jl. Raya Semarang, Kendal No.Km .12, Tugurejo, Semarang, Indonesia 50153</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Image src="/logo.png" alt="PT KAWASAN INDUSTRI WIJAYAKUSUMA Logo" width={48} height={48} className="rounded-xl" />
                <div>
                  <h3 className="text-xl font-bold">KAWASAN INDUSTRI</h3>
                  <p className="text-sm text-gray-400 font-semibold">WIJAYAKUSUMA</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Perusahaan periklanan terkemuka yang menyediakan solusi kreatif dan efektif untuk pertumbuhan bisnis Anda.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                  <Phone className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Layanan</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Digital Advertising</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Brand Development</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Marketing Strategy</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Creative Design</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Kontak</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">
                    Jl. Raya Semarang, Kendal No.Km .12, Tugurejo, Semarang, Indonesia 50153
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">082382466266</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">info@kiw.co.id</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 PT KAWASAN INDUSTRI WIJAYAKUSUMA. Hak Cipta Dilindungi.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Kebijakan Privasi</Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Syarat & Ketentuan</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}