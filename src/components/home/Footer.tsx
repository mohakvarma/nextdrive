"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useScrollVisibility } from "~/hooks/useScrollVisibility"
import { sectionVariants, itemVariants } from "~/constants/animations"

const footerLinks = {
  column1: [
    { href: "/about", label: "About" },
    { href: "/our-team", label: "Our Team" },
    { href: "/get-involved", label: "Get Involved" },
  ],
  column2: [
    { href: "/consumer-rights-wiki", label: "Consumer Rights Wiki" },
    { href: "/contact", label: "Contact Us" },
    { href: "/newsletter", label: "Newsletter" },
  ],
}

export default function Footer() {
  const { ref, inView } = useScrollVisibility()

  return (
    <motion.footer
      ref={ref}
      className="relative bg-slate-800 text-white px-4 lg:px-8 py-20"
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <FooterBackground />
      
      <div className="relative z-10 max-w-[90rem] mx-auto">
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
          <FooterLogo />
          <FooterLinks />
          <FooterNewsletter />
        </div>

        <FooterBottom />
      </div>
    </motion.footer>
  )
}

function FooterBackground() {
  return (
    <div className="absolute inset-0 opacity-20">
      <Image
        src="/images/footer-bg.jpg"
        alt="FULU Foundation Background"
        width={1600}
        height={600}
        className="w-full h-full object-cover"
      />
    </div>
  )
}

function FooterLogo() {
  return (
    <motion.div variants={itemVariants}>
      <motion.div className="flex items-center space-x-3 mb-8" transition={{ type: "spring", stiffness: 300 }}>
        <div className="w-10 h-10 rounded-lg overflow-hidden">
          <Image
            src="/images/fulu-logo.jpg"
            alt="FULU Foundation Logo"
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-4xl font-bold">FULU</div>
      </motion.div>
    </motion.div>
  )
}

function FooterLinks() {
  return (
    <motion.div className="grid grid-cols-2 gap-12 text-slate-300" variants={itemVariants}>
      <div className="space-y-4">
        {footerLinks.column1.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block hover:text-white transition-colors duration-300 text-lg"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="space-y-4">
        {footerLinks.column2.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block hover:text-white transition-colors duration-300 text-lg"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

function FooterNewsletter() {
  return (
    <motion.div variants={itemVariants}>
      <p className="text-slate-300 mb-6 text-lg">Join our mailing list and stay connected to our work</p>
      <div className="space-y-4 mb-8">
        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
          <Input
            placeholder="Full Name"
            className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 w-full"
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
          <Input
            placeholder="Email Address"
            className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 w-full"
          />
        </motion.div>
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <Button className="bg-white text-slate-800 hover:bg-slate-100">
          Sign Up
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </motion.div>
    </motion.div>
  )
}

function FooterBottom() {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-between mt-20 pt-10 border-t border-slate-700 text-sm text-slate-400"
      variants={itemVariants}
    >
      <p>Copyright ©2025 - FULU Foundation</p>
      <div className="flex space-x-8 mt-4 md:mt-0">
        <Link href="/privacy" className="hover:text-white transition-colors duration-300">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-white transition-colors duration-300">
          Terms of Service
        </Link>
      </div>
    </motion.div>
  )
}