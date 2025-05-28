"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import ReservationModal from "./ReservationModal"

export default function BookingButton() {
  const [showReservationModal, setShowReservationModal] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          onClick={() => setShowReservationModal(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="btn-accent px-6 py-4 rounded-full shadow-2xl flex items-center space-x-2 font-semibold"
        >
          <Calendar className="w-5 h-5" />
          <span>Book Now</span>
        </motion.button>
      </motion.div>
      <ReservationModal isOpen={showReservationModal} onClose={() => setShowReservationModal(false)} />
    </>
  )
}
