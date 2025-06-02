"use client"

import { useRef, useEffect, useState } from "react"
import { useScroll, useTransform } from "framer-motion"
import Navigation from "~/components/home/Navigation"
import HeroSection from "~/components/home/HeroSection"
import MissionSection from "~/components/home/MissionSection"
import ChallengeSection from "~/components/home/ChallengeSection"
import ApproachSection from "~/components/home/ApproachSection"
import FoundationSection from "~/components/home/FoundationSection"
import JoinMovementSection from "~/components/home/JoinMovementSection"
import Footer from "~/components/home/Footer"

export default function HomePage() {
  const containerRef = useRef(null)
  const [isScrolled, setIsScrolled] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8
      setIsScrolled(window.scrollY > heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-hidden" ref={containerRef}>
      <Navigation isScrolled={isScrolled} />
      <HeroSection parallaxY={y} />
      <div className="px-4 lg:px-8 mt-24">
        <div className="space-y-0">
          <MissionSection />
          <ChallengeSection />
          <ApproachSection />
          <FoundationSection />
        </div>
      </div>
      <JoinMovementSection />
      <Footer />
    </div>
  )
}