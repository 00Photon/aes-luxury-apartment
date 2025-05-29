"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"
import ReservationModal from "./ReservationModal"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showReservationModal, setShowReservationModal] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Rooms", href: "#rooms" },
    { name: "Events", href: "#events" },
    { name: "Facilities", href: "#facilities" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                <Image src="/images/aes-logo.png" alt="AES Luxury Apartment Logo" fill className="object-contain" />
              </div>
              <div>
                <h1
                  className={`font-playfair text-xl font-bold transition-colors duration-300 ${
                    scrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                 AES LUXURY 
                </h1>
                <p className={`text-sm transition-colors duration-300 ${scrolled ? "text-gray-600" : "text-gray-200"}`}>
                  APARTMENTS
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  className={`font-medium transition-colors duration-300 ${
                    scrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-300"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div
                className={`flex items-center space-x-2 text-sm transition-colors duration-300 ${
                  scrolled ? "text-gray-600" : "text-gray-200"
                }`}
              >
                <Phone className="w-4 h-4 text-red-600" />
                <span>+234(0)8035536121</span>
              </div>
              <button onClick={() => setShowReservationModal(true)} className="btn-primary">
                Book Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                scrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
              }`}
            >
              {isOpen ? (
                <X className={`w-6 h-6 ${scrolled ? "text-gray-900" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? "text-gray-900" : "text-white"}`} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white rounded-lg shadow-lg mt-2 p-4"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t mt-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                  <Phone className="w-4 h-4 text-red-600" />
                  <span>+234(0)8035536121</span>
                </div>
                <button
                  onClick={() => {
                    setShowReservationModal(true)
                    setIsOpen(false)
                  }}
                  className="btn-primary w-full"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      <ReservationModal isOpen={showReservationModal} onClose={() => setShowReservationModal(false)} />
    </>
  )
}
