"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "~/components/ui/button"
import { ArrowRight, Menu } from "lucide-react"
import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "~/constants/animations"

interface NavigationProps {
  isScrolled: boolean
}

const navigationItems = ["About", "Get Involved", "Our Team", "Consumer Rights Wiki"]

export default function Navigation({ isScrolled }: NavigationProps) {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 lg:px-8 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-md border-b border-slate-100" : "bg-transparent"
      }`}
    >
      <Logo isScrolled={isScrolled} />
      <NavigationMenu isScrolled={isScrolled} />
      <NavigationActions isScrolled={isScrolled} />
    </motion.nav>
  )
}

function Logo({ isScrolled }: { isScrolled: boolean }) {
  return (
    <motion.div className="flex items-center space-x-3" transition={{ type: "spring", stiffness: 300 }}>
      <motion.div
        className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center"
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image
          src="/images/fulu-logo.jpg"
          alt="FULU Foundation Logo"
          width={40}
          height={40}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div
        className={`text-3xl font-bold cursor-pointer transition-colors duration-500 ${
          isScrolled ? "text-slate-800" : "text-white"
        }`}
      >
        FULU
      </div>
    </motion.div>
  )
}

function NavigationMenu({ isScrolled }: { isScrolled: boolean }) {
  return (
    <motion.div
      className="hidden md:flex items-center space-x-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {navigationItems.map((item) => (
        <motion.div key={item} variants={itemVariants}>
          <Link
            href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className={`relative group transition-colors duration-500 text-lg ${
              isScrolled ? "text-slate-600 hover:text-slate-800" : "text-white/80 hover:text-white"
            }`}
          >
            {item}
            <motion.span
              className={`absolute -bottom-1 left-0 h-0.5 transition-colors duration-500 ${
                isScrolled ? "bg-slate-800" : "bg-white"
              }`}
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}

function NavigationActions({ isScrolled }: { isScrolled: boolean }) {
  return (
    <div className="flex items-center space-x-4">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 20 }}
      >
        <Link
          href="#join-movement"
          className={`hidden md:inline-flex items-center transition-colors duration-500 ${
            isScrolled ? "text-slate-600 hover:text-slate-800" : "text-white/80 hover:text-white"
          }`}
        >
          Join the Movement
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </motion.div>

      <motion.div transition={{ type: "spring", stiffness: 300 }}>
        <Button
          variant="ghost"
          size="icon"
          className={`md:hidden rounded-lg transition-colors duration-500 ${
            isScrolled ? "bg-slate-800 text-white" : "bg-white/20 text-white backdrop-blur-sm"
          }`}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </motion.div>
    </div>
  )
}