'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MapPin, ChevronRight, ArrowRight, Users, Target, TrendingUp, Award, Clock, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: "Digital Advertising",
      description: "Strategi periklanan digital yang efektif untuk meningkatkan brand awareness dan konversi"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Brand Development",
      description: "Membangun identitas brand yang kuat dan konsisten di pasar yang kompetitif"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: "Marketing Strategy",
      description: "Perencanaan marketing yang komprehensif untuk pertumbuhan bisnis yang berkelanjutan"
    }
  ]

  const stats = [
    { value: "500+", label: "Klien Puas" },
    { value: "10+", label: "Tahun Pengalaman" },
    { value: "1000+", label: "Kampanye Sukses" },
    { value: "95%", label: "Tingkat Kepuasan" }
  ]

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
              <Link href="/privacy" className="block px-3 py-2 text-gray-900 hover:text-blue-600 font-medium">Privasi</Link>
              <Link href="/terms" className="block px-3 py-2 text-gray-900 hover:text-blue-600 font-medium">Syarat & Ketentuan</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-orange-50/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Perusahaan Periklanan Terpercaya
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                PT KAWASAN INDUSTRI
              </span>
              <br />
              <span className="text-4xl md:text-6xl text-gray-800">WIJAYAKUSUMA</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Mitra strategis Anda untuk solusi periklanan kreatif dan efektif yang menghasilkan pertumbuhan bisnis yang luar biasa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg font-semibold flex items-center justify-center">
                Mulai Konsultasi
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-lg font-semibold">
                Lihat Portfolio
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-gray-400 rotate-90" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Layanan Unggulan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi periklanan komprehensif yang disesuaikan dengan kebutuhan bisnis Anda
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-orange-500 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <button className="mt-6 text-blue-600 font-semibold hover:text-orange-500 transition-colors flex items-center">
                  Pelajari lebih lanjut
                  <ChevronRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Siap Meningkatkan Brand Anda?
          </h2>
          <p className="text-xl text-blue-50 mb-8 leading-relaxed">
            Bergabunglah dengan ratusan klien yang telah mempercayai kami untuk mengembangkan bisnis mereka melalui strategi periklanan yang inovatif
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg font-semibold">
            Hubungi Kami Sekarang
          </button>
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