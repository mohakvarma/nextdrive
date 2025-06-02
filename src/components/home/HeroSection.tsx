"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, MotionValue } from "framer-motion"
import { useScrollVisibility } from "~/hooks/useScrollVisibility"
import { sectionVariants, itemVariants } from "~/constants/animations"

interface HeroSectionProps {
  parallaxY: MotionValue<number>
}

export default function HeroSection({ parallaxY }: HeroSectionProps) {
  const { ref, inView } = useScrollVisibility()

  return (
    <motion.section
      ref={ref}
      className="relative px-4 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32 min-h-screen flex items-center overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <HeroBackground />
      
      <motion.div style={{ y: parallaxY }} className="relative z-10 max-w-[90rem] mx-auto w-full">
        <HeroContent />
        <HeroSupportingContent />
      </motion.div>
    </motion.section>
  )
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <div 
        className="w-full h-full bg-cover bg-center bg-no-repeat hero-bg-mobile"
        style={{
          backgroundImage: `url('/images/hero-bg.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-black/80"></div>
    </div>
  )
}

function HeroContent() {
  return (
    <motion.div variants={itemVariants}>
      <motion.h1
        className="text-2xl lg:text-4xl xl:text-5xl font-serif font-light text-white leading-tight mb-36"
        variants={itemVariants}
      >
        In a world increasingly dominated by licensing agreements, surveillance tech, and remote shutdowns, the
        simple act of owning what you paid for is quietly slipping away.
        <br />
        <br />
        Your car reports back to the manufacturer.
        <br />
        Your favorite movie vanishes from your digital library.
        <br />
        Your smart device stops working because someone flipped a switch in the cloud.
        <br />
        <br />
        This isn't progress. It's control.
        <br />
        <br />
        We're standing up against the creeping anti-ownership agenda.
        <br />
        We believe in restoring freedom, autonomy, and real ownership in a digital-first world.
        <br />
        <br />
          If you bought it, you should own it, plain and simple.
      </motion.h1>
    </motion.div>
  )
}

function HeroSupportingContent() {
  return (
    <motion.div className="max-w-xl" variants={itemVariants}>
      <div className="space-y-8">
        <p className="text-gray-200 leading-relaxed text-2xl">
          We focus on four critical areas where licensing and surveillance tech threaten ownership: smart devices,
          digital media, automotive technology, and software applications.
        </p>
        <motion.div
          className="group"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <Link href="/work" className="text-white text-xl inline-flex items-center">
            Explore our work
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}