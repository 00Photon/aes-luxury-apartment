"use client"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Rooms from "./components/Rooms"
import Events from "./components/Events"
import Facilities from "./components/Facilities"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import BookingButton from "./components/BookingButton"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Rooms />
      <Events />
      <Facilities />
      <Contact />
      <Footer />
      <BookingButton />
    </div>
  )
}
