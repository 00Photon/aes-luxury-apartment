"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Wifi, Waves, Dumbbell, Heart, Armchair, UtensilsCrossed, Coffee, Clock } from "lucide-react"
import ReservationModal from "./ReservationModal"

export default function Facilities() {
  const [showReservationModal, setShowReservationModal] = useState(false)

  const facilities = [
    {
      icon: Wifi,
      title: "Free Wireless Internet",
      description: "High-speed WiFi throughout the property for seamless connectivity.",
      image: null,
    },
    {
      icon: Waves,
      title: "Swimming Pool",
      description: "Refreshing outdoor pool with poolside service and relaxation area.",
      image: "/images/pool-area.jpg",
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "Fully equipped gym with modern equipment for your workout needs.",
      image: "/images/gym.jpg",
    },
    {
      icon: Heart,
      title: "Medical Clinic",
      description: "On-site medical clinic with professional healthcare services.",
      image: null,
    },
    {
      icon: Armchair,
      title: "Massage Chair",
      description: "Relaxing massage chairs for ultimate comfort and stress relief.",
      image: null,
    },
    {
      icon: UtensilsCrossed,
      title: "24-Hour Restaurant",
      description: "Round-the-clock dining with room service available anytime.",
      image: null,
    },
    {
      icon: Coffee,
      title: "Bush Bar & Pastry Shop",
      description: "Artisanal pastries, premium coffee, and refreshing beverages.",
      image: null,
    },
    {
      icon: Clock,
      title: "24/7 Concierge",
      description: "Professional concierge service available around the clock.",
      image: null,
    },
  ]

  return (
    <section id="facilities" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">Facilities & Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enjoy world-class amenities and services designed to enhance your stay and provide the ultimate luxury
            experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon
            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 ${index % 2 === 0 ? "bg-gradient-to-br from-blue-600 to-blue-400" : "bg-gradient-to-br from-red-600 to-red-400"} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <IconComponent className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600 leading-relaxed">{facility.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="gradient-blue-red rounded-xl p-8 md:p-12 text-white text-center">
            <h3 className="font-playfair text-3xl font-bold mb-4">Experience Luxury Like Never Before</h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              From the moment you arrive until your departure, every detail is crafted to exceed your expectations and
              create unforgettable memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowReservationModal(true)}
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Book Your Stay
              </button>
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-colors duration-300">
                Take a Virtual Tour
              </button>
            </div>
          </div>
        </motion.div>
        <ReservationModal isOpen={showReservationModal} onClose={() => setShowReservationModal(false)} />
      </div>
    </section>
  )
}
