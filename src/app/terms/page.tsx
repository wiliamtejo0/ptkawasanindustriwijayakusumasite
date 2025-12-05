'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MapPin, ChevronRight, ArrowRight, FileText, AlertCircle, CheckCircle, Scale } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Terms() {
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
              <Link href="/privacy" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">Privasi</Link>
              <Link href="/terms" className="text-blue-600 font-medium">Syarat & Ketentuan</Link>
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
              <Link href="/privacy" className="block px-3 py-2 text-gray-900 hover:text-blue-600 font-medium">Privasi</Link>
              <Link href="/terms" className="block px-3 py-2 text-blue-600 font-medium">Syarat & Ketentuan</Link>
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
              <FileText className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Syarat & <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Ketentuan</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ketentuan penggunaan layanan dari <strong>PT KAWASAN INDUSTRI WIJAYAKUSUMA</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
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
                    <FileText className="w-6 h-6 text-blue-600 mr-3" />
                    1. Penerimaan Syarat dan Ketentuan
                  </h2>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      Syarat dan Ketentuan ini ("Ketentuan") mengatur penggunaan layanan periklanan yang disediakan oleh PT KAWASAN INDUSTRI WIJAYAKUSUMA ("KIW," "kami," atau "perusahaan"). Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat oleh Ketentuan ini.
                    </p>
                    <p>
                      Jika Anda tidak setuju dengan Ketentuan ini, jangan gunakan layanan kami. Kami berhak mengubah Ketentuan ini kapan saja dengan memberikan pemberitahuan kepada Anda.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                    2. Layanan Kami
                  </h2>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      KIW menyediakan berbagai layanan periklanan digital, termasuk namun tidak terbatas pada:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Digital Advertising (Google Ads, Social Media Ads)</li>
                      <li>Brand Development dan Visual Identity</li>
                      <li>Marketing Strategy dan Planning</li>
                      <li>Social Media Management</li>
                      <li>SEO Optimization</li>
                      <li>Content Marketing</li>
                      <li>Konsultasi Marketing</li>
                    </ul>
                    <p>
                      Kami berhak mengubah, menangguhkan, atau menghentikan layanan kami kapan saja dengan atau tanpa pemberitahuan sebelumnya.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 text-blue-600 mr-3" />
                    3. Kewajiban Klien
                  </h2>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      Sebagai klien, Anda setuju untuk:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Menyediakan informasi yang akurat dan lengkap tentang bisnis Anda</li>
                      <li>Memastikan semua materi yang disediakan tidak melanggar hak kekayaan intelektual pihak ketiga</li>
                      <li>Memberikan akses yang diperlukan untuk akun dan platform yang relevan</li>
                      <li>Memberikan umpan balik dan persetujuan tepat waktu untuk materi kampanye</li>
                      <li>Membayar semua biaya layanan sesuai dengan faktur yang dikeluarkan</li>
                      <li>Mematuhi semua peraturan dan hukum yang berlaku</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Scale className="w-6 h-6 text-blue-600 mr-3" />
                    4. Pembayaran dan Biaya
                  </h2>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      Ketentuan pembayaran berlaku sebagai berikut:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Biaya Layanan:</strong> Harga yang disepakati akan ditentukan dalam proposal atau kontrak</li>
                      <li><strong>Pembayaran:</strong> Pembayaran harus dilakukan sesuai dengan syarat yang ditentukan dalam faktur</li>
                      <li><strong>Biaya Tambahan:</strong> Biaya platform pihak ketiga (Google, Facebook, dll) akan ditagihkan secara terpisah</li>
                      <li><strong>Keterlambatan Pembayaran:</strong> Bunga keterlambatan sebesar 2% per bulan akan dikenakan untuk pembayaran terlambat</li>
                      <li><strong>Pengembalian Dana:</strong> Pengembalian dana akan diproses sesuai dengan kebijakan pengembalian kami</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Kekayaan Intelektual</h2>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      Kekayaan intelektual yang dihasilkan oleh KIW dalam penyediaan layanan akan menjadi milik KIW sampai pembayaran penuh diterima. Setelah pembayaran penuh, hak kepemilikan akan ditransfer kepada klien sesuai dengan ketentuan kontrak.
                    </p>
                    <p>
                      Klien menjamin bahwa semua materi yang disediakan kepada KIW tidak melanggar hak kekayaan intelektual pihak ketiga.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Konfidensialitas</h2>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      Kedua belah pihak setuju untuk menjaga kerahasiaan informasi yang diterima selama hubungan bisnis. Informasi konfidensial termasuk namun tidak terbatas pada:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Strategi bisnis dan marketing</li>
                      <li>Data keuangan dan pelanggan</li>
                      <li>Informasi produk dan layanan</li>
                      <li>Properti intelektual</li>
                    </ul>
                    <p>
                      Kewajiban kerahasiaan akan berlanjut setelah berakhirnya hubungan bisnis.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Pembatalan dan Pengakhiran</h2>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      Kedua belah pihak dapat mengakhiri hubungan bisnis dengan pemberitahuan tertulis 30 hari sebelumnya. Dalam kasus pengakhiran:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Klien bertanggung jawab untuk membayar semua biaya yang telah dikeluarkan hingga tanggal pengakhiran</li>
                      <li>KIW akan menyerahkan semua materi yang telah selesai</li>
                      <li>Hak kepemilikan untuk materi yang belum dibayar penuh tetap menjadi milik KIW</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Batasan Tanggung Jawab</h2>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      KIW tidak bertanggung jawab atas:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                      <li>Kehilangan data atau profit</li>
                      <li>Gangguan layanan pihak ketiga (Google, Facebook, dll)</li>
                      <li>Keputusan bisnis yang dibuat berdasarkan rekomendasi kami</li>
                    </ul>
                    <p>
                      Tanggung jawab maksimal KIW terbatas pada jumlah yang dibayarkan oleh klien untuk layanan yang bersangkutan.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Force Majeure</h2>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      KIW tidak bertanggung jawab atas kegagalan atau keterlambatan dalam pelaksanaan kewajiban kami jika disebabkan oleh kejadian di luar kendali kami, termasuk namun tidak terbatas pada bencana alam, perang, terorisme, pemogokan, atau gangguan teknologi.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Hukum yang Berlaku</h2>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap sengketa yang timbul dari atau terkait dengan Ketentuan ini akan diselesaikan melalui negosiasi yang baik hati, dan jika tidak dapat diselesaikan, akan diajukan ke pengadilan yang berwenang di Semarang, Indonesia.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Perubahan Ketentuan</h2>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      KIW berhak mengubah Ketentuan ini kapan saja. Perubahan akan berlaku efektif setelah diposting di website kami. Penggunaan layanan kami setelah perubahan constitutes acceptance dari Ketentuan yang diperbarui.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Kontak Kami</h2>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p><strong>PT KAWASAN INDUSTRI WIJAYAKUSUMA</strong></p>
                      <p>Email: legal@kiw.co.id</p>
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