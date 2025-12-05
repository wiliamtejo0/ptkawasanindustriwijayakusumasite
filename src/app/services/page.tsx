'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MapPin, ChevronRight, ArrowRight, Users, Target, TrendingUp, Award, Clock, CheckCircle, Linkedin, Twitter, Facebook, Monitor, Smartphone, Globe, Palette, Search, BarChart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Services() {
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
      icon: <Monitor className="w-12 h-12 text-blue-600" />,
      title: "Digital Advertising",
      description: "Strategi periklanan digital yang komprehensif untuk meningkatkan brand awareness dan konversi",
      features: [
        "Google Ads Management",
        "Social Media Advertising",
        "Display Advertising",
        "Video Advertising"
      ],
      price: "Mulai dari Rp 10Juta/bulan"
    },
    {
      icon: <Palette className="w-12 h-12 text-blue-600" />,
      title: "Brand Development",
      description: "Membangun identitas brand yang kuat dan konsisten di pasar yang kompetitif",
      features: [
        "Brand Strategy",
        "Visual Identity Design",
        "Brand Guidelines",
        "Brand Positioning"
      ],
      price: "Mulai dari Rp 15Juta/proyek"
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Marketing Strategy",
      description: "Perencanaan marketing yang komprehensif untuk pertumbuhan bisnis yang berkelanjutan",
      features: [
        "Market Research",
        "Competitor Analysis",
        "Marketing Planning",
        "ROI Optimization"
      ],
      price: "Mulai dari Rp 20Juta/proyek"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: "Social Media Management",
      description: "Manajemen media sosial profesional untuk engagement dan community building",
      features: [
        "Content Creation",
        "Community Management",
        "Social Media Strategy",
        "Performance Analytics"
      ],
      price: "Mulai dari Rp 8Juta/bulan"
    },
    {
      icon: <Search className="w-12 h-12 text-blue-600" />,
      title: "SEO Optimization",
      description: "Optimasi mesin pencari untuk meningkatkan visibility dan organic traffic",
      features: [
        "On-Page SEO",
        "Off-Page SEO",
        "Technical SEO",
        "Local SEO"
      ],
      price: "Mulai dari Rp 12Juta/bulan"
    },
    {
      icon: <BarChart className="w-12 h-12 text-blue-600" />,
      title: "Content Marketing",
      description: "Pembuatan konten berkualitas untuk menarik dan engage target audience",
      features: [
        "Blog Content",
        "Video Production",
        "Infographic Design",
        "Email Marketing"
      ],
      price: "Mulai dari Rp 10Juta/bulan"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "Memahami bisnis, target audience, dan tujuan marketing Anda"
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Mengembangkan strategi marketing yang disesuaikan dengan kebutuhan"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Eksekusi strategi dengan tim profesional berpengalaman"
    },
    {
      step: "04",
      title: "Optimization",
      description: "Monitor performance dan optimasi untuk hasil maksimal"
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
              <Link href="/about" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">Tentang</Link>
              <Link href="/services" className="text-blue-600 font-medium">Layanan</Link>
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
              <Link href="/services" className="block px-3 py-2 text-blue-600 font-medium">Layanan</Link>
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
              Layanan <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Profesional</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Solusi periklanan komprehensif dari <strong>PT KAWASAN INDUSTRI WIJAYAKUSUMA</strong> untuk mengakselerasi pertumbuhan bisnis Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg font-semibold flex items-center justify-center">
                Konsultasi Gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-lg font-semibold">
                Lihat Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Paket Layanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih layanan yang sesuai dengan kebutuhan dan budget bisnis Anda
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="p-8">
                  <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-6">
                    <p className="text-lg font-semibold text-blue-600 mb-4">{service.price}</p>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold">
                      Pilih Layanan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Proses Kerja Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologi terstruktur untuk memastikan hasil terbaik untuk setiap proyek
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-xl text-blue-50 mb-8 leading-relaxed">
            Konsultasikan kebutuhan marketing Anda dengan tim profesional kami dan dapatkan solusi terbaik untuk bisnis Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg font-semibold">
              Hubungi Kami
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg font-semibold">
              Download Brochure
            </button>
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