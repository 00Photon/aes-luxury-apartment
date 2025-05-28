"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, Phone, Mail, Users, MapPin } from "lucide-react"

interface EventBookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EventBookingModal({ isOpen, onClose }: EventBookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    eventDetails: "",
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const eventTypes = [
    "Corporate Meeting",
    "Conference",
    "Wedding Reception",
    "Birthday Party",
    "Business Seminar",
    "Product Launch",
    "Networking Event",
    "Training Workshop",
    "Gala Dinner",
    "Anniversary Celebration",
    "Other",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setShowSuccess(true)

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setShowSuccess(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        eventDetails: "",
      })
      onClose()
    }, 3000)
  }

  const isFormValid = formData.name && formData.phone && formData.eventType && formData.eventDate

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {!showSuccess ? (
              <>
                {/* Header */}
                <div className="gradient-blue-red text-white p-6 rounded-t-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-playfair text-2xl md:text-3xl font-bold">Book Event Space</h2>
                      <p className="text-blue-100 mt-1">Let us help you create an unforgettable event</p>
                    </div>
                    <button
                      onClick={onClose}
                      className="p-2 hover:bg-white/20 rounded-full transition-colors duration-300"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="font-playfair text-xl font-semibold text-gray-900 flex items-center">
                      <Users className="w-5 h-5 text-blue-600 mr-2" />
                      Contact Information
                    </h3>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-300"
                            placeholder="your.email@example.com"
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Optional - for email confirmations</p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-300"
                            placeholder="+234 xxx xxx xxxx"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="space-y-4">
                    <h3 className="font-playfair text-xl font-semibold text-gray-900 flex items-center">
                      <Calendar className="w-5 h-5 text-red-600 mr-2" />
                      Event Details
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Type of Event *</label>
                        <select
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-300 appearance-none bg-white"
                        >
                          <option value="">Select event type</option>
                          {eventTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Event Date *</label>
                        <input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleInputChange}
                          required
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Details & Requirements
                      </label>
                      <textarea
                        name="eventDetails"
                        value={formData.eventDetails}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-300"
                        placeholder="Tell us about your event: number of guests, preferred venue, catering needs, special requirements, etc."
                      />
                    </div>
                  </div>

                  {/* Available Venues Info */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                      Available Event Spaces
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Conference Hall:</span>
                        <span className="font-medium">25 persons</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Meeting Rooms:</span>
                        <span className="font-medium">15-20 persons</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Royal Lounge Club:</span>
                        <span className="font-medium">60 persons</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pool Area:</span>
                        <span className="font-medium">100-200 persons</span>
                      </div>
                      <div className="flex justify-between sm:col-span-2">
                        <span className="text-gray-600">AES Event Place (Hall):</span>
                        <span className="font-medium">450-500 persons</span>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={!isFormValid || isSubmitting}
                      className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                        isFormValid && !isSubmitting
                          ? "gradient-blue-red text-white hover:shadow-lg transform hover:scale-105"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Processing Request...</span>
                        </div>
                      ) : (
                        "Submit Event Inquiry"
                      )}
                    </button>
                  </div>

                  <p className="text-sm text-gray-500 text-center">
                    * Required fields. Our event specialists will contact you within 24 hours to discuss your event
                    requirements and provide a customized quote.
                  </p>
                </form>
              </>
            ) : (
              /* Success Message */
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </motion.svg>
                </motion.div>

                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">Event Inquiry Submitted!</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Thank you for your interest in hosting your event at AES Luxury Apartment.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-blue-800 font-medium">
                    🎉 Our event specialists will contact you within 24 hours to discuss your requirements, venue
                    options, catering preferences, and provide a detailed quote tailored to your event.
                  </p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <p className="text-red-800 font-medium">
                    📞 For urgent inquiries, please call us directly at +234(0)8035536121
                  </p>
                </div>
                <p className="text-sm text-gray-500">This window will close automatically...</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
