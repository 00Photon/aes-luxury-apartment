"use client"

import { motion } from "framer-motion"
import { Star, MapPin, Wifi, Car } from "lucide-react"
import Image from "next/image"
import ReservationModal from "./ReservationModal"
import { useState } from "react"

export default function Hero() {
  const [showReservationModal, setShowReservationModal] = useState(false)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-hotel-room.jpg"
          alt="AES Luxury Apartment - Elegant Hotel Room Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-12 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center space-x-1 mb-4"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-playfair text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Welcome to
            <span className="block bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
              AES Luxury Apartment
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Experience unparalleled luxury and comfort in the heart of Abuja. Where elegance meets exceptional service.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 sm:pt-8 px-4"
          >
            <button
              onClick={() => setShowReservationModal(true)}
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            >
              Book Your Stay
            </button>
            <button className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-white/10 border-white text-white hover:bg-red-600 hover:text-white hover:border-red-600 w-full sm:w-auto">
              View Rooms
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 pt-8 sm:pt-12 text-white/80 px-4"
          >
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              <span className="text-sm sm:text-base">Prime Location</span>
            </div>
            <div className="flex items-center space-x-2">
              <Wifi className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
              <span className="text-sm sm:text-base">Free WiFi</span>
            </div>
            <div className="flex items-center space-x-2">
              <Car className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              <span className="text-sm sm:text-base">Free Parking</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
      <ReservationModal isOpen={showReservationModal} onClose={() => setShowReservationModal(false)} />
    </section>
  )
}
