"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                <Image src="/images/aes-logo.png" alt="AES Luxury Apartment Logo" fill className="object-contain" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-white">AES Luxury Apartment</h3>
                <p className="text-gray-300">Premium Hospitality Experience</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Experience unparalleled luxury and comfort in the heart of Abuja. Where elegance meets exceptional service
              for an unforgettable stay.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.facebook.com/share/1ARwzjjiqa"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/aesluxuryapartmentabj?igsh=czM2ZWV0ZjV2aXlw"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>

            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-playfair text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "Rooms", href: "#rooms" },
                { name: "Events", href: "#events" },
                { name: "Facilities", href: "#facilities" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-playfair text-lg font-bold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p>Plot 1118, Daki Biu District</p>
                  <p>Along Jabi/Airport Road</p>
                  <p>Opposite Citec Estate, Abuja</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>+234(0) 8095316575</p>
                  <p>+234(0) 8035356121</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>info@aesluxuryapartment.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="border-t border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">© {currentYear} AES Luxury Apartment. All rights reserved.</p>
              <p className="text-gray-500 text-xs mt-1">Designed with luxury and comfort in mind.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Booking Terms
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
