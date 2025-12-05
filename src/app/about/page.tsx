'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MapPin, ChevronRight, ArrowRight, Users, Target, TrendingUp, Award, Clock, CheckCircle, Linkedin, Twitter, Facebook } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const team = [
    {
      name: "Budi Santoso",
      position: "Chief Executive Officer",
      description: "Pemimpin visioner dengan 15+ tahun pengalaman dalam industri periklanan digital."
    },
    {
      name: "Siti Rahayu",
      position: "Creative Director",
      description: "Ahli kreatif dengan portofolio kampanye sukses untuk berbagai brand ternama."
    },
    {
      name: "Ahmad Wijaya",
      position: "Marketing Strategist",
      description: "Spesialis strategi pemasaran dengan fokus pada pertumbuhan bisnis yang berkelanjutan."
    }
  ]

  const values = [
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: "Fokus pada Hasil",
      description: "Kami berkomitmen untuk memberikan hasil yang nyata dan terukur untuk setiap kampanye"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Kolaborasi",
      description: "Bekerja sama dengan klien sebagai mitra strategis untuk mencapai tujuan bersama"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: "Inovasi Berkelanjutan",
      description: "Terus mengembangkan pendekatan kreatif dan teknologi terkini dalam periklanan"
    }
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
              <Link href="/about" className="text-blue-600 font-medium">Tentang</Link>
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
              <Link href="/about" className="block px-3 py-2 text-blue-600 font-medium">Tentang</Link>
              <Link href="/services" className="block px-3 py-2 text-gray-900 hover:text-blue-600 font-medium">Layanan</Link>
              <Link href="/privacy" className="block px-3 py-2 text-gray-900 hover:text-blue-600 font-medium">Privasi</Link>
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Tentang <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">PT KAWASAN INDUSTRI WIJAYAKUSUMA</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Perusahaan periklanan terkemuka yang menggabungkan kreativitas, strategi, dan teknologi untuk menghasilkan kampanye yang luar biasa
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Cerita Kami
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Didirikan pada tahun 2014, <strong>PT KAWASAN INDUSTRI WIJAYAKUSUMA</strong> memulai perjalanan sebagai agen periklanan kecil dengan visi besar: membantu brand Indonesia berkembang melalui strategi pemasaran yang inovatif.
                </p>
                <p>
                  Selama lebih dari satu dekade, kami telah tumbuh menjadi mitra strategis untuk ratusan perusahaan, dari startup lokal hingga multinational corporations. Kami percaya bahwa periklanan yang efektif berasal dari pemahaman mendalam tentang brand, audiens, dan tujuan bisnis.
                </p>
                <p>
                  Dengan tim yang terdiri dari para profesional berpengalaman dan teknologi terkini, kami terus berinovasi untuk memberikan solusi periklanan yang tidak hanya kreatif tetapi juga memberikan ROI yang nyata bagi klien kami.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2">500+</div>
                  <div className="text-gray-600 font-medium">Klien Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2">10+</div>
                  <div className="text-gray-600 font-medium">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2">1000+</div>
                  <div className="text-gray-600 font-medium">Kampanye Sukses</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2">50+</div>
                  <div className="text-gray-600 font-medium">Tim Profesional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prinsip yang memandu setiap keputusan dan tindakan kami
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tim Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Para profesional berpengalaman yang memimpin perusahaan kami
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-orange-500 font-semibold mb-4">{member.position}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
                <div className="flex justify-center space-x-4 mt-6">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors cursor-pointer">
                    <Twitter className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bergabunglah dengan Kami
          </h2>
          <p className="text-xl text-blue-50 mb-8 leading-relaxed">
            Mari wujudkan visi brand Anda bersama tim profesional yang berdedikasi
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg font-semibold">
            Mulai Konsultasi Gratis
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