"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Car, Plane, ExternalLink } from "lucide-react"
import ReservationModal from "./ReservationModal"

export default function Contact() {
  const [showReservationModal, setShowReservationModal] = useState(false)

  // AES Luxury Apartment coordinates
  const latitude = 9.0423732
  const longitude = 7.4133771
  const address = "Plot 1118, Daki Biu District, Along Jabi/Airport Road, Opposite Citec Estate, Abuja"

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Plot 1118, Daki Biu District", "Along Jabi/Airport Road", "Opposite Citec Estate, Abuja"],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+234(0) 8095316575", "+234(0) 8035356121"],
    },
    {
      icon: Mail,
      title: "Email",
      details: [ "reservations@aesluxury.com"],
    },
    {
      icon: Clock,
      title: "Reception Hours",
      details: ["24/7 Front Desk Service", "Check-in: 2:00 PM", "Check-out: 12:00 PM"],
    },
  ]

  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
    window.open(url, "_blank")
  }

  const getDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`
    window.open(url, "_blank")
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact & Location</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're conveniently located in the heart of Abuja, easily accessible from the airport and major business
            districts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div
                    className={`w-12 h-12 ${index % 2 === 0 ? "bg-blue-600" : "bg-red-600"} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}

            {/* Transportation Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-4">Transportation</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Plane className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">37 minutes from Nnamdi Azikiwe Airport</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Car className="w-5 h-5 text-red-600" />
                  <span className="text-gray-600">Free parking available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">Airport shuttle service available</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-300"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-300"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-300"
                  placeholder="+234 xxx xxx xxxx"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-300"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button type="submit" className="w-full btn-primary">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Interactive Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Map Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h4 className="font-playfair text-2xl font-bold text-gray-900 mb-2">Our Location</h4>
                  <p className="text-gray-600">{address}</p>
                  <div className="flex items-center space-x-2 mt-2 text-sm text-gray-500">
                    <span>
                      Coordinates: {latitude}°N, {longitude}°E
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button onClick={getDirections} className="btn-primary flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Get Directions</span>
                  </button>
                  <button
                    onClick={openInGoogleMaps}
                    className="btn-secondary flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open in Maps</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="relative h-96">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.2!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDMnNDYuOCJOIDfCsDMwJzAzLjYiRQ!5e0!3m2!1sen!2sng!4v1635000000000!5m2!1sen!2sng`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AES Luxury Apartment Location"
                className="rounded-b-xl"
              ></iframe>

              {/* Map Overlay with Hotel Info */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 gradient-blue-red rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">AES</span>
                  </div>
                  <div>
                    <h5 className="font-playfair font-bold text-gray-900">AES Luxury Apartment</h5>
                    <p className="text-sm text-gray-600 mt-1">Premium hospitality in Abuja</p>
                    <div className="flex items-center space-x-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions Overlay */}
              <div className="absolute bottom-4 right-4 space-y-2">
                <button
                  onClick={() => setShowReservationModal(true)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-300 text-sm font-semibold"
                >
                  Book Now
                </button>
                <button
                  onClick={() => window.open(`tel:+2348035536121`, "_self")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-300 text-sm font-semibold flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <ReservationModal isOpen={showReservationModal} onClose={() => setShowReservationModal(false)} />
    </section>
  )
}
